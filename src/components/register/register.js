import React from 'react';
import {Link} from "react-router-dom";
import './register.style.css'

const Register = () => {
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
                                       placeholder="Alice"/>
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
                                       placeholder="123qwe#$%"/>
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
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <Link to=""
                                      className="btn btn-block wbdv-login-button">
                                    Sign Up
                                </Link>
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

export default Register;