import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
      <h1 className=' flex flex-row justify-content-center text-emerald-600'>
        Welcome!!!!
      </h1>
      <p className='flex flex-row justify-content-center text-emerald-400'>
        PLease click below to navigate to contest page
      </p>
      <h5>
        <Link to="/section" className='flex flex-row justify-content-center font-semibold text-pink-500 no-underline hover:text-pink-400'>Contest</Link>
      </h5>
    </div>
  )
}

export default Home
