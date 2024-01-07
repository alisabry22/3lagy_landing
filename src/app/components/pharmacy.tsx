import Image from "next/image";
export default function PharmacyUi(){
    return (
        <div className="bg-[#e6f8fa] mx-auto   p-5 rounded-2xl shadow-xl ">
           
           <div className="grid grid-cols-1 md:grid-cols-2  max-auto ">
                <div className="flex flex-col text-center p-5 justify-between items-center mb-3 ">
                <h3 className="text-primary font-bold antialiased text-3xl pb-2">Start your journey with us</h3>
                <p className="text-gray-600 mb-4">Join Your Pharmacy Now</p>
                <button className="bg-[#E47A20] text-white px-5 py-2 rounded-xl mb-4 hover:bg-[#df9656] font-medium">Book Now</button>
                </div>
                <Image src="/pharmacy.png" className="mx-auto   " width={300} height={250}  alt="pharmacy"></Image>
           </div>
        </div>
    )
}