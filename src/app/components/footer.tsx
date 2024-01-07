import Image from "next/image"
import Link from "next/link"
export default function Footer(){
    return (
        <footer className="flex mx-auto pt-5 mt-5 text-white items-center justify-between p-2 w-full bg-primary ">
         <div className="flex mx-auto items-center gap-2">
             <Image src="/app_icon.png" className="" width={60} height={60} alt="3lagy"></Image>
             <h2 className="font-bold text-2xl ">3lagy</h2>
        
         </div>
         
         <nav className="flex uppercase mx-auto font-medium gap-3 ">
             <Link href='/' className=" hover:text-gray-300">Home</Link>
             <Link href='/about' className=" hover:text-gray-300"> About us</Link>
             <Link href='/contact' className=" hover:text-gray-300">Contact</Link>
         </nav>
        </footer>
     )
}