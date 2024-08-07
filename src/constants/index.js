/* eslint-disable no-unused-vars */
import project1 from "../assets/projects/Auth Library.png";
import project2 from "../assets/projects/Task application.png";
import project3 from "../assets/projects/portfolio.png";
import project4 from "../assets/projects/Hulu clone.png";
import project5 from "../assets/projects/Leroitranslates.png";
import project6 from "../assets/projects/Jobzee.png";

const currentYear = new Date().getFullYear()
const numberOfYears =  currentYear- 2020

export const HERO_CONTENT = `I specialize in developing responsive web applications, optimizing business processes, ensuring cybersecurity through vulnerability and penetration testing, providing reliable virtual assistance, and creating automated solutions to enhance efficiency. My ${numberOfYears} years of hands-on experience and diverse skill set and dedication to continuous improvement enable me to deliver outstanding results and make a significant impact in every project I engage with.`;

export const ABOUT_TEXT = `Brandon Armand Nyamkimbi a first-class graduate in Electronics and Telecommunications engineering with a diverse skill set encompassing full-stack web development, management systems consulting, vulnerability and penetration testing, virtual assistance, and robotic process automation development. With a passion for technology and problem-solving, I bring a unique blend of expertise to every project I undertake. As a full-stack web developer, I have extensive experience in both front-end and back-end development, proficient in languages and frameworks such as HTML, CSS, JavaScript, React, Node.js, and more. I enjoy creating intuitive and responsive web applications that provide seamless user experiences. With a keen eye for security, I specialize in vulnerability and penetration testing, identifying and mitigating potential threats to safeguard information systems.`;
export const PART_TWO = `As a virtual assistant, I am highly organized and adept at handling a variety of administrative tasks, from scheduling and communication to project coordination. My ability to manage multiple responsibilities simultaneously ensures that clients receive reliable and efficient support. In the realm of robotic process automation (RPA), I develop automated solutions that streamline repetitive tasks and enhance workflow efficiency. My expertise in RPA tools and technologies enables me to design and deploy bots that drive productivity and reduce operational costs. `

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Management Systems and Cybersecurity Consultant",
    company: "Panoramic Synergy Enterprise",
    description: `In charge of implementing management systems and ISO standards such ISO 27000, ISO 20000 ISO 8583 as well as PCI DSS in client company also conducted vulnerabilty assessment and penetration testing in clients infrastructure`,
    technologies: ["Kali Linux", "Owasp ZAP", "Burp Suite", "Nmap", "Microsoft office"],
  },
  {
    year: "2022 - 2024",
    role: "Senior Ecommerce digital admin consultant",
    company: "Vortex Stick Art",
    description: `Designed and developed user interfaces for an Ecommerce website using Shopify. Worked closely on the organising and preparation of product media for display on website. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Shopify", "Google Workspace", "Slack", "Azure Devops"],
  },
  {
    year: "2023 - 2023",
    role: "Full Stack Developer intern",
    company: "YIEE",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["React", "Nodejs", "MongoDb"],
  },
  {
    year: "2022 - 2022",
    role: "Secretariat Worker",
    company: "Cameroon General Certification Examination Board",
    description: `COntributed in the process of GCE exams by Distributing exam materials to different centers, receiving and sorting of examination papers, masking of students identity on script from those marking as well as entering students scores`,
    // technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
  {
    year: "2020 - 2022",
    role: "Volunteer IT Officer",
    company: "Victorial Relief Foundation",
    description: `In charge of design and development of the companies website using wordpress and Wix as well, setting up employees with the work tools, teaching and attending to colleagues complains on how to use different work tools `,
    technologies: ["WOrdpress", "Wix", "Google Workspace",],
  }
];

export const PROJECTS = [
  {
    title: "Jobzee",
    image: project6,
    description:
      "A web application for job posting for both employers and job seekers",
    technologies: ["TailwindCSS", "React", "Nodejs", "MongoDB"],
  },
  {
    title: "Authentication Website",
    image: project1,
    description:
      "A website to provide easy code snippets to various authentication methods.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, task filtering, task deleting",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Hulu clone",
    image: project4,
    description:
      "A simple clone of the homepage of hulu getting the movies from an api call.",
    technologies: ["TailwindCSS", "Nextjs",],
  },
  {
    title: "LeRoi Translates",
    image: project5,
    description:
      "Uses Openai api to translate text into a language selected",
    technologies: ["TailwindCSS", "Nextjs", "Openai"],
  },
  

];

export const CONTACT = {
  address: "+2349055322634",
  phoneNo: "+237672004155",
  email: "brandonarmand96@gmail.com",
};
