import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import recipeService from '../services/recipe-service'

const Details = () => {
    const [recipe, setRecipe] = useState({})
    const {id} = useParams()
    useEffect(() => {
        recipeService.findRecipeById(id)
            .then(recipe => setRecipe(recipe))
    })
    return(
        <div>
            <h1>{recipe.title}</h1>
            <p>
                {recipe.summary}
            </p>

{/*             <ul className="list-group"> */}
{/*                 { */}
{/*                     recipe.extendedIngredients.split(",").map(ingredient => */}
{/*                                                                     <li className="list-group-item"> */}
{/*                                                                         {ingredient.name} */}
{/*                                                                     </li>) */}
{/*                 } */}
{/*             </ul> */}
            {JSON.stringify(recipe)}
        </div>
    )
}

export default Details