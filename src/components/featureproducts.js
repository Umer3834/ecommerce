import React, { useContext } from 'react'
import { Appcontax } from '../contax/productcontac'
import { Link } from 'react-router-dom'
function Featureproducts() {
    const mycontax = useContext(Appcontax)
    if (mycontax.isloading) {
        return <div className='h-[100vh] w-[100%] bg-red-500'>is loading</div>
    }
    console.log(mycontax, "umer");
    return (
        <div className='bg-[#F7F8FB] py-10 mt-20'>
            <div className='mx-auto w-[70%] '>
                <p className='text-purple-800 font-semibold'>Check now</p>
                <h1 className='font-bold text-2xl'>Our Feature Services</h1>
                <div className='flex justify-between'>
                    {mycontax.featureproducts.map((ele) => {
                        return (
                            <Link to={`/singleproduct/${ele.id}`}>
                                <div>
                                    <p className='absolute ml-4 mt-3 rounded-full py-1 px-3 bg-white float-left'>{ele.category}</p>
                                    <img className='h-[190px]' src={ele.image} alt='' />
                                    <div className='flex justify-between'>
                                        <p>{ele.name}</p>
                                        <p>{ele.price}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}
export default Featureproducts