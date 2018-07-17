#!/usr/bin/env node

import commander from 'commander';

const program = commander;

program
  .version('0.1.3', '-v, --version')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format[type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .parse(process.argv);
