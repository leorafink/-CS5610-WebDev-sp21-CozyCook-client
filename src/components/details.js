import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
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
            })
        userService.getSession()
            .then((session) => {
                setSession(session)
            })
        setUserId(session.id)
    }, [])

    return(
        <div className="container-fluid">


                    {
                        recipe && recipe[0] && recipe[0].ingredientLines && recipe[0].url && recipe[0].image &&
                        <>

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
                             <button type="button"
                                     className="btn btn-primary wbdv-details-button-recipe"
                                     onClick = {() => {
                                         recipeService.createRecipeForUser(session.id, recipeObject)
                                     }}>
                                 Favorite Recipe
                             </button>
                            <input className = "text-area"
                                   id="notesField"
                                    onChange={(e) => {
                                        setRecipeObject({
                                            ...recipeObject,
                                            notes: e.target.value
                                                        })
                                    }}/>
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