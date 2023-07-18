import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { TbTruckDelivery, TbReplace } from "react-icons/tb"
import { MdSecurity } from "react-icons/md"
function Singlrproduct() {
  const [state, setstate] = useState({})
  const [loding, setloading] = useState(true)
  const [catchError, setCatcError] = useState(null)
  const { id } = useParams()
  // console.log(id);
  const getsingleproduct = async () => {
    try {
      const res = await axios(`https://api.pujakaitem.com/api/products/${id}`)
      // if(!res.ok) throw Error (`did not get api `)
      const myproduct = await res.data
      setstate(myproduct)
      setloading(false)
      setCatcError(null)
    } catch (err) {
      setCatcError(err.message)
    }
    finally {
      setloading(false)
    }
  }
  console.log(state);
  useEffect(() => {
    getsingleproduct()

  }, [])
  return (
    <div>
      <div className='bg-gray-100 py-4 pl-3'>
        <h1 className='text-xl'><Link to="/">Home</Link>/{state.name}</h1>
      </div>
      <div className='flex'>
        <div className='w-[50%]'>
          <div className=''>
            {loding && <p>...loading</p>}
            {catchError && <p>please relod pagge {catchError}</p>}
            {
              !loding && !catchError &&
              state.image.map((Img) => {
                return (
                  <img className='h-[15vh] w-[30%]' src={Img.url} alt='' />
                )
              })
            }
          </div>
          {/* <img src={state.image[0].url} alt=''/> */}
        </div>
        <div className='w-[50%]'>
          <h1 className='text-3xl'>{state.name}</h1>
          <p className='py-3'>{state.stars}</p>
          <p>{state.price}</p>
          <p className='text-sm w-[70%] text-gray-500 py-3'>{state.description}</p>
          <div className='flex border-b-2 border-black justify-between w-[70%] mt-3'>
            <div className='flex flex-col items-center'>
              <TbTruckDelivery className='text-2xl' />
              <p className='text-sm' >Free Delivery</p>
            </div>
            <div className='flex flex-col items-center'>
              <TbReplace className='text-2xl' />
              <p className='text-sm'>30 Days Replacement</p>
            </div>
            <div className='flex flex-col items-center'>
              <TbTruckDelivery className='text-2xl' />
              <p className='text-sm'>Umer Delivered </p>
            </div>
            <div className='flex flex-col items-center'>
              <MdSecurity className='text-2xl' />
              <p className='text-sm'>2 Years Warrety</p>
            </div>
          </div>
          <p className='text-sm mt-5'><span className='text-gray-500'>Awailable In :</span> {state.stock > 0 ? "In stock" : "not in stock"}</p>
          <p><span className='text-gray-500 '>ID:</span> {state.id}</p>
          <p><span className='text-gray-500 py-5'>Brand :</span> {state.company}</p>
        </div>
      </div>
    </div>
  )
}

export default Singlrproduct