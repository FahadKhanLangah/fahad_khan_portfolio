import ecommerceImg from '../assets/ecommerce.png'
import hospng from '../assets/hospital.png'
import Footer from './Footer';
const ProjectDetail = () => {
  return (
    <>
      <div className='h-10 bg-black flex justify-center font-bold items-center text-white'>
        Project Details
      </div>
      <div className="p-3 m-5 sm:m-10 flex justify-center flex-col items-center">
        <h1 className="text-3xl font-bold sm:mb-10 mb-5">Full Stack E-commerce Website</h1>
        <p className="justify-start w-full">
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
      <div className="p-3 m-5 sm:m-10 flex justify-center flex-col items-center">
        <h1 className="text-3xl text-center font-bold sm:mb-10 mb-5">Full Stack Hospital Management</h1>
        <p className="w-full justify-start">
          <b>Built a Hospital Management System with role-based access:
            with their preferred , ensuring efficient scheduling and management
          </b>
          <ul className="list-disc p-5">
            <h2 className='text-xl font-bold my-2'>Admin Panel:</h2>
            <li>Admins can add doctors</li>
            <li>They can manage records</li>
            <li>view a dashboard displaying total patients, total doctors, and other statistics.</li>
            <li>Upload their images using Cloudinary for secure and scalable image hosting</li>
          </ul>
          <ul className="list-disc p-5">
            <h2 className='text-xl font-bold my-2'>Patient Features:</h2>
            <li>Patients can book appointments</li>
            <li>Search Doctors with their specaility</li>
            <li>Can Check doctors availabillity on available time slots</li>
            <li>Can create thier acount </li>
          </ul>
        </p>
        <img className='border max-w-80 my-20' src={hospng} alt="" />
      </div>
      <div className='w-full flex justify-end px-10'>
        <button className='bg-orange-600 text-white px-6 py-3 font-semibold rounded hover:bg-green-600 transition-colors' onClick={() => window.history.back()}>Back To Home</button>
      </div>
      <Footer></Footer>
    </>
  )
}

export default ProjectDetail