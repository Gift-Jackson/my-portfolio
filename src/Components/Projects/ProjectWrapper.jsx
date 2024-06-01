import styles from "../Styles/projects.module.css"
import ProjectsCard from "./ProjectsCard"
import img from "../../assets/Screenshot 2024-05-25 231805.png"

const ProjectWrapper = () => {
    const projects = [
        {
            image: img,
            title: "Bloggie",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta vitae provident, expedita ex sint!",
            stack: ["HTML", "CSS", "Vanillajs", "Axios"],
            live_link: "https://bloggie-vanillajs.netlify.app/",
            github: "https://github.com/Gift-Jackson/Bloggie"
        },
        {
            image: img,
            title: "Bloggie",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta vitae provident, expedita ex sint!",
            stack: ["HTML", "CSS", "Vanillajs", "Axios"],
            github: "https://github.com/Gift-Jackson/Bloggie"
        },
        {
            image: img,
            title: "Bloggie",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta vitae provident, expedita ex sint!",
            stack: ["HTML", "CSS", "Vanillajs", "Axios"],
            live_link: "https://bloggie-vanillajs.netlify.app/",
            github: "https://github.com/Gift-Jackson/Bloggie"
        },
        {
            image: img,
            title: "Bloggie",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta vitae provident, expedita ex sint!",
            stack: ["HTML", "CSS", "Vanillajs", "Axios"],
            live_link: "https://bloggie-vanillajs.netlify.app/",
        },
    ]
  return (
      <>
          <ul className={styles.lists}>
              {projects.map((items, index) => (
                 
                  <ProjectsCard key={index} {...items} />
                  
              ))}
      </ul>
      </>
  )
}

export default ProjectWrapper