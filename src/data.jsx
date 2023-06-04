import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import portfolioV1 from "./assets/portfolio/v1-portfolio.jpg";
import dms from "./assets/portfolio/homepage.jpg"
import diceChallenge from "./assets/portfolio/dice-game.jpg";
import drumKit from "./assets/portfolio/drum-kit.jpg";
import simonGame from "./assets/portfolio/simon-game-challenge.jpg";
import toDOList from "./assets/portfolio/todo-list-v1.jpg";
import newsletterSignup from "./assets/portfolio/newsletter-signup.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Name : ",
    description: "Muhammad Aiman",
  },

  {
    id: 2,
    title: "Age : ",
    description: "23 Years",
  },

  {
    id: 3,
    title: "Nationality : ",
    description: "Malaysian",
  },

  {
    id: 4,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 5,
    title: "Address : ",
    description: "Kuala Lumpur",
  },

  {
    id: 6,
    title: "Phone : ",
    description: "+60172086856",
  },

  {
    id: 7,
    title: "Email : ",
    description: "aimanrazali909@gmail.com",
  },

  {
    id: 8,
    title: "Skills : ",
    description: "Malay, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "1+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "5+",
    title: "Completed <br /> Projects",
  },

  // {
  //   id: 3,
  //   no: "5+",
  //   title: "Happy <br /> Customers",
  // },

  // {
  //   id: 4,
  //   no: "1+",
  //   title: " Awards <br /> Won",
  // },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "March 2023 - PRESENT",
    title:
      "Backend Developer Intern <br /> <span> Dynasty Gaming & Media </span>",
    desc: "Skills: <br /> <span> MongoDB · Node.js · npm · Git BASH · Postman API · Bitbucket · Jira <span/>",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "June 2019 - August 2019",
    title:
      "Maintenance Assistant <br /> <span> ZincAlu Casting Sdn. Bhd. </span>",
    desc: "",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "May 2018 - August 2018",
    title: "IPQC Clerk <br /> <span> ZincAlu Casting Sdn. Bhd. </span>",
    desc: "Skills: <br /> <span> Microsoft Excel </span>",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "September 2019 - PRESENT",
    title:
      "Bachelor's Degree, Software Engineering <br /> <span> International Islamic University Malaysia </span>",
    desc: "Grade: <br/> <span>Current CGPA: 3.77 </span>",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "September 2018 - May 2019",
    title:
      "Center Foundation of Studies, Engineering <br /> <span> International Islamic University Malaysia </span>",
    desc: "",
  },

  // {
  //   id: 6,
  //   category: "education",
  //   icon: <FaGraduationCap />,
  //   year: "2009",
  //   title: "Bachelor Degree <span> Tunis High School </span>",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore",
  // },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    percentage: "90",
  },

  {
    id: 2,
    title: "CSS",
    percentage: "80",
  },

  {
    id: 3,
    title: "JavaScript",
    percentage: "75",
  },

  {
    id: 4,
    title: "PHP",
    percentage: "65",
  },

  {
    id: 5,
    title: "MongoDB",
    percentage: "60",
  },

  {
    id: 6,
    title: "Express.js",
    percentage: "55",
  },

  {
    id: 7,
    title: "React",
    percentage: "65",
  },

  {
    id: 8,
    title: "Node.js",
    percentage: "60",
  },

  {
    id: 9,
    title: "jQuery",
    percentage: "60",
  },

  {
    id: 10,
    title: "MySQL",
    percentage: "65",
  },

  {
    id: 11,
    title: "Java",
    percentage: "50",
  },

  {
    id: 12,
    title: "PL/SQL",
    percentage: "45",
  },
];

export const portfolio = [
  {
    id: 1,
    img: portfolioV1,
    title: "Portfolio V1",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Skills : ",
        desc: "HTML, CSS, JavaScript, Bootstrap",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: '<a target = "__blank" href="https://aimanrazali.github.io/v1-portfolio/">Portfolio V1</a>',
      },
    ],
  },
  {
    id: 2,
    img: dms,
    title: "Dental Management System",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dentistry IIUM Kuantan",
      },
      {
        icon: <FaCode />,
        title: "Skills : ",
        desc: "HTML, CSS, JavaScript, PHP, Bootstrap",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "None",
      },
    ],
  },
  {
    id: 3,
    img: diceChallenge,
    title: "Dice Challenge",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Skills : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "None",
      },
    ],
  },

  {
    id: 4,
    img: drumKit,
    title: "Drum Kit",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Skills : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "None",
      },
    ],
  },

  {
    id: 5,
    img: simonGame,
    title: "Simon Game Challenge",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Skills : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: '<a target = "__blank" href="https://aimanrazali.github.io/simon-game/">Simon Game</a>',
      },
    ],
  },

  {
    id: 6,
    img: toDOList,
    title: "To-Do-List",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Skills : ",
        desc: "Node.js, EJS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "None",
      },
    ],
  },

  {
    id: 7,
    img: newsletterSignup,
    title: "Newsletter Signup",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "None",
      },
      {
        title: "Skills : ",
        desc: "HTML, Node.js",
      },
      {
        title: "Preview : ",
        desc: "None",
      },
    ],
  },

  // {
  //   id: 8,
  //   img: Work6,
  //   title: "Photo Editing",
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: "Project : ",
  //       desc: "Photo",
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: "Client : ",
  //       desc: "Dribble",
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: "Skills : ",
  //       desc: "Adobe Photoshop",
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: "Preview : ",
  //       desc: "www.dibble.com",
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
