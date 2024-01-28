var Paper = function (theme) { return ({
    C4tPaper: {
        defaultProps: {
            $bgColor: 'white.main',
        },
        variants: {
            'root': {
                styles: {
                    padding: theme.spacing.s,
                },
            },
            'bordered': {
                props: {
                    $bSize: theme.shape.border.size,
                    $bUnit: theme.shape.border.unit,
                },
                styles: {},
            },
            'round-bordered': {
                props: {
                    $bRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
                    $bSize: theme.shape.border.size,
                    $bUnit: theme.shape.border.unit,
                },
                styles: {},
            },
            'rounded': {
                props: {
                    $bRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
                },
                styles: {},
            },
            'round-shadowed': {
                props: {
                    $bShadow: 'bottomRight',
                    $bRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
                },
                styles: {},
            },
            'shadowed': {
                props: {
                    $bShadow: 'bottomRight',
                },
                styles: {},
            },
        },
    },
}); };
export default Paper;
