import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import todoImg from '../assets/aincore.png'
import guldasta from '../assets/guldasta.png'
import orbit from '../assets/orbit.jpg'
const ProjectCard = ({ title, description, image, tags, liveLink, githubLink }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <p className="text-white text-sm">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-blue-600/80 text-white px-2 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>

        <div className="flex justify-between mt-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FaGithub /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const MyProjects = () => {
  const projects = [
    {
      title: "Aincore Crypto Site",
      description: "Developed a crypto-based website with responsive UI and real-time data features.\nBuilt custom backend logic and database schema for secure data handling.",
      image: todoImg,
      tags: ["Next Js", "MySql", "Custom classes"],
      liveLink: "https://aincore.org/",
      githubLink: "#"
    },
    {
      title: "Orbit Chat & Ride-Hailing App",
      description: " Built APIs for chat, ride management, driver tracking, and authentication.\nIntegrated maps, geolocation, and payment methods (M-Pesa, Stripe).\nDeveloped admin dashboard APIs with role-based permissions.App available on Play Store.",
      image: orbit,
      tags: ["Flutter", "Nest Js", "Mongodb", "Payment Gateway M-Pesa", "Google Maps Services"],
      liveLink: "https://orbit.ke/",
      githubLink: "#"
    },
    {
      title: "GulDasta – Customizable Flower Bouquet Platform 🌸",
      description: "A Next.js and TypeScript-based platform for creating and ordering personalized flower bouquets with real-time previews. Features a user-friendly interface, and an admin dashboard for managing orders and inventory.",
      image: guldasta,
      tags: ["Next js", "TypeScript", "Node js", "Express JS", "Mongodb", "Tailwind CSS"],
      liveLink: "https://guldasta.vercel.app/",
      githubLink: "#"
    },
    {
      title: "Ecommerce Website for Shoping",
      description: "Full-featured online store with cart, payment processing, and admin dashboard",
      image: "https://static.vecteezy.com/system/resources/previews/006/547/178/non_2x/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg",
      tags: ["React", "Express", "MongoDB", "Stripe"],
      liveLink: "/project-detail/ecommerce",
      githubLink: "#"
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive solution for patient records, appointments, and inventory management",
      image: "https://img.freepik.com/free-vector/hospital-logo-green-blue_1043-66.jpg",
      tags: ["React", "Express", "MongoDB", "JWT Auth"],
      liveLink: "/project-detail/hospital",
      githubLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern developer portfolio with project showcase and contact form",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/49f28e189617081.Y3JvcCwxMDA2LDc4NywxOTYsMA.jpg",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "#home",
      githubLink: "#"
    },
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
    }
  };

  return (
    <section id="work" className="py-16 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text inline-block">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills and expertise.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            All Projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default MyProjects;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  liveLink: PropTypes.string,
  githubLink: PropTypes.string
};