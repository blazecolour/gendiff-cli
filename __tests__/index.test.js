import fs from 'fs';
import genDiff from '../src';

describe('difference files', () => {
  it('tree', () => {
    const actual = genDiff(
      '__tests__/__fixtures__/before.json',
      '__tests__/__fixtures__/after.json',
    );
    const expected = fs.readFileSync('__tests__/__fixtures__/treeDiff', 'utf8');
    expect(actual).toBe(expected);
  });
});
