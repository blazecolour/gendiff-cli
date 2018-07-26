import fs from 'fs';
import genDiff from '../src';

const beforeJson = '__tests__/__fixtures__/before.json';
const afterJson = '__tests__/__fixtures__/after.json';
const beforeYaml = '__tests__/__fixtures__/before.yml';
const afterYaml = '__tests__/__fixtures__/after.yml';
const beforeIni = '__tests__/__fixtures__/before.ini';
const afterIni = '__tests__/__fixtures__/after.ini';
const treeDiff = '__tests__/__fixtures__/treeDiff';
const plainDiff = '__tests__/__fixtures__/plainDiff';
const jsonDiff = '__tests__/__fixtures__/jsonDiff';

describe('tree difference files', () => {
  it('JSON', () => {
    const actual = genDiff(beforeJson, afterJson, 'tree');
    const expected = fs.readFileSync(treeDiff, 'utf8');
    expect(actual).toBe(expected);
  });

  it('YAML', () => {
    const actual = genDiff(beforeYaml, afterYaml, 'tree');
    const expected = fs.readFileSync(treeDiff, 'utf8');
    expect(actual).toBe(expected);
  });

  it('ini', () => {
    const actual = genDiff(beforeIni, afterIni, 'tree');
    const expected = fs.readFileSync(treeDiff, 'utf8');
    expect(actual).toBe(expected);
  });
});

describe('plain difference files', () => {
  it('JSON', () => {
    const actual = genDiff(beforeJson, afterJson, 'plain');
    const expected = fs.readFileSync(plainDiff, 'utf8');
    expect(actual).toBe(expected);
  });

  it('YAML', () => {
    const actual = genDiff(beforeYaml, afterYaml, 'plain');
    const expected = fs.readFileSync(plainDiff, 'utf8');
    expect(actual).toBe(expected);
  });

  it('ini', () => {
    const actual = genDiff(beforeIni, afterIni, 'plain');
    const expected = fs.readFileSync(plainDiff, 'utf8');
    expect(actual).toBe(expected);
  });
});

describe('JSON difference files', () => {
  it('JSON', () => {
    const actual = genDiff(beforeJson, afterJson, 'json');
    const expected = fs.readFileSync(jsonDiff, 'utf8');
    expect(actual).toBe(expected);
  });

  it('YAML', () => {
    const actual = genDiff(beforeYaml, afterYaml, 'json');
    const expected = fs.readFileSync(jsonDiff, 'utf8');
    expect(actual).toBe(expected);
  });

  it('ini', () => {
    const actual = genDiff(beforeIni, afterIni, 'json');
    const expected = fs.readFileSync(jsonDiff, 'utf8');
    expect(actual).toBe(expected);
  });
});
