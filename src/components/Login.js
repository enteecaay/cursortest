import React from 'react';
import { GoogleLogin } from 'react-google-login';

function Login() {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle Google login response
    // Send token to your backend for verification and user creation/login
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      {/* Add your regular login form here */}
    </div>
  );
}

export default Login;