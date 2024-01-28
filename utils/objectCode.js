import { isValidElement } from 'react';
export default function objectCode(object) {
    var json = JSON.stringify(object, replacer);
    var hash = 0;
    for (var i = 0; i < json.length; i++) {
        var code = json.charCodeAt(i);
        hash = ((hash << 5) - hash) + code;
        hash = hash & hash;
    }
    function replacer(key, value) {
        if (isValidElement(value)) {
            return {
                type: value.type.displayName || value.type.name || value.type,
                props: value.props,
            };
        }
        if (value && typeof value === 'object' && 'outerHTML' in value && value.outerHTML) {
            return value.outerHTML;
        }
        if (typeof value === 'function') {
            return value.name || 'function' + (value.displayName || '');
        }
        return value;
    }
    return hash;
}
