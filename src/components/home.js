import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div className="container-xl">
            <h1 className="wbdv-page-title">Home</h1>
            <div className="wbdv-horizontal-center">
                <Link to="/search">
                    Search
                </Link>
            </div>

        </div>
    )
}

export default Home