import React, {useState} from 'react';

import "./profile.style.css";

const PublicContent = ({user}) => {
    const [editingRole, setEditingRole] = useState(false)
    return(
        <div className="container-fluid">
            <h2 className="wbdv-profile-header-user">
                {user.username}'s Profile
            </h2>
            {
                <>
                    <div className="row wbdv-profile-row">
                        {
                            !editingRole &&
                                <>
                                    <label htmlFor = "roleField"
                                           className = "wbdv-profile-label col-2">
                                        Role:
                                    </label>
                                    <input value = {user.role}
                                           id = "roleField"
                                           className = "form-control col-9">
                                    </input>
                                    <i className="fas fa-edit fa-2x col-1"
                                       onClick = {() => setEditingRole(true)}/>
                                </>
                        }
                        {
                            editingRole &&
                                <>
                                    <label htmlFor = "roleField"
                                           className = "wbdv-profile-label col-2">
                                        Role:
                                    </label>
                                    <input value = {user.role}
                                           id = "roleField"
                                           className = "form-control col-9">
                                    </input>
                                    <i className="fas fa-check fa-2x col-1"
                                       onClick = {() => setEditingRole(false)}/>
                                </>
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default PublicContent;