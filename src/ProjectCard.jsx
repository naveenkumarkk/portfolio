import React, { useState } from "react";

const ProjectCard = ({ image, title, description, techStack, gitLink }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDetails = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="border border-gray-500 rounded-md p-5">
      <img src={image} className="w-full h-auto mb-4" alt={title} />
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-300 mb-3">
        <strong className="text-gray-200 font-semibold">Tech Stack: </strong>
        {techStack}
      </p>

      <p className="text-gray-300 mb-2">
        <strong className="text-gray-200 font-semibold">Description: </strong>
        {expanded ? description : `${description.slice(0, 60)}...`}
      </p>

      {/* GitHub Button - Shows only if gitLink is provided */}
      {gitLink && (
        <a
          href={gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-3 w-full text-center py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-400"
        >
          View on GitHub
        </a>
      )}

      {/* Expand/Collapse Button */}
      <button
        className="w-full py-2 mt-3 bg-yellow-300 text-black font-semibold rounded-md hover:bg-yellow-400"
        onClick={toggleDetails}
      >
        {expanded ? "Hide Details" : "View Details"}
      </button>
    </div>
  );
};

export default ProjectCard;
