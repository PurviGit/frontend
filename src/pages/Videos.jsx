import React, { useEffect, useState } from "react";
import axios from "axios";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("http://localhost:8000/videos");
        console.log("Video response:", res.data);
        setVideos(res.data.posts);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        🎥 Spiritual Video Resources
      </h1>
      {videos.map((video, index) => (
        <div key={index} className="bg-white shadow-md rounded p-4 mb-4">
          <h2 className="text-lg font-semibold">{video.title}</h2>
          <p className="text-sm text-gray-700 mb-2">{video.summary}</p>
          <a
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 underline"
          >
            Watch Video →
          </a>
        </div>
      ))}
    </div>
  );
};

export default Videos;
