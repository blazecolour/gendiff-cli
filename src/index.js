import fs from 'fs';
import path from 'path';
import getParser from './parser';
import buildAst from './ast';
import getRenderer from './renderers';

const genDiff = (file1, file2, format) => {
  const data1 = fs.readFileSync(file1, 'utf8');
  const data2 = fs.readFileSync(file2, 'utf8');
  const extension = path.extname(file1);
  const obj1 = getParser(extension)(data1);
  const obj2 = getParser(extension)(data2);
  const ast = buildAst(obj1, obj2);
  const render = getRenderer(format);
  return render(ast);
};

export default genDiff;
