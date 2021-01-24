import Index from "../pages/index";

const Story = (props) => <Index {...props} />;

export const Home = Story.bind({});

export default {
  title: "Index",
  component: Index,
  argTypes: {
    showImage: { control: "boolean" },
  },
};
