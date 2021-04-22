import React, {useState} from 'react';

import "./profile.style.css";

const PrivateContent = ({user}) => {
    const [editing, setEditing] = useState(false)

    return(
        <div className="container-fluid">
            {
                <>
                    <div className="row wbdv-profile-row">
                        <label htmlFor = "passwordField"
                               className="wbdv-profile-label col-2">
                            Password:
                        </label>
                        <input value = {user.password}
                               id = "passwordField"
                               className = "form-control col-10">
                        </input>
                    </div>
                    <div className="row wbdv-profile-row">
                        <label htmlFor = "emailField"
                               className = "wbdv-profile-label col-2">
                            Email:
                        </label>
                        <input value = {user.email}
                               id = "emailField"
                               className = "form-control col-10">
                        </input>
                    </div>
                </>
            }
        </div>
    )
}

export default PrivateContent;