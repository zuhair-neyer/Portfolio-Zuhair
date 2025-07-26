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
    name: "MacBookPro-redesign",
    description:
      "A visually engaging website that showcases a redesigned MacBook Pro with smooth animations and a realistic 3D model, offering users an interactive and immersive way to explore the product’s look and features.",
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
    source_code_link: "https://github.com/gitswastik08/macbook_landingpage",
    live_website_link: "https://macbookpro3d.netlify.app/",
  },
  {
    name: "Falverra Redesign",
    description:
      "A sleek and animated website redesign for Falverra, combining a clean layout with smooth transitions to deliver an engaging, modern browsing experience that highlights the brand’s visual identity and message.",
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
    source_code_link: "https://github.com/gitswastik08/falverra-redesign",
    live_website_link: "https://falverra-recode.netlify.app/",
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
    // github link ⬇️
    source_code_link: "https://github.com/",
    // project link ⬇️
    live_website_link: "https://app.netlify.com/teams/gitswastik08/projects",
  },
];

export { services, technologies, experiences, testimonials, projects };
