import React from 'react'
import {Link} from "react-router-dom";
import mainImage from "./icon-restaurant-4.png"

const Home = () => {
    return(
        <div className = "container-fluid wbdv-home-page-container">
            <h1 className = "wbdv-page-heading">Home</h1>
            <div className = "container-fluid wbdv-home-image-container">
                <img className = "img-fluid wbdv-home-image"
                     src = {mainImage}/>
            </div>
            <div className = "container-fluid wbdv-horizontal-center">
                <Link to = "/search">
                    <button type = "button"
                            className = "btn btn-primary wbdv-home-button-search">
                        Search
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home