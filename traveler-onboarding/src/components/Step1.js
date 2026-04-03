import React from "react";

function Step1({ formData, setFormData, errors, setErrors }) {
  const validate = (field, value) => {
    let err = "";

    if ((field === "firstName" || field === "lastName")) {
      if (!/^[A-Za-z]{2,50}$/.test(value)) {
        err = "Only letters (2–50 chars)";
      }
    }

    if (field === "email") {
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        err = "Invalid email";
      }
    }

    if (field === "dob") {
      const age = new Date().getFullYear() - new Date(value).getFullYear();
      if (age < 18) err = "Must be 18+";
    }

    setErrors(prev => ({ ...prev, [field]: err }));
  };

  const handle = (field, value) => {
    setFormData({ ...formData, [field]: value });
    validate(field, value);
  };

  return (
    <div>
      <h2>Step 1</h2>

      <input placeholder="First Name" value={formData.firstName} onChange={e => handle("firstName", e.target.value)} />
      <p className="error">{errors.firstName}</p>

      <input placeholder="Last Name" value={formData.lastName} onChange={e => handle("lastName", e.target.value)} />

      <input placeholder="Email" value={formData.email} onChange={e => handle("email", e.target.value)} />

      <input type="date" value={formData.dob} onChange={e => handle("dob", e.target.value)} />

      <input type="file" onChange={e => setFormData({ ...formData, photo: e.target.files[0] })} />
    </div>
  );
}

export default Step1;