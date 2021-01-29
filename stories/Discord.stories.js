import DiscordComponent from "../components/Discord";
import { withDesign } from "storybook-addon-designs";

export const Discord = (props) => {
	return <DiscordComponent {...props} />;
};
Discord.args = {
	dark: false,
};

export default {
	title: "Discord",
	decorators: [withDesign],
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/clREaa8re755OGPbzzyUCn/pclub-next?node-id=27%3A2",
		},
	},
};
