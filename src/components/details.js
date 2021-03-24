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
        <div>
            <h1>{/*JSON.stringify(recipe)*/}</h1>
            <p>

            </p>

{             <ul className="list-group">
                 {
                    recipe && recipe[0] && recipe[0].ingredientLines.map(ingredient =>
                                                                     <li className="list-group-item">
                                                                         {ingredient}
                                                                     </li>)
                 }
             </ul> }
            {/*JSON.stringify(recipe)*/}
        </div>
    )
}

export default Details