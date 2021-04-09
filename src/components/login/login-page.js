import React from 'react';
import {Link} from 'react-router-dom';
import './login.style.css'

const LoginPage = () => {
    return (
        <div className="container-fluid">
            <div className="wbdv-page-heading row">
                <Link to="/home" className="col-1 wbdv-home-btn">
                    <i className="fas fa-home fa-2x"></i>
                </Link>
                <div className="col-10">
                    <h1>Sign In</h1>
                </div>
                <div className="col-1">
                </div>
            </div>
            <br/>
            <div className="container-lg">
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label wbdv-label">
                            Username: </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   placeholder="Alice"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label wbdv-label">
                            Password: </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control"
                                   id="password" placeholder="123qwe#$%"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <Link to=""
                                  className="btn btn-block wbdv-login-button">
                                Sign In
                            </Link>
                            <div className="row">
                                <div className="col-6">
                                    <Link to="/register" className=" btn wbdv-signup-pw-button">
                                        Sign Up
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link to=""
                                          className="btn float-right wbdv-signup-pw-button">
                                        Forgot Password?
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default LoginPage;