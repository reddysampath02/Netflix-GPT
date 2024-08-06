import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSingnInForm, setIsSingnInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSingnInForm(!isSingnInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="bg-transparent"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className="absolute bg-black py-3 px-6 p w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSingnInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingnInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-black border border-solid border-white"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-black border border-solid border-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-black border border-solid border-white"
        />
        <button className="p-2 my-4 bg-red-600 w-full">
          {isSingnInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4">
          {isSingnInForm ? (
            <>
              <p className="inline-block pr-1">New to Netflix?</p>
              <span
                className="font-bold cursor-pointer hover:underline"
                onClick={toggleSignInForm}
              >
                Sign Up Now
              </span>
            </>
          ) : (
            <>
              <p className="inline-block pr-1">Already Registered?</p>
              <span
                className="font-bold cursor-pointer hover:underline"
                onClick={toggleSignInForm}
              >
                Sign In Now
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
