import React, {useState, useEffect} from 'react'
import {useParams, useHistory, Link} from 'react-router-dom'
import recipeService from '../services/recipe-service'
import userService from "../services/user-service";
import recipeActions from "../actions/recipes-actions";
import {connect} from "react-redux";

const Details = () => {
    const [recipe, setRecipe] = useState({})
    const {id} = useParams()
    const history = useHistory()
    const [session, setSession] = useState({})
    const [recipeObject, setRecipeObject] = useState({})
    const [isFavorite, setIsFavorite] = useState(false)
    const [userRecipes, setUserRecipes] = useState([])
    const [recipeFans, setRecipeFans] = useState([])
    const [fanId, setFanId] = useState("")

    useEffect(() => {
        recipeService.findUsersWhoLikeThisRecipe(id)
            .then(users => {
                setRecipeFans(users)
                }
            )
        recipeService.findRecipeById(id)
            .then(recipe => {
                setRecipe(recipe)
                setRecipeObject({
                                    ...recipeObject,
                                    name: recipe[0].label,
                                    link: recipe[0].url,
                                    originalId: recipe[0].uri.substring(51)
                                })

                userService.getSession()
                    .then((session) => {
                        setSession(session)
                        recipeService.findAllRecipesForUser(session.id)
                            .then((response) => {
                                setUserRecipes(response)
                                for (let i = 0 ; i < userRecipes.length ; i++) {
                                    if (userRecipes[i].originalId === recipeObject.originalId) {
                                        setIsFavorite(true)
                                    }
                                }
                            })
                    })
            })
    }, [isFavorite])

    return(
        <div className="container-fluid">



            {
                        recipe && recipe[0] && recipe[0].ingredientLines && recipe[0].url && recipe[0].image &&
                        <>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/home">Home</a></li>
                                <li className="breadcrumb-item"><a href="/search">Search</a></li>
                                <li className="breadcrumb-item active" aria-current="page">{recipe[0].label}</li>

                            </ol>
                        </nav>
                        <div className = "row">
                            <div className = "wbdv-go-back col-2" onClick = {() => history.goBack()}>
                                <i className = "fas fa-arrow-left fa-2x wbdv-action-icon"/>
                                Go Back
                            </div>
                            <div className = "col-8">
                                <h1 className="wbdv-page-title">{recipe[0].label}</h1>
                            </div>
                            <div className = "col-2"/>
                        </div>
                        <div className="wbdv-details-image-container">
                            <img className = "wbdv-details-image" src = {recipe[0].image}/>
                        </div>
                        <div className = "container-fluid wbdv-details-area">
                            <h3 className = "wbdv-ingredients-heading">Ingredients:</h3>
                            <ul className="list-group">
                                {
                                    recipe[0].ingredientLines.map(ingredient =>
                                          <li className="list-group-item" key={Math.random()}>
                                              {ingredient}
                                          </li>)
                                 }
                            </ul>
                        </div>
                        <div className = "wbdv-full-recipe-button-area">
                             <a href={recipe[0].url}>
                                  <button type="button" className="btn btn-primary wbdv-details-button-recipe">
                                      See Full Recipe
                                  </button>
                             </a>
                            {
                                session && session.id &&
                                <>
                                    <div className = "container-fluid wbdv-details-button">
                                        <h4 className = "wbdv-details-notes-header">
                                            Take some notes and add this recipe to your favorites!
                                        </h4>
                                        <textarea className = "text-area form-control wbdv-notes-field"
                                               id = "notesField"
                                               title = "Enter your notes here"
                                               placeholder = "Notes..."
                                               rows = "5"
                                               onChange={(e) => {
                                                   setRecipeObject({
                                                                       ...recipeObject,
                                                                       notes: e.target.value
                                                                   })
                                               }}
                                        />
                                    </div>
                                    <div className = "container-fluid wbdv-details-button">
                                        <button type="button"
                                                className="btn btn-primary wbdv-details-button-recipe"
                                                onClick = {() => {
                                                    recipeService.createRecipeForUser(session.id, recipeObject)
                                                    window.location.reload()
                                                    alert("Successfully added " + recipeObject.name + " to your favorite recipes!")
                                                }}>
                                            Favorite Recipe
                                        </button>
                                    </div>
                                </>
                            }
                            {
                                !session.id &&
                                <>
                                    <h1>{JSON.stringify(session)}</h1>
                                    <Link type="button"
                                          to = "/login"
                                          className="btn btn-primary wbdv-details-button-recipe">
                                        Log In to Add This Recipe to Your Favorites!
                                    </Link>
                                </>
                            }
                            {
                                recipeFans && recipeFans.length > 0 &&
                                <>
                                    <h4 className = "wbdv-other-favorites-header">
                                        Users Who Have Liked This Recipe:
                                    </h4>
                                    <ul className="list-group wbdv-other-favorites-users">
                                        {
                                            recipeFans.map((fan) => {
                                                userService.findUserByUsername(fan)
                                                    .then(response => setFanId(response.id))
                                                return (
                                                    <li className="list-group-item">
                                                        <Link to={`/profile/${fanId}`}>
                                                            {fan}
                                                        </Link>
                                                    </li>

                                                )
                                            })
                                        }
                                    </ul>
                                </>
                            }
                        </div>
                        </>
                    }

        </div>
    )
};

const stateToPropMapper = (state) => {
    return ({
        recipes: state.recipeReducer.recipes
    })
}

const dispatchToPropMapper = (dispatch) => ({
    createRecipeForUser: (userId, recipe) => recipeActions.createRecipeForUser(dispatch, userId, recipe)
})

export default connect(stateToPropMapper, dispatchToPropMapper)(Details)