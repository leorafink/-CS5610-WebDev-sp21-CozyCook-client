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
            <h1>User Lookup</h1>
            <h4>Please Enter the Username of the User You Would Like to Lookup</h4>
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
                        // userService.findUserByUsername(username)
                        //     .then(response => {
                        //         alert(response.id)
                        //         if (response.id === "null") {
                        //             alert("user does not exist")
                        //         } else {
                        //             window.location.href = `/profile/${response.id}`
                        //         }
                        //     })
                    }}>
                Lookup a User
            </button>


            <h1>Username: {username}</h1>
        </>
    )
}

export default UserLookup
