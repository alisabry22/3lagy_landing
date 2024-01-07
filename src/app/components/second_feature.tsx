"use client";
import { motion  } from "framer-motion";
import Image from "next/image";
export default function SecondFeature(){
    return (   

        

        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.5}}
        
        className="overflow-hidden bg-white py-24 ">
  <div className="mx-auto w-full  px-10 lg:px-10">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
    <Image src="/product_2.png"
       alt="Product screenshot"
        className="w-[32rem] max-w-none  bg-white rounded-xl shadow-xl ring-1
        ring-gray-400/10 sm:w-[32rem] md:-ml-4 lg:-ml-0  " width="2432" height="500"/>
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <h2 className="text-base font-semibold leading-7 text-[#E47A20]">Track Discounts</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get Top Discounts</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">show the most prominent discounts</p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <motion.div animate={{}}  className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg className="absolute left-1 top-1 h-5 w-5 text-[#E47A20]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                </svg>
                Each pharmacy has it &apos;s own discounts.
              </dt>
              <dd className="inline">with intuitive discounts</dd>
            </motion.div>
            <motion.div animate={{order:2}}  className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg className="absolute left-1 top-1 h-5 w-5 text-[#E47A20]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                </svg>
                Pick Products.
              </dt>
              <dd className="inline"> Add as much products as you want</dd>
            </motion.div>
            <motion.div animate={{order:3}} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute left-1 top-1 w-6 h-6 text-[#E47A20]">
  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
</svg>



               
                Pick Quantity.
              </dt>
              <dd className="inline"> you can choose how many products you want</dd>
            </motion.div>
          </dl>
        </div>
      </div>
  
    </div>
  </div>
</motion.div>
    );
}
 