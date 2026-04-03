import React from "react";

function Step3({ formData, setFormData }) {

  const addLanguage = (lang) => {
    if (!formData.languages.includes(lang) && formData.languages.length < 10) {
      setFormData({ ...formData, languages: [...formData.languages, lang] });
    }
  };

  return (
    <div>
      <h2>Step 3</h2>

      <select onChange={e => setFormData({ ...formData, profession: e.target.value })}>
        <option>Engineer</option>
        <option>Doctor</option>
        <option>Other</option>
      </select>

      {formData.profession === "Other" && (
        <input placeholder="Specify" onChange={e => setFormData({ ...formData, otherProfession: e.target.value })} />
      )}

      <input type="number" placeholder="Experience" onChange={e => setFormData({ ...formData, experience: e.target.value })} />

      <input placeholder="Add Language" onKeyDown={e => {
        if (e.key === "Enter") {
          e.preventDefault();
          addLanguage(e.target.value);
          e.target.value = "";
        }
      }} />

      <div>{formData.languages.join(", ")}</div>

      <input placeholder="LinkedIn URL" onChange={e => setFormData({ ...formData, linkedin: e.target.value })} />
    </div>
  );
}

export default Step3;