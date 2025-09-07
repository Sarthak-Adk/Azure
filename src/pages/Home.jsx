import React from 'react'
import { ThreeDCardDemo } from '@/components/ui/3dCardDemo'
const Home = () => {
  return (
    <>
      <div className='postion-relative bg-white text-black  md:px-[140px]  transition-colors duration-500 mt-20'>
        <p>
          Welcome to AzureDev, your go-to platform for cutting-edge technology solutions. We specialize in web development, AI & ML, blockchain, IoT, and graphic design. Explore our portfolio to see how we can bring your ideas to life with innovation and expertise.
        </p>
      </div>
      {/* features Courses section */}
      <section className="bg-gray-100 pt-12">
        <div className='text-center mb-10 text-4xl font-bold'>
          <p>Features <span className='text-[#fd0d34]'>courses</span></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  px-2 md:px-[140px]">
          <ThreeDCardDemo />
        </div>
      </section>
   
    </>
  )
}

export default Home
