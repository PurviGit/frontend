import React, { useEffect, useState } from "react";
import axios from "axios";

const Accountability = () => {
  const [tip, setTip] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/accountability")
      .then((res) => setTip(res.data))
      .catch((err) => console.error("Failed to fetch accountability tip", err));
  }, []);

  if (!tip) return <div>Loading accountability tip...</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">{tip.title}</h2>
      <p>{tip.content}</p>
    </div>
  );
};

export default Accountability;
