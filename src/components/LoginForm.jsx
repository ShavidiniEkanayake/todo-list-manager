import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //log in
  const handleLogin = () => {
    if (!username) {
      setUsernameError("Username is required.");
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
    } else {
      setPasswordError("");
    }

    if (username && password) {
      onLogin({ username, password });
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full xl:w-80 max-w-md">
        <div className="bg-white md:mt-4 sm:max-w-sm text-black w-full">
          <div className="mb-5">
            <label className="text-black font-bold">
              Username
              <input
                type="text"
                className={`border border-[#898989] rounded-md p-2 mt-2 w-full placeholder:font-normal ${
                  usernameError ? "border-red-500" : ""
                }`}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameError("");
                }}
                placeholder="Username"
              />
              {usernameError && (
                <small className="text-red-500 font-TTHovesProTrialDemiBold">
                  {usernameError}
                </small>
              )}
            </label>
          </div>
          <div className="mb-5">
            <label className="text-black font-bold">
              Password
              <input
                type="password"
                className={`border border-[#898989] rounded-md p-2 mt-2 w-full placeholder:font-normal ${
                  passwordError ? "border-red-500" : ""
                }`}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
                placeholder="Password"
              />
              {passwordError && (
                <small className="text-red-500 font-TTHovesProTrialDemiBold">
                  {passwordError}
                </small>
              )}
            </label>
          </div>
          <div className="mt-7 bg-black rounded-md text-white font-TTHovesProTrialDemiBold py-3 flex justify-center hover:bg-black/80 transition-all">
            <button onClick={handleLogin} className="">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
