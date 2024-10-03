export const HERO_CONTENT = `I am a passionate front-end developer who can design and build scalable web applications. With 1 year of hands-on experience, I have honed my skills in front-end technologies like JavaScript, React, Next.js, and CSS. My goal is to leverage this experience to continue learning and create innovative solutions that drive both business and personal growth, delivering modern and exceptional user experiences.`;

export const ABOUT_TEXT = [
  {
    paragraph: ["I am a dedicated and versatile front-end developer with a passion for creating efficient, modern, and user-friendly web applications. With 1 year of professional experience, I have worked with bunch of technologies, including JavaScript, CSS, Bootstrap, Tailwind, React, Next.js, and Node.js. While I have some experience in backend development, it’s not strong suit. My journey in web development started with a deep curiosity about how things work, and I am always eager to learn the latest IT skills.", "I’ve had the opportunity to work in collaborative environments, and I truly enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I like to stay active, explore new technologies, take courses, and continuously learn important skills while maintaining a healthy life balance. My next goal is to perfect what I've learned so far and dive into the future of technology, particularly AI."]
  }
];
 



export const EXPERIENCES = [
  {
    year: "June 2023 - June 2024",
    role: "Front End Developer",
    company: "Celebrae App.",
    description: ["A complete travel and entertainment for tourism app similar to Groupon. Project built with Next.js, Javascript, React, CSS, Bootstrap, TypeScript, Node, and Firebase.", "Project developed using the Agile Scrum ceremonies."],     
    technologies: ["HTML", "CSS", "Javascript", "React.js", "Next.js", "Typescript", "Node.js", "Git", "Firebase", "Figma", "Jira", "Agile/Scrum"],
  },
  // para agregar más experiencia en un futuro :D
  // {
  //   year: "xxxx - xxxx",
  //   role: "xxxxxxxxxxxxxx",
  //   company: "xxxxxxxxx",
  //   description: `xxxxxxx xxxxxxxxxx xxxxxxxx xxxxxxxx xxxx xxxx xxx xx x xxxxx xxxxx xxxxxxxxxxxxxxxx xxxx xx xx xxxxx xxx xxxxxxx x xx xxxxx xxxxx xxx xxx xx xxx xxxxx xxxx xxx x xxxx xxxxxxxxx xxx xxxxxxx`,
  //   technologies: ["xxxxx", "xxx", "xxxxx.xx", "xxxxxxx"],
  // },
  // {
  //   year: "xxxx - xxxx",
  //   role: "xxxxxxxxxxxxxx",
  //   company: "xxxxxxxxx",
  //   description: `xxxxxxx xxxxxxxxxx xxxxxxxx xxxxxxxx xxxx xxxx xxx xx x xxxxx xxxxx xxxxxxxxxxxxxxxx xxxx xx xx xxxxx xxx xxxxxxx x xx xxxxx xxxxx xxx xxx xx xxx xxxxx xxxx xxx x xxxx xxxxxxxxx xxx xxxxxxx`,
  //   technologies: ["xxxxx", "xxx", "xxxxx.xx", "xxxxxxx"],
  // },
  // {
  //   year: "xxxx - xxxx",
  //   role: "xxxxxxxxxxxxxx",
  //   company: "xxxxxxxxx",
  //   description: `xxxxxxx xxxxxxxxxx xxxxxxxx xxxxxxxx xxxx xxxx xxx xx x xxxxx xxxxx xxxxxxxxxxxxxxxx xxxx xx xx xxxxx xxx xxxxxxx x xx xxxxx xxxxx xxx xxx xx xxx xxxxx xxxx xxx x xxxx xxxxxxxxx xxx xxxxxxx`,
  //   technologies: ["xxxxx", "xxx", "xxxxx.xx", "xxxxxxx"],
  // },
];

export const EDUCATION = [
  {
    year: "October 2024 - Present",
    role: "Tailwind - Definitive course 2024",
    company: "Udemy.",
  },
  {
    year: "August 2024 - Present",
    role: "CSS - The Complete Guide 2024 (incl. Flexbox, Grid & Sass)",
    company: "Udemy.",
  },
  {
    year: "May 2023 - June 2023",
    role: "React - The Complete Guide (Hooks, React Router + Redux)",
    company: "Udemy.",
  },
  {
    year: "November 2022 - April 2023",
    role: "Front End Developement",
    company: "Coderhouse.",
  },
]

export const iconVariants = {
  initial: { 
    rotate: 0, 
    scale: 1,
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export const heroTransitionDelay = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const heroDownloadCvDelay = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const heroSocialsDelay = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});