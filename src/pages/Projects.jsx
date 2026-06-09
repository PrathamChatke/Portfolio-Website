import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/PrathamChatke/repos")
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <div className="min-h-screen text-gray-800 dark:text-white">

      {/* 🔥 HEADER */}
      <h1 className="text-4xl font-bold text-center mb-12">
        All Projects
      </h1>

      {/* 🔥 GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {repos.map((repo) => (
          <div
            key={repo.id}
            className="p-6 rounded-xl 
            bg-white dark:bg-white/5 
            border border-gray-200 dark:border-white/10
            shadow-lg hover:shadow-2xl 
            transform hover:-translate-y-2 
            transition duration-300"
          >

            {/* 🔹 Title */}
            <h2 className="text-xl font-semibold mb-2">
              {repo.name}
            </h2>

            {/* 🔹 Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {repo.description || "No description provided"}
            </p>

            {/* 🔹 Stats */}
            <div className="flex justify-between text-sm mb-4">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
              <span>{repo.language}</span>
            </div>

            {/* 🔹 Buttons */}
            <div className="flex gap-3">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm rounded 
                bg-blue-500 hover:bg-blue-600 text-white transition"
              >
                View Code
              </a>

              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm rounded 
                  border border-blue-500 text-blue-500 
                  hover:bg-blue-500 hover:text-white transition"
                >
                  Live
                </a>
              )}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}