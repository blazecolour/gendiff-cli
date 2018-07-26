# gendiff-cli

[![Maintainability](https://api.codeclimate.com/v1/badges/0d582b2095c180cd12c3/maintainability)](https://codeclimate.com/github/blazecolour/gendiff-cli/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/blazecolour/gendiff-cli/badge.svg?branch=master)](https://coveralls.io/github/blazecolour/gendiff-cli?branch=master)
[![Build Status](https://travis-ci.org/blazecolour/gendiff-cli.svg?branch=master)](https://travis-ci.org/blazecolour/gendiff-cli)

[![NPM](https://nodei.co/npm/gendiff-blazecolour-2.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gendiff-blazecolour-2/)

A tool for files differences by parsing them into AST, sorting them, and comparing the stringified output. Useful for finding changes in configuration files.

## Install

#### CLI:

```npm install -g gendiff-blazecolour-2```

#### library:

```npm install --save gendiff-blazecolour-2```

## Usage

#### CLI usage:

```bash
$ gendiff [options] <file1> <file2>
```

#### API usage:

```js
import genDiff from 'gendiff-blazecolour-2';

genDiff('path/to/file1', 'path/to/file2', format);
```

## CLI options

```
-v, --version        Output the version number
-f, --format [type]  Output format: tree, plain, json (default: tree)
-h, --help           Output usage information
```

## Available format files

The following extensions are available for input files:

- [x] json
- [x] yml
- [x] ini

The output formats:

* tree
* plain
* json

## Examples

Comparing two json files.

#### Output

file1:

```json
{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
}
```

file2:

```json
{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}
```

#### input

tree format:

```diff
{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
  - follow: false
}
```

plain format:

```diff
Property 'timeout' was changed. From '50' to '20'
Property 'proxy' was deleted
Property 'follow' was deleted
Property 'verbose' was added with value: 'true'
```

## Asciinema

[![asciicast](https://asciinema.org/a/193582.png)](https://asciinema.org/a/193582)

## License

**[MIT](./LICENSE.md)**