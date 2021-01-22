import { motion } from "framer-motion"
export default function IndexPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="py-20 text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-800">Programming Club</h1>
        <h3 className="text-2xl font-mono text-gray-500">
          Indian Institute of Technology, Jodhpur
      </h3>
      </div>
    </motion.div>
  );
}
