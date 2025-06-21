import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaServer } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text inline-block">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I`m a passionate Full Stack Developer with 5+ years of experience creating scalable web applications and mobile solutions. My expertise spans the entire development lifecycle, from concept to deployment.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I specialize in JavaScript ecosystems including React, Node.js, and Flutter, delivering high-performance solutions that solve real business problems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-blue-500 text-2xl mb-3">
                  <FaCode />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white">Frontend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">React, Vue, Tailwind CSS</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-blue-500 text-2xl mb-3">
                  <FaServer />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white">Backend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Node.js, Express, MongoDB</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-blue-500 text-2xl mb-3">
                  <FaMobile />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white">Mobile</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Flutter, React Native</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl">
                {/* Profile image placeholder */}
                <div className="bg-gray-200 border-2 border-dashed w-full h-full flex items-center justify-center text-gray-400">
                  Profile Image
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gray-800 text-white px-6 py-2 rounded-full font-bold shadow-lg">
                5+ Years Experience
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;