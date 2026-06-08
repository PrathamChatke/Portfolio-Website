import { motion } from "framer-motion";

const projects = [
  {
    title: "CI/CD Pipeline Automation",
    description:
      "Designed and implemented an automated CI/CD pipeline using GitHub Actions and Docker, enabling zero-downtime deployments and reducing release time by 70%.",
    tech: ["GitHub Actions", "Docker", "AWS", "Nginx"],
    github: "https://github.com/PrathamChatke",
    live: "https://yourproject.com",
  },
  {
    title: "Kubernetes Deployment System",
    description:
      "Built a scalable microservices architecture on Kubernetes with auto-scaling, load balancing, and real-time monitoring using Prometheus and Grafana.",
    tech: ["Kubernetes", "Helm", "Prometheus", "Grafana"],
    github: "https://github.com/yourusername/project1",
    live: "https://yourproject.com",
  },
  {
    title: "Infrastructure as Code (IaC)",
    description:
      "Provisioned secure and reusable cloud infrastructure using Terraform modules, enabling faster environment setup and consistent deployments.",
    tech: ["Terraform", "AWS", "S3", "IAM"],
    github: "https://github.com/yourusername/project1",
    live: "https://yourproject.com",
  },
  {
    title: "Dockerized Full Stack App",
    description:
      "Containerized a full-stack application using Docker Compose, improving portability and reducing environment setup complexity.",
    tech: ["Docker", "Node.js", "React", "MySQL"],
    github: "https://github.com/yourusername/project1",
    live: "https://yourproject.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="p-16 text-center 
      bg-white dark:bg-black 
      text-black dark:text-white"
    >
      <h2 className="text-4xl font-bold mb-12">
        🚀 Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="
            p-6 rounded-2xl
            bg-gray-100 dark:bg-white/5
            border border-gray-300 dark:border-white/10
            backdrop-blur-lg
            hover-glow card-hover
            text-left
            "
          >
            <h3 className="text-2xl font-semibold 
            text-blue-600 dark:text-blue-400">
              {project.title}
            </h3>

            <p className="mt-3 text-gray-700 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="
                  text-sm px-3 py-1 rounded-full
                  bg-blue-500/20 text-blue-700 
                  dark:text-blue-300
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                px-4 py-2 rounded 
                bg-blue-600 text-white
                hover:bg-blue-700 
                btn-hover
                "
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
                px-4 py-2 rounded 
                border border-gray-400 
                dark:border-white/20
                hover:bg-gray-200 
                dark:hover:bg-white/10 
                btn-hover
                "
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}