export const HERO_CONTENT = `I am a passionate front end developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2023 - June 2024",
    role: "Front End Developer",
    company: "Celebrae App.",
    description: ["A complete Interactive mobile-web application development using tools such as HTML, CSS, JavaScript, React JS and Redux, all strongly typed with TypeScript", "Complete login user interface adding strong validations in all fields. Consumed and managed user data from firebase","Teamwork with Agile methodology through Scrum ceremonies.", "Use of task board with estimates based on Fibonacci scale."," Ordered way of working through a Branch system via GitHub.",],     
    technologies: ["HTML", "CSS", "Javascript", "React.js", "Next.js", "Typescript", "Firebase"],
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


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
