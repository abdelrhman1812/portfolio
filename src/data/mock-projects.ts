/* technologies */

import bootstrap from "../../public/assets/Images/skills/bootstrap.png";
import CSS from "../../public/assets/Images/skills/css.1b9dcc2e.svg";
import Express from "../../public/assets/Images/skills/express-original.svg";
import HTML from "../../public/assets/Images/skills/html5.a7362949.svg";
import JS from "../../public/assets/Images/skills/javascript.455da02c.svg";
import JQ from "../../public/assets/Images/skills/jquery.svg";
import mongodb from "../../public/assets/Images/skills/Mongo.svg";
import Next from "../../public/assets/Images/skills/nextjs.svg";
import Nodejs from "../../public/assets/Images/skills/nodejs.svg";
import react from "../../public/assets/Images/skills/react.svg";
import SASS from "../../public/assets/Images/skills/sass.svg";
import Sequelize from "../../public/assets/Images/skills/sequelize.svg";
import Tailwind from "../../public/assets/Images/skills/tailwind-css.svg";

/* Image */
import E_commerce from "../../public/assets/Images/project-image/E-commerce/Home.png";
import Electronic_Store from "../../public/assets/Images/project-image/Electronic Store/electronic.png";

import GameApp from "../../public/assets/Images/project-image/Games App/Games.png";
import food from "../../public/assets/Images/project-image/Yummy/Home.png";

import socialApp from "../../public/assets/Images/project-image/Blog/Blog.png";
import courses from "../../public/assets/Images/project-image/courses platform/courses platform.png";
import forOurChildren from "../../public/assets/Images/project-image/For Our/header.png";

import Masterscaf from "../../public/assets/Images/project-image/Masterscaf/Home.png";
import Mealify from "../../public/assets/Images/project-image/Mealify/Home-light.png";

import Daniels from "../../public/assets/Images/project-image/Daniels/Dan.png";
import Evs_Electrify from "../../public/assets/Images/project-image/Evs/Home.png";
import weatherApp from "../../public/assets/Images/project-image/Weather App/weather.png";

import Edu_Learn_Dashboard from "../../public/assets/Images/project-image/edulearn/Home.png";
import Task_Manager from "../../public/assets/Images/project-image/Task Manger/Task.png";

import Notes_APP from "../../public/assets/Images/project-image/Notes/Home.png";

import { ProjectType } from "@/types/types";
import english from "../../public/assets/Images/project-image/english app/english.png";
import Fokir from "../../public/assets/Images/project-image/Fokir/fokir.png";
import naturalProducts from "../../public/assets/Images/project-image/natural products/natural-products.png";
import Saraha from "../../public/assets/Images/project-image/saraha/sarah.png";

const projects: ProjectType[] = [
  {
    id: "1",
    title: `Electronic Store`,
    description:
      "ElectronicsStore, with React.js and Node.js, is designed for users to browse and purchase electronics, featuring user authentication, product display, shopping cart, favorites, cash payment, dark mode, and responsive design ",
    image: Electronic_Store,
    technologies: [react, Nodejs, Express, mongodb],
    liveUrl: "https://abdelrhman1812.github.io/electronic_store/",
    githubUrl: "https://github.com/abdelrhman1812/electronic_store",
    type: ["Fullstack", "React"],
    isLatest: true,
  },
  {
    id: "2",
    title: `Online Shop`,
    image: E_commerce,
    liveUrl: "https://abdelrhman1812.github.io/online_shop/",
    githubUrl: "https://github.com/abdelrhman1812/online_shop",
    technologies: [react, HTML, CSS, bootstrap],
    description:
      "Online Shop, built with React.js, is my first e-commerce project featuring user authentication, secure payments online, dynamic cart and favorites management, dark mode, and seamless navigation through product categories.",
    type: ["React"],
    isLatest: true,
  },
  {
    id: "3",
    title: `Natural Products`,
    image: naturalProducts,
    liveUrl: "https://natural-products-gamma.vercel.app/",
    githubUrl: "https://github.com/abdelrhman1812/natural-products",
    technologies: [react, HTML, CSS, bootstrap],
    description:
      "This project is a landing page built with React to show natural products",
    type: ["React"],
  },
  {
    id: "20",
    title: "Business Website with Dual-Language Support",
    image: "/assets/Images/project-image/Kayanlabs/company2 (2).png",
    liveUrl: "https://company-website-1.vercel.app/en",
    githubUrl: "https://github.com/abdelrhman1812",
    technologies: ["Next.js"],
    description:
      "A business-oriented website that supports English and Arabic languages, showcasing a sleek, modern interface suitable for companies and startups.",
    type: ["Next Js"],
    isLatest: true,
  },
  {
    id: "21",
    title: "Dental Care",
    image: "/assets/Images/project-image/Freelance/2 (1).png",
    liveUrl: "https://ayacare-abdelrhman1812s-projects.vercel.app/",
    githubUrl: "https://github.com/abdelrhman1812",
    technologies: ["Next.js"],
    description:
      "Experience the Difference in Dental Care We are a medical facility specialized in providing dental care services, such as teeth cleaning, fillings, gum treatment, and extractions. The clinic is managed by specialized dentists and utilizes the latest technologies to ensure precise and safe treatment.",
    type: ["Next Js"],
    isLatest: true,
  },
  {
    id: "22",
    title: "Business Website with Dual-Language Support",
    image: "/assets/Images/project-image/Kayanlabs/company2 (1).png",
    liveUrl: "https://company-website-2-blue.vercel.app/en/",
    githubUrl: "https://github.com/abdelrhman1812",
    technologies: ["Next.js"],
    description:
      "A business-oriented website that supports English and Arabic languages, showcasing a sleek, modern interface suitable for companies and startups.",
    type: ["Next Js"],
    isLatest: true,
  },
  {
    id: "23",
    title: "Unique Tech",
    image: "/assets/Images/project-image/Freelance/2 (2).png",
    liveUrl: "https://unique-tech-six.vercel.app/",
    githubUrl: "https://github.com/abdelrhman1812",
    technologies: ["Next.js"],
    description:
      "Unique tech is where your imagination and our expertise converge to create design solutions that elevate your brand and set you apart from the competition.",
    type: ["Next Js"],
    isLatest: true,
  },
  {
    id: "4",
    title: `Games App`,
    image: GameApp,
    liveUrl: "https://abdelrhman1812.github.io/games/",
    githubUrl: "https://github.com/abdelrhman1812/games",
    technologies: [react, HTML, CSS, bootstrap],
    description:
      "The Gaming App is a comprehensive web application designed to explore various games. It integrates with an API to provide a seamless experience for browsing and accessing game-related content.",
    type: ["React", "latest"],
    isLatest: true,
  },
  {
    id: "5",
    title: `Food Recipes`,
    image: food,
    liveUrl: "https://abdelrhman1812.github.io/Yummy-React.js/",
    githubUrl: "https://github.com/abdelrhman1812/Yummy-React.js",
    technologies: [react, HTML, CSS, bootstrap],
    description:
      "The Meals and Recipes website offers a variety of recipes, including meals, drinks, desserts, and snacks. It provides step-by-step instructions for easy recipe preparation. ",
    type: ["React", "latest"],
    isLatest: true,
  },
  {
    id: "6",
    title: `Social App`,
    image: socialApp,
    liveUrl: "https://facebook-murex-sigma.vercel.app/",
    githubUrl: "https://github.com/abdelrhman1812/Facebook",
    technologies: [Next, Sequelize, Tailwind, Nodejs, Express],
    description:
      "A Full Stack project using Node.js and Next.js for adding posts and comments, with the ability to upload images. It includes CRUD operations for posts and comments, along with user management, authentication, and image storage using Cloudinary. The project allows creating, updating, and deleting posts and comments while handling image uploads.",
    type: ["Fullstack", "Next", "latest"],
  },
  {
    id: "7",
    title: `Courses Platform`,
    image: courses,
    liveUrl: "https://abdelrhman1812.github.io/coursaty/",
    githubUrl: "https://github.com/abdelrhman1812/coursaty",
    technologies: [react, HTML, CSS, bootstrap],
    description:
      "This project is designed for an online course platform where users can view and access various courses. It allows course display and user interaction.",
    type: ["React", "latest"],
    isLatest: true,
  },
  {
    id: "8",
    title: `Task Manager`,
    image: Task_Manager,
    liveUrl: "https://task-manager-mvc.vercel.app",
    githubUrl: "https://github.com/abdelrhman1812/task_manager_mvc",
    technologies: [Nodejs, Express, mongodb, HTML, CSS],
    description:
      "This is a full-stack project for managing tasks, where users can add, update, and delete tasks. It allows marking tasks as completed",
    type: ["Fullstack"],
  },
  {
    id: "9",
    title: `English Track App`,
    image: english,
    liveUrl: "https://english-track-app.vercel.app",
    githubUrl: "https://github.com/abdelrhman1812/english_track_app",
    technologies: [react, Nodejs, Express, mongodb],
    description:
      "A full-stack English learning app where users can record and store words, phrases, and sentences, practice pronunciation, and record their own voice. They were built with Node.js, Express, and React.",
    type: ["Fullstack", "React"],
  },
  {
    id: "10",
    title: `Saraha Clone`,
    image: Saraha,
    liveUrl: "https://saraha-app-livid.vercel.app/",
    githubUrl: "https://github.com/abdelrhman1812/saraha-app-mvc",
    technologies: [Nodejs, Express, mongodb, HTML, CSS],
    description:
      "A clone project of a 'Truth or Dare' app, enabling users to send anonymous messages to others.",
    type: ["Fullstack"],
  },
  {
    id: "11",
    title: `Note App`,
    image: Notes_APP,
    liveUrl: "https://abdelrhman1812.github.io/Notes/",
    githubUrl: "https://github.com/abdelrhman1812/Notes",
    technologies: [react, HTML, CSS, bootstrap],
    description:
      "A task management project built with React, allowing users to add, update, and delete tasks, with backend integration via API for data handling.",
    type: ["React"],
  },
  {
    id: "12",
    title: `For Our Children`,
    image: forOurChildren,
    liveUrl: "https://abdelrhman1812.github.io/ForOurChildren/",
    githubUrl: "https://github.com/abdelrhman1812/ForOurChildren",
    technologies: [react, HTML, CSS, bootstrap],
    description:
      "A volunteer project for a 'For Our Children' initiative, aimed at supporting and helping children in need",
    type: ["React"],
  },
  {
    id: "13",
    title: `Edu Learn Dashboard`,
    image: Edu_Learn_Dashboard,
    liveUrl: "https://abdelrhman1812.github.io/edulearn/",
    githubUrl: "https://github.com/abdelrhman1812/edulearn",
    technologies: [react, HTML, CSS, bootstrap],
    description:
      "A dashboard project for a university system, allowing students to view their courses, schedules, tasks, and lectures",
    type: ["React"],
  },
  {
    id: "14",
    title: `Mealify`,
    image: Mealify,
    liveUrl: "https://abdelrhman1812.github.io/mealify/",
    githubUrl: "https://github.com/abdelrhman1812/mealify",
    technologies: [HTML, CSS],
    description:
      "A landing page showcasing various meals with a dark mode feature, built using only HTML and CSS",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
  {
    id: "15",
    title: `Masterscaf`,
    image: Masterscaf,
    liveUrl: "https://abdelrhman1812.github.io/Masterscaff/",
    githubUrl: "https://github.com/abdelrhman1812/Masterscaff",
    technologies: [HTML, SASS, JS, JQ],
    description:
      "A project for a construction company showcasing some of their work and services",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
  {
    id: "16",
    title: `Daniels`,
    image: Daniels,
    liveUrl: "https://abdelrhman1812.github.io/daniels/",
    githubUrl: "https://github.com/abdelrhman1812/daniels",
    technologies: [HTML, CSS, bootstrap, JS],
    description:
      "A landing page project using Bootstrap for a responsive and modern design",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
  {
    id: "17",
    title: `Evs-Electrify`,
    image: Evs_Electrify,
    liveUrl: "https://abdelrhman1812.github.io/evs-electrify/",
    githubUrl: "https://github.com/abdelrhman1812/evs-electrify",
    technologies: [HTML, SASS, JS, JQ],
    description:
      "This project is a landing page for a car company, showcasing their products and services. ",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
  {
    id: "18",
    title: `Fokir`,
    image: Fokir,
    liveUrl: "https://abdelrhman1812.github.io/fokir/",
    githubUrl: "https://github.com/abdelrhman1812/fokir",
    technologies: [HTML, CSS],
    description: "A landing page project using only HTML and CSS",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
  {
    id: "19",
    title: `Weather App`,
    image: weatherApp,
    liveUrl: "https://abdelrhman1812.github.io/Weather/",
    githubUrl: "https://github.com/abdelrhman1812/Weather",
    technologies: [HTML, CSS, bootstrap, JS],
    description:
      "A Weather App that allows users to search for weather information by city. It provides real-time data, including temperature, humidity, and wind speed, with a responsive design for a seamless, user-friendly experience.",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
];

export default projects;
