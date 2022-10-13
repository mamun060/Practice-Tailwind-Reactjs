import React from 'react'

const Navbar = () => {
  return (
      <div className=' container flex justify-between p-6 mx-auto'>

            <div className='md:4'>
                <h2 className=' bg-white text-left text-black text-bold text-lg font-bold '>Logo</h2>
            </div>
            <div className=' md:8'>
                <div>
                    <ul className=' flex justify-end  float-right gap-5 '>
                        <li className=' text-xl text-black hover:text-red-500 cursor-pointer '>Home</li>
                        <li className=' text-xl text-black hover:text-red-500 cursor-pointer '>About Us</li>
                        <li className=' text-xl text-black hover:text-red-500 cursor-pointer '>Portfolio</li>
                        <li className=' text-xl text-black hover:text-red-500 cursor-pointer '>Blog</li>
                        <li className=' text-xl text-black hover:text-red-500 cursor-pointer '>Contact Us</li>
                    </ul>
                </div>
            </div>

        </div>
  )
}

export default Navbar