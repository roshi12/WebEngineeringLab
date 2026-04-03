import React from "react";
import { countryStateData, phoneFormats } from "../utils/validation";

function Step2({ formData, setFormData, errors, setErrors }) {
  const handle = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const validate = (field, value) => {
    let err = "";

    if (field === "phone") {
      const regex = phoneFormats[formData.country];
      if (regex && !regex.test(value)) err = "Invalid phone";
    }

    if (field === "city" && /\d/.test(value)) err = "No numbers allowed";

    setErrors(prev => ({ ...prev, [field]: err }));
  };

  return (
    <div>
      <h2>Step 2</h2>

      <select onChange={e => handle("country", e.target.value)}>
        <option>Select Country</option>
        {Object.keys(countryStateData).map(c => <option key={c}>{c}</option>)}
      </select>

      <select onChange={e => handle("state", e.target.value)}>
        <option>Select State</option>
        {formData.country && countryStateData[formData.country].map(s => <option key={s}>{s}</option>)}
      </select>

      <input placeholder="Phone" onChange={e => { handle("phone", e.target.value); validate("phone", e.target.value); }} />
      <p className="error">{errors.phone}</p>

      <input placeholder="Address" onChange={e => handle("address1", e.target.value)} />

      <input placeholder="City" onChange={e => { handle("city", e.target.value); validate("city", e.target.value); }} />
      <p className="error">{errors.city}</p>
    </div>
  );
}

export default Step2;