import Typography from '../../components/Typography';
Typography.displayName = 'Typography';
var meta = {
    title: 'Core/Components/Typography',
    component: Typography,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'bold', 'small', 'caption'],
            control: { type: 'select' },
        },
    },
};
export default meta;
export var Root = {
    args: {
        children: 'Root Typography',
    },
};
export var H1 = {
    args: {
        children: 'H1 Typography',
        variant: 'h1',
    },
};
export var H2 = {
    args: {
        children: 'H2 Typography',
        variant: 'h2',
    },
};
export var H3 = {
    args: {
        children: 'H3 Typography',
        variant: 'h3',
    },
};
export var H4 = {
    args: {
        children: 'H4 Typography',
        variant: 'h4',
    },
};
export var H5 = {
    args: {
        children: 'H5 Typography',
        variant: 'h5',
    },
};
export var Bold = {
    args: {
        children: 'Bold Typography',
        variant: 'bold',
    },
};
export var Small = {
    args: {
        children: 'Small Typography',
        variant: 'small',
    },
};
export var Caption = {
    args: {
        children: 'Caption Typography',
        variant: 'caption',
    },
};
export var Roboto = {
    args: {
        children: 'Open Sans Typography',
        fontFamily: 'Roboto',
    },
};
