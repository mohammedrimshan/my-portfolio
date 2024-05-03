
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
} from "../image/index.js"

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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
]

const experiences = [
  {
    title: "Freelancer",
    company_name: "Web Developer",
    icon: cec,
    iconBg: "#ffffff",
    date: "September 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "AI & ML Trainee",
    company_name: "ICT Academy of Kerala",
    iconBg: "#ffffff",
    icon: iedc,
    date: "Oct 2023 ",
    points: [
      "Learned About Supervised And Unsupervised Machine Learning ",
      "Trained A Data Set Through Linear Regression Algorithm.",
      "Trained A Data Set Through KNN Algorithm",
    ],
  },
]
const socialmedia = [
  {
    github: "https://github.com/mohammedrimshan",
    linkedin: "https://www.linkedin.com/in/mohammed-rimshan-02986a225/",
    // twitter: "https://x.com/s_an_in?s=21&t=jY9EqensyLU26TAYgxMFPg",
    instagram: "https://www.instagram.com/_rim__sha_n_/",
    gmail: "mailto:rimshanshanu55@gmail.com",
    phone: "tel:+918606760567",
    leetcode: "https://leetcode.com/MOHAMMED_RIMSHAN/",
  },
]

const projects = [
  {
    name: "EcoWheelX",
    description:
      " A Blockchain and Machine Learning based System to Facilitate Scrapping of Cars Web Application For RTO,Police,ScrapDealer and Admin Android Application For Users,Certificate And User Request Through BlockChain Technology. ",
    image: EcoWheelX,
    link: "#notfound",
    github: "#notfound",
    stacks: ["Django", "Dart","HTML&CSS",],
  },
  {
    name: "Collage Web",
    description:
      "made a Website For Outside Peoples to know About Our collage.And also to Enquiry With collage management and Post their feedback",
    image: Collage,
    github: "#notfound",
    stacks: ["HTML", "CSS","PYTHON"],
  },
  {
    name: "SUMMARIZER",
    description:
      "Made a Website For summarize Long paragraph to short with the help of Summarize Packages And HTML And CSS",
    image: Summarise,
    link: "#notfound",
    github: "#notfound",
    stacks: ["PYTHON", "HTML", "CSS"],
  },
 
]

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
]
export { experiences, technologies, socialmedia, projects, reviews }
