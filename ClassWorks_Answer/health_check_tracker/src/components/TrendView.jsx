import React from "react";

const TrendView = ({ healthLogs }) => {
  if (healthLogs.length === 0) {
    return <p>No data to show trends. Add logs to view trends.</p>;
  }

  const average = (arr, key) =>
    (arr.reduce((sum, log) => sum + log[key], 0) / arr.length).toFixed(2);

  return (
    <div>
      <h2>Health Trends</h2>
      <p>
        <strong>Average Temperature:</strong>{" "}
        {average(healthLogs, "temperature")}°C
      </p>
      <p>
        <strong>Average Glucose:</strong> {average(healthLogs, "glucose")} mg/dL
      </p>
      <p>Total Logs: {healthLogs.length}</p>
    </div>
  );
};

export default TrendView;
