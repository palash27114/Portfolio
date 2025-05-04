// components/Skill.jsx
import { motion } from "framer-motion";

export default function Skill() {
  const skills = [
    "MERN",
    "AWS",
    "THREE.js(Learning)",
    "Tailwind CSS",
    "Java",
    "UI-UX",
  ];

  return (
    <section id="skills" className="bg-black py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-white mb-10 text-center">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-zinc-900 hover:bg-zinc-800 p-5 rounded-2xl shadow-lg text-center text-white font-medium text-lg cursor-pointer border border-zinc-700 hover:border-blue-500"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
