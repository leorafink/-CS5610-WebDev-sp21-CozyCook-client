import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import mainImage from "../icon-restaurant-4.png"
import './home.style.css'
import userService from "../../services/user-service";
import recipeService from "../../services/recipe-service";

const Home = () => {

    const [session, setSession] = useState(null)
    const [mostRecentUser, setMostRecentUser] = useState({})
    const [mostRecentFavorite, setMostRecentFavorite] = useState({})

    useEffect(() => {
        userService.getSession()
            .then((session) => {
                setSession(session)
                recipeService.findMostRecentRecipe(session.id)
                    .then((recipe) => {
                        setMostRecentFavorite(recipe)
                    })
            })
        userService.findMostRecentUser()
            .then((user) => {
                setMostRecentUser(user)
            })
    }, [])

    return(
        <div className = "container-fluid">
            <div className = "container-fluid wbdv-home-image-container">
                <h2 className="wbdv-page-title">A Cookbook Personalized by YOU!</h2>
                <img className = "img-fluid wbdv-home-image"
                     src = {mainImage}/>
            </div>
            <div className = "container-fluid wbdv-horizontal-center">
                <Link to = "/search" className="btn wbdv-home-button">
                    Search Recipes
                </Link>
                <br/>
                <Link to = "/userlookup" className="btn wbdv-home-button">
                    Lookup a User
                </Link>
                <br/>
                {
                    session && session.role && session.role === "ADMIN" &&
                        <Link to="/users" className="btn wbdv-home-button">
                            Go to User List
                        </Link>
                }
                {   mostRecentUser && mostRecentUser.username &&
                    <div className="container-fluid">
                    <h3 className="wbdv-most-recent-user-greeting">
                        Say hello to our most recent user,
                        <Link to={`/profile/${mostRecentUser.id}`}>
                        {"  " + mostRecentUser.username + "!"}
                        </Link>
                    </h3>
                </div>
                }
                {
                    session && mostRecentFavorite && mostRecentFavorite.originalId && mostRecentFavorite.name &&
                        <div className="container-fluid">
                            <h3 className="wbdv-most-recent-user-greeting">
                                Thinking of what to make? Try your most recent favorite recipe:
                                <Link to = {`/search/recipe/details/${mostRecentFavorite.originalId}`}>
                                    {"  " + mostRecentFavorite.name}
                                </Link>
                            </h3>
                        </div>
                }
            </div>
        </div>
    )
}

export default Home