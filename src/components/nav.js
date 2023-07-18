import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='flex justify-between pr-10 py-5'>
      <img className='w-[150px] ' src='/images/logo.png' alt='' />
      <ul className='flex w-[30%] justify-between font-semibold '>
        <li className='cursor-pointer'><Link to="/">Home</Link></li>
        <li className='cursor-pointer'><Link to="/about">About</Link></li>
        <li className='cursor-pointer'><Link to="/contact">Contact</Link></li>
        <li className='cursor-pointer'><Link to="/product">Products</Link></li>
        <li className='cursor-pointer'>Home</li>
        <Link to="/cart">
          <div className='flex cursor-pointer'>
            <AiOutlineShoppingCart className='font-bold text-xl' />
            <span className='-mt-3'>0</span>
          </div>
        </Link>
      </ul>
    </div>
  )
}

export default Nav