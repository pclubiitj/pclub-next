import { bool } from "prop-types";

export default function Discord({ dark }) {
	return (
		<iframe
			src={`https://discord.com/widget?id=776838119877115946&theme=${dark ? "dark" : "light"}`}
			width="350"
			height="500"
			allowtransparency="true"
			frameBorder="0"
			sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
			title="discord"
			className="shadow-md p-4 rounded-lg border-2 border-dashed border-grey-400"
		/>
	);
}
Discord.propTypes = {
	dark: bool,
};
