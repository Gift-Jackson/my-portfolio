import styles from "../Styles/projects.module.css";
import ProjectsCard from "./ProjectsCard";
import project_1 from "../../assets/project-1.png";
import project_2 from "../../assets/project-2.png";
import project_3 from "../../assets/project-3.png";
import project_4 from "../../assets/project-4.png";

const ProjectWrapper = () => {
  const projects = [
    {
      image: project_1,
      title: "Fox Properties",
      description:
        "Fox Properties is a modern real estate website I developed using Willow API, HTML, CSS, and JavaScript. It features comprehensive property listings, advanced search functionality, and interactive maps. The user-friendly, responsive design ensures a seamless experience, while real-time data integration offers up-to-date market insights and personalized recommendations.",
      stack: ["HTML", "CSS", "Vanillajs", "Axios"],
      live_link: "https://foxproperties.netlify.app/",
      github: "https://github.com/Gift-Jackson/fox-properties",
    },
    {
      image: project_2,
      title: "QuestPay",
      description:
        "QuestPay is a fintech web app I developed using React.js and Tailwind CSS, integrating multiple APIs for robust functionality. With QuestPay, users can easily pay bills such as cable subscriptions and electricity, purchase airtime and data at competitive rates, and conduct crypto transactions efficiently.",
      stack: ["Reactjs", "Tailwindcss", "Axios"],
      live_link: "https://questpaylite.netlify.app/",
    },
    {
      image: project_3,
      title: "Online Bookstore",
      description:
        "EGLS, which stands for Exceeding Glory Learning System, is an online bookstore developed using ReactJS and the Google Books API.It allows users to search for and access a wide range of books, articles, and papers by entering the book title or author&apos;s name.",
      stack: ["Reactjs", "CSS", "Axios", "Zustand"],
      live_link: "https://egls-onlinestore.netlify.app/",
      github: "https://github.com/Gift-Jackson/egls-react",
    },
    {
      image: project_4,
      title: "My Portfolio",
      description:
        "My portfolio website, developed using React.js, features a dynamic backend powered by Appwrite. This setup allows me to easily add new projects through a dedicated admin section, ensuring my portfolio stays current and showcases my latest work effectively.",
      stack: ["Reactjs", "CSS", "Appwrite"],
      live_link: "https://giftjacksun-02.netlify.app/",
      github: "https://github.com/Gift-Jackson/my-portfolio",
    },
  ];
  return (
    <>
      <ul className={styles.lists}>
        {projects.map((items, index) => (
          <ProjectsCard key={index} {...items} />
        ))}
          </ul>
          <div className="center">
            <a className={styles.btn} href="https://github.com/Gift-Jackson" target="_blank">
                See more on GitHub <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
    </>
  );
};

export default ProjectWrapper;
