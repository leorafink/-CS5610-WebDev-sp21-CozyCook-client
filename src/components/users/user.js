import React, {useEffect, useState} from "react";
import userService from "../../services/user-service"
import {Link} from "react-router-dom";

const User = ({user,
                  updateUser,
                  currentUsers,
                  setCurrentUsers,
                  setCurrentUsersTemp,
                  currentUsersTemp
              }) => {

    const [editing, setEditing] = useState(false)
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        setCurrentUser(user)
        setCurrentUsers(currentUsers)
    }, [currentUsersTemp])

    const resetCurrentUsers = () => {
        let resetUsers = currentUsers.filter(user => user.id !== currentUser.id)
        setCurrentUsersTemp(resetUsers)
    }

    return(
        <>
            {
                !editing &&
                <>
                    <td>
                        <Link to = {`/profile/${user.id}`}>
                            {user.username}
                        </Link>
                    </td>
                    <td>{user.password}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                        <button className="wbdv-user-crud-btn" onClick={() => setEditing(true)}>
                            <i className="fa-2x fa fa-pencil-alt"></i>
                        </button>
                    </td>
                </>

            }
            {
                editing &&
                <>
                    <td>
                        <input defaultValue={currentUser.username}
                               onChange={(e) => setCurrentUser(
                                   currentUser => ({...currentUser, username: e.target.value}))}>
                        </input>
                    </td>
                    <td>
                        <input defaultValue={currentUser.password}
                               onChange={(e) => setCurrentUser(
                                   currentUser => ({...currentUser, password: e.target.value}))}>
                        </input>
                    </td>
                    <td>
                        <input defaultValue={currentUser.email}
                               onChange={(e) => setCurrentUser(
                                   currentUser => ({...currentUser, email: e.target.value}))}>
                        </input>
                    </td>
                    <td>
                        <select defaultValue={currentUser.role}
                                onChange={(e) => setCurrentUser(
                                    currentUser => ({...currentUser, role: e.target.value}))}>
                            <option value="GENERAL">General User</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                    </td>
                    <td>
                        <button onClick={() => {
                            userService.deleteUser(currentUser.id)
                            resetCurrentUsers()
                            alert("User successfully deleted!")
                        }}
                                className="wbdv-user-crud-btn" >
                            <i className="fa-2x fa fa-trash"></i>
                        </button>
                        <button className="wbdv-user-crud-btn" onClick={() => {
                            updateUser(currentUser)
                            setEditing(false)
                            resetCurrentUsers()
                            alert("User successfully updated!")
                        }}>
                            <i className="fa-2x fa fa-check"/>
                        </button>
                    </td>
                </>
            }
        </>

    )
};

export default User;