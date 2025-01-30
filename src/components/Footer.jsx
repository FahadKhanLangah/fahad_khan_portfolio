import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div id="footer" className="mt-10">
      <hr className="my-5" />
      <div className="flex sm:flex-row flex-col px-10">
        <div className="w-full sm:w-[50%]">
          <h1 className="text-2xl"><b className="text-orange-500">F</b>ahad <b className="text-orange-500">K</b>han</h1>
          <p className="sm:w-[70%] w-full">I am MERN STACK DEVELOPER looking forward to work with you </p>
        </div>
        <div className="w-full flex gap-3 flex-col mt-5 sm:w-[50%]">
          <div className="flex gap-5">
            <span className="sm:text-4xl text-2xl">
              <MdEmail></MdEmail>
            </span>
            <h1 className="sm:text-3xl text-xl font-semibold underline">
              fahadkhanavoid@gmail.com
            </h1>
          </div>
          <div className="flex gap-5">
            <span className="sm:text-4xl text-2xl">
            <FaWhatsapp></FaWhatsapp>
            </span>
            <h1 className="sm:text-3xl text-xl font-semibold">
              +92-3053080586
            </h1>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex sm:flex-row flex-col justify-between py-5 px-2 sm:px-20">
        <div>
          &copy; 2024, All CopyRight Reserved by Fahad Khan
        </div>
        <div className="flex gap-3 text-sm justify-between mt-6 sm:gap-6">
          <button className="hover:underline">
            Terms of Services
          </button>
          <button className="hover:underline">
            Privacy Policy
          </button>
          <button className="hover:underline">
            Connect with me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer