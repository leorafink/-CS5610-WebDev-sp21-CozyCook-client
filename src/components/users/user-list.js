import React, {useState, useEffect} from "react";
import User from "./user"
import connect from "react-redux/lib/connect/connect";
import UserReducer from "../../reducers/user-reducer";
import userService from "../../services/user-service"
import './users.style.css'

const UserList = (
    {
        users = [{username: "aliceInWonderland", password: "whiteRabbit", id: "123"},
            {username: "snowWhite", password: "hiHo", id: "1357"},
            {username: "arielOfTheSea", password: "partOfYourWorld", id: "254"}],
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
    }, [users])

    return (
        <div className="container-fluid">
            <h1>user list</h1>

            <div className="row">
                <div className="col align-middle">
                    <input className="form-control"
                           placeholder="Username"/>
                </div>
                <div className="col align-middle">
                    <input className="form-control"
                           placeholder="Password"/>
                </div>
                <div className="col align-middle ">
                    <select className="form-control">
                        <option value="Admin">Admin</option>
                        <option value="General User">General User</option>
                    </select>
                </div>
                <div className="col align-middle ">
                    <span className="">
                        <button onClick={() => createUser()}
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
                    users.map((user) => {
                        return (
                            <User key={user.id}
                                  user={user}
                                  deleteUser={deleteUser}/>
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
    createUser: () => {
        userService.createUser(
            {username: "NEW USERNAME", password: "NEW PASSWORD", type: "General User"})
            .then(user => dispatch({
                                       type: "CREATE_USER",
                                       user: user
                                   }))
    },
    deleteUser: (userToDelete) => {
        userService.deleteUser(userToDelete._id)
            .then(status => dispatch({
                                         type: "DELETE_USER",
                                         userToDelete: userToDelete
                                     }))

    },
    updateUser: (newItem) => {
        userService.updateUser(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_USER", updateUser: newItem}))

    },

})

export default connect(stpm, dtpm)
(UserList)