import React, {useEffect, useState} from 'react';
import PublicContent from "./public-content";
import AdminContent from "./admin-content";
import userService from '../../services/user-service';
import {useParams} from 'react-router-dom';
import PrivateContent from "./private-content";

const Profile = () => {
    const {userId} = useParams()
    const [loggedInUser, setLoggedInUser] = useState({})
    const [otherUser, setOtherUser] = useState(null)
    useEffect(() => {
        userService.profile()
            .then(currentLoggedInUser => setLoggedInUser(currentLoggedInUser))
        if(userId) {
            userService.publicProfile(userId)
                .then(otherUser => setOtherUser(otherUser))
        }
    }, [])

    const updateUser = (id, user) => {
        alert("got to update user on profi")
        userService.updateUser(id, user)
            .then((response) => setLoggedInUser(response))
    }

    return(
        <div>
            <div className = "wbdv-go-back"
                 onClick = {() => window.location.href = "/home"}>
                <i className = "fas fa-arrow-left fa-2x wbdv-action-icon"/>
                Go Back
            </div>
            <h1 className="wbdv-profile-header-main">
                Profile
            </h1>
            {
                otherUser &&
                <PublicContent user={otherUser}
                               updateUser = {updateUser}/>
            }
            {
                !otherUser &&
                <PublicContent user={loggedInUser}
                               updateUser = {updateUser}/>

            }
            {
                ((loggedInUser && otherUser && loggedInUser.id === otherUser.id) || loggedInUser.role === "ADMIN") &&
                <PrivateContent user={loggedInUser}
                                updateUser = {updateUser}/>
            }
            {
                loggedInUser && !otherUser &&
                <PrivateContent user={loggedInUser}
                                updateUser = {updateUser}/>
            }
            {
                loggedInUser && loggedInUser.role === "ADMIN" &&
                <AdminContent/>
            }


        </div>
    )
}

export default Profile;