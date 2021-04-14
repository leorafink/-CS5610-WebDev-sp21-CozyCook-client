import React, {useState} from "react";


const User = ({key, user, deleteUser, updateUser}) => {
    const [editing, setEditing] = useState(false)
    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
    // const [type, setType] = useState("")
    const [currentUser, setCurrentUser] = useState(user);
    return(
        <tr>
            {
                !editing &&
                <>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.type}</td>
                    <td>
                        <button onClick={() => deleteUser(user)} className="wbdv-user-crud-btn" >
                            <i className="fa-2x fa fa-trash"></i>
                        </button>
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
                        <input defaultValue={user.username}
                               onChange={(e) => setCurrentUser(
                                   currentUser => ({...currentUser, username: e.target.value}))}>
                        </input>
                    </td>
                    <td>
                        <input defaultValue={user.password}
                               onChange={(e) => setCurrentUser(
                                   currentUser => ({...currentUser, password: e.target.value}))}>
                        </input>
                    </td>
                    <td>
                        <select defaultValue={user.type}
                                onChange={(e) => setCurrentUser(
                                    currentUser => ({...currentUser, type: e.target.value}))}>
                            <option value="GENERAL">General User</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                    </td>
                    <td>
                        <button onClick={() => deleteUser(user)} className="wbdv-user-crud-btn" >
                            <i className="fa-2x fa fa-trash"></i>
                        </button>
                        <button className="wbdv-user-crud-btn" onClick={() => {updateUser(currentUser)
                            setEditing(false)}}>
                            <i className="fa-2x fa fa-check"></i>
                        </button>
                    </td>
                </>
            }

        </tr>
    )
}

export default User;