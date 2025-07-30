import React, { useEffect, useState } from "react";
import axios from "axios";

const Devotion = () => {
  const [devotion, setDevotion] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/devotions")
      .then((res) => setDevotion(res.data))
      .catch((err) => console.error("Failed to fetch devotion", err));
  }, []);

  if (!devotion) return <div>Loading devotion...</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">{devotion.title}</h2>
      <p>{devotion.content}</p>
    </div>
  );
};

export default Devotion;
