import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import fahdimg from '../assets/fahadwithoutbg.png';
const Hero = () => {
  const typedStrings = [
    "🚀 Transforming ideas into scalable, high-performance web & mobile apps."
    ,
    "💻 Full-Stack Developer | MERN, Next.js & Flutter | Delivering end-to-end solutions."
    ,
    "🎯 Helping businesses grow through modern, user-focused digital solutions."
    ,
    "🔒 Clean, scalable, and secure code that powers long-term business success."
    ,
    "🌍 Remote-ready developer with 3+ years experience building global products."
    ,
    "🤝 Your tech partner for web & mobile projects—on time, on budget, on point."
    ,
    "⚡ Turning complex problems into simple, elegant digital solutions."
    ,
    "📈 Building fast, scalable, and results-driven applications that fuel business growth."
  ];

  return (
    <section
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 px-4  dark:bg-gray-900 py-12 md:py-24"
      id="home"
    >
      {/* Text Content - Left Column */}
      <motion.div
        className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.0, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text mb-4">
            Fahad Khan
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
            Full Stack Website & App Solutions
          </h2>

          <div className="h-20 md:h-24 flex items-center justify-center md:justify-start mb-6">
            <p className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300">
              <ReactTyped
                strings={typedStrings}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1500}
                loop
                showCursor
                cursorChar="|"
              />
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="#work"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>


          <motion.a
            href="#contact"
            className="px-6 py-3 bg-white dark:bg-gray-900 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 font-semibold rounded-lg shadow-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Profile Image - Right Column */}
      <motion.div
        className="relative md:w-1/3 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br dark:from-blue-500 dark:to-cyan-400 rounded-full blur-xl opacity-75 animate-pulse"></div>

          <motion.div
            className="relative border-4 border-gray-500 dark:border-blue-800 rounded-full overflow-hidden shadow-2xl"
            initial={{ rotate: 0 }}
            animate={{ rotate: 0 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <img className="bg-gray-200 scale-110 dark:bg-gray-900 border-2 border-dashed rounded-xl max-w-64 max-h-64 md:w-80 md:h-80" src={fahdimg} alt="fahad-khan-portfolio" />
          </motion.div>

          {/* Flutter & Web Badges */}
          <motion.div
            className="absolute -bottom-4 -right-4 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Flutter Developer
          </motion.div>

          <motion.div
            className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Full Stack
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;