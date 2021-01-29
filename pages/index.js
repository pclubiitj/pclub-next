import { motion } from "framer-motion";
import Discord from "../components/Discord";

export default function IndexPage() {
	return (
		<div className="flex flex-col items-center">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="py-20 text-center space-y-4 h-full"
			>
				<h1 className="text-5xl font-bold text-gray-800">Programming Club</h1>
				<h3 className="text-2xl font-mono text-gray-500">Indian Institute of Technology, Jodhpur</h3>
			</motion.div>
			<Discord dark={false} />
		</div>
	);
}
