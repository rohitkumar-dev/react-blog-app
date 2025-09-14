import React from 'react'
import logo4_img from '../assets/word.png'


export default function Logo({width='100px', height="", className=""}) {
  return (
    // <img src={logo4_img} width={width} height={height} alt="logo" className={`${className} rounded-lg object-cover`}/>
    <p className={`${className} rounded-lg text-3xl font-extrabold dark:text-white text-red-900`}>BLOG</p>
  )
}
