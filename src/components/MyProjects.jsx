import todoImg from '../assets/todo.png'
const MyProjects = () => {
  return (
    <div id="work" className="my-5 mx-2">
      <h1 className='mb-6 px-4 py-1 text-3xl text-white font-bold
          shadow-xl w-full bg-slate-500
          '>My Projects</h1>
      <div className="flex justify-center sm:flex-row flex-col gap-10 sm:gap-6 items-center">
        <div className='relative group hover:border-blue-600 cursor-pointer h-40 w-60 bg-slate-100 shadow-lg border-2 flex flex-col items-center rounded-xl justify-center overflow-hidden'>
          <img className="w-full h-full object-cover rounded-2xl" alt="ecommerce image is missing" title="Ecommerce Project" src="https://static.vecteezy.com/system/resources/previews/006/547/178/non_2x/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg" />
          <h1 className='font-bold translate-y-4 opacity-0 group-hover:translate-y-0 duration-300 group-hover:opacity-100 text-lg sm:text-xl w-full text-center rounded-lg absolute bottom-0 group-hover:bg-blue-700 bg-opacity-50 text-white'>Ecommerce Website</h1>
        </div>
        <div className='relative group hover:border-blue-600 cursor-pointer h-40 w-60 bg-slate-100 shadow-lg border-2 flex flex-col items-center rounded-xl justify-center overflow-hidden'>
          <img className="w-full h-full object-cover rounded-2xl" alt="Hospital thunmbnail is missing" title="Hospital Management Project" src="https://img.freepik.com/free-vector/hospital-logo-green-blue_1043-66.jpg" />
          <h1 className='font-bold translate-y-4 opacity-0 group-hover:translate-y-0 duration-300 group-hover:opacity-100 text-lg sm:text-xl w-full text-center rounded-lg absolute bottom-0 group-hover:bg-blue-700 bg-opacity-50 text-white'>Hospital Management System</h1>
        </div>
        <div className='relative group hover:border-blue-600 cursor-pointer h-40 w-60 bg-slate-100 shadow-lg border-2 flex flex-col items-center rounded-xl justify-center overflow-hidden'>
          <img className="w-full h-full object-cover rounded-2xl" alt="Portfolio thunmbnail is missing" title="Portfolio websites" src="https://mir-s3-cdn-cf.behance.net/projects/404/49f28e189617081.Y3JvcCwxMDA2LDc4NywxOTYsMA.jpg" />
          <h1 className='font-bold translate-y-4 opacity-0 group-hover:translate-y-0 duration-300 group-hover:opacity-100 text-lg sm:text-xl w-full text-center rounded-lg absolute bottom-0 group-hover:bg-blue-700 bg-opacity-50 text-white'>Portfolio Website</h1>
        </div>
        <a href="https://todo-app-fahad-khan.vercel.app/">
          <div className='relative group hover:border-blue-600 cursor-pointer h-40 w-60 bg-slate-100 shadow-lg border-2 flex flex-col items-center rounded-xl justify-center overflow-hidden'>
            <img className="w-full h-full scale-150 object-cover rounded-2xl" alt="Portfolio thunmbnail is missing" title="Portfolio websites" src={todoImg} />
            <h1 className='font-bold translate-y-4 opacity-0 group-hover:translate-y-0 duration-300 group-hover:opacity-100 text-lg sm:text-xl w-full text-center rounded-lg absolute bottom-0 group-hover:bg-blue-700 bg-opacity-50 text-white'>To Do App</h1>
          </div></a>
      </div>
    </div>
  )
}

export default MyProjects