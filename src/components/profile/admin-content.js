import React from 'react';
import {Link} from 'react-router-dom'
import UserList from "../users/user-list";
import "./profile.style.css"

const AdminContent = () => {
    return(
        <div className="container-fluid wbdv-admin-content">
            <div>
                <h3 className="wbdv-profile-section-label">
                    Administrator Info
                </h3>
            </div>
            <Link type="button"
                  className = "btn wbdv-admin-btn"
                  to="/users">
                View Users
            </Link>

        </div>
    )
}

export default AdminContent;