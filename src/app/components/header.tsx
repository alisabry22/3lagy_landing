import Link from "next/link";
import Image from "next/image";
export default function Header() {
    return (
       <header className="flex mx-auto text-white items-center justify-between p-2 w-full bg-primary ">
        <div className="flex mx-auto items-center hover:cursor-pointer gap-2">
            <Link rel="stylesheet" href="/" className="flex items-center gap-3" >

            <Image src="/app_icon.png" className="" width={60} height={60} alt="3lagy"></Image>
            <h2 className="font-bold text-2xl ">3lagy</h2>
            </Link>
          
       
        </div>
        
        <nav className="flex uppercase mx-auto font-medium gap-3 ">
            
            <Link href='/about' className=" hover:text-gray-300"> About us</Link>
            <Link href='/contact' className=" hover:text-gray-300">Contact</Link>
        </nav>
       </header>
    )
}