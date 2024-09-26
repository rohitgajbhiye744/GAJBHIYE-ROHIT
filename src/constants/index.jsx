import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";

import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoFigma } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#footer" },
];

export const HERO = {
  name: "ROHIT GAJBHIYE",
  greet: "Hello there! 👋🏻",
  description:
    "I'm a skilled UI/UX designer and web developer with a passion for blending aesthetics and functionality. I focus on bringing creative ideas to life through engaging and effective web experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/rohitgajbhiye744/GAJBHIYE-ROHIT",
  },
  {
    id: 2,
    name: "IPL Team Website",
    description:
      "I redesign UI and UX design of an IPL Team Website made using Figma Showcasing my skills and strong command on figma. ",
    image: projectImage2,
    githubLink: "https://www.figma.com/proto/DxBg1f1uZMTqUCjDFuE6QE/Untitled?node-id=128-230&starting-point-node-id=128%3A230",
  },
];

export const BIO = [
  "Rohit studied computer engineering at PDEA COEM, where he developed a solid foundation in both frontend development and UI/UX design. His academic background equipped him with a deep understanding of core technologies such as HTML, CSS, and JavaScript. Over the years, he has further refined his skills through practical experience and internships, applying these technologies to create engaging web solutions.",
  "With a strong proficiency in modern frameworks like React and Vue.js, Rohit excels in crafting dynamic and interactive web experiences. His expertise extends beyond just coding; he is adept at integrating design principles to ensure that the user interface is not only functional but also visually appealing. This combination of technical skill and design sensibility allows him to deliver high-quality results that resonate with users.",
  "Driven by a passion for innovation and a commitment to excellence, Rohit is dedicated to pushing the boundaries of what’s possible in web development. Whether working on individual projects or collaborating with others, he consistently strives to transform creative ideas into impactful and memorable digital experiences. His versatile skill set and proactive approach make him a valuable asset in the world of frontend development.",
];

export const SKILLS = [
  {
    icon: <FaPython className="text-4xl text-blue-500 lg:text-5xl" />, 
    name: "Python",
    experience: "2+ years",
  },
  {
    icon: <TbBrandCpp className="text-4xl text-blue-500 lg:text-5xl" />, 
    name: "C++",
    experience: "1+ year",
  },
  {
    icon: <FaJava className="text-4xl text-red-600 lg:text-5xl" />, 
    name: "Java",
    experience: "0.5+ year",
  },
  {
    icon: <FaHtml5 className="text-4xl text-orange-600 lg:text-5xl" />, 
    name: "HTML",
    experience: "1.5+ years",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-600 lg:text-5xl" />, 
    name: "CSS",
    experience: "1.5+ years",
  },
  {
    icon: <FaBootstrap className="text-4xl text-purple-600 lg:text-5xl" />, 
    name: "Bootstrap",
    experience: "1.5+ years",
  },
  {
    icon: <IoLogoJavascript className="text-4xl text-yellow-500 lg:text-5xl" />, 
    name: "JavaScript",
    experience: "0.5+ year",
  },
  {
    icon: <IoLogoFigma className="text-4xl text-purple-600 lg:text-5xl" />, 
    name: "Figma",
    experience: "0.5+ year",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-blue-500 lg:text-5xl" />, 
    name: "React",
    experience: "0.5+ year",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-blue-500 lg:text-5xl" />, 
    name: "TailwindCSS",
    experience: "0.5+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Design Lead",
    company: "Google Developer Groups On Campus PDEA COEM",
    duration: "September 2024 - Present",
    description:
      "As Design Lead, I guide the creation of engaging, user-centric interfaces for our projects. I work closely with developers, product managers, and other stakeholders to ensure our designs are visually compelling and function seamlessly. My role involves integrating feedback, refining design concepts, and maintaining a high standard of design excellence across all our digital and event-related materials.",
  },
  {
    title: "Front-end Web Development Intern",
    company: "CSRBOX In collaboration with IBM SkillsBuild",
    duration: "June 2024 - August 2024",
    description:
      "During my internship with CSRBOX through the IBM SkillsBuild Summer Internship Program, I specialized in front-end web development. I worked with HTML, CSS, and JavaScript to build and enhance user interfaces for various web applications. My role involved collaborating with the development team to implement features, troubleshoot issues, and ensure a seamless user experience, contributing to the overall success of our projects. ",
  },
  {
    title: "UI/UX Design Intern",
    company: "ShadowFox",
    duration: "June 2024 - July 2024",
    description:
      "As a UI/UX Design Intern at ShadowFox, I contributed to various design projects, focusing on enhancing user interfaces and experiences. I collaborated with the design team to create wireframes, prototypes, and visual designs, ensuring alignment with user needs and project goals. My role involved integrating feedback, refining design concepts, and applying UI/UX principles to deliver intuitive and visually appealing designs for web and mobile applications. ",
  },
  {
    title: "Web Developer Intern",
    company: "CodSoft",
    duration: "June 2024 - July 2024",
    description:
      "As a Web Developer Intern at CodSoft, I assisted in the development and maintenance of web applications. I worked closely with the development team to implement features, fix bugs, and enhance website functionality using technologies such as HTML, CSS, and JavaScript. My role involved contributing to the coding process, performing testing, and ensuring that web applications were responsive and met quality standards.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "PDEA's College of Engineering, Pune, Maharashtra",
    duration: "2022 - 2026",
  },
  {
    degree: "11th to HSC",
    institution: "G.H.Raisoni Vidyaniketan, Nagpur, Maharashtra",
    duration: "2019 - 2021",
  },
  {
    degree: "8th to SSC",
    institution: "Sai Public School, Kashipur, Uttarakhand",
    duration: "2016 - 2019",
  },
  {
    degree: "6th to 7th",
    institution: "Samar Study Hall, Kashipur, Uttarakhand",
    duration: "2014 - 2016",
  },
  {
    degree: "3rd to 5th",
    institution: "The Avenue Public School, Meerut, Uttar Pradesh",
    duration: "2011 - 2014",
  },
  {
    degree: "Nursery to 2nd",
    institution: "Naini Convent School, Kashipur, Uttarakhand",
    duration: "2007 - 2011",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://discord.com/users/784790260265123851",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/rohitgajbhiye744/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/rohitgajbhiye74",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/rohitgajbhiye744",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/rohit-gajbhiye-60306b251/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
