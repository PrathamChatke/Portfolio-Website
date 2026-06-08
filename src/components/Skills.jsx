const skills = [
  "Docker",
  "Kubernetes",
  "AWS",
  "Jenkins",
  "Terraform",
  "Linux",
  "GitHub Actions",
  "Nginx"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="p-10 text-center 
      bg-white dark:bg-gray-900 
      text-black dark:text-white"
    >
      <h2 className="text-3xl font-bold">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {skills.map((s) => (
          <div
            key={s}
            className="
            bg-gray-100 dark:bg-black 
            p-4 rounded-xl 
            border border-gray-300 dark:border-white/10 
            hover-glow card-hover 
            cursor-pointer
            font-medium
            "
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}