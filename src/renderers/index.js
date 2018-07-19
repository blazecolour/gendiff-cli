import treeRender from './treeRenderer';
import plainRender from './plainRenderer';
import jsonRender from './jsonRenderer';

const renderers = {
  tree: treeRender,
  plain: plainRender,
  json: jsonRender,
};

export default format => renderers[format];
