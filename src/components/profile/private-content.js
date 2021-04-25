import React, {useEffect, useState} from 'react';

import "./profile.style.css";

const PrivateContent = ({user, updateUser}) => {
    const [editingPassword, setEditingPassword] = useState(false)
    const [editingEmail, setEditingEmail] = useState(false)
    const [currentPassword, setCurrentPassword] = useState(user.password)
    const [currentEmail, setCurrentEmail] = useState(user.email)

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
                                <input value = {currentPassword}
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
                                <input defaultValue = {currentPassword}
                                       id = "passwordField"
                                       className = "form-control col-9"
                                       onChange = {(e) => setCurrentPassword(e.target.value)}>
                                </input>
                                <i className="fas fa-check fa-2x col-1"
                                   onClick = {() => {
                                       updateUser(user.id, {
                                           ...user,
                                           password: currentPassword
                                       })
                                       setEditingPassword(false)
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
                                <input value = {currentEmail}
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
                                <input defaultValue = {currentEmail}
                                       id = "emailField"
                                       className = "form-control col-9"
                                       onChange = {(e) => setCurrentEmail(e.target.value)}>
                                </input>
                                <i className="fas fa-check fa-2x col-1"
                                   onClick = {() => {
                                       updateUser(user.id, {
                                           ...user,
                                           email: currentEmail
                                       })
                                       setEditingEmail(false)
                                   }}/>
                            </>
                    }
                </div>
            </>
        </div>
    )
}

export default PrivateContent;