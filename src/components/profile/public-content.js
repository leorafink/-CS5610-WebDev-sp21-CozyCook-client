import React from 'react';

import "./profile.style.css";

const PublicContent = ({user}) => {
    return(
        <div className="container-fluid">
            <h2 className="wbdv-profile-header-user">
                {user.username}'s Profile
            </h2>
            {
                <>
                    <div className="row wbdv-profile-row">
                        <label htmlFor = "roleField"
                               className = "wbdv-profile-label col-2">
                            Role:
                        </label>
                        <input value = {user.role}
                               id = "roleField"
                               className = "form-control col-10">
                        </input>
                    </div>
                </>
            }
        </div>
    )
}

export default PublicContent;