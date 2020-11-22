import React from 'react';

const Login = () => {
    return (
        <div>
            <p>Login info here I guess
                <form className="login-form">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        name="email"
                        id="email"
                        placeholder="valid email address"/>
                    <br />
                    <label htmlFor="password">Password</label>
                    <input
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