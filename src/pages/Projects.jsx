import { useEffect, useState } from "react";

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/PrathamChatke/repos")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(repo => !repo.fork);
        setRepos(filtered);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All GitHub Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {repos.map(repo => (
          <div key={repo.id} className="border p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold">{repo.name}</h2>
            <p className="text-gray-500">{repo.description}</p>

            <div className="flex gap-4 mt-2 text-sm">
              <span>⭐ {repo.stargazers_count}</span>
              <span>{repo.language}</span>
            </div>

            <a
              href={repo.html_url}
              target="_blank"
              className="text-blue-500"
            >
              View Repo →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;