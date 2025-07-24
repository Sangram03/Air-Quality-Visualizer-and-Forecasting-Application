import React from 'react';

const LoginPopUp = () => {
  return (
    <div className='Login-popup'>
      <input type="text" placeholder='Your Email'/>
      <input type="text" placeholder='Your Password' />
      <button>Login</button>
      <input type="checkbox" required/>
      <p>Create a new account? <span>Click here</span></p>
    </div>
  );
}

export default LoginPopUp;
