import Index from "../pages/index";
import { withDesign } from "storybook-addon-designs";

const Story = (props) => <Index {...props} />;

export const Home = Story.bind({});

Home.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
	},
};

export default {
	title: "Index",
	component: Index,
	decorators: [withDesign],
	argTypes: {
		showImage: { control: "boolean" },
	},
};
