import { skillData } from "../Data/skill-data"

const Services = () => {
  return (
    <div id="services" className="my-5 mx-2">
      <h1 className='mb-6 px-4 py-1 text-3xl text-white font-bold
      shadow-xl w-full bg-slate-500
      '>My Expertise</h1>
      <div className="flex justify-center sm:flex-row text-orange-600 flex-col gap-10 sm:gap-6 items-center">
        {skillData.map((v, i) =>
          <div key={i}
            style={{ backgroundImage: `url(${v.bg})` }}
            className="transition-all relative hover:scale-110 bg-cover bg-center cursor-pointer h-40 w-60 shadow-lg border-2 flex flex-col items-center rounded-xl justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-300"></div>
            <span className="relative text-6xl text-white">
              {v.icon}
            </span>
            <h1 className="font-bold text-lg sm:text-xl bg-blue-700 text-white absolute w-full px-1 bottom-1 z-10">
              {v.title}
            </h1>
          </div>

        )}
      </div>
    </div>
  )
}

export default Services

/*
<div
          style={{ backgroundImage: `url(${fullstack})` }}
          className="transition-all relative hover:scale-110 bg-cover bg-center cursor-pointer h-40 w-60 shadow-lg border-2 flex flex-col items-center rounded-xl justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300"></div>
          <span className="relative text-6xl text-white">
            <FaLaptopCode />
          </span>
          <h1 className="font-bold text-lg sm:text-xl bg-blue-700 text-white absolute w-full px-1 bottom-1 z-10">
            Full Stack Development
          </h1>
        </div>

*/