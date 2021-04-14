import React from "react";

const User = ({key, user, deleteUser}) => {
    return(
        <tr>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{user.type}</td>
            <td>
                <button onClick={() => deleteUser(user)} className="wbdv-user-crud-btn" >
                    <i className="fa-2x fa fa-trash"></i>
                </button>
                <button className="wbdv-user-crud-btn" >
                    <i className="fa-2x fa fa-pencil-alt"></i>
                </button>
            </td>
        </tr>
    )
}

export default User;