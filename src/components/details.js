import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import recipeService from '../services/recipe-service'

const Details = () => {
    const [recipe, setRecipe] = useState({})
    const {title, id} = useParams()
    const history = useHistory()

    useEffect(() => {
        recipeService.findRecipeById(id)
            .then(recipe => setRecipe(recipe))
    }, [])

    return(
        <div className="container-xl">
            <span className = "wbdv-go-back">
                <i className = "fas fa-arrow-left fa-2x wbdv-action-icon"
                   onClick = {() => history.goBack()}/>
                Go Back
            </span>
            {
                recipe && recipe[0] &&
                <h1 className="wbdv-page-title">{recipe[0].label}</h1>
            }
            <p>

            </p>
            <div className = "container-fluid">
                {
                    recipe && recipe[0] && recipe[0].ingredientLines &&
                        <div className = "container-fluid row">
                            <span className = "container-fluid col-4">
                                <img src = {recipe[0].image}/>
                            </span>

                            <span className = "container-fluid col-8">
                                <h3 className = "wbdv-ingredients-heading">Ingredients:</h3>
                                <ul className="list-group">
                                    {
                                        recipe && recipe[0] && recipe[0].ingredientLines.map(ingredient =>
                                            <li className="list-group-item" key={Math.random()}>
                                                {ingredient}
                                            </li>)
                                    }
                                </ul>
                            </span>
                        </div>
                }
            </div>
        </div>
    )
}

export default Details