import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import recipeService from '../services/recipe-service'

const Details = () => {
    const [recipe, setRecipe] = useState({})
    const {title, id} = useParams()
    useEffect(() => {
        recipeService.findRecipeById(id)
            .then(recipe => setRecipe(recipe))
    }, [])
    return(
        <div className="container-xl">
            {
                recipe && recipe[0] &&
                <h1 className="wbdv-page-title">{recipe[0].label}</h1>
            }
            <p>

            </p>

{             <ul className="list-group">
                 {
                    recipe && recipe[0] && recipe[0].ingredientLines.map(ingredient =>
                                                                     <li className="list-group-item" key={Math.random()}>
                                                                         {ingredient}
                                                                     </li>)
                 }
             </ul> }

        </div>
    )
}

export default Details