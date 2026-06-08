import { motion } from "framer-motion";
import Scene from "../three/Scene";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center
      bg-white dark:bg-black
      text-black dark:text-white"
    >
      {/* 🔥 NAME */}
      <motion.h1
        className="text-6xl font-bold 
        bg-gradient-to-r 
        from-blue-600 to-cyan-500 
        dark:from-blue-400 dark:to-cyan-300 
        text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Pratham
      </motion.h1>

      {/* 💡 ROLE */}
      <motion.p
        className="mt-4 text-lg 
        text-gray-700 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        DevOps Engineer | Cloud | CI/CD | Automation
      </motion.p>

      {/* 🚀 CTA BUTTONS */}
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
      <Link to="projects" smooth={true} duration={500} offset={-80}>
        <button className="px-6 py-2 rounded 
          bg-blue-600 text-white 
          hover:bg-blue-700 
          dark:bg-blue-500 dark:hover:bg-blue-600 
          transition btn-hover">
          View Projects
        </button>
      </Link>

      <Link to="contact" smooth={true} duration={500} offset={-80}>
        <button className="px-6 py-2 rounded 
          border border-gray-400 dark:border-white/20 
          hover:bg-gray-200 dark:hover:bg-white/10 
          transition btn-hover">
          Contact Me
        </button>
        </Link>
      </motion.div>

      {/* 🎯 3D SECTION */}
      <div className="mt-10 w-full max-w-2xl 
        rounded-xl 
        bg-transparent dark:bg-white/5 
        border border-gray-200 dark:border-white/10 
        p-4 shadow-lg">
        <Scene />
      </div>
    </section>
  );
}