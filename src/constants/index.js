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
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer – Personal Projects",
    company_name: "Self-employed",
    icon: freelance, // Replace with any icon you like
    iconBg: "#0188E3",
    date: "Jan 2023 - Present",
    points: [
      "Designed and developed multiple responsive web applications using HTML, CSS, and JavaScript.",
      "Worked with REST APIs to fetch and display dynamic data in real-time across various tools and platforms.",
      "Built interactive features like alarms, timers, calendars, games, chatbots, and file converters with custom UI/UX.",
      "Implemented local storage, real-time updates, animations, and sound integration to enhance user experience.",
    ],
  },
  {
    title: "JavaScript/Python Development",
    company_name: "CuriousJr",
    icon: sheryians, // Or institute logo
    iconBg: "#ffff",
    date: "Aug 2023 - Mar 2025",
    points: [
      "Completed hands-on learning in JavaScript and Python development through Curious Jr’s structured curriculum.",
      "Gained strong foundational skills in programming logic, problem-solving, and real-world application building.",
      "Worked on interactive coding challenges, mini projects, and logic-based games to sharpen development skills.",
      "Learned best practices in clean coding, debugging, and building user-focused web functionalities.",
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
    name: "Recipe-AI",
    description:
      "A smart and responsive frontend web app that suggests recipes based on user input. Built using HTML, CSS, JavaScript, and integrated with third-party APIs like Spoonacular, MealDB, and Open Food Facts. Users can search ingredients or dish names and get instant recipe suggestions. The project showcases API integration, clean UI design, and real-time data handling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/zuhair-neyer/Recipes-AI",
    live_website_link: "https://recipes-ai-zuhair.vercel.app/",
  },
  {
    name: "Cyber-Craft",
    description:
      "A fully responsive frontend UI for a website builder, built entirely using TypeScript. Users can fill out a form that simulates website generation. This project focuses purely on frontend development with no backend or live functionality. It highlights clean design, component structure, and interactive UI behavior.
",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "multi-page",
        color: "green-text-gradient",
      },
    ],
    image: falverra,
    source_code_link: "https://github.com/zuhair-neyer/Cyber-Craft",
    live_website_link: "https://cyber-craft-blue.vercel.app/",
  },
  {
    name: "Journey-Sync",
    description:
      "Journey Sync is a full-featured travel app built for groups traveling together. It offers real-time location sharing, itinerary planning, and expense tracking. The app simplifies coordination and communication among group members. Designed for convenience, it enhances the group travel experience from start to finish.",
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
    // github link ⬇️
    source_code_link: "https://github.com/zuhair-neyer/JourneySync",
    // project link ⬇️
    live_website_link: "https://journey-sync-one.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
