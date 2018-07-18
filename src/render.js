import _ from 'lodash';

const stringify = (value, depth = 1, defaultTab = 4) => {
  const tab = depth * defaultTab;
  if (!_.isObject(value)) {
    return value;
  }
  const body = Object.keys(value)
    .map(key => `${' '.repeat(tab)}${key}: ${stringify(value[key], depth + 1)}`)
    .join('\n');
  return `{\n${body}\n${' '.repeat(tab - defaultTab)}}`;
};

const getRender = (ast, depth = 1, defaultTab = 4) => {
  const tab = depth * defaultTab;

  const buildStr = (name, value, symb = ' ') => (
    `${' '.repeat(tab - 2)}${symb} ${name}: ${stringify(value, depth + 1)}`);

  const handlers = {
    nested: node => `${' '.repeat(tab)}${node.key}: ${getRender(node.children, depth + 1)}`,
    unchanged: node => buildStr(node.key, node.value),
    changed: node => [
      buildStr(node.key, node.afterValue, '+'),
      buildStr(node.key, node.beforeValue, '-'),
    ],
    added: node => buildStr(node.key, node.value, '+'),
    deleted: node => buildStr(node.key, node.value, '-'),
  };

  const result = _.flatten(ast.map(node => handlers[node.typeNode](node))).join('\n');
  return `{\n${result}\n${' '.repeat(tab - defaultTab)}}`;
};

export default getRender;
