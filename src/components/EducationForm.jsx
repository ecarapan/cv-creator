import styles from "../styles/Form.module.css";

export default function GeneralForm({ values, onChange }) {
  return (
    <div className={styles.form}>
      <h2>Education</h2>
      <div>
        <label htmlFor="school">School Name:</label>
        <input
          type="text"
          name="school"
          value={values.school}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          name="degree"
          value={values.degree}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="start">Start Date:</label>
        <input
          type="date"
          name="start"
          value={values.start}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="graduation">Graduation Date:</label>
        <input
          type="date"
          name="graduation"
          value={values.graduation}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
