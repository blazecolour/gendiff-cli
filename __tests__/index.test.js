import fs from 'fs';
import genDiff from '../src';

describe('tree difference files', () => {
  it('JSON', () => {
    const actual = genDiff(
      '__tests__/__fixtures__/before.json',
      '__tests__/__fixtures__/after.json',
      'tree',
    );
    const expected = fs.readFileSync('__tests__/__fixtures__/treeDiff', 'utf8');
    expect(actual).toBe(expected);
  });

  it('YAML', () => {
    const actual = genDiff(
      '__tests__/__fixtures__/before.yml',
      '__tests__/__fixtures__/after.yml',
      'tree',
    );
    const expected = fs.readFileSync('__tests__/__fixtures__/treeDiff', 'utf8');
    expect(actual).toBe(expected);
  });

  it('ini', () => {
    const actual = genDiff(
      '__tests__/__fixtures__/before.ini',
      '__tests__/__fixtures__/after.ini',
      'tree',
    );
    const expected = fs.readFileSync('__tests__/__fixtures__/treeDiff', 'utf8');
    expect(actual).toBe(expected);
  });
});

describe('plain difference files', () => {
  it('JSON', () => {
    const actual = genDiff(
      '__tests__/__fixtures__/before.json',
      '__tests__/__fixtures__/after.json',
      'plain',
    );
    const expected = fs.readFileSync('__tests__/__fixtures__/plainDiff', 'utf8');
    expect(actual).toBe(expected);
  });

  it('YAML', () => {
    const actual = genDiff(
      '__tests__/__fixtures__/before.yml',
      '__tests__/__fixtures__/after.yml',
      'plain',
    );
    const expected = fs.readFileSync('__tests__/__fixtures__/plainDiff', 'utf8');
    expect(actual).toBe(expected);
  });

  it('ini', () => {
    const actual = genDiff(
      '__tests__/__fixtures__/before.ini',
      '__tests__/__fixtures__/after.ini',
      'plain',
    );
    const expected = fs.readFileSync('__tests__/__fixtures__/plainDiff', 'utf8');
    expect(actual).toBe(expected);
  });
});
