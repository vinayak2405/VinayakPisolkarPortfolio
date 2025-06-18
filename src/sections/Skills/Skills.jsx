import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      {/* Programming Languages */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
      </div>
      <hr />

      {/* Databases */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="Oracle" />
        <SkillList src={checkMarkIcon} skill="Firebase" />
      </div>
      <hr />

      {/* Web and Software Development */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Next.js" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="Express" />
        <SkillList src={checkMarkIcon} skill="Redux Toolkit" />
      </div>
      <hr />

      {/* Tools */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Postman" />
        <SkillList src={checkMarkIcon} skill="Swagger" />
        <SkillList src={checkMarkIcon} skill="AWS S3" />
      </div>
    </section>
  );
}

export default Skills;
