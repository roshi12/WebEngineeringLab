import React from "react";

function ProgressBar({ step }) {
  const percent = (step / 4) * 100;
  return (
    <div>
      <div style={{ background: "#ccc", height: "10px" }}>
        <div style={{ width: percent + "%", height: "100%", background: "green" }} />
      </div>
      <p>{percent}%</p>
    </div>
  );
}

export default ProgressBar;