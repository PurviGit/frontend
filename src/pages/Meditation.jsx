import React, { useEffect, useState } from "react";
import axios from "axios";

const Meditation = () => {
  const [meditation, setMeditation] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/meditations")
      .then((res) => setMeditation(res.data))
      .catch((err) => console.error("Failed to fetch meditation", err));
  }, []);

  if (!meditation) return <div>Loading meditation...</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">{meditation.title}</h2>
      <p>{meditation.content}</p>
    </div>
  );
};

export default Meditation;
