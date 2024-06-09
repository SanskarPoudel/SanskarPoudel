import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  adb,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  redis,
  aws,
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
  t1,
  t2,
  t3,
  t4,
  t5,
  verifylink,
  makemoney,
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
    title: "DevOps, Cloud Engineering",
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Docker",
    icon: docker,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "AWS",
    icon: aws,
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
    name: "git",
    icon: git,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
      "Started with searching for the first job in freelancing platforms and i found it easy to start as graphics designer.",
      "Bidding in many graphics designing projects and finally entered in the freelancing world.",
      "I have done approximately 10-15 graphics designing projects for different clients.",
    ],
  },
  {
    title: "Server Administration / Wordpress Development",
    company_name: "Freelancing",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Jan 2022",
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
    date: "Jan 2022 - March 2022",
    points: [
      "I mastered the javascript and learned REACT js,NODE and mongoDb.",
      "And Started searching for the full stack development work and got some small projects where i got to know about the Architecture of different web applications.",
      "I also started making  full stack applications such as ecommerce, chat apps for learning purpose while doing other small works of clients.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "AdBreakMedia",
    icon: code,
    iconBg: "#E6DEDD",
    date: "March 2022 - Present",
    points: [
      "I finally joined AdBreakMedia as a full-time Software Engineer with my main role as a Backend Engineer.",
      "While working at AdBreakMedia as a Backend Engineer, I have also gained expertise in other areas such as DevOps, Server Management, and Cloud Computing.",
      "Currently, I am thriving at AdBreakMedia as a Software Engineer. I have been making valuable contributions by crafting robust and scalable backend solutions, managing DevOps and Servers, and also making some contributions towards frontend development.",
    ],
  },
];

const testimonials = [
  {
    testimonial: t1,
    name: "Network M",
    designation: "Outsourcing Head",
    company: "Advance Solutions",
  },
  {
    testimonial: t2,
    name: "Last M",
    designation: "CEO",
    company: "Wishop.co.za",
  },
  {
    testimonial: t3,
    name: "Lorenzo G",
    designation: "CTO",
    company: "DomuxOffice",
  },

  {
    testimonial: t5,
    name: "Amal D",
    designation: "CoFounder",
    company: "Days Enterprise NZ",
  },
  {
    testimonial: t4,
    name: "Lorenzo G",
    designation: "CTO",
    company: "DomuxOffice",
  },
];

const projects = [
  {
    name: "AdBreakMedia Network",
    description:
      "Contributed to the development of the Adbreakmedia Network, focusing mainly on backend APIs / Business logic, Cloud Services, and also assisting with frontend implementation.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "mongodb", color: "blue-text-gradient" },
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "expressjs", color: "blue-text-gradient" },
      { name: "reactjs", color: "green-text-gradient" },
      { name: "socketio", color: "pink-text-gradient" },
      { name: "docker", color: "blue-text-gradient" },
      { name: "aws", color: "blue-text-gradient" },
      { name: "CI/CD", color: "blue-text-gradient" },
    ],
    image: adb,
    source_code_link: "https://adbreakmedia.com",
  },
  {
    name: "VerifyLink.io",
    description:
      "Developed core backend and server-side features for a subscription-based platform focused on verifying various campaign tracking links.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "expressjs", color: "blue-text-gradient" },
      { name: "mongodb", color: "blue-text-gradient" },
      { name: "stripe", color: "blue-text-gradient" },
      { name: "paypal", color: "blue-text-gradient" },
      { name: "coinbase", color: "blue-text-gradient" },
      { name: "docker", color: "blue-text-gradient" },
      { name: "aws", color: "blue-text-gradient" },
    ],
    image: verifylink,
    source_code_link: "https://verifylink.io",
  },
  {
    name: "Makemoney",
    description:
      "Implemented backend services and server-side functionality for a Get Paid To platform with live chat and interactive earning opportunities.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "expressjs", color: "blue-text-gradient" },
      { name: "mongodb", color: "blue-text-gradient" },
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "socketio", color: "pink-text-gradient" },
      { name: "redux", color: "blue-text-gradient" },
      { name: "docker", color: "blue-text-gradient" },
    ],
    image: makemoney,
    source_code_link: "https://makemoney.is",
  },
  {
    name: "E-Commerce",
    description:
      "Personal learning project: Developed a web-based shopping platform with user login, product search, cart, and admin management using React, Node.js, and MongoDB.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "redux_toolkit", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "expressjs", color: "green-text-gradient" },
      { name: "mongoDb", color: "green-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/SanskarPoudel/ECOMMERCE----MERN",
  },
];

export { services, technologies, experiences, testimonials, projects };
