import React from 'react'

const Logout = () => {
    return(
        <div>
            <h1 className = "wbdv-logout-header">
                Thank you for using CozyCook!
            </h1>
            <button type = "button"
                    className="btn btn-warning"
                    onClick = {() => window.location.href = "/home"}>
                Return to Home
            </button>
        </div>
    )
}

export default Logout