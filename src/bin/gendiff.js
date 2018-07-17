#!/usr/bin/env node

import commander from 'commander';
import genDiff from '..';

const program = commander;

program
  .version('2.0.2', '-v, --version')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format[type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((after, before, options) => console.log(genDiff(before, after, options.format)));

program.parse(process.argv);
