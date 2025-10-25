import styles from "../styles/Resume.module.css";

export default function Resume({ general, education, experience }) {
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    if (isNaN(date)) return dateStr;
    return date.toLocaleString("default", { month: "long", year: "numeric" });
  }

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
          <p>
            {formatDate(education.start)} - {formatDate(education.graduation)}
          </p>
        </div>
      </div>
      <div div className={styles.experience}>
        <h2>Experience</h2>
        <hr />
        <div>
          <div className={styles.info}>
            <p>{experience.company}</p>
            <p>{experience.position}</p>
            <p>{experience.responsibilities}</p>
          </div>
          <p>
            {formatDate(experience.start)} - {formatDate(experience.end)}
          </p>
        </div>
      </div>
    </div>
  );
}
