import React, { useEffect, useState } from "react";
import axios from "axios";

const Prayer = () => {
  const [prayer, setPrayer] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/prayers")
      .then((res) => setPrayer(res.data))
      .catch((err) => console.error("Failed to fetch prayer", err));
  }, []);

  if (!prayer) return <div>Loading prayer...</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">{prayer.title}</h2>
      <p>{prayer.content}</p>
    </div>
  );
};

export default Prayer;
