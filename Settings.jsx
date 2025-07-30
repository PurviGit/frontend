import React, { useEffect, useState } from "react";
import axios from "axios";

const Settings = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/settings")
      .then((res) => setSettings(res.data))
      .catch((err) => console.error("Failed to fetch settings", err));
  }, []);

  if (!settings) return <div>Loading settings...</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow space-y-4">
      <h2 className="text-2xl font-bold">⚙️ User Settings</h2>
      <p>
        <strong>Email:</strong> {settings.email}
      </p>
      <p>
        <strong>Theme:</strong> {settings.theme}
      </p>
      <p>
        <strong>Reminders Enabled:</strong> {settings.reminders ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default Settings;
