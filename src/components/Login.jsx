import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo, SectionTag } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import GoogleBtn from "./GoogleBtn";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
    const [processing, setProcessing] = useState(false)

  const login = async (data) => {
    setProcessing(true)
    setErr("");
    setSuccess(false);
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        setSuccess(true);
        navigate("/");
      }
    } catch (err) {
      //setErr(err.message);
      setErr("Invalid email or password");
      setProcessing(false)
      console.log(err);
    }
  };


  return (
    <>
    <SectionTag tagname={"Sign in to your account"}/>
    <div className="flex justify-center w-full my-5 px-5 ">
      <div
        className={`mx-auto w-full max-w-lg bg-red-300 rounded-xl px-5 sm:px-10 py-5 border border-black/10`}
      >
        <h2 className="hidden text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-red-900">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {/* //google login button */}
        <GoogleBtn
            onClick={() => authService.loginWithGoogle()}
            className="mt-6 "
          >
          </GoogleBtn>

        <form onSubmit={handleSubmit(login)} className="mt-8.. mt-6 ">
          <div className="dark:text-red-900">
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
              {processing? "Processing...": "Sign in"}
            </Button>
            {err && <p className="my-3 text-red-600 text-center">{err}</p>}

            {success && (
              <p className="my-3 text- text-center">
                Login successful, redirecting...
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
