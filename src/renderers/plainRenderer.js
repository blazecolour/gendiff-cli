import _ from 'lodash';

const types = [
  {
    check: arg => (_.isBoolean(arg)),
    process: arg => (`'${arg}'`),
  },
  {
    check: arg => (_.isString(arg)),
    process: arg => (`'${arg}'`),
  },
  {
    check: arg => (_.isObject(arg)),
    process: () => 'complex value',
  },
];

const getTypes = arg => types.find(({ check }) => check(arg));

const getValue = (arg) => {
  const { process } = getTypes(arg);
  return process(arg);
};

const plainRender = (ast, parent = '') => {
  const buildStr = (node, body = '') => `Property '${parent}${node.key}' was ${node.typeNode}${body}`;

  const handlers = {
    nested: node => `${plainRender(node.children, `${parent}${node.key}.`)}`,
    changed: (node) => {
      const body = `. From ${getValue(node.beforeValue)} to ${getValue(node.afterValue)}`;
      return buildStr(node, body);
    },
    added: (node) => {
      const stringify = ` with ${_.isObject(node.value)
        ? 'complex value'
        : `value: ${getValue(node.value)}`}`;
      return buildStr(node, stringify);
    },
    deleted: node => buildStr(node),
  };

  const filtered = ast.filter(node => node.typeNode !== 'unchanged');
  return filtered.map(node => handlers[node.typeNode](node)).join('\n');
};

export default plainRender;
