#!/usr/bin/env node

import commander from 'commander';
import genDiff from '..';

const program = commander;

program
  .version('2.1.0', '-v, --version')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format: tree, plain, json', 'tree')
  .arguments('<firstConfig> <secondConfig>')
  .action((before, after, options) => console.log(genDiff(before, after, options.format)))
  .parse(process.argv);
