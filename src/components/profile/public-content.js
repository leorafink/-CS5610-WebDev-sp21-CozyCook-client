import React, {useEffect, useState} from 'react';

import "./profile.style.css";
import recipeService from "../../services/recipe-service"

const PublicContent = ({user}) => {
    const [editingRole, setEditingRole] = useState(false)
    const [favoriteRecipes, setFavoriteRecipes] = useState([])

    useEffect(() => {
        recipeService.findAllRecipesForUser(user.id)
            .then(recipes => {
                setFavoriteRecipes(recipes)
                console.log(recipes)
                console.log(favoriteRecipes)
                console.log(user)
                console.log(user.id)
            })
    }, [user])

    return(
        <div className="container-fluid">
            <h2 className="wbdv-profile-header-user">
                {user.username}'s Profile
            </h2>
            <div className="container-fluid">
                <ul className = "list-group">
                    {
                        user && favoriteRecipes && favoriteRecipes.map((recipe) => {
                            return(
                                <li className="list-group-item">
                                    {recipe.name}
                                </li>
                            )
                        })
                    }
                </ul>
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
    )
}

export default PublicContent;