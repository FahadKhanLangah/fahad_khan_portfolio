import { ReactTyped } from "react-typed";
import fahadPic from '../assets/Fahad.jpg'
import { useRef, useState } from "react";
const Hero = () => {
  const imgRef = useRef(null);
  const downloadImage = () => {
    const imgSrc = imgRef.current.src;
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = "fahad_khan_portfolio_img.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex sm:m-4 sm:flex-row flex-col mb-5'>
      <div className='sm:w-[50%] w-full flex justify-center items-center'>
        <div className='shadow-xl rounded-xl p-4 w-full text-center bg-slate-100'>
          <h1 className='cursor-pointer font-bold text-3xl sm:text-5xl bg-transparent bg-gradient-to-r from-blue-700 to-green-700 uppercase tracking-tight text-transparent bg-clip-text'>I am Fahad Khan</h1>
          <p className='sm:pl-2 pt-2 text-xl sm:pt-6 font-semibold'>
            <ReactTyped strings={["MERN Stack developer based in <strong>Bahawalpur</strong>", "Available for work", "Build fully Responsive and attractive websites"]} typeSpeed={80} backDelay={3000} loop={true}></ReactTyped>
          </p>
        </div>
      </div>
      <div className='sm:w-[50%] w-full flex justify-center items-center'>
        <div className=''>
          <img onClick={() => setIsOpen(true)} ref={imgRef} className='cursor-pointer hover:scale-125 border-2 hover:border-blue-500 duration-500 h-60 w-60 shadow-2xl rounded-full mt-10' src={fahadPic} alt="Fahad Khan Profile pic" />

          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="bg-black text-white px-5 py-3 absolute top-80 right-3 hover:bg-red-600 sm:right-[22rem] font-semibold sm:top-2">Close</button>
              <img src={fahadPic} alt="Fullscreen" className="max-w-full max-h-full" />
            </div>
          )}

          <div className='mt-10'>
            <button onClick={downloadImage} className={`bg-blue-600 rounded-sm font-semibold px-4 py-2 text-white hover:bg-orange-500 ml-10`}>Download Image</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero