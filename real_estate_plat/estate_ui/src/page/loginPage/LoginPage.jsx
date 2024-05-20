import React from 'react'
import "./loginPage.scss"
import { Link } from 'react-router-dom';
import images from '../../constant/images';

const LoginPage = () => {
  return (
    <div className="login">
      <div className="formContainer">
        <form>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button>Login</button>
          <Link to="/signup">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src={images.bg} alt="" />
      </div>
    </div>
  );
}

export default LoginPage