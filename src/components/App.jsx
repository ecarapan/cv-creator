import styles from "../styles/App.module.css";
import { useState } from "react";
import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import Resume from "./Resume";

export default function App() {
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

  return (
    <div className={styles.app}>
      <h1>CV Creator</h1>
      <main>
        <form>
          <GeneralForm values={general} onChange={handleGeneralChange} />
          <EducationForm values={education} onChange={handleEducationChange} />
          <ExperienceForm
            values={experience}
            onChange={handleExperienceChange}
          />
        </form>
        <section>
          <Resume
            general={general}
            education={education}
            experience={experience}
          ></Resume>
        </section>
      </main>
    </div>
  );
}
