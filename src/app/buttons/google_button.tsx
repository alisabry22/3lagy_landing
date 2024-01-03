import Link from "next/link";
import GoogleIcon from "../icons/google_icon";

export default function GoogleButton({link}:any){
    return (
        <Link href={link} className="" target="_blank">
                    <button className="uppercase flex max-w-sm items-center hover:bg-slate-800  justify-center bg-black rounded-xl   
        text-center px-5  text-white antialiased font-medium ">
                     <GoogleIcon/>
                    <div className="text-left px-2">
                        <span>get it on</span>
                        <h2 className="font-bold  antialiased"> GOOGLE PLAY</h2>
                        </div>
                        </button>
        </Link>

    );
}