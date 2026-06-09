import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="bg-white dark:bg-black min-h-screen transition">
      <Navbar />
      <div className="pt-20 px-6">
        {children}
      </div>
    </div>
  );
}