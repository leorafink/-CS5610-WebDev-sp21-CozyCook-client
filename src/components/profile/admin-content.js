import React from 'react';
import {Link} from 'react-router-dom'
import UserList from "../users/user-list";

const AdminContent = () => {
    return(
        <div>
            <Link to="/users">
                View Users
            </Link>
        </div>
    )
}

export default AdminContent;