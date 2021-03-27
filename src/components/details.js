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
                        </div>
                        </>
                    }

        </div>
    )
}

export default Details