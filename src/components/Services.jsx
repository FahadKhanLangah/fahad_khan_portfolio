import { FaLaptopCode } from "react-icons/fa";
import { SiCodementor } from "react-icons/si";
import { LiaCodeSolid } from "react-icons/lia";
const Services = () => {
  return (
    <div className="my-5 mx-2">
      <h1 className='mb-6 px-4 py-1 text-3xl text-white font-bold
      shadow-xl w-full bg-slate-500
      '>My Services</h1>
      <div className="flex justify-center sm:flex-row flex-col gap-10 sm:gap-6 items-center">
        <div className='hover:border-blue-600 cursor-pointer h-40 w-60 bg-slate-100 shadow-lg border-2 flex flex-col items-center rounded-xl justify-center'>
          <span className="text-6xl">
            <SiCodementor></SiCodementor>
          </span>
          <h1 className='font-bold text-lg sm:text-xl'>Frontend Development</h1>
        </div>
        <div className='hover:border-blue-600 cursor-pointer h-40 w-60 bg-slate-100 shadow-lg border-2 flex flex-col items-center rounded-xl justify-center'>
          <span className="text-6xl">
            <LiaCodeSolid></LiaCodeSolid>
          </span>
          <h1 className='font-bold text-lg sm:text-xl'>Backend Development</h1>
        </div>
        <div className='hover:border-blue-600 cursor-pointer h-40 w-60 bg-slate-100 shadow-lg border-2 flex-col flex items-center rounded-xl justify-center'>
          <span className="text-6xl">
            <FaLaptopCode></FaLaptopCode>
          </span>
          <h1 className='font-bold text-lg sm:text-xl'>Full Stack Development</h1>
        </div>
      </div>
    </div>
  )
}

export default Services