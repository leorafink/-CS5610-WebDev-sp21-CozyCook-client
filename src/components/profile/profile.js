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
    return(
        <div>
            <h1>Profile</h1>
            {
                otherUser &&
                <PublicContent user={otherUser}/>
            }
            {
                !otherUser &&
                <PublicContent user={loggedInUser}/>

            }
            {
                ((loggedInUser && otherUser && loggedInUser.id === otherUser.id) || loggedInUser.role === "ADMIN") &&
                <PrivateContent user={loggedInUser}/>
            }
            {
                loggedInUser && !otherUser &&
                <PrivateContent user={loggedInUser}/>
            }
            {
                loggedInUser && loggedInUser.role === "ADMIN" &&
                <AdminContent/>
            }


        </div>
    )
}

export default Profile;