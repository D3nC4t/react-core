import Paper from '../../components/Paper';
Paper.displayName = 'Paper';
var meta = {
    title: 'Core/Components/Paper',
    component: Paper,
    tags: ['autodocs'],
    argTypes: {
        $bgColor: {
            control: { type: 'color' },
        },
        $bColor: {
            control: { type: 'color' },
        },
        $bRadius: {
            control: { type: 'text' },
        },
        variant: {
            options: ['bordered', 'root', 'round-bordered', 'round-shadowed', 'rounded', 'shadowed'],
            control: { type: 'select' },
        },
    },
};
export default meta;
export var Root = {
    args: {
        children: 'Root Paper',
    },
};
export var Bordered = {
    args: {
        children: 'Bordered Paper',
        variant: 'bordered',
    },
};
export var RoundBordered = {
    args: {
        children: 'Round Bordered Paper',
        variant: 'round-bordered',
    },
};
export var Rounded = {
    args: {
        children: 'Round Paper',
        variant: 'rounded',
    },
};
export var RoundShadowed = {
    args: {
        children: 'Round Shadowed Paper',
        variant: 'round-shadowed',
    },
};
export var Shadowed = {
    args: {
        children: 'Shadowed Paper',
        variant: 'shadowed',
    },
};
