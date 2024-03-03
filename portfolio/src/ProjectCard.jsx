import React, { useState } from "react";

const ProjectCard = ({ image, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDetails = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="border border-gray-500 rounded-md p-5">
      <img src={image} className="w-full h-auto mb-4" alt={title} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">
        {expanded ? description : description.slice(0, 30) + "..."}
      </p>
      <button
        className="w-full py-2 bg-yellow-300 text-black font-semibold rounded-md hover:bg-yellow-400"
        onClick={toggleDetails}
      >
        {expanded ? "Hide Details" : "View Details"}
      </button>
    </div>
  );
};

export default ProjectCard;
