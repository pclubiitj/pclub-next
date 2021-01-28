import Link from "next/link";

const links = [
	{
		to: "/",
		text: "Home",
	},
	{
		to: "/about",
		text: "About",
	},
];

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center py-8 px-32">
			<div>
				<h1 className="text-2xl font-bold text-gray-800">Programming Club</h1>
				<h3 className="font-mono font-semibold text-gray-500">IIT Jodhpur</h3>
			</div>
			<div className="flex flex-row">
				{links.map(({ to, text }) => {
					return (
						<Link href={to} key={to}>
							<a>{text}</a>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
