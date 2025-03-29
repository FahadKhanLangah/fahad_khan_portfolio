import { FaLaptopCode } from "react-icons/fa";
import { SiCodementor } from "react-icons/si";
import { LiaCodeSolid } from "react-icons/lia";
import backend from '../assets/back-end.jpg';
import fullstack from '../assets/full-stack.jpg';
import frontend from '../assets/front-end.jpg';
export const  skillData = [
    {
      bg: frontend,
      title: "Frontend Development",
      icon: <SiCodementor></SiCodementor>
    },
    {
      bg: backend,
      title: "Backend Development",
      icon: <LiaCodeSolid></LiaCodeSolid>
    },
    {
      bg: fullstack,
      title: "Full Stack Development",
      icon: <FaLaptopCode />
    },

  ]