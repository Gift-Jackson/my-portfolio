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
      title: "Real Estate Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta vitae provident, expedita ex sint!",
      stack: ["HTML", "CSS", "Vanillajs", "Axios"],
      live_link: "https://foxproperties.netlify.app/",
      github: "https://github.com/Gift-Jackson/fox-properties",
    },
    {
      image: project_2,
      title: "Fintech (VTU website)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta vitae provident, expedita ex sint!",
      stack: ["Reactjs", "Tailwindcss", "Axios"],
      live_link: "https://questpaylite.netlify.app/",
    },
    {
      image: project_3,
      title: "Online Bookstore",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta vitae provident, expedita ex sint!",
      stack: ["Reactjs", "CSS", "Axios"],
      live_link: "https://egls-onlinestore.netlify.app/",
      github: "https://github.com/Gift-Jackson/egls-react",
    },
    {
      image: project_4,
      title: "My Portfolio",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta vitae provident, expedita ex sint!",
      stack: ["Reactjs", "CSS", "Axios"],
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
