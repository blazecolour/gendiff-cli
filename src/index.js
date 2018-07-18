import fs from 'fs';
import path from 'path';
import getParser from './parser';
import buildAst from './ast';
import render from './renderer';

const genDiff = (file1, file2) => {
  const data1 = fs.readFileSync(file1, 'utf8');
  const data2 = fs.readFileSync(file2, 'utf8');
  const fileExt = path.extname(file1);
  const obj1 = getParser(fileExt)(data1);
  const obj2 = getParser(fileExt)(data2);
  const ast = buildAst(obj1, obj2);
  return render(ast);
};

export default genDiff;
