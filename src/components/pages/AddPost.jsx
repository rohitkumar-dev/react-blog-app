import React from "react";
import { Container, PostForm, SectionTag } from "../index";
import service from "../../appwrite/config";

function AddPost() {
  return (
    <div className="relative">
      <SectionTag tagname={"Add Post"} className="z-10"/>
      <div className="px-4 pt-5 pb-8 mb-5">
        <PostForm />
      </div>
    </div>
  );
}

export default AddPost;
