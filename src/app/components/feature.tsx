
"use client";
import { motion,useScroll  } from "framer-motion";
import Image from "next/image";
export default function Feature(){
  const {scrollYProgress} = useScroll();
    return (
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.5}}
        
        className="overflow-hidden bg-white py-24 ">
  <div className="mx-auto w-full  px-10 lg:px-10">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <h2 className="text-base font-semibold leading-7 text-[#E47A20]">Order Faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">little Clicks</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">Get your orders in as little as 10 minutes</p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <motion.div style={{x:scrollYProgress}} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg className="absolute left-1 top-1 h-5 w-5 text-[#E47A20]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                </svg>
                Upload your prescription.
              </dt>
              <dd className="inline"> pick your prescriptions as needed to get your medicine really quick</dd>
            </motion.div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg className="absolute left-1 top-1 h-5 w-5 text-[#E47A20]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                </svg>
                Choose Pharmacies.
              </dt>
              <dd className="inline"> pick pharmacies whether near to you or you might know.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg className="absolute left-1 top-1 h-5 w-5 text-[#E47A20]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                </svg>
                Wait For Offers.
              </dt>
              <dd className="inline">Accept or Reject pharmacy &apos;s offers</dd>
            </div>
          </dl>
        </div>
      </div>
      <Image src="/product1.png"
       alt="Product screenshot"
        className="w-[48rem] max-w-none  bg-white rounded-xl shadow-xl ring-1
         ring-gray-400/10 sm:w-[32rem] md:-ml-4 lg:-ml-0 " width="3000" height="1442"/>
    </div>
  </div>
</motion.div>
    );
}