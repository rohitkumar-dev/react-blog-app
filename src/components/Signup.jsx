import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo, SectionTag } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import google_logo from '../assets/google.png'
import GoogleBtn from "./GoogleBtn.jsx";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [success, setSuccess] = useState(false);
    const [processing, setProcessing] = useState(false)

  const create = async (data) => {
    setProcessing(true)
    setError("");
    setSuccess(false);
    try {
      const session = await authService.createAccount(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        setSuccess(true);
        navigate("/");
      }
    } catch (error) {
      //setError(error.message)
      setProcessing(false)
      setError("Invalid input details");
    }
  };

  return (
    <>
      <SectionTag tagname={"Sign up to create account"} />
      <div className="flex items-center justify-center px-5 my-5">
        <div
          className={`mx-auto w-full max-w-lg bg-red-300 rounded-xl px-5 sm:px-10 py-5 border border-black/10`}
        >
          <h2 className="hidden text-center text-2xl font-bold leading-tight">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-red-900">
            Already have an account?&nbsp;
            <Link
              to="/login"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>

          <GoogleBtn
            onClick={() => authService.loginWithGoogle()}
            className="mt-6 "
          >
          </GoogleBtn>

          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form onSubmit={handleSubmit(create)}>
            <div className="">
              <Input
              labelClassName="dark:text-red-900"
                label="Full Name: "
                placeholder="Enter your full name"
                {...register("name", {
                  required: "Full name is required",
                })}
              />
              {errors.name && (
                <p className="text-red-600 text-xs pl-1">
                  {errors.name.message}
                </p>
              )}
              <Input
              labelClassName="dark:text-red-900"
                label="Email: "
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Email address must be valid",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-600 text-xs pl-1">
                  {errors.email.message}
                </p>
              )}

              <Input
              labelClassName="dark:text-red-900"
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^[A-Za-z\d@$!%*?&]{8,16}$/,
                    message: "Password must be 8-16 character long",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-600 text-xs pl-1">
                  {errors.password.message}
                </p>
              )}
              <Button type="submit" className="w-full my-5">
                {processing? "Processing...": "Create Account"}
              </Button>
              {success && (
                <p className="my-3  text-center">
                  Signup successful, redirecting...
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
