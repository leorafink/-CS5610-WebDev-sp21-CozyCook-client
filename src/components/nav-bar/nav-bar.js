import React, {useEffect, useState} from 'react'
import userService from "../../services/user-service";
import {Link} from "react-router-dom";
import "./nav-bar.style.css"

const NavBar = () => {

    const [session, setSession] = useState(null)

    const logout = () => {
        userService.logout()
    }

    useEffect(() => {
        userService.getSession()
            .then((session) => {
                setSession(session)
            })
    }, [])

    return(
        <div className = "container-fluid">
            <div className="wbdv-page-heading row">
                {
                    session &&
                    <div className="col-2 wbdv-hello">
                         Hello, {session.username}!
                    </div>
                }
                {
                    !session &&
                    <div className="col-2"/>
                }
                <div className="col-8">
                    <a href = "/home">
                        <h1 className = "wbdv-nav-bar-header">
                            CozyCook
                        </h1>
                    </a>
                </div>
                {
                    !session &&
                    <div className="col-2">
                        <span className = "wbdv-nav-bar-button-area">
                            <Link to="/login"
                                  className="btn wbdv-home-button">
                                Login
                            </Link>
                        </span>
                        <span className = "wbdv-nav-bar-button-area">
                            <Link to="/register"
                                  className="btn wbdv-home-button">
                                Register
                            </Link>
                        </span>
                    </div>
                }
                {
                    session &&
                    <div className="col-2">
                        <span className = "wbdv-nav-bar-button-area">
                            <Link to="/logout"
                                  className="btn wbdv-home-button"
                                  onClick = {() => logout()}>
                                Log Out
                            </Link>
                        </span>
                        <span className = "wbdv-nav-bar-button-area">
                            <Link to="/profile"
                                  className="btn wbdv-home-button">
                                Profile
                            </Link>
                        </span>
                    </div>
                }
            </div>
        </div>
    )
}

export default NavBar