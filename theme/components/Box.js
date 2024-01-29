var Box = function (theme) { return ({
    C4tBox: {
        defaultProps: {},
        variants: {
            'root': {
                styles: {
                    padding: theme.spacing.s,
                },
            },
            'auto-fit': {
                styles: {
                    alignItems: 'center',
                    blockSize: 'fit-content',
                    display: 'flex',
                    justifyContent: 'center',
                    width: 'fit-content',
                },
            },
            'auto-fit-no-padding': {
                styles: {
                    alignItems: 'center',
                    blockSize: 'fit-content',
                    display: 'flex',
                    justifyContent: 'center',
                    width: 'fit-content',
                    padding: 0,
                },
            },
            'centered': {
                styles: {
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    textAlign: 'center',
                },
            },
            'flex-column': {
                props: {
                    $gap: theme.spacing.sm,
                },
                styles: {
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                },
            },
            'flex-column-no-padding': {
                props: {
                    $gap: theme.spacing.sm,
                },
                styles: {
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0,
                    padding: 0,
                },
            },
            'flex-row': {
                props: {
                    $gap: theme.spacing.sm,
                },
                styles: {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                },
            },
            'flex-row-no-padding': {
                props: {
                    $gap: theme.spacing.sm,
                },
                styles: {
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 0,
                    padding: 0,
                },
            },
            'flex-grow': {
                props: {
                    $gap: theme.spacing.sm,
                },
                styles: {
                    display: 'flex',
                    flexGrow: 1,
                },
            },
            'flex-grow-no-padding': {
                props: {
                    $gap: theme.spacing.sm,
                },
                styles: {
                    display: 'flex',
                    flexGrow: 1,
                    padding: 0,
                },
            },
            'bordered': {
                props: {
                    $bColor: 'grey',
                    $bColorVariant: 'light',
                    $bSize: theme.shape.border.size,
                    $bUnit: theme.shape.border.unit,
                },
                styles: {},
            },
            'invisible': {
                styles: {
                    height: 0,
                    opacity: 0,
                    padding: 0,
                    width: 0,
                },
            },
            'no-padding': {
                styles: {
                    padding: 0,
                },
            },
        },
    },
}); };
export default Box;
