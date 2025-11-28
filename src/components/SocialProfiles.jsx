import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin,
  FaFacebook, FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';

const SocialProfiles = () => {
  const socialProfileData = [
    { icon: <FaGithub className="text-4xl" />, title: "GitHub", color: "from-gray-800 to-black", link: "https://github.com/FahadKhanLangah" },
    { icon: <FaLinkedin className="text-4xl" />, title: "LinkedIn", color: "from-blue-700 to-blue-900", link: "www.linkedin.com/in/fahad-khan-96b4a32a7" },
    // { icon: <FaInstagram className="text-4xl" />, title: "Instagram", color: "from-purple-600 via-pink-600 to-red-500", link: '#home' },
    { icon: <FaEnvelope className="text-4xl" />, title: "Email", color: "from-red-500 to-red-700", link: "mailto:fahadkhanavoid@gmail.com" },
    { icon: <FaFacebook className="text-4xl" />, title: "Facebook", color: "from-blue-600 to-blue-800", link: "https://www.facebook.com/share/1BjvASMPnR/" },
    { icon: <FaWhatsapp className="text-4xl" />, title: "WhatsApp", color: "from-green-500 to-green-700", link: "https://wa.me/+923187357005" },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  const openLink = (link, title) => {
    if (title === "Email") {
      window.location.href = link;
    } else if (title === "LinkedIn" && !link.startsWith("http")) {
      window.open("https://" + link, "_blank");
    }

    else {
      window.open(link, "_blank");
    }
  };

  return (
    <section id="contact" className="py-8 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-gray-100 w-full dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text inline-block">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let&apos;s collaborate! Send me a message directly or Reach out through any of these platforms.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-3 ">
              <h3 className="text-2xl font-bold mb-2">Let&apos;s Work Together</h3>
              <p className=" text-white">
                Have a project in mind? I&apos;m available for remote work and full-time opportunities. Feel free to reach out!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm text-gray-200 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder='Your Name'
                className="bg-white/10 dark:bg-white/5  
                 rounded-lg px-3 py-2 text-sm outline-none
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
                 transition-all"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm text-gray-200 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder='Your Email'
                className="bg-white/10 dark:bg-white/5 
                 rounded-lg px-3 py-2 text-sm outline-none
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
                 transition-all"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1 my-2">
              <label className="font-semibold text-sm text-gray-200 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                placeholder='Your Message'
                className="bg-white/10 dark:bg-white/5
                 rounded-lg px-3 py-2 text-sm outline-none resize-none
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
                 transition-all"
              ></textarea>

            </div>
            <div className='flex w-full justify-end'>
              <button
                className="px-6 py-3 max-w-52 dark:bg-gray-900 bg-white dark:text-white text-blue-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center"
              >
                <FaEnvelope className="mr-2" />
                Send Message
              </button>
            </div>
          </div>


        </motion.div>

        <motion.div
          className="grid grid-cols-3 mt-10 text-sm lg:mx-24 font-mono items-center sm:grid-cols-4 md:grid-cols-5 sm:gap-8 md:gap-12 lg:grid-cols-5 lg:gap-16 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {socialProfileData.map((social, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              onClick={() => openLink(social.link, social.title)}
              className="cursor-pointer"
            >
              <div className={`h-full bg-gradient-to-br ${social.color} rounded-xl overflow-hidden shadow-lg transition-all duration-300`}>
                <div className="py-3 flex flex-col items-center justify-center">
                  <div className="text-white mb-1">
                    {social.icon}
                  </div>
                  <h3 className="text-white font-bold text-center">{social.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProfiles;