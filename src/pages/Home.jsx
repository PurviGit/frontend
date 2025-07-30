import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Devotion", path: "/devotion", emoji: "📖" },
    { name: "Prayer", path: "/prayer", emoji: "🙏" },
    { name: "Meditation", path: "/meditation", emoji: "🧘" },
    { name: "Accountability", path: "/accountability", emoji: "🛡️" },
    { name: "Just Chat", path: "/chat", emoji: "💬" },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
      {categories.map((cat) => (
        <div
          key={cat.name}
          onClick={() => navigate(cat.path)}
          className="cursor-pointer p-6 rounded-lg shadow-md bg-white hover:bg-gray-100 border"
        >
          <div className="text-4xl mb-2">{cat.emoji}</div>
          <h2 className="text-xl font-semibold">{cat.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
