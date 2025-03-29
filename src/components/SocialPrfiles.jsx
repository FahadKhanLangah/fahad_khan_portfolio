
import { socialProfileData } from "../Data/social-profile";
const SocialPrfiles = () => {
  const openLink = (title, link) => {
    if (title === "E-mail") {
      window.location.href = `mailto:${link}`;
    } 
    if (!link.startsWith("http")) {
      link = `https://${link}`; 
    }
    window.open(link, "_blank");
  }
  return (
    <div className="mx-4 py-2">
      <h1 className="font-bold text-3xl my-5">Get Connected</h1>
      <hr className="sm:my-5 my-2" />
      <ul className='gap-4 flex flex-wrap items-center justify-center'>
        {socialProfileData.map((v, i) =>
            <div onClick={()=>openLink(v.title,v.profileLink)} key={i} title={`${v.title} Profile Link`} className='px-4 py-2 overflow-hidden relative cursor-pointer hover:scale-110 transition-all duration-500 shadow-lg flex flex-col items-center rounded-xl justify-center'>
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-300"></div>
              <span className={`text-4xl ${v.color ? v.color : 'text-black'}`}>
                {v.icon}
              </span>
              <h1 className='font-bold text-lg sm:text-xl'>{v.title}</h1>
            </div>
          
        )}
      </ul>
    </div>
  )
}

export default SocialPrfiles