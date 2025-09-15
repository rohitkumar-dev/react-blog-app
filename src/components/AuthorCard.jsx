import React from 'react'

function AuthorCard() {
    const authorData = [
        {
            name: "Nobiaseisa",
            profile: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "World Traveller",
        },
         {
            name: "Louisana",
            profile: "https://images.unsplash.com/photo-1755157161839-0b0fbd5fef74?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "Nature Lover",
        },
        {
            name: "Georgesilia",
            profile: "https://images.unsplash.com/photo-1543123820-ac4a5f77da38?q=80&w=836&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "Mountain Explorer",
        },
        

    ]
  return (
    <div className=' sm:my-15'>
        { authorData && authorData.map((author,i)=>(
            <div key={i} className=' bg-red-300 mx-6 sm:mx-24 my-12 sm:my-15 pt-10 pb-5 rounded-lg shadow-lg'>
            <div className=' flex flex-col w-full items-center text-red-900'>
                <img src={author.profile} alt="profile" className='h-50 w-50  rounded-full object-cover outline-6 outline-offset-6 outline-red-900 border-2 border-red-600'/>
                <h2 className='pt-5 text-xl font-medium '>{author.name}</h2>
                <p className='pt-1 text-sm font-medium '>{author.type}</p>
            </div>
            </div>
        )) }
    </div>
  )
}

export default AuthorCard
