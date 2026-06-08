export default function DevOpsDashboard() {
  return (
    <section id="devopsdashboard" className="p-10 bg-black text-center">
      <h2 className="text-3xl font-bold">DevOps Dashboard</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gray-900 p-6 rounded-xl">
          🚀 12 Deployments
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          🐳 28 Docker Builds
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          ☸️ 3 Kubernetes Clusters
        </div>
      </div>
    </section>
  );
}