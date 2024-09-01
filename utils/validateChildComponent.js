import {
  isValidElement
} from 'react';
import {
  throwError
} from '../error';
export default function validateChildComponent(name, node, expectedName, expected, preventError) {
  if (preventError === void 0) {
    preventError = false;
  }
  if (!isValidElement(node) || !(node.type === expected ||
      (node.type && 'render' in node.type && node.type.render === expected.render) ||
      (node.type.prototype && node.type.prototype instanceof expected))) {
    if (process.env.NODE_ENV !== 'production' && !preventError) {
      throwError('COT-1002', {
        name: name,
        expectedName: expectedName
      }).then(function() {});
    }
    return false;
  }
  return true;
}
export function validateChildComponentByTypes(name, node, expected, preventError) {
  if (preventError === void 0) {
    preventError = false;
  }
  for (var expectedName in expected) {
    if (validateChildComponent(name, node, expectedName, expected[expectedName], preventError)) {
      return true;
    }
  }
  return false;
}
