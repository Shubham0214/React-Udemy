import React from "react";

function Github() {
  const githubUrl = "https://github.com/Shubham0214";
  const avatarUrl = "https://avatars.githubusercontent.com/u/your_github_id"; // Replace with your actual GitHub ID

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <img src={avatarUrl} width={300} alt="GitHub Avatar" />
        <div>Visit My GitHub Profile</div>
      </a>
    </div>
  );
}

export default Github;
