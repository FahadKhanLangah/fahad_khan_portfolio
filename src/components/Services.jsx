import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaServer, FaPalette, FaCode } from "react-icons/fa";

const Services = () => {
  const services = [
  {
    icon: <FaLaptopCode className="text-4xl" />,
    title: "Full Stack Development",
    description:
      "Custom end-to-end web applications using modern frameworks like React, Next.js, and Node.js—scalable, secure, and tailored to your business.",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: <FaMobileAlt className="text-4xl" />,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps built with Flutter—delivering smooth, native-like performance on both iOS and Android.",
    color: "from-green-500 to-green-700",
  },
  {
    icon: <FaServer className="text-4xl" />,
    title: "Backend Engineering",
    description:
      "Powerful and reliable backend systems with REST APIs, optimized databases, and server management for seamless performance.",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: <FaPalette className="text-4xl" />,
    title: "UI/UX Design",
    description:
      "Intuitive, user-focused interfaces that blend functionality with engaging design—crafted to keep users coming back.",
    color: "from-pink-500 to-pink-700",
  },
  {
    icon: <FaCode className="text-4xl" />,
    title: "Frontend Development",
    description:
      "Fast, responsive, and accessible interfaces built with React and modern styling frameworks like Tailwind CSS.",
    color: "from-cyan-500 to-cyan-700",
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="services" className="py-16 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text inline-block">
            My Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I provide comprehensive solutions that cover the entire development lifecycle, from design to deployment.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <div className={`h-full bg-gradient-to-br ${service.color} rounded-2xl overflow-hidden shadow-xl transition-all duration-300`}>
                <div className="p-8 h-full flex flex-col">
                  <div className="mb-6 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-100 opacity-90 mb-6">{service.description}</p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {index === 0 && (
                        <>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">React</span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Node.js</span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Express</span>\
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Next.js</span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Nest.js</span>

                        </>
                      )}
                      {index === 1 && (
                        <>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Flutter</span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Dart</span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Firebase</span>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">MongoDB</span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">MySQL</span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">REST API</span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Nest.js</span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Express.js</span>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Figma</span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Adobe XD</span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">User Research</span>
                        </>
                      )}
                      {index === 4 && (
                        <>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">JavaScript</span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">TypeScript</span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Responsive</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-gray-800 to-black dark:from-gray-900 dark:to-black rounded-2xl p-8 text-white shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">My Development Process</h3>
              <p className="opacity-80">
                I follow agile approach to deliver high-quality solutions on time and within budget.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-2">
                  <span className="font-bold">1</span>
                </div>
                <div>Discovery</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-2">
                  <span className="font-bold">2</span>
                </div>
                <div>Design</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-2">
                  <span className="font-bold">3</span>
                </div>
                <div>Development</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-2">
                  <span className="font-bold">4</span>
                </div>
                <div>Deployment</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;