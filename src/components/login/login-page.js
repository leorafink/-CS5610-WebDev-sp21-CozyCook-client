import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './login.style.css'
import userService from '../../services/user-service'

const LoginPage = () => {
    const [credentials, setCredentials] = useState({username: '', password: ''})

    const login = () => {
        userService.login(credentials)
            .then((user) => {
                if (user === undefined) {
                    alert("Username or password is incorrect!")
                } else {
                    window.location.href = `/profile/${user.id}`
                }
            })
    }

    return (
        <div className="container-fluid">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/home">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Sign In</li>

                </ol>
            </nav>

            <div className="wbdv-login-heading">
                <h1>Sign In</h1>
            </div>

            <br/>
            <div className="container-lg">
                <div>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label wbdv-label">
                            Username: </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   placeholder="Alice"
                                   onChange = {(e) => {setCredentials({...credentials, username: e.target.value})}}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label wbdv-label">
                            Password: </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control"
                                   id="password"
                                   placeholder="123qwe#$%"
                                   onChange = {(e) => {setCredentials({...credentials, password: e.target.value})}}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <div
                                  className="btn btn-block wbdv-login-button"
                                  onClick = {() => login()}>
                                Sign In
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <Link to="/register"
                                          className=" btn wbdv-signup-pw-button">
                                        Sign Up
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
                </div>
            </div>
        </div>
    )
}

export default LoginPage;