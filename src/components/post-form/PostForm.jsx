import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE, SectionTag } from "../index.js";
import service from "../../appwrite/config.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function PostForm({ post }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false)
  //console.log("POST: ", post);
  const { slug } = useParams();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      //slug: post?.slug || "",
      slug: slug,
      content: post?.content || "",
      status: post?.status || "Active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const submit = async (data) => {
    setProcessing(true)
    setError("");
    setSuccess(false);
    try {
      if (post) {
        const file = data.image[0]
          ? await service.uploadFile(data.image[0])
          : null;
        if (file) {
          service.deleteFile(post.featuredImage);
        }

        const dbPost = await service.updatePost(post.$id, {
          title: data.title,
          content: data.content,
          featuredImage: file ? file.$id : undefined,
          status: data.status,
        });
        if (dbPost) {
          setSuccess(true);
          navigate(`/post/${dbPost.$id}`);
        }
      } else {
        const file = data.image[0]
          ? await service.uploadFile(data.image[0])
          : null;
        if (file) {
          data.featuredImage = file.$id;
          const dbPost = await service.createPost({
            title: data.title,
            slug: data.slug,
            content: data.content,
            featuredImage: data.featuredImage,
            status: data.status,
            userId: userData.$id,
          });
          if (dbPost) {
            setSuccess(true);
            navigate(`/post/${dbPost.$id}`);
          }
        }
      }
    } catch (error) {
      setError("Some went wrong, check your input or again!");
      setProcessing(false)
      throw(error)
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(submit)}
        className="mx-auto px-3 sm:max-w-250"
      >
        <div className="  sm:flex flex-row justify-between gap-5">
          <Input
            label="Title :"
            placeholder="Title"
            className=""
            {...register("title", { required: "Title is required" })}
            errorText={errors.title?.message}
          />
          {/* {errors.title && (
            <p className="text-red-400 text-xs pl-1 pt-1">
              {errors.title.message}
            </p>
          )} */}
          <Input
            label="Slug :"
            placeholder="Slug"
            className=""
            {...register("slug", {
              required: "Slug is required (use in URL)",
              pattern: {
                value: /^.{1,30}$/,
                message: "Slug must be max 30 character long",
              },
            })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
            errorText={errors.slug?.message}
          />
          {/* {errors.slug && (
            <p className="text-red-400 text-xs pl-1 pt-1">
              {errors.slug.message}
            </p>
          )} */}
        </div>

        <RTE 
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
          {...register("content", { required: "Content is required" })}
        /> 
  
        {errors.content && (
          <p className="text-red-600 text-xs pl-1 pt-1">
            {errors.content.message}
          </p>
        )}

        {post && (
          <div className="w-full ">
            <img
              src={service.getFileView(post.featuredImage)}
              alt={post.title}
              className="rounded-lg mt-8 h-50 w-full object-cover"
            />
          </div>
        )}
        <div className="  sm:flex sm:flex-row sm:justify-between sm:content-baseline gap-5">
          <Input
            //label="Featured Image :"
            label={` ${
              post ? "New Featured Image (optional)" : "Featured Image"
            }`}
            type="file"
            className="m:mb-10.5 "
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", {
              required: post ? false : "Image is required",
            })}
            errorText={errors.image?.message}
          />
          {/* {errors.image && (
            <p className="text-red-400 text-xs pl-1 pt-1">
              {errors.image.message}
            </p>
          )} */}
          <Select
            options={["Active", "Inactive"]}
            label="Status"
            className=" "
            {...register("status", {
              required: "Status selection is required",
            })}
            errorText={errors.status?.message}
          />
          {/* {errors.status && (
            <p className="text-red-400 text-xs pl-1 pt-1">
              {errors.status.message}
            </p>
          )} */}
          <div className="mt-4 w-full">
          <p className='inline-block mb-1 pl-1 text-sm text-red-900 dark:text-white'><i>Check before submitting</i></p>
          <Button
            type="submit"
            bgColor={post ? "bg-red-600" : undefined}
            className="w-full sm:my-auto"
          >

            {processing? ("Processing..."): (post ? "Update" : "Submit")}

          </Button>
          </div>
          
        </div>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        {success && (
          <p className=" text-green-400 text-center pt-1">
            Post successful, redirecting...
          </p>
        )}
      

      </form>





    </div>
  );
}

export default PostForm;
