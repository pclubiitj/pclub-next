import { motion } from "framer-motion";
import Discord from "../components/Discord";

export default function IndexPage() {
	return (
		<div className="flex flex-col items-center space-y-16 mt-8">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="text-center space-y-4 h-full"
			>
				<h1 className="text-5xl font-bold text-gray-800">Programming Club</h1>
				<h3 className="text-2xl font-mono text-gray-500">Indian Institute of Technology, Jodhpur</h3>
			</motion.div>
			<img
				src="/images/arpit.jpg"
				alt="arpit illustration"
				className="m-4 rounded-xl shadow-md"
				style={{ height: "20rem" }}
			/>
			<Discord dark={true} />
		</div>
	);
}
