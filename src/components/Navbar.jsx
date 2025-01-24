

const Navbar = () => {
  return (
    <div className="bg-black sm:h-16 flex flex-col sm:flex-row text-white">
      <div className="flex sm:w-[60%] items-center sm:ml-20 w-full justify-between p-2 font-bold ">
        <h1 className="hover:text-orange-500 hover:scale-110 cursor-pointer">Home</h1>
        <h1 className="hover:text-orange-500 hover:scale-110 cursor-pointer">Skills</h1>
        <h1 className="hover:text-orange-500 hover:scale-110 cursor-pointer">Services</h1>
        <h1 className="hover:text-orange-500 hover:scale-110 cursor-pointer">Work</h1>
        <h1 className="hover:text-orange-500 hover:scale-110 cursor-pointer">Contact</h1>
      </div>
      <div className="sm:w-[40%] flex gap-4 justify-end mr-2 sm:mb-0 mb-2 sm:mr-6">
        <input className="p-2 sm:w-[60%] focus:outline-none hover:border-blue-500 w-[80%] ml-1 sm:h-12 sm:mt-2 rounded-lg font-semibold bg-transparent border-white border-2" type="text" placeholder="Search anything..." />
        <button className="p-2 w-[20%] shadow sm:h-12 sm:mt-2 bg-blue-700 hover:bg-orange-500 font-semibold rounded">Search</button>
      </div>
    </div>
  )
}

export default Navbar