import React, {useEffect, useState} from 'react';

import "./profile.style.css";
import recipeService from "../../services/recipe-service"
import {Link} from "react-router-dom";

const PublicContent = ({user}) => {
    const [editingRole, setEditingRole] = useState(false)
    const [favoriteRecipes, setFavoriteRecipes] = useState([])
    const [favoriteRecipesTemp, setFavoriteRecipesTemp] = useState([])


    useEffect(() => {
        recipeService.findAllRecipesForUser(user.id)
            .then(recipes => {
                setFavoriteRecipes(recipes)
            })
    }, [user, favoriteRecipesTemp])

    const refreshRecipes = (recipeId) => {
        console.log(recipeId)
        let resetRecipes = favoriteRecipes.filter(recipe => recipe.id !== recipeId)

        setFavoriteRecipesTemp(resetRecipes)
    }

    return(
        <div className="container-fluid ">

            <div className="container-fluid container-lg wbdv-public-content">
                <h3 className="wbdv-profile-section-label">
                    {user.username}'s Favorite Recipes
                </h3>
                <ul className = "list-group wbdv-favorite-recipes">
                    {
                        user && favoriteRecipes && favoriteRecipes.length > 0 && favoriteRecipes.map((recipe) => {
                            return(
                                <li className="list-group-item">
                                    <div className="row">
                                        <Link to = {`/search/recipe/details/${recipe.originalId}`} className="col-6">
                                            {recipe.name}
                                        </Link>
                                        <div className="col-5">
                                            My Notes: {recipe.notes}
                                        </div>
                                        <div className="col-1">
                                            <i onClick={() => {recipeService.deleteRecipe(user.id, recipe.id);
                                                refreshRecipes(recipe.id)}}
                                               className="fa-2x fa fa-trash" />
                                        </div>
                                    </div>


                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="container-fluid container-lg wbdv-public-content">
                <div>
                    <h3 className="wbdv-profile-section-label">
                        {user.username}'s Public Info
                    </h3>
                </div>
                <div className="row wbdv-profile-row">

                    {
                        !editingRole &&
                        <>
                            <label htmlFor = "roleField"
                                   className = "wbdv-profile-label col-2">
                                Role:
                            </label>
                            <input value = {user.role}
                                   id = "roleField"
                                   className = "form-control col-9">
                            </input>
                            <i className="fas fa-edit fa-2x col-1"
                               onClick = {() => setEditingRole(true)}/>
                        </>
                    }
                    {
                        editingRole &&
                        <>
                            <label htmlFor = "roleField"
                                   className = "wbdv-profile-label col-2">
                                Role:
                            </label>
                            <input value = {user.role}
                                   id = "roleField"
                                   className = "form-control col-9">
                            </input>
                            <i className="fas fa-check fa-2x col-1"
                               onClick = {() => setEditingRole(false)}/>
                        </>
                    }
                </div>

            </div>

        </div>
    )
}

export default PublicContent;