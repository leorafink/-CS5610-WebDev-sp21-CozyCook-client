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


            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/home">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Profile</li>

                </ol>
            </nav>

            {
                // There is a user currently logged in.
                loggedInUser &&
                <>
                    {
                        // The logged in user is an administrator.
                        loggedInUser.role == "ADMIN" &&
                        <>
                            {
                                // There is a  logged in Administrator viewing A profile with A user ID in the URL "/api/profile/:userId".
                                otherUser &&
                                <>
                                    {
                                        // The logged in Administrator is viewing another user's profile with an ID in the URL.
                                        loggedInUser.id !== otherUser.id &&
                                        <>
                                            <h1 className="wbdv-profile-header-main">
                                                {otherUser.username}'s Profile
                                            </h1>
                                            <PublicContent user={otherUser}
                                                           updateUser={updateUser} />
                                            <PrivateContent user={otherUser}
                                                            updateUser={updateUser} />
                                            <AdminContent/>
                                        </>
                                    }
                                    {
                                        // The logged in Administrator is viewing their own profile with their id in the URL.
                                        loggedInUser.id === otherUser.id &&
                                        <>
                                            <h1 className="wbdv-profile-header-main">
                                                {loggedInUser.username}'s Profile
                                            </h1>
                                            <PublicContent user={loggedInUser}
                                                           updateUser={updateUser} />
                                            <PrivateContent user={loggedInUser}
                                                            updateUser={updateUser}/>
                                            <AdminContent/>
                                        </>
                                    }
                                </>
                            }
                            {
                                // The logged in Administrator is viewing their own profile withOUT their ID in the URL.
                                !otherUser &&
                                <>
                                    <h1 className="wbdv-profile-header-main">
                                        {loggedInUser.username}'s Profile
                                    </h1>
                                    <PublicContent user={loggedInUser}
                                                   updateUser={updateUser} />
                                    <PrivateContent user={loggedInUser}
                                                    updateUser={updateUser}/>
                                    <AdminContent/>
                                </>
                            }
                        </>
                    }
                    {
                        // The logged in user is NOT an administrator.
                        loggedInUser.role !== "ADMIN" &&
                        <>
                            {
                                // There is a logged in General User viewing A profile with A user ID in the URL "/api/profile/:userId".
                                otherUser &&
                                <>
                                    {
                                        // The logged in General User is viewing another user's profile with an ID in the URL.
                                        loggedInUser.id !== otherUser.id &&
                                        <>
                                            <h1 className="wbdv-profile-header-main">
                                                {otherUser.username}'s Profile
                                            </h1>
                                            <PublicContent user={otherUser}
                                                           updateUser={updateUser}/>
                                        </>
                                    }
                                    {
                                        // The logged in General User is viewing their own profile with their id in the URL.
                                        loggedInUser.id === otherUser.id &&
                                        <>
                                            <h1 className="wbdv-profile-header-main">
                                                {loggedInUser.username}'s Profile
                                            </h1>
                                            <PublicContent user={loggedInUser}
                                                           updateUser={updateUser} />
                                            <PrivateContent user={loggedInUser}
                                                            updateUser={updateUser}/>
                                        </>
                                    }
                                </>
                            }
                            {
                                // The logged in General User is viewing their own profile withOUT their ID in the URL.
                                !otherUser &&
                                <>
                                    <h1 className="wbdv-profile-header-main">
                                        {loggedInUser.username}'s Profile
                                    </h1>
                                    <PublicContent user={loggedInUser}
                                                   updateUser={updateUser} />
                                    <PrivateContent user={loggedInUser}
                                                    updateUser={updateUser}/>
                                </>
                            }
                        </>
                    }
                </>
            }
            {
                // The user is Anonymous.
                !loggedInUser &&
                <>
                    {
                        // The Anonymous user is viewing an existing user's profile. (With the user's userID in the URL).
                        otherUser &&
                        <>
                            <h1 className="wbdv-profile-header-main">
                                {otherUser.username}'s Profile
                            </h1>
                            <PublicContent user={otherUser}
                                         updateUser={updateUser} />
                        </>
                    }
                </>
            }
        </div>
    )
}

export default Profile;