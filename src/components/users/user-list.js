import React, {useState, useEffect} from "react";
import User from "./user"

const UserList = ({
    users = []
                  }) => {

    // DATABASE_URL=$(heroku config:get DATABASE_URL -a your-app) your_process

    const [currentUsers, setCurrentUsers] = useState([])

    useEffect(() => {
        fetch(`$(heroku config:get DATABASE_URL -a cs5610-charlotteswebdev-server) /api/users`)
            .then(response => console.log(response.json()))
            // .then((users) => setCurrentUsers(users))
    }, [])

    return(
        <div className = "container-fluid">
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
                            return(
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
    )
}

export default UserList