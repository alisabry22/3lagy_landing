"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import GoogleIcon from "../icons/google_icon";
import GoogleButton from "../buttons/google_button";
export default function Hero() {
    
    return (
        <div className="flex justify-between px-5 py-3 text-center items-center  mx-auto  bg-primary  ">
            <div className="block mt-10 ">

                    
            <motion.h1 animate={{x:15,}} className="text-4xl text-white text-center fond-bold">3lagy</motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10  mt-5">
                {/*  pharmacy section*/}
                <div className="text-center">
            <h2 className="uppercase font-bold antialiased text-white  text-xl">Pharmacy App</h2> 
            <GoogleButton link="https://play.google.com/store/apps/details?id=com.elagy.pharmacy"/>
            </div>

               {/*  customer section*/}
            <div className="text-center">
            <h2 className="uppercase font-bold antialiased text-white text-xl">Customer App</h2> 
            <GoogleButton link="https://play.google.com/store/apps/details?id=com.elagy.customer"/>
            </div>
            </div>
          
           

            </div>
            <Image src={'/3lagy_mockup.png'} className="mx-auto" alt="3lagy" width={200} height={200}></Image>
         
        </div>
    )
}