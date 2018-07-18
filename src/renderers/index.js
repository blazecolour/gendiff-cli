import treeRender from './treeRenderer';
import plainRender from './plainRenderer';

const renderers = {
  tree: treeRender,
  plain: plainRender,
};

export default format => renderers[format];
