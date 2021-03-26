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
            <div className = "container-fluid">
                {
                    recipe && recipe[0] && recipe[0].ingredientLines && recipe[0].url && recipe[0].image &&
                    <div className="container-fluid">

                    <span className = "container-fluid">
                        <img src = {recipe[0].image}/>
                    </span>

                    <span className = "container-fluid wbdv-details-area">
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

                    <div className = "wbdv-full-recipe-button-area">
                        <a href={recipe[0].url}>
                            <button type="button"
                                    className="btn btn-primary">
                            See Full Recipe
                            </button>
                        </a>
                    </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Details