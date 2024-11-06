import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSingnInForm, setIsSingnInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSingnInForm(!isSingnInForm);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handelButtonClick = () => {
    const errorMsg = CheckValidData(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );

    setErrorMessage(errorMsg);
    if (errorMsg) return;

    if (!isSingnInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.errorMsg);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="bg-transparent" src={BG_URL} alt="bg-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black py-3 px-6 p w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSingnInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingnInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-black border border-solid border-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-black border border-solid border-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-black border border-solid border-white"
        />

        <p className="text-red-600 text-base font-bold p-2">{errorMessage}</p>

        <button
          className="p-2 my-4 bg-red-600 w-full"
          onClick={handelButtonClick}
        >
          {isSingnInForm ? "Sign In" : "Sign Up"}
        </button>

        <span className="py-4">
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
        </span>
      </form>
    </div>
  );
};

export default Login;
