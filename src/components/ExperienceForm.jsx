import styles from "../styles/Form.module.css";

export default function GeneralForm({ values, onChange }) {
  return (
    <div className={styles.form}>
      <h2>Experience</h2>
      <div>
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          name="company"
          value={values.company}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="postion">Position:</label>
        <input
          type="text"
          name="position"
          value={values.position}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="responsibilities">Responsibilities:</label>
        <input
          type="text"
          name="responsibilities"
          value={values.responsibilities}
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
        <label htmlFor="end">End Date:</label>
        <input type="date" name="end" value={values.end} onChange={onChange} />
      </div>
    </div>
  );
}
