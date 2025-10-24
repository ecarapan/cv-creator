import styles from "../styles/Form.module.css";

export default function GeneralForm({ values, onChange }) {
  return (
    <div className={styles.form}>
      <h2>Personal Info</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
