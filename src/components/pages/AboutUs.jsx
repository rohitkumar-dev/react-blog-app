import React from 'react'
import {AboutArea, SectionTag} from '../index'

function AboutUs() {
  return (
    <div className='mb-10'>
        <SectionTag tagname={"About Us"}/>
        <AboutArea/>
        <AboutArea/>
        <AboutArea/>
    </div>
  )
}

export default AboutUs