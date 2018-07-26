# gendiff-cli

[![Maintainability](https://api.codeclimate.com/v1/badges/0c96c255338746ec8e85/maintainability)](https://codeclimate.com/github/blazecolour/project-lvl2-s297/maintainability) 
[![Coverage Status](https://coveralls.io/repos/github/blazecolour/project-lvl2-s297/badge.svg?branch=master)](https://coveralls.io/github/blazecolour/project-lvl2-s297?branch=master) 
[![Build Status](https://travis-ci.org/blazecolour/project-lvl2-s297.svg?branch=master)](https://travis-ci.org/blazecolour/project-lvl2-s297)

[![NPM](https://nodei.co/npm/gendiff-blazecolour-2.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gendiff-blazecolour-2/)

A tool for files differences by parsing them into AST, sorting them, and comparing the stringified output. Useful for finding changes in configuration files.

## Install

### CLI:

```npm install -g gendiff-blazecolour-2```

### library:

```npm install --save gendiff-blazecolour-2```

## Usage

### CLI usage:

```bash
gendiff [options] <file1> <file2>
```

### API usage:

```js
import gendiff from 'gendiff-greybutton';

gendiff(path/to/file1, path/to/file2, format);
```

## CLI options

```
-h, --help          Output usage information
-V, --version       Output the version number
-f, --format [type] Output format [plain, string, json]
```

## Examples

Comparing two json files:

```json
{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
}
```

```json
{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}
```

```bash
$ gendiff before.json after.json
```

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


## License

**[MIT](./LICENSE.md)**