import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  freelance,
  photoshop,
  code,
  illustrator,
  cPanel,
  cpp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Server Administration",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Graphics Designing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: cpp,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "cPanel",
    icon: cPanel,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "PhotoShop",
    icon: photoshop,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
];

const experiences = [
  {
    title: "Graphics Designing",
    company_name: "Freelancing",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "Started with searching for the first job in freelancing platforms and i found graphics is easy to start.",
      "Bidding in many graphics designing projects and finally entered in the freelancing world.",
      "I have done approximately 10-15 graphics designing projects for different clients.",
    ],
  },
  {
    title: "Server Administration / Wordpress Development",
    company_name: "Freelancing",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "After graphics designing, i got exposure to coding through my college syllabus and personal interest.",
      "Then i started searching for the basic Web Development and coding related work.",
      "While searching, I found some server Adminstration work on the way and got to know everything about Hosting and maintaining website in cPanel.",
      "I have also found website development work using Wordpress and grabbed the opportunity and got experience with Wordpress Development.",
    ],
  },
  {
    title: "Full Stack Development ( MERN )",
    company_name: "Freelancing",
    icon: code,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Present",
    points: [
      "I mastered the javascript and learned REACT js,NODE and mongoDb.",
      "And Started searching for the full stack development work and got some small projects where i got to know about the Architecture of E-Commerce websites.",
      "I also made one full stack E-commerce website for learning purpose while doing other small works of clients.",
      "And yes that was my journey and i am now searching for opportunity to work in established company as a Full Stack Developer in order to learn and grow more.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
