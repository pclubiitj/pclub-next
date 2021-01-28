import Navbar from "../components/Navbar";
import { withDesign } from "storybook-addon-designs";

export { Navbar };
Navbar.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/clREaa8re755OGPbzzyUCn/pclub-next?node-id=1%3A9",
	},
};

export default {
	title: "Navbar",
	decorators: [withDesign],
};
