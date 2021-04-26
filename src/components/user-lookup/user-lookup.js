import React, {useState} from "react";
import {Link} from "react-router-dom";
import userService from "../../services/user-service"
import * as constants from "constants";

const UserLookup = () => {
    const [username, setUsername] = useState("")
    const [user, setUser] = useState({})

    const findUser = () => {
        userService.findUserByUsername(username)
            .then(response => {
                if (response === undefined) {
                    alert("user does not exist")
                } else {
                   window.location.href = `/profile/${response.id}`
                }
            })
    }

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/home">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">User Lookup</li>

                </ol>
            </nav>

            <h1 className="wbdv-page-title">User Lookup</h1>
            <h4 className="wbdv-lightgrey">Please Enter the Username of the User You Would Like to Lookup:</h4>
            <input className="form-control"
                   title="Insert username here"
                   placeholder="username"
                   onChange={(e) => {
                       setUsername(e.target.value)
                   }}
                   value={username}/>

            <br/>
            <button type="button"
                    className="btn wbdv-home-button"
                    onClick={() => {
                        findUser()
                    }}>
                Lookup a User
            </button>

        </>
    )
}

export default UserLookup
