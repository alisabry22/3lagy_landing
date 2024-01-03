import Link from "next/link";
import Image from "next/image";
export default function Header() {
    return (
       <header className="flex mx-auto text-white justify-between p-5 w-full bg-primary ">
        <div className="flex mx-auto items-center">
            <Image src="/app_icon.png" width={50} height={50} alt="3lagy"></Image>
            <h2 className="">3lagy</h2>
       
        </div>
        
        <nav className="flex uppercase mx-auto gap-3">
            <Link href='/'>Home</Link>
            <Link href='/about'> About us</Link>
            <Link href='/contact'>Contact</Link>
        </nav>
       </header>
    )
}