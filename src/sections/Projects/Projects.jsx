import styles from "./ProjectsStyles.module.css";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";
import shipolog from "../../assets/images/shipologUI.png";
import tracking from "../../assets/images/trackingUI.png";
import plumsense from "../../assets/images/plumsenseUI.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={shipolog}
          link="https://dev.app.shipolog.com/"
          h3="Shipolog"
          p={
            <>
              AI-Powered Shipping
              <br />
              Label management platform
            </>
          }
        />
        <ProjectCard
          src={plumsense}
          link="https://dev.plumsense.com/login"
          h3="Plumsense"
          p="IOT based Management platform"
        />
        <ProjectCard
          src={tracking}
          link="https://tracking.shipolog.com/tracking"
          h3="Tracking App"
          p={
            <>
              Track your
              <br />
              shipments at every step
            </>
          }
        />
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
