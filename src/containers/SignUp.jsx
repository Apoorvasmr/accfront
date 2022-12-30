import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../reducks/users/operations';
import CrossX from '../assets/img/cross.png';
import Home from '../containers/Home';
import { push } from 'connected-react-router';

const SignUp = () => {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };
    const [user_name, setUserName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState('');
    const inputUserName = event => {
        setUserName(event.target.value);
    };
    const inputEmail = event => {
        setEmail(event.target.value);
    };
    const inputPassword = event => {
        setPassword(event.target.value);
    };
    const signUpButton = () => {
        dispatch(signUp(user_name, email, password));
        setUserName('');
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <Home />
            <section className="gradient">
            <section className="popup">
                <div className="popup-inner">
                    <div className="popup-preview">
                        <span onClick={closeButton}>
                            <a href="/">
                                <img src={CrossX} className="close" />{' '}
                            </a>
                        </span>
                        <div className="input">
                            <div className="heading-sign-in">
                                <h2>Create an account and discover the benefits</h2>
                                <p> Sign Up to buy Accessories</p>
                            </div>
                            <div className="input-feilds">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={inputUserName}
                                    placeholder="Enter User Name"
                                    value={user_name}
                                    required
                                />
                                <input
                                    type="email"
                                    className="form-control"
                                    onChange={inputEmail}
                                    placeholder="Enter email"
                                    value={email}
                                    required
                                />
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={inputPassword}
                                    placeholder="Password"
                                    value={password}
                                    required
                                />
                                <div className="checkbox">
                                    <input type="checkbox" required id="terms" name="terms" />
                                    <label for="terms">I agree to the Google Terms of Service and Privacy Policy</label>
                                </div>


                                <button className="button" onClick={signUpButton}>
                                    SIGN UP
                                </button>
                                <p className="bottom">
                                    Already a Member?{' '}
                                    <a href="/signin">
                                        <u>Sign In.</u>
                                    </a>{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </section>
        </>
    );
};

export default SignUp;
