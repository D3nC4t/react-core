import {
  Children,
  isValidElement
} from 'react';
export default function extractTextFromElement(children) {
  var text = '';
  Children.forEach(children, function(child) {
    var addText = null;
    if (typeof child === 'string' || typeof child === 'number') {
      // Directly extract text or number type children
      addText = child.toString();
    } else if (isValidElement(child) && child.props.children) {
      // Recursively extract text if it is a React element with children
      addText = extractTextFromElement(child.props.children);
    }
    text += text !== '' ? " ".concat(addText) : addText;
  });
  return text;
}
