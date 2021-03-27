import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div className = "container-fluid wbdv-home-page-container">
            <div className = "container-fluid wbdv-home-heading-container">
                <h1 className = "wbdv-page-title">Home</h1>
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