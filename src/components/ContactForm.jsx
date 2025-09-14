import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

function ContactForm() {
    const [processing, setProcessing] = useState(false)
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const contact = async (data) => {
    setProcessing(true)
    //console.log(data);
    await new Promise((res) => setTimeout(res, 500));
    setProcessing(false)
    reset(); // clears field & error
  };

  return (
    <div className="mt-12 mb-12 px-7 mx-auto w-full ">
      <div className=" sm:flex sm:justify-between  text-white  sm:mx-18">
        <img src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg" alt="" className="sm:w-2/5 sm:mt-4 rounded-lg object-cover"/>
        <form onSubmit={handleSubmit(contact)} className="w-full sm:w-2/5 ">
          <Input className=""
            label="Full Name: "
            placeholder="Enter your full name"
            {...register("name", {
              required: "Full name is required",
            })}
          />
          {errors.name && (
            <p className="text-red-400 text-xs pl-1 pt-1">{errors.name.message}</p>
          )}
          <Input
          className=""
            label="Email: "
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email address must be valid",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-400 text-xs pl-1 pt-1">{errors.email.message}</p>
          )}
          <Input className=""
            label="Query: "
            placeholder="Enter your query"
            {...register("query", {
              required: "Query is required",
            })}
          />
          {errors.query && (
            <p className="text-red-400 text-xs pl-1 pt-1">{errors.query.message}</p>
          )}

          <Button type="submit" className="w-full mt-8">
            {processing? "Submitting...": "Submit Query"}
          </Button>
          {isSubmitSuccessful && (
            <p className="my-3 text-green-400 text-center">
              Your query was submitted successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
