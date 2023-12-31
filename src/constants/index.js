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
  //  material,
    carrent,
    countryProject,
    dashboardProject,
    liboexProject,
    nynxProject,
    socialmediaProject,
    solarProject,
    task1,
    todoList,
    v2fExchangeProject,
    codeIt,
    jobit,
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
      title: "Work",
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: backend,
    },
    {
      title: "Next Developer",
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
    // {
    //   name: "material",
    //   icon: material,
    // },
  ];
  
  const experiences = [
    {
      title: "Internship React Js",
      company_name: "Magnus Mage",
      icon: meta,
      iconBg: "#383E56",
      date: "January 2022 - March 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Junior React Developer",
      company_name: "Magnus Mage",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "March 2022 - April 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Developer",
      company_name: "Builtin Soft",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Country Info & Translator",
      description:
        "Country Info project can be displays all the county Data. In This project i can also use language translator for translate the data in Different language. and also use with light mode and dark mode feature.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: countryProject,
      source_code_link: "https://github.com/usama2333/Country-Info-and-Language-Translator",
    },
    {
      name: "Nynx",
      description:
        "Nynx is a website that is made for freelancers and those who want to hire the freelancers and developers for their projects.It can gives the oppertunity for both the freelancers and the customers who want to own the services.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: nynxProject,
      source_code_link: "https://github.com/usama2333/Project",
    },
    {
      name: "Admin DashBoard",
      description:
        "Admin Dashboard Panel is built in React and Material Ui it can displays multiple informational Data in the from off Tabels , Charts and Graphs,I. It also uses Light mode and Dark Mode Feature.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Graphs",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: dashboardProject,
      source_code_link: "https://github.com/usama2333/Admin-Dash-Board",
    },

    {
      name: "Solar Panel",
      description:
        "Solar Panel is a landing page that is Made in React. It has a different component that can define how to install the renewable energy resources,It has shows how to solar panel is installed and the features and benifits of the solar panel.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        // {
        //   name: "Graphs",
        //   color: "green-text-gradient",
        // },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: solarProject,
      source_code_link: "https://github.com/usama2333/Solar-Panel",
    },

    {
      name: "V2f Exchange",
      description:
        "V2F Exchange is a Crypto Currency project that is made in React. In this project we can handle the Crypto data that comes from Apis and displays the data in the form of tables and Cards,Also uses the loaders and error handling .",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: v2fExchangeProject,
      source_code_link: "https://github.com/usama2333/V2f-Cryptocurrency-Exchange",
    },

    {
      name: "Social Media",
      description:
        "Social Media is the project that is a some little copy of facebook that can displays the post with the text and added like an share option.We can scroll the posts from top or bottom, In this project the light mode an dark mode feature is also added  .",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        // {
        //   name: "Redux",
        //   color: "green-text-gradient",
        // },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: socialmediaProject,
      source_code_link: "https://github.com/usama2333/Social-Media-Website",
    },

    {
      name: "Liboex CryptoCurrency",
      description:
        "Liboex CryptoCurrency is a Crypto Currency project that is made in React. In this project we can handle the Api data with the help of Redux ToolKit and displays the data in the form of tables,Also uses the loaders and error handling",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: liboexProject,
      source_code_link: "https://github.com/usama2333/Libonex-Cryptocurrency-exchange",
    },

    {
      name: "CodeIt",
      description:
        "It has login , Signup and Forget password page ,The All Forms data is Validate through formik and Yup also displays error for invalid credentials,Here we also use the local storage for store the login token if the user is login and removes the token after logout.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Routing",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: codeIt,
      source_code_link: "https://github.com/usama2333/Task-1",
    },

    {
      name: "Todo App",
      description:
        "The Todo app is capibale for the adding task in the in form of list. we can mark the task done when it s completed,We can also update the existing task when needs to be update and also have a delete option it can delete the task from the list.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        // {
        //   name: "Redux",
        //   color: "green-text-gradient",
        // },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: todoList,
      source_code_link: "https://github.com/usama2333/Todo-App-React",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };