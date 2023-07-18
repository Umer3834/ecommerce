import React from 'react'

function Contact() {
  return (
    <div>
      <h1 className='text-center text-2xl font-bold py-4'>Contact Page</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.298889494337!2d74.33851387449113!3d31.515949874215924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190458d32a5d45%3A0x8cbd6ce309877ba4!2sI.T.%20Tower!5e0!3m2!1sen!2s!4v1688637388764!5m2!1sen!2s"
        width="100%"
        title='mymap'
        height="350"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <form className='flex flex-col w-[25%] mx-auto gap-[1.5rem] mt-10' action='https://formspree.io/f/xwkdkpvl' method='POST'>
        <input className='border-2 boder-gray-500 py-2 pl-2' type='text' name='username' placeholder='username' required autoComplete='off' />
        <input className='border-2 boder-gray-500 py-2 pl-2' type='email' name='Email' placeholder='Email' required autoComplete='off' />
        <textarea className='border-2 boder-gray-500 pl-2' name='Message' placeholder='Enter your message' autoComplete='off' required rows="5"></textarea>
        <input className='bg-blue-500 w-[100px] py-2  text-white font-semibold ' type='submit' value="Send" />
      </form>
    </div>
  )
}

export default Contact