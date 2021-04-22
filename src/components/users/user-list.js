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
    const [type, setType] = useState("GENERAL")

    useEffect(() => {
        userService.findAllUsers()
        /* fetch(`$(heroku config:get DATABASE_URL -a cs5610-charlotteswebdev-server) /api/users`)
             .then(response => console.log(response.json()))
             // .then((users) => setCurrentUsers(users))*/
    }, [])

    return (
        <div className="container-fluid">
            <Link to = "">
                <i className = "fas fa-arrow-left fa-2x float-left wbdv-back-button"></i>
            </Link>
            <h1>user list</h1>

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
                    <select className="form-control"
                            onChange={(e) => setType(e.target.value)}>
                        <option value="GENERAL">General User</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>
                <div className="col align-middle ">
                    <span className="">
                        <button onClick={() => createUser(username, password, type)}
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
                    users && users.map((user) => {
                        return (
                            <tr>
                                <User key={user.id}
                                      user={user}
                                      deleteUser={deleteUser}
                                      updateUser={updateUser}/>
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
    createUser: (username, password, type) => {
        userService.createUser(
            {username: username, password: password, type: type})
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