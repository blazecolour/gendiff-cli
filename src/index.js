import fs from 'fs';
import path from 'path';
import getParsers from './parsers';
import buildAst from './ast';
import getRender from './render';

const genDiff = (file1, file2) => {
  const data1 = fs.readFileSync(file1, 'utf8');
  const data2 = fs.readFileSync(file2, 'utf8');
  const fileExt = path.extname(file1);
  const obj1 = getParsers(fileExt)(data1);
  const obj2 = getParsers(fileExt)(data2);
  const ast = buildAst(obj1, obj2);
  return getRender(ast);
};

export default genDiff;
