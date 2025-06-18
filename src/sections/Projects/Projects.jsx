import styles from "./ProjectsStyles.module.css";
import shipolog from "../../assets/images/shipologUI.png";
import tracking from "../../assets/images/trackingUI.png";
import plumsense from "../../assets/images/plumsenseUI.png";
import ProjectCard from "../../common/ProjectCard";
import ProjectDialog from "./Dialog/ProjectDialog";
import { useState } from "react";

const projectDetails = {
  shipolog: {
    title: "Shipolog",
    image: shipolog,
    techStack: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "PostgreSQl",
      "Sequelize",
      "AWS S3",
      "Google Document AI",
    ],
    achievements: [
      "Reduced label printing time by 50%",
      "Used by 200+ businesses",
    ],
    work: "Developed UI, integrated APIs, and built shipping flow logic.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with real video
  },
  plumsense: {
    title: "Plumsense",
    image: plumsense,
    techStack: ["Vue", "Python", "PostgreSQL", "Raspberry Pi"],
    achievements: ["Real-time data monitoring", "IOT dashboard"],
    work: "Worked on sensor integration and dashboard design.",
    video: "",
  },
  tracking: {
    title: "Tracking App",
    image: tracking,
    techStack: ["React", "Express.js", "MongoDB"],
    achievements: ["Shipment visibility", "Live status updates"],
    work: "Built end-to-end tracking system.",
    video: "",
  },
};

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (projectKey) => {
    setSelectedProject(projectDetails[projectKey]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={shipolog}
            onClick={() => handleOpen("shipolog")}
            h3="Shipolog"
            p="AI-Powered Shipping Platform"
          />
          <ProjectCard
            src={plumsense}
            onClick={() => handleOpen("plumsense")}
            h3="Plumsense"
            p="IOT Management Platform"
          />
          <ProjectCard
            src={tracking}
            onClick={() => handleOpen("tracking")}
            h3="Tracking App"
            p="Shipment Tracking System"
          />
        </div>
      </section>
      {selectedProject && (
        <ProjectDialog
          open={open}
          onClose={handleClose}
          data={selectedProject}
        />
      )}
    </>
  );
}

export default Projects;
