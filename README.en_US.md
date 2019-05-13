# @hyoga/egg-mysql

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@hyoga/egg-mysql.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@hyoga/egg-mysql
[download-image]: https://img.shields.io/npm/dm/@hyoga/egg-mysql.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/@hyoga/egg-mysql

<!--
Description here.
-->

## Install

```bash
$ npm i @hyoga/egg-mysql --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.mysql = {
  enable: true,
  package: '@hyoga/egg-mysql',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.mysql = {
  mysql: {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '',
      database: 'db',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/AspenLuoQiang/hyoga-egg-mysql/issues).

## License

[MIT](LICENSE)
