import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Design uten navn.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import VinayakPisolkar_CV from "../../assets/VinayakPisolkar_CV.pdf";
import { useTheme } from "../../common/ThemeContext";
import { Button } from "@mui/material";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <div className={styles.profileWrapper}>
          <img src={heroImg} className={styles.hero} alt="Profile picture" />
        </div>
        {/* <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        /> */}
      </div>
      <div className={styles.info}>
        <h1>
          Vinayak
          <br />
          Pisolkar
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          {/* <a href="https://x.com/__VinayaK__5" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a> */}
          <a href="https://github.com/vinayak2405" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/vinayakpisolkar/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={VinayakPisolkar_CV} download>
          <Button className="hover">Resume</Button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
