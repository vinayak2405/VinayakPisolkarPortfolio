import styles from "./ProjectsStyles.module.css";
import shipologDashboard from "../../assets/images/shipologDashboard.png";
import tracking from "../../assets/images/trackingUI.png";
import plumsense from "../../assets/images/plumsenseUI.png";
import ProjectCard from "../../common/ProjectCard";
import ProjectDialog from "./Dialog/ProjectDialog";
import { useState } from "react";
import ShipologBasicOverView from "../../assets/videos/ShipologBasicOverView.mp4";

const projectDetails = {
  shipolog: {
    title: "Shipolog",
    image: shipologDashboard,
    techStack: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "PostgreSQl",
      "Sequelize",
      "AWS S3",
      "Google Document AI",
      "Postman",
    ],
    workDone: [
      "Designed and implemented scalable backend services using Node.js, Express.js, PostgreSQL, and Sequelize to deliver high-performance RESTful APIs, ensuring efficient communication between frontend and backend layers.",
      "Led the development of a full-stack product locking system to maintain order-processing integrity. Implemented access control to prevent simultaneous modifications by users from the same organization, significantly reducing operational conflicts.",
      "Integrated and trained Google Document AI to automate the extraction of structured label data, including product name, LBH dimensions, tracking numbers, and quantities. This significantly reduced manual labeling effort and improved data accuracy in downstream systems.",
      "Built complex application modules using Redux Toolkit to streamline state management. This contributed to simplified logic, reduced code redundancy, and improved performance across dynamic workflows.",
      "Worked with cross-functional teams to deliver features, perform code reviews, and support agile delivery.",
    ],
    work: "Developed UI, integrated APIs, and built shipping flow logic.",
    video: ShipologBasicOverView,
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
            src={shipologDashboard}
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
