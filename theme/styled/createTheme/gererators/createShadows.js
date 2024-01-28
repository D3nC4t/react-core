var createShadows = function (theme) {
    var shadow = theme.shape.shadow;
    var shadows = {};
    shadows.bottom = {
        offset: {
            x: 0,
            y: shadow.offset.y,
        },
        blur: shadow.blur,
        spread: shadow.spread,
        color: shadow.color,
        unit: shadow.unit,
    };
    shadows.bottomLeft = {
        offset: {
            x: -shadow.offset.x,
            y: shadow.offset.y,
        },
        blur: shadow.blur,
        spread: shadow.spread,
        color: shadow.color,
        unit: shadow.unit,
    };
    shadows.bottomRight = {
        offset: {
            x: shadow.offset.x,
            y: shadow.offset.y,
        },
        blur: shadow.blur,
        spread: shadow.spread,
        color: shadow.color,
        unit: shadow.unit,
    };
    shadows.left = {
        offset: {
            x: -shadow.offset.x,
            y: 0,
        },
        blur: shadow.blur,
        spread: shadow.spread,
        color: shadow.color,
        unit: shadow.unit,
    };
    shadows.right = {
        offset: {
            x: shadow.offset.x,
            y: 0,
        },
        blur: shadow.blur,
        spread: shadow.spread,
        color: shadow.color,
        unit: shadow.unit,
    };
    shadows.top = {
        offset: {
            x: 0,
            y: -shadow.offset.y,
        },
        blur: shadow.blur,
        spread: shadow.spread,
        color: shadow.color,
        unit: shadow.unit,
    };
    shadows.topLeft = {
        offset: {
            x: -shadow.offset.x,
            y: -shadow.offset.y,
        },
        blur: shadow.blur,
        spread: shadow.spread,
        color: shadow.color,
        unit: shadow.unit,
    };
    shadows.topRight = {
        offset: {
            x: shadow.offset.x,
            y: -shadow.offset.y,
        },
        blur: shadow.blur,
        spread: shadow.spread,
        color: shadow.color,
        unit: shadow.unit,
    };
    return shadows;
};
export default createShadows;
