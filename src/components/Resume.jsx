import styles from "../styles/Resume.module.css";

export default function Resume({ general, education, experience }) {
  return (
    <div className={styles.resume}>
      <div div className={styles.general}>
        <h1>{general.name}</h1>
        <div>
          <p>{general.phone}</p>
          <p>{general.email}</p>
        </div>
        <hr />
      </div>
      <div className={styles.education}>
        <h2>Education</h2>
        <hr />
        <div>
          <div className={styles.info}>
            <p>{education.school}</p>
            <p>{education.degree}</p>
          </div>
          <div className={styles.dates}>
            <p>Start: {education.start}</p>
            <p>Graduation: {education.graduation}</p>
          </div>
        </div>
      </div>
      <div div className={styles.experience}>
        <h2>Experience</h2>
        <hr />
        <div>
          <div className={styles.info}>
            <p>{experience.company}</p>
            <p>{experience.responsibilities}</p>
          </div>
          <div className={styles.dates}>
            <p>Start: {experience.start}</p>
            <p>End: {experience.end}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
