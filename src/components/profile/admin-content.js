import React from 'react';
import {Link} from 'react-router-dom'
import UserList from "../users/user-list";

const AdminContent = () => {
    return(
        <div className="container-fluid wbdv-admin-content">
            <div>
                <h3 className="wbdv-profile-section-label">
                    Administrator Info
                </h3>
            </div>
            <div className="wbdv-admin-btn btn ">
                <Link to="/users">
                    View Users
                </Link>
            </div>

        </div>
    )
}

export default AdminContent;