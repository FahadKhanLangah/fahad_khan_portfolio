import { motion } from "framer-motion";
import { DiMongodb } from "react-icons/di";
import { FaNode, FaReact } from "react-icons/fa6";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDart, SiExpress, SiFirebase, SiFlutter, SiGit, SiGithub, SiMysql, SiTypescript } from "react-icons/si";

const Skills = () => {
  // Categorized skills data
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: "💻",
      skills: [
        { icon: <IoLogoHtml5 className="text-4xl" />, name: "HTML5", level: 95 },
        { icon: <IoLogoCss3 className="text-4xl" />, name: "CSS3", level: 90 },
        { icon: <IoLogoJavascript className="text-4xl" />, name: "JavaScript", level: 92 },
        { icon: <FaReact className="text-4xl" />, name: "React", level: 88 },
        { icon: <RiTailwindCssFill className="text-4xl" />, name: "Tailwind CSS", level: 85 },
        { icon: <SiTypescript className="text-4xl" />, name: "TypeScript", level: 80 },
      ]
    },
    {
      name: "Backend & Databases",
      icon: "⚙️",
      skills: [
        { icon: <FaNode className="text-4xl" />, name: "Node.js", level: 87 },
        { icon: <SiExpress className="text-4xl" />, name: "Express", level: 85 },
        { icon: <DiMongodb className="text-4xl" />, name: "MongoDB", level: 83 },
        { icon: <SiMysql className="text-4xl" />, name: "MySQL", level: 80 },
        { icon: <SiFirebase className="text-4xl" />, name: "Firebase", level: 70 },
      ]
    },
    {
      name: "Mobile Development",
      icon: "📱",
      skills: [
        { icon: <SiFlutter className="text-4xl" />, name: "Flutter", level: 70 },
        { icon: <SiDart className="text-4xl" />, name: "Dart", level: 88 },
      ]
    },
    {
      name: "Tools & DevOps",
      icon: "🔧",
      skills: [
        { icon: <SiGit className="text-4xl" />, name: "Git", level: 75 },
        { icon: <SiGithub className="text-4xl" />, name: "GitHub", level: 80 },
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4 }
    },
    hover: {
      y: -8,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text inline-block">
            Technical Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I specialize in modern web and mobile technologies that help build fast, scalable, and user-friendly applications.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              variants={categoryVariants}
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-5 flex items-center">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>

              <div className="p-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700 shadow-md"
                    variants={skillVariants}
                    whileHover="hover"
                  >
                    <div className="text-blue-600 dark:text-cyan-400 mb-3">
                      {skill.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-center">{skill.name}</h4>

                    {/* Skill level indicator */}
                    <div className="w-full mt-3">
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-300 mb-1">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 * skillIndex }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Full-Stack Capabilities</h3>
              <p className="opacity-90">
                With expertise across the entire development stack, I create complete solutions from UI/UX to backend and deployment.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 p-4 rounded-xl text-center min-w-[120px]">
                <div className="text-3xl font-bold">2+</div>
                <div>Years Experience</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl text-center min-w-[120px]">
                <div className="text-3xl font-bold">20+</div>
                <div>Projects</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl text-center min-w-[120px]">
                <div className="text-3xl font-bold">10+</div>
                <div>Happy Clients</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;