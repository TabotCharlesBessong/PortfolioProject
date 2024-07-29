import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(1);
    await axios
      .post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Login Success!");
        navigate("/");
        window.location.relaoad();
      })
      .catch((err) => {
      toast.error(err.response.data.message);
    });
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm-w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl text-extrabold text-gray-500">
          Login to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-70"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id=""
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-70"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={isVisible ? "text" : "password"}
                  name="password"
                  id=""
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {isVisible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    color="black"
                    size={28}
                    onClick={() => setIsVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    color="black"
                    size={28}
                    onClick={() => setIsVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className={`${styles.noramlFlex} justify-between mt-4`}>
              <div className={`${styles.noramlFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-50 border-gray-300 rounded cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-500"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>Not have any account?</h4>
              <Link to="/signup" className="text-blue-600 pl-2">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
