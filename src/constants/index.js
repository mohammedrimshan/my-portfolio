import {
  iedc,
  cec,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  EcoWheelX,
  Collage,
  Summarise,
  Spotify,
  Amazon,
  Brototype,
  Strivex,
  Edusphere,
  Quicklink,
  Aigen,
  Usermgmt
} from "../image/index.js";

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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: nodejs, // Reuse nodejs icon for express
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "Socket.io",
    icon: javascript, // Placeholder or existing
  },
  {
    name: "WebRTC",
    icon: javascript, // Placeholder or existing
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "QA Associate & MERN Stack Developer",
    company_name: "Packapeer Academy (Brototype)",
    icon: Brototype,
    iconBg: "#ffffff",
    date: "Nov 2025 – April 2026",
    points: [
      "Mentored and reviewed the work of over 50+ junior developers, ensuring code quality and adherence to best practices.",
      "Conducted daily technical stand-ups and code reviews, identifying performance bottlenecks and architectural improvements.",
      "Optimized internal platform workflows, reducing deployment time and improving developer productivity.",
      "Collaborated on full-stack features using the MERN stack, focusing on scalability and clean architecture.",
    ],
  },
  {
    title: "MERN Stack Developer (Trainee)",
    company_name: "Packapeer Academy (Brototype)",
    icon: Brototype,
    iconBg: "#ffffff",
    date: "July 2024 – September 2025",
    points: [
      "Completed an intensive professional development program focused on industry-standard MERN stack development.",
      "Built and deployed high-performance full-stack applications with complex features like real-time communication and AI integration.",
      "Mastered Clean Architecture and SOLID principles to write maintainable, modular, and testable code.",
      "Implemented secure authentication systems (JWT, OAuth) and integrated payment gateways (Stripe, Razorpay).",
    ],
  },
  {
    title: "AI & ML Trainee",
    company_name: "ICT Academy of Kerala",
    iconBg: "#ffffff",
    icon: iedc,
    date: "Oct 2023",
    points: [
      "Gained hands-on experience with Supervised and Unsupervised Learning algorithms.",
      "Implemented predictive models using Linear Regression, KNN, and Decision Trees on real-world datasets.",
      "Explored data preprocessing techniques and feature engineering to improve model accuracy.",
    ],
  },
];

const socialmedia = [
  {
    github: "https://github.com/mohammedrimshan",
    linkedin: "https://www.linkedin.com/in/mohammed-rimshan-02986a225/",
    instagram: "https://www.instagram.com/_rim__sha_n_/",
    gmail: "mailto:rimshanshanu55@gmail.com",
    phone: "tel:+918606760567",
    leetcode: "https://leetcode.com/MOHAMMED_RIMSHAN/",
  },
];

const projects = [
  {
    name: "StriveX (SaaS Fitness Platform)",
    description:
      "A sophisticated wellness platform featuring real-time video consultations via WebRTC, live chat using Socket.io, and AI-driven workout orchestration. Built with clean architecture in TypeScript for high maintainability.",
    image: Strivex,
    link: "#",
    github: "https://github.com/mohammedrimshan/StriveX---SaaS-Based-AI-Fitness-App",
    stacks: ["TypeScript", "React", "Node.js", "MongoDB", "WebRTC", "Socket.io"],
  },
  {
    name: "EduSphere (AI E-Learning)",
    description:
      "An enterprise-level learning management system with role-based access control and AI-integrated content delivery. Features real-time student-tutor engagement and automated academic progress tracking.",
    image: Edusphere,
    link: "#",
    github: "https://github.com/mohammedrimshan/EduSphere-BackEnd",
    stacks: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS"],
  },
  {
    name: "AI Image Generator",
    description:
      "A creative tool utilizing OpenAI's DALL-E API to generate high-quality images from text prompts. Includes a community showcase feature and secure cloud storage integration.",
    image: Aigen,
    link: "#",
    github: "https://github.com/mohammedrimshan/Ai-Image-Generator-MERN-FrontEnd",
    stacks: ["React", "Node.js", "OpenAI API", "Cloudinary", "Tailwind CSS"],
  },
  {
    name: "URL Shortener & QR Generator",
    description:
      "A high-performance utility for shortening URLs with integrated QR code generation and click analytics. Optimized for speed and minimal redirect latency.",
    image: Quicklink,
    link: "#",
    github: "https://github.com/mohammedrimshan/QuickLink",
    stacks: ["React", "Node.js", "Express", "MongoDB", "QR API"],
  },
  {
    name: "User Management System",
    description:
      "A robust administrative dashboard for managing user identities, roles, and permissions. Built with secure JWT authentication and search-optimized user listings.",
    image: Usermgmt,
    link: "#",
    github: "https://github.com/mohammedrimshan/USER-MANAGEMENT-TYPESCRIPT",
    stacks: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
  },
];

const reviews = [
  {
    img: "https://avatars.githubusercontent.com/u/66182731?v=4",
    linkedin: "https://github.com/Mohammedjisam",
    name: "Mohammed Jisam ",
    position: "FrontEnd Developer",
    text: "Rimshan's enthusiasm and curiosity keeps the energy fresh in the team till the project get released. I am sure any team would appreciate his drive for web technologies.",
  },
  {
    img: "https://avatars.githubusercontent.com/u/132739829?v=4",
    linkedin: "https://github.com/shafancp",
    name: "Shafan C P",
    position: "FullStack Developer",
    text: "Rimshan's passion for web technologies is contagious and brings a vibrant energy to our team. His curiosity and eagerness to explore new concepts and tools keep the atmosphere lively throughout the project.",
  },
  {
    img: "https://avatars.githubusercontent.com/u/148054647?v=4",
    linkedin: "https://github.com/muhammed-shanib",
    name: "Muhammed Shanib",
    position: "Web Developer",
    text: "Rimshan's enthusiasm is not only inspiring but also instrumental in driving our team forward. I'm confident that his dedication and love for web development make him a valuable asset to any team.",
  },
];
export { experiences, technologies, socialmedia, projects, reviews };
