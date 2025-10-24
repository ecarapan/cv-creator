import styles from "../styles/App.module.css";
import { useState } from "react";
import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import Resume from "./Resume";

export default function App() {
  const [showResume, setShowResume] = useState(false);
  const [general, setGeneral] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    start: "",
    graduation: "",
  });
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    start: "",
    end: "",
  });

  function handleGeneralChange(e) {
    setGeneral({ ...general, [e.target.name]: e.target.value });
  }

  function handleEducationChange(e) {
    setEducation({ ...education, [e.target.name]: e.target.value });
  }

  function handleExperienceChange(e) {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowResume(true);
  }

  return (
    <div className={styles.app}>
      <h1>CV Creator</h1>
      {showResume ? (
        <Resume
          general={general}
          education={education}
          experience={experience}
          setShowResume={setShowResume}
        ></Resume>
      ) : (
        <form onSubmit={handleSubmit}>
          <GeneralForm values={general} onChange={handleGeneralChange} />
          <EducationForm values={education} onChange={handleEducationChange} />
          <ExperienceForm
            values={experience}
            onChange={handleExperienceChange}
          />
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
