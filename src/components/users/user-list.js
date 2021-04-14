import React, {useState, useEffect} from "react";
import User from "./user"
import connect from "react-redux/lib/connect/connect";
import UserReducer from "../../reducers/user-reducer";
import userService from "../../services/user-service"
import {createStore} from "redux";
import {Provider} from "react-redux";


const store = createStore(UserReducer)


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

    useEffect(() => {
        findAllUsers()
        /* fetch(`$(heroku config:get DATABASE_URL -a cs5610-charlotteswebdev-server) /api/users`)
             .then(response => console.log(response.json()))
             // .then((users) => setCurrentUsers(users))*/
    }, [])

    return (
        <Provider store={store}>
        <div className="container-fluid">
            <h1>user list</h1>
            <table>
                <thead>
                <tr>
                    <th>
                        Username
                    </th>
                    <th>
                        Password
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user) => {
                        return (
                            <div>
                                <tr>
                                    <td>{user.name}</td>
                                </tr>
                            </div>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    </Provider>
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
    createUser: () => {
        userService.createUser({username: "NEW USERNAME", password: "NEW PASSWORD"})
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
            .then(status => dispatch({type: "UPDATE_USER", updateUser: newItem}))

    },

})

export default connect(stpm, dtpm)(UserList)
