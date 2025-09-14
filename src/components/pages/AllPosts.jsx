import React, { useEffect, useState } from "react";
import { Container, PostCard, SectionTag } from "../index";
import service from "../../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  return (
    <div className="">
      <SectionTag tagname={"All Blog Posts"}/>
      <Container>
        <div className="sm:grid sm:grid-cols-2 sm:gap-7 mx-5 my-12 sm:my-10">
          {posts.map((post) => (
            <div key={post.$id} className="my-10 sm:my-5">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
