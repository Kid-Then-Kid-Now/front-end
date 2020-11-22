import React, { useState } from 'react';

const Login = () => {
    const signin = {
        email: "",
        password: ""
    };

    const [formState, setFormState] = useState(signin);
    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormState(signin);
    }

    return (
        <div>
            <p>Login info here I guess
                <form className="login-form">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="valid email address"/>
                    <br />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="enter password" />
                    <br />

				<button id='button' type='submit' className='pretty-button'>
					Submit
				</button>

                </form>
            </p>
        </div>
    );
};

export default Login;