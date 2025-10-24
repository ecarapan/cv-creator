import styles from "../styles/Resume.module.css";

export default function Resume({
  general,
  education,
  experience,
  setShowResume,
}) {
  return (
    <div className={styles.resume}>
      <div>
        <h2>Personal Info</h2>
        <p>Name: {general.name}</p>
        <p>Phone: {general.phone}</p>
        <p>Email: {general.email}</p>
      </div>
      <div>
        {" "}
        <h2>Education</h2>
        <p>School: {education.school}</p>
        <p>Degree: {education.degree}</p>
        <p>Start: {education.start}</p>
        <p>Graduation: {education.graduation}</p>
      </div>
      <div>
        <h2>Experience</h2>
        <p>Company: {experience.company}</p>
        <p>Position: {experience.position}</p>
        <p>Responsibilities: {experience.responsibilities}</p>
        <p>Start: {experience.start}</p>
        <p>End: {experience.end}</p>
      </div>
      <button onClick={() => setShowResume(false)} className={styles.editBtn}>
        Edit
      </button>
    </div>
  );
}
