import React, { useEffect, useMemo, useState } from "react";
import service from "../../appwrite/config";
import { Container, PostCard, ImageSlider, StartBtnArea, ImageGallery, ContactForm, AuthorCard, SectionTag, AboutArea } from "../index";


function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // if (posts.length === 0) {
  //   return (
  //     <div className="w-full py-8 mt-4 text-center ">
  //       <Container>
  //         <div className="flex flex-wrap">
  //           <div className="p-2 w-full">
  //             <h1 className="text-2xl font-bold hover:text-gray-500">
  //               Login to read posts
  //             </h1>
  //           </div>
  //         </div>
  //       </Container>
  //     </div>
  //   );
  // }
  return (
    <div className="w-full ">

      <ImageSlider/>
      <StartBtnArea/>

      <SectionTag tagname = {"Featured Blogs"}/>
      
      <Container>
        <div className="sm:grid sm:grid-cols-2 sm:gap-8 mx-2 sm:mx-20 my-12 sm:my-10">
          {posts.map((post, i) =>
            i <= 5 ? (
              <div key={post.$id} className={`${i>=4? "hidden sm:inline-block" : null} my-10 sm:my-5`}>
                <PostCard {...post} />
              </div>
            ) : null
          )}
        </div>
      </Container>

      <SectionTag tagname = {"Featured Authors"}/>
      <AuthorCard/>

      <SectionTag tagname = {"Blog Visuals"}/>
      <ImageGallery/>

      <SectionTag tagname = {"Contact Us"} />
      <ContactForm/>

      <SectionTag tagname = {"About Us"}/>
      <AboutArea/>
      <AboutArea/>
      
    </div>
  );
}

export default Home;
