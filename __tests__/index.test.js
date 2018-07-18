import fs from 'fs';
import genDiff from '../src';

describe('difference files', () => {
  it('JSON', () => {
    const actual = genDiff(
      '__tests__/__fixtures__/before.json',
      '__tests__/__fixtures__/after.json',
    );
    const expected = fs.readFileSync('__tests__/__fixtures__/treeDiff', 'utf8');
    expect(actual).toBe(expected);
  });

  it('YAML', () => {
    const actual = genDiff(
      '__tests__/__fixtures__/before.yml',
      '__tests__/__fixtures__/after.yml',
    );
    const expected = fs.readFileSync('__tests__/__fixtures__/treeDiff', 'utf8');
    expect(actual).toBe(expected);
  });

  it('ini', () => {
    const actual = genDiff(
      '__tests__/__fixtures__/before.ini',
      '__tests__/__fixtures__/after.ini',
    );
    const expected = fs.readFileSync('__tests__/__fixtures__/treeDiff', 'utf8');
    expect(actual).toBe(expected);
  });
});
