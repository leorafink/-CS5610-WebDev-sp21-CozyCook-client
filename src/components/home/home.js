import React from 'react'
import {Link} from "react-router-dom";
import mainImage from "../icon-restaurant-4.png"
import './home.style.css'

const Home = () => {
    return(
        <div className = "container-fluid">
            <div className="wbdv-page-heading row">
                <div className="col-1"></div>
                <div className="col-10">
                    <h1>CozyCook</h1>
                </div>
                <div className="col-1">
                    <Link to="/login" className="btn wbdv-home-button">
                        Login
                    </Link>
                    <Link to="/register" className="wbdv-link">
                        Register
                    </Link>
                </div>
            </div>

            <div className = "container-fluid wbdv-home-image-container">
                <img className = "img-fluid wbdv-home-image"
                     src = {mainImage}/>
            </div>
            <div className = "container-fluid wbdv-horizontal-center">
                <Link to = "/search" className="btn wbdv-home-button">
                    Search
                </Link>
                <br/>
                <Link to = "/users" className="btn wbdv-home-button">
                    Go to User List
                </Link>
            </div>
        </div>
    )
}

export default Home