import React, {useState, useEffect} from "react";
import User from "./user"
import connect from "react-redux/lib/connect/connect";
import UserReducer from "../../reducers/user-reducer";
import userService from "../../services/user-service"
import './users.style.css'
import {Link} from "react-router-dom";



const UserList = (
    {
        users = [],
        createUser,
        updateUser,
        deleteUser,
        findAllUsers

    }
) => {

    // DATABASE_URL=$(heroku config:get DATABASE_URL -a your-app) your_process

    const [currentUsers, setCurrentUsers] = useState([])
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [type, setType] = useState("GENERAL")
    const [currentUsersTemp, setCurrentUsersTemp] = useState([])

    const refreshPage = () => {
        window.location.reload(true)
    }

    useEffect(() => {
        console.log("updating")
        userService.findAllUsers()
            .then(users => setCurrentUsers(users))
    }, [currentUsersTemp])

    return (
        <div className="container-fluid">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/home">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">User List</li>

                </ol>
            </nav>

            <div className = "container-fluid wbdv-user-list-header-container">
                <h1 className = "wbdv-user-list-header">
                    User List
                </h1>
            </div>
            <br/>
            {/*<h1>currentUsers: {JSON.stringify(currentUsers)}</h1>
            <h1>currentUsers length: {JSON.stringify(currentUsers.length)}</h1>*/}
            <div className="row">
                <div className="col align-middle">
                    <input className="form-control"
                           placeholder="Username"
                           onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="col align-middle">
                    <input className="form-control"
                           placeholder="Password"
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="col align-middle">
                    <input className="form-control"
                           placeholder="Email"
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="col align-middle">
                    <select className="form-control"
                            onChange={(e) => setType(e.target.value)}>
                        <option value="GENERAL">General User</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>
                <div className="col align-middle ">
                    <span className="">
                        <button onClick={() => {
                            // createUser(username, password, email, type)
                            userService.register({username: username,
                                password: password,
                                email: email,
                                role: type})
                                .then((response) => {
                                    setCurrentUsers([
                                        ...currentUsers,
                                        response
                                    ])
                                    setCurrentUsersTemp([...currentUsers, response])
                                })
                        }}
                                className="wbdv-user-crud-btn">
                            <i className="fa-2x fa fa-plus-circle"></i>
                        </button>
                        <button className="wbdv-user-crud-btn">
                            <i className="fa-2x fa fa-check-circle "></i>
                        </button>
                    </span>
                </div>
            </div>


            <table className="table">
                <thead>
                <tr>
                    <th>
                        Username
                    </th>
                    <th>
                        Password
                    </th>
                    <th>
                        User Type
                    </th>
                    <th>
                        Save/Delete
                    </th>
                </tr>
                </thead>
                <tbody>

                {
                    currentUsers && currentUsers.length > 0 && currentUsers.map((user) => {
                        console.log("current users temp length: " + currentUsersTemp.length)
                        console.log("current users length: " + currentUsers.length)
                        return (
                            <tr>
                                <User key={user.id}
                                      user={user}
                                      deleteUser={deleteUser}
                                      updateUser={updateUser}
                                      currentUsers={currentUsers}
                                      setCurrentUsers={setCurrentUsers}
                                      currentUsersTemp={currentUsersTemp}
                                      setCurrentUsersTemp={setCurrentUsersTemp}
                                      refreshPage = {refreshPage}/>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

const stpm = (state) => ({
    users: state.userReducer.users
})

const dtpm = (dispatch) => ({
    findAllUsers: () => {
        userService.findAllUsers()
            .then(users => dispatch({
                type: "FIND_ALL_USERS",
                users: users
            }))
    },
    createUser: (username, password, email, type) => {
        userService.register(
            {username: username,
                password: password,
                email: email,
                role: type})
            .then(user => dispatch({
                type: "CREATE_USER",
                user: user
            }))
    },
    deleteUser: (userToDelete) => {
        userService.deleteUser(userToDelete.id)
            .then(status => dispatch({
                type: "DELETE_USER",
                userToDelete: userToDelete
            }))

    },
    updateUser: (newItem) => {
        userService.updateUser(newItem.id, newItem)
            .then(status => dispatch({type: "UPDATE_USER", updatedUser: newItem}))

    },

})

export default connect(stpm, dtpm)
(UserList)