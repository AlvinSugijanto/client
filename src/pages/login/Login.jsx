import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../state/slice/authSlice/authSlice";

function Login() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    function loginSubmit() {
        const loginData = {
            email: email,
            password: password
        };
        dispatch(login(loginData));
    }
    return (
        <div className="container">
            <div className="row p-5">
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="EmailInput"
                            name="EmailInput"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3" onClick={loginSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
