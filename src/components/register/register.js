import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import './register.style.css'
import userService from "../../services/user-service";
import {connect} from "react-redux";


const Register = ({createUser}) => {
    const [credentials, setCredentials] = useState({username: '', password: '', email: '', role: "GENERAL_USER"})
    const history = useHistory()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")


    const register = () => {
        userService.register(credentials)
            .then((user) => {
                if (user === undefined) {
                    alert("Username already taken!  Please try another username.")
                } else {
                    window.location.href = "/profile"
                }
            })
    };


    return (
        <div>
            <div className="container-fluid">
                <div className="wbdv-page-heading row">
                    <Link to="/home" className="col-1 wbdv-home-btn">
                        <i className="fas fa-home fa-2x"></i>
                    </Link>
                    <div className="col-10">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="col-1">
                    </div>
                </div>
                <br/>
                <div className="container-lg">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="usernameFld"
                                   className="col-sm-2 col-form-label wbdv-label">
                                Username:
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       id="usernameFld"
                                       placeholder="Alice"
                                       onChange={(e) => {setUsername(e.target.value); setCredentials({...credentials, username:e.target.value})}}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="emailFld"
                                   className="col-sm-2 col-form-label wbdv-label">
                                Email:
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       id="emailFld"
                                       placeholder="alice@wonderland.com"
                                       onChange={(e) => {setEmail(e.target.value); setCredentials({...credentials, email:e.target.value})}}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="passwordFld"
                                   className="col-sm-2 col-form-label wbdv-label">
                                Password:
                            </label>
                            <div className="col-sm-10">
                                <input type="password"
                                       className="form-control"
                                       id="passwordFld"
                                       placeholder="123qwe#$%"
                                       onChange={(e) => {setPassword(e.target.value); setCredentials({...credentials, password: e.target.value})}}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="verifyPasswordFld"
                                   className="col-sm-2 col-form-label wbdv-label">
                                Verify Password:
                            </label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control"
                                       id="verifyPasswordFld" placeholder="123qwe#$%"/>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="emailFld"
                                   className="col-sm-2 col-form-label wbdv-label">
                                Role:
                            </label>
                            <div className="col-10">
                                <select id="roleFld"
                                        className="form-control"
                                        title="Select your role here"
                                        onChange={(e) => {
                                            setRole(e.target.value)
                                            setCredentials({...credentials, role: e.target.value})
                                        }}>
                                    <option value="GENERAL">General User</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <div onClick={() => register()}
                                     className="btn btn-block wbdv-login-button">
                                    Sign Up
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Link to="/login"
                                              className=" btn wbdv-signup-pw-button">
                                            Sign In
                                        </Link>
                                    </div>
                                    <div className="col-6">
                                        <Link to="/home"
                                              className="btn float-right wbdv-cancel-btn">
                                            Cancel
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
)
}

// const stpm = (state) => ({
//     users: state.userReducer.users
// })
//
// const dtpm = (dispatch) => ({
//     createUser: (username, password) => {
//         const newUser = {username: username, password: password, type: "GENERAL"}
//         userService.createUser(newUser)
//             .then(user => dispatch({
//                                        type: "CREATE_USER",
//                                        user: user
//                                    }))
//     }
// })

//export default connect(stpm, dtpm)(Register);

export default Register;