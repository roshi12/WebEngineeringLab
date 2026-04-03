import React from "react";

function Step4({ formData, setFormData, errors, setErrors }) {

  const validatePassword = (value) => {
    let err = "";
    if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}/.test(value)) {
      err = "Weak password";
    }
    setErrors(prev => ({ ...prev, password: err }));
  };

  return (
    <div>
      <h2>Step 4</h2>

      <input placeholder="Username" onChange={e => setFormData({ ...formData, username: e.target.value })} />

      <input type="password" placeholder="Password" onChange={e => {
        setFormData({ ...formData, password: e.target.value });
        validatePassword(e.target.value);
      }} />
      <p className="error">{errors.password}</p>

      <input type="password" placeholder="Confirm Password"
        onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
      />

      <label>
        <input type="checkbox" onChange={e => setFormData({ ...formData, terms: e.target.checked })} />
        Accept Terms
      </label>

      <label>
        <input type="checkbox" onChange={e => setFormData({ ...formData, privacy: e.target.checked })} />
        Privacy Consent
      </label>
    </div>
  );
}

export default Step4;