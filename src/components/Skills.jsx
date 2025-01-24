import { IoLogoHtml5 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
const Skills = () => {
  return (
    <div className='my-2'>
      <h1 className='bg-green-700 mb-6 px-4 py-1 text-3xl text-white font-bold'>Technologies Known</h1>
      <div className='gap-4 flex flex-wrap items-center justify-center'>
        <div className='hover:border-slate-800 cursor-pointer h-32 w-32 sm:w-40 bg-slate-300 shadow-lg border-2 flex flex-col items-center rounded-xl justify-center'>
          <span className="text-6xl text-orange-600">
            <IoLogoHtml5></IoLogoHtml5>
          </span>
          <h1 className='font-bold text-lg sm:text-xl'>HTML & CSS</h1>
        </div>
        <div className='hover:border-yellow-700 cursor-pointer h-32 w-32 sm:w-40 bg-slate-300 flex-col border-2 shadow-lg flex items-center rounded-xl justify-center'>
          <span className="text-6xl text-yellow-500">
            <SiJavascript></SiJavascript>
          </span>
          <h1 className='font-bold text-lg sm:text-xl'>JavaScript</h1>
        </div>
        <div className='hover:border-blue-600 cursor-pointer h-32 w-32 sm:w-40 shadow-lg bg-slate-300 flex-col border-2 flex items-center rounded-xl justify-center'>
          <span className="text-6xl text-blue-500">
            <FaReact></FaReact>
          </span>
          <h1 className='font-bold text-lg sm:text-xl'>React Js</h1>
        </div>
        <div className='hover:border-green-900 cursor-pointer h-32 w-32 sm:w-40 shadow-lg bg-slate-300 flex-col border-2 flex items-center rounded-xl justify-center'>
          <span className="text-7xl text-green-600">
            <FaNode></FaNode>
          </span>
          <h1 className='font-bold text-lg sm:text-xl'>Node Js</h1>
        </div>
        <div className='hover:border-green-800 cursor-pointer h-32 w-32 sm:w-40 shadow-lg bg-slate-300 flex-col border-2 flex items-center rounded-xl justify-center'>
          <span className="text-6xl text-green-500">
            <DiMongodb></DiMongodb>
          </span>
          <h1 className='font-bold text-lg sm:text-xl'>MongoDB</h1>
        </div>
        <div className='hover:border-blue-600 cursor-pointer h-32 w-32 sm:w-40 shadow-lg bg-slate-300 flex-col border-2 flex items-center rounded-xl justify-center'>
          <span className="text-6xl text-blue-400">
            <SiMysql></SiMysql>
          </span>
          <h1 className='font-bold text-lg sm:text-xl'>MySQL</h1>
        </div>
        <div className='hover:border-slate-900 cursor-pointer h-32 w-32 sm:w-40 shadow-lg bg-slate-300 flex-col border-2 flex items-center rounded-xl justify-center'>
          <span className="text-6xl text-blue-500">
            <RiTailwindCssFill></RiTailwindCssFill>
          </span>
          <h1 className='font-bold text-lg sm:text-xl'>Tailwind CSS</h1>
        </div>
      </div>
      <hr className="my-2" />
      <div className="mx-4 py-2">
        <h1 className="font-bold text-3xl">Extra Knowldge</h1>
        <hr className="my-2" />
        <ul className='gap-4 flex flex-wrap items-center justify-center'>
          <div className='hover:border-slate-800 cursor-pointer h-32 w-32 sm:w-40 bg-slate-300 shadow-lg border-2 flex flex-col items-center rounded-xl justify-center'>
            <span className="text-6xl text-yellow-500 bg-transparent bg-gradient-to-r from-blue-600 to-yellow-500 text-transparent bg-clip-text">
              <FaPython></FaPython>
            </span>
            <h1 className='font-bold text-lg sm:text-xl'>Pyhton</h1>
          </div>
          <div className='hover:border-slate-800 cursor-pointer h-32 w-32 sm:w-40 bg-slate-300 shadow-lg border-2 flex flex-col items-center rounded-xl justify-center'>
            <span className="text-6xl text-red-600">
              <FaJava></FaJava>
            </span>
            <h1 className='font-bold text-lg sm:text-xl'>JAVA</h1>
          </div>
          <div className='hover:border-slate-800 cursor-pointer h-32 w-32 sm:w-40 bg-slate-300 shadow-lg border-2 flex flex-col items-center rounded-xl justify-center'>
            <span className="text-6xl text-black">
              <FaGithubSquare></FaGithubSquare>
            </span>
            <h1 className='font-bold text-lg sm:text-xl'>GITHUB</h1>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Skills