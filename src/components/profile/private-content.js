import React, {useEffect, useState} from 'react';

import "./profile.style.css";

const PrivateContent = ({user, updateUser, canEdit, currentUser, resetCurrentUser}) => {
    const [editingPassword, setEditingPassword] = useState(false)
    const [editingEmail, setEditingEmail] = useState(false)
    const [currentPassword, setCurrentPassword] = useState(user.password)
    const [currentEmail, setCurrentEmail] = useState(user.email)
    const [userTemp, setUserTemp] = useState({...user})

    useEffect(() => {
        setCurrentPassword(user.password)
        setCurrentEmail(user.email)
    }, [user])

    return(
        <div className="container-fluid container-lg wbdv-private-content">
            <>
                <div>
                    <h3 className="wbdv-profile-section-label">
                        {user.username}'s Private Info
                    </h3>
                </div>
                <div className="row wbdv-profile-row">
                    {
                        !editingPassword &&
                            <>
                                <label htmlFor = "passwordField"
                                       className="wbdv-profile-label col-2">
                                    Password:
                                </label>
                                <input value = {userTemp.password}
                                       placeholder="password"
                                       id = "passwordField"
                                       className = "form-control col-9">
                                </input>
                                <i className="fas fa-edit fa-2x col-1"
                                   onClick = {() => {
                                       setEditingPassword(true)
                                   }}/>
                            </>
                    }
                    {
                        editingPassword &&
                            <>
                                <label htmlFor = "passwordField"
                                       className="wbdv-profile-label col-2">
                                    Password:
                                </label>
                                <input defaultValue = {userTemp.password}
                                       placeholder="password"
                                       id = "passwordField"
                                       className = "form-control col-9"
                                       onChange = {(e) => {
                                           setUserTemp({
                                                           ...userTemp,
                                                           password: e.target.value
                                                       })
                                       }}>
                                </input>
                                <i className="fas fa-check fa-2x col-1"
                                   onClick = {() => {
                                       if(userTemp.password !== "") {
                                           updateUser(userTemp.id, userTemp)
                                           resetCurrentUser()
                                           setEditingPassword(false)
                                       } else {
                                           alert("You must enter a password.")
                                       }

                                   }}/>
                            </>
                    }
                </div>
                <div className="row wbdv-profile-row">
                    {
                        !editingEmail &&
                            <>
                                <label htmlFor = "emailField"
                                       className = "wbdv-profile-label col-2">
                                    Email:
                                </label>
                                <input value = {userTemp.email}
                                       placeholder="email"
                                       id = "emailField"
                                       className = "form-control col-9">
                                </input>
                                <i className="fas fa-edit fa-2x col-1"
                                   onClick = {() => setEditingEmail(true)}/>
                            </>
                    }
                    {
                        editingEmail &&
                            <>
                                <label htmlFor = "emailField"
                                       className = "wbdv-profile-label col-2">
                                    Email:
                                </label>
                                <input defaultValue = {userTemp.email}
                                       placeholder="email"
                                       id = "emailField"
                                       className = "form-control col-9"
                                       onChange = {(e) => {
                                           setUserTemp({
                                               ...userTemp,
                                               email: e.target.value
                                                       })
                                       }}>
                                </input>
                                <i className="fas fa-check fa-2x col-1"
                                   onClick = {() => {
                                       if (userTemp.email !== "") {
                                           updateUser(user.id, userTemp)
                                           resetCurrentUser()
                                           setEditingEmail(false)
                                       } else {
                                           alert("You must enter an email.")
                                       }

                                   }}/>
                            </>
                    }
                </div>
            </>
        </div>
    )
}

export default PrivateContent;