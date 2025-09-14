import React from 'react'

function AuthorCard() {
    const authorData = [
        {
            name: "Minuises",
            profile: "https://images.pexels.com/photos/680239/pexels-photo-680239.jpeg",
            type: "World Traveller",
        },
        {
            name: "Louisana",
            profile: "https://images.pexels.com/photos/160959/girl-portrait-dark-eyes-smile-160959.jpeg",
            type: "Politician",
        },
        {
            name: "Nobiaseisa",
            profile: "https://images.pexels.com/photos/1066137/pexels-photo-1066137.jpeg",
            type: "Social Activist",
        },

    ]
  return (
    <div className=' sm:my-15'>
        { authorData && authorData.map((author,i)=>(
            <div key={i} className=' bg-red-300 mx-6 sm:mx-24 my-12 sm:my-15 pt-10 pb-5 rounded-lg'>
            <div className=' flex flex-col w-full items-center text-red-900'>
                <img src={author.profile} alt="profile" className='h-50 w-50  rounded-full object-cover outline-8 outline-offset-8 outline-white border-2 border-white'/>
                <h2 className='pt-5 text-xl font-medium '>{author.name}</h2>
                <p className='pt-1 text-sm font-medium '>{author.type}</p>
            </div>
            </div>
        )) }
    </div>
  )
}

export default AuthorCard
