import { useEffect, useState } from "react";

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/PrathamChatke/repos")
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All GitHub Projects</h1>

      {repos.map(repo => (
        <div key={repo.id} style={{
          border: "1px solid #ccc",
          padding: "15px",
          margin: "10px 0",
          borderRadius: "10px"
        }}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>

          <p>⭐ {repo.stargazers_count}</p>
          <p>{repo.language}</p>

          <a href={repo.html_url} target="_blank">
            View Repo
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;