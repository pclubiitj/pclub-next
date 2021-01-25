import Nav from '../components/Navbar';

const Story = (props) => <Nav {...props} />;

export const Navbar = Story.bind({});

export default {
    title: 'Nav',
    component: Nav,
    argTypes: {
        showImage: { control: 'boolean' }
    }
};
