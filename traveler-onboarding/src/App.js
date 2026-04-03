import React, { useState, useEffect } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import ProgressBar from "./components/ProgressBar";
import Navigation from "./components/Navigation";
import "./styles/form.css";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("formData")) || {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      photo: null,

      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "",
      postal: "",

      profession: "",
      otherProfession: "",
      experience: "",
      languages: [],
      linkedin: "",
      website: "",

      username: "",
      password: "",
      confirmPassword: "",
      notifications: [],
      terms: false,
      privacy: false
    }
  );

  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="container">
      <h1>✈️ Traveler Onboarding</h1>

      <ProgressBar step={step} />

      {step === 1 && <Step1 {...{ formData, setFormData, errors, setErrors }} />}
      {step === 2 && <Step2 {...{ formData, setFormData, errors, setErrors }} />}
      {step === 3 && <Step3 {...{ formData, setFormData, errors, setErrors }} />}
      {step === 4 && <Step4 {...{ formData, setFormData, errors, setErrors }} />}

      <Navigation step={step} setStep={setStep} errors={errors} />
    </div>
  );
}

export default App;