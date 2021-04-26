import React from 'react'
import "./logout.style.css"

const Logout = () => {
    return(

        <div className="container-fluid wbdv-logout-header">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/home">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Log Out</li>

                </ol>
            </nav>

            <h1>
                Thank you for using CozyCook!
            </h1>
            <br/>
            <button type = "button"
                    className="btn wbdv-home-button"
                    onClick = {() => window.location.href = "/home"}>
                Return to Home
            </button>
        </div>
    )
}

export default Logout