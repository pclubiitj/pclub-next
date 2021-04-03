import { motion } from "framer-motion";

export default function ErrorPage() {
	return (
		<div className="flex flex-col items-center space-y-16">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="text-center h-full"
			>
				<h1 className="font-bold text-red-800" style={{ fontSize: "32rem" }}>
					404.
				</h1>

				<h2 className="font-mono text-grey-800">maybe ask something that i have :/</h2>
			</motion.div>
		</div>
	);
}
