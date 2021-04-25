import React, {useState, useEffect} from 'react'
import {useParams, useHistory, Link} from 'react-router-dom'
import recipeService from '../services/recipe-service'
import userService from "../services/user-service";
import recipeActions from "../actions/recipes-actions";
import {connect} from "react-redux";

const Details = ({createRecipeForUser}) => {
    const [recipe, setRecipe] = useState({})
    const [userId, setUserId] = useState("")
    const {title, id} = useParams()
    const history = useHistory()
    const [session, setSession] = useState({})
    const [recipeObject, setRecipeObject] = useState({})
    const [isFavorite, setIsFavorite] = useState(false)
    const [userRecipes, setUserRecipes] = useState([])

    useEffect(() => {
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
                                console.log(userRecipes)
                                for (let i = 0 ; i < userRecipes.length ; i++) {
                                    console.log(userRecipes[i].originalId)
                                    console.log(recipeObject.originalId)
                                    if (userRecipes[i].originalId === recipeObject.originalId) {
                                        setIsFavorite(true)
                                    }
                                }
                                alert("isFavorite: " + JSON.stringify(isFavorite))
                            })
                    })
            })
        /*userService.getSession()
            .then((session) => {
                setSession(session)
                recipeService.findAllRecipesForUser(session.id)
                    .then((response) => {
                        setUserRecipes(response)
                        for (let i = 0 ; i < userRecipes.length ; i++) {
                            if (userRecipes[i].id === recipeObject.id) {
                                setIsFavorite(true)
                            }
                        }
                        alert("isFavorite: " + JSON.stringify(isFavorite))
                    })
            })*/
    }, [isFavorite])

    return(
        <div className="container-fluid">


                    {
                        recipe && recipe[0] && recipe[0].ingredientLines && recipe[0].url && recipe[0].image &&
                        <>
                        <h1>isFavorite: {JSON.stringify(isFavorite)}</h1>
                        <h1 className="wbdv-page-heading">{recipe[0].label}</h1>
                        <div className = "wbdv-go-back" onClick = {() => history.goBack()}>
                            <i className = "fas fa-arrow-left fa-2x wbdv-action-icon"/>
                            Go Back
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
                             <span className = "col-1"/>
                            {
                                session && session.id &&
                                <>
                                    <h1>{JSON.stringify(session)}</h1>
                                    <button type="button"
                                            className="btn btn-primary wbdv-details-button-recipe"
                                            onClick = {() => {
                                                recipeService.createRecipeForUser(session.id, recipeObject)
                                                alert("Successfully added " + recipeObject.name + " to your favorite recipes!")
                                            }}>
                                        Favorite Recipe
                                    </button>
                                    <input className = "text-area"
                                           id = "notesField"
                                           onChange={(e) => {
                                               setRecipeObject({
                                                   ...recipeObject,
                                                   notes: e.target.value
                                               })
                                           }}
                                    />
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
                            <h1>Session Username: {session.username}</h1>
                            <h1>Recipe Object Name: {recipeObject.name}</h1>
                            <h1>Recipe Object URL: {recipeObject.link}</h1>
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