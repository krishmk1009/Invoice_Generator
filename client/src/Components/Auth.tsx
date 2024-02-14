// Auth.tsx

import React, { useState } from "react";
import { authStyles } from "../styles/LoginForm/Style";

const Auth: React.FC = () => {
  const [isRegister, setIsRegister] = useState<boolean>(true);
  const [formData, setFormData] = useState<any>(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form Data:", formData);

    setFormData(undefined);
  };

  return (
    <div>
      <section className={authStyles.flexContainer}>
        <div className={authStyles.backgroundContainer}>
          <img
            src="https://lazarev.kiev.ua/la24/reel-cover.webp"
            alt=""
            className={authStyles.image}
          />
        </div>

        <div className={authStyles.formContainer}>
          <div className="w-full h-100">
            <h1 className={authStyles.heading}>
              {isRegister ? "Create your account" : "Log in to your account "}
            </h1>

            <form className="mt-6" onSubmit={handleSubmit}>
              {isRegister && (
                <div>
                  <label className="block text-gray-700">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    className={authStyles.input}
                    onChange={(e) =>
                      setFormData({ ...formData, [e.target.name]: e.target.value })
                    }
                  />
                </div>
              )}

              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                  className={authStyles.input}
                  onChange={(e) =>
                    setFormData({ ...formData, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className={authStyles.input}
                  onChange={(e) =>
                    setFormData({ ...formData, [e.target.name]: e.target.value })
                  }
                  required
                />
              </div>

              <button type="submit" className={authStyles.button}>
                {isRegister ? " Sign Up" : "Log In"}
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <p className={authStyles.link}>
                {isRegister ? "Alredy have an account ?" : "  Need an account?"}
            {" "} 
              <button 
                onClick={() =>
                  setIsRegister((prevIsRegister) => !prevIsRegister)
                }
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                {isRegister ? "Log in to your account" : "Create an account"}
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auth;
