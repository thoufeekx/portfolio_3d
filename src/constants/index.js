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

  python,
  sci_kit,
  pytorch,
  data,
  database,
  
  node,
  webdev,
  react_lg,

  msigma,
  neuralnet,
  dna,
  graph,


  fuel,
  segments,
  nn_net,

  person_1,
  person_2,

  raspi,
  arduino,
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
    title: "Data Scientist",
    icon: data,
  },
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Pytorch",
    icon: pytorch,
  },
  {
    title: "Web Developer",
    icon: webdev,
  },
  {
    title: "React Native Developer",
    icon: react_lg,
  },
  {
    title: "Backend Developer",
    icon: node,
  },

 
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "Scikit",
    icon: sci_kit,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Typescript",
    icon: typescript,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Raspi",
    icon: raspi,
  },
  {
    name: "arduino",
    icon: arduino,
  },
];

const experiences = [
  {
    title: "Junior Project Assisstant",
    company_name: "Msigma Gokulam Ltd.",
    icon: msigma,
    iconBg: "#383E56",
    date: "November 2022 - August 2023",
    points: [
      "Researching, Developing and Implimenting new engineering project Ideas for Undergrad Academic students.",
      "Collaborating with cross-functional teams including designers, product managers, and other teams to create high-quality products.",
      "Implementing design and ensuring reliability of the products.",
      "Participating in code reviews and providing constructive feedback to rest of the team.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Freelance",
    icon: react_lg,
    iconBg: "#E6DEDD",
    date: "July 2022 - September 2022",
    points: [
      "Developing and maintaining android application using React Native and firebase.",
      "Stayed current with emerging technologies and trends in react native development, continually enhancing knowledge to keep projects aligned with industry best practices.",
      "Version control and branching strategies to ensure a seamless collaborative development process and minimizing code conflicts",
      "Mentored Co developers, facilitating their growth in react development and introducing best practices to maintain codebase integrity.",
    ],
  },
  {
    title: "Model Developer",
    company_name: "Freelance",
    icon: neuralnet,
    iconBg: "#383E56",
    date: "March 2022 - April 2022",
    points: [
      "Leveraged technical skills in image analysis, utilizing a YOLO-trained model for classifying accident occurrences.",
      "Applied fundamental data science principles to address the project's core objective, classifying accident occurrences, showcasing the depth of technical knowledge.",
      "Ensured that code was not only functional but also highly readable and well-documented. Notebooks included titles, explanations, and comments for clear understanding.",
//    "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Analysis",
    company_name: "Freelancer",
    icon: graph,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - February",
    points: [
      "In the customer segmentation project, demonstrated proficiency in data collection, cleaning, and organization to ensure data integrity and reliability.",
      "Applied statistical methods to uncover patterns and relationships within customer data, including hypothesis testing, regression analysis, and descriptive statistics.",
      "Introduced data visualization tools (Matplotlib) and techniques to effectively communicate segmentation findings, such as creating charts, graphs, and interactive dashboards.",
      "Transformation and preprocessing, including handling missing values, outliers, and normalization, to prepare data for segmentation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
   "Building a React Native app as stunning as our product seemed like an impossible feat, but with THoufeek's expertise, we've been proven wrong. Our app is not only functional but also a visual masterpiece!",
    name: "Ashik Nizar",
    designation: "Client",
    company: "Freelance",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
    image: person_1,

  },
  {
    testimonial:
    "Thoufeek consistently inspires and motivates everyone on the team, setting an exceptional example.",
    name: "Reby Varghese",
    designation: "JPE",
    company: "Msigma Gokulam Ltd",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
    image: person_1,
  },
  {
    testimonial:
    "Single-handedly building and implementing an entire project showcases his expertise and unwavering dedication to the art of coding.",
    name: "Afsal",
    designation: "client",
    company: "Freelance",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
    image: person_1,
  },
];

const projects = [
  {
    name: "Fuel Meter",
    description:
    "The Android app empowers users to analyze fuel consumption, prevent fraud at refill stations, track refueling history, and access real-time pricing data, enhancing informed vehicle fuel management.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "react paper",
        color: "pink-text-gradient",
      },
    ],
    image: fuel,
    source_code_link: "https://github.com/",
  },
  {
    name: "Customer Segmentation",
    description:
        "In the customer segmentation project, transaction data was analyzed, as well utilized clustering algorithms, and delivered actionable insights for tailored marketing and enhanced customer experiences.",
    tags: [
      {
        name: "scikit learn",
        color: "blue-text-gradient",
      },
      {
        name: "machine learning",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: segments,
    source_code_link: "https://github.com/",
  },
  {
    name: "Accident Detection",
    description:
    "The website utilizes Flask to analyze input photos for accidents, passing them through a YOLO model, enhancing safety and efficiency.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: nn_net,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
