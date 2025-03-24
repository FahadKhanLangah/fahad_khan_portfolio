import ecommerceImg from '../assets/ecommerce.png'
import { IoMdArrowBack } from "react-icons/io";
const ProjectDetail = () => {
  return (
    <>
      <div className='h-10 bg-black flex justify-start items-center text-white'>
        <button onClick={() => window.history.back()} className='border ml-10 px-4 py-2 hover:bg-orange-600 transition hover:border-none'><IoMdArrowBack /></button>
      </div>
      <div className="p-3 m-5 sm:m-10 flex justify-center flex-col items-center">
        <h1 className="text-3xl text-center font-bold sm:mb-10 mb-5">Full Stack E-commerce Website</h1>
        <p className="">
          <b>Developed a complete e-commerce platform where users can:</b>
          <ul className="list-disc p-5">
            <li>Browse and search for products</li>
            <li>Create an account and manage their profile</li>
            <li>Add items to the cart and complete purchases</li>
            <li>Upload product images using Cloudinary for secure and scalable image hosting</li>
          </ul>
        </p>
          <img className='border max-w-80 my-20' src={ecommerceImg} alt="" />
      </div>
    </>
  )
}

export default ProjectDetail