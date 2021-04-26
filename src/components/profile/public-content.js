import React, {useEffect, useState} from 'react';

import "./profile.style.css";
import recipeService from "../../services/recipe-service"
import {Link} from "react-router-dom";

const PublicContent = ({user, updateUser, canEdit}) => {
    const [editingRole, setEditingRole] = useState(false)
    const [favoriteRecipes, setFavoriteRecipes] = useState([])
    const [favoriteRecipesTemp, setFavoriteRecipesTemp] = useState([])
    const [userTemp, setUserTemp] = useState({...user})

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

            {
                favoriteRecipes && favoriteRecipes.length > 0 &&
                <>
                <div className="container-fluid wbdv-public-content">
                <h3 className="wbdv-profile-section-label">
                    {user.username}'s Favorite Recipes
                </h3>
                <ul className="list-group container-fluid wbdv-favorite-recipes">
                    <li className="list-group-item wbdv-recipe-row-title">
                        <div className="row">
                            <div className="col-6">
                                Recipe Title
                            </div>
                            <div className="col-5">
                                My Notes
                            </div>
                            <div className="col-1">
                                Discard
                            </div>
                        </div>

                    </li>
                    {
                        user && favoriteRecipes && favoriteRecipes.length > 0 && favoriteRecipes.map((recipe) => {
                            return (
                                <>
                                    <li className="list-group-item">
                                        <div className="row">
                                            <Link to={`/search/recipe/details/${recipe.originalId}`} className="col-6">
                                                {recipe.name}
                                            </Link>
                                            <div className="col-5">
                                                {recipe.notes}
                                            </div>
                                            <div className="col-1">
                                                {
                                                    canEdit &&
                                                    <i onClick={() => {
                                                        recipeService.deleteRecipe(user.id, recipe.id);
                                                        refreshRecipes(recipe.id)
                                                    }}
                                                       className="fa-2x fa fa-trash"/>
                                               }
                                            </div>
                                        </div>


                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
                </>
            }

            {
                favoriteRecipes.length < 1 &&
                <div className="container-fluid wbdv-public-content">
                <h3 className="wbdv-profile-section-label">
                    {user.username}'s Favorite Recipes
                </h3>
                    <h5 className="wbdv-lightgrey">This user has not added any recipes... yet!</h5>
                </div>
            }


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
                            {
                                canEdit &&
                                <i className="fas fa-edit fa-2x col-1"
                                   onClick = {() => {
                                       setEditingRole(true)
                                   }}/>
                            }
                        </>
                    }
                    {
                        editingRole &&
                        <>
                            <label htmlFor = "roleField"
                                   className = "wbdv-profile-label col-2">
                                Role:
                            </label>
                            <select defaultValue = {userTemp.role}
                                    id = "roleField"
                                    className = "form-control col-9"
                                    onChange = {(e) => {
                                        setUserTemp({
                                            ...user,
                                            role: e.target.value
                                                    })
                                    }}>
                                <option value="GENERAL">GENERAL</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                            <i className="fas fa-check fa-2x col-1"
                               onClick = {() => {
                                   updateUser(userTemp.id, userTemp)
                                   setEditingRole(false)
                               }}/>
                        </>
                    }
                </div>

            </div>

        </div>
    )
}

export default PublicContent;