import React from 'react'
import { Link } from 'react-router-dom'
function Herosection(props) {
  return (
    <div className='flex justify-center mt-24'>
      <div className='w-[40%]'>
        <h1>welcome To</h1>
        <h1 className='text-3xl font-bold'>{props.heading.name}</h1>
        <p className='text-gray-400'>Find 2023'S Jobs Without Investment. Work From Home Jobs. Apply Now. $16-$60/Hr Remote Job. Latest Vacancies Near You. High Paying Jobs For Freshers And Experienced. Apply Now. Find Jobs. Work From Jobs Available. High Paying Jobs Apply. Work From Home. Job Openings. Subscribe for latest Jobs.</p>
        <Link to="/product">
          <button className='bg-blue-500 text-white px-2 py-2 mt-3'>Shop Now</button>
        </Link>
      </div>
      <div>
        <img className='h-[40vh] ' src='/images/hero.jpg' alt='' />
      </div>
    </div>
  )
}
export default Herosection