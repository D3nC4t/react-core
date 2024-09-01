import kebabCaseToCamelCase from './kebebCaseToCamelCase';
export default function kebabCaseToPascalCase(str) {
  var camelCase = kebabCaseToCamelCase(str);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}
