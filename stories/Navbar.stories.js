import Nav from '../components/Navbar';
import { withDesign } from 'storybook-addon-designs';

const Story = (props) => <Nav {...props} />;

export const Navbar = Story.bind({});

Navbar.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'
    }
};

export default {
    title: 'Nav',
    component: Nav,
    decorators: [withDesign],
    argTypes: {
        showImage: { control: 'boolean' }
    }
};
