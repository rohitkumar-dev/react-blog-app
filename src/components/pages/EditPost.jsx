import React, { useEffect, useState } from 'react'
import {Container, PostForm, SectionTag} from '../index'
import service from '../../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug,navigate])

  return post ? (
    // <div>
    //     <PostForm post={post}/>
    // </div>

    <div className="relative">
      <SectionTag tagname={"Edit Post"} className="z-10"/>
      <div className="px-4 pt-5 pb-8 mb-5">
        <PostForm post={post}/>
      </div>
    </div>
  ) : null
}

export default EditPost

