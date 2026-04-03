import React from "react";

function Navigation({ step, setStep, errors }) {
  const hasErrors = Object.values(errors).some(e => e);

  return (
    <div>
      {step > 1 && <button onClick={() => setStep(step - 1)}>Prev</button>}
      {step < 4 && <button disabled={hasErrors} onClick={() => setStep(step + 1)}>Next</button>}
    </div>
  );
}

export default Navigation;