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

一个EGGJS的MySQL操作库，使用链式操作，方便快捷实现数据库操作。

## 依赖说明

### 依赖的 egg 版本

@hyoga/egg-mysql 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

<!-- ### 依赖的插件 -->
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 使用场景

- eggjs使用mysql操作时，链式操作: mysql.table('user').field('name, id').select()
- 插件依赖于`@hyoga/mysql`，更多API请查看[@hyoga/mysql](https://www.npmjs.com/package/@hyoga/mysql)

## 安装

```bash
$ npm i @hyoga/egg-mysql --save
```

## 使用

```js
// {app_root}/config/plugin.js
exports.mysql = {
  enable: true,
  package: '@hyoga/egg-mysql',
};

// {app_root}/app/service/user.js
export default class User extends Service {
  private table = 'user';

  public async list() {
    // sql = SELECT * FROM user WHERE status = 1
    return this.app.mysql.table(this.table).where({ status: 1 }).select();
  }
}
```

## 配置

```js
// {app_root}/config/config.default.js
exports.mysql = {
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
};
```

## API
该插件依赖于[@hyoga/mysql](https://www.npmjs.com/package/@hyoga/mysql)，更多API，请移步查看。

## 提问交流

请到 [hyoga-egg-mysql](https://github.com/AspenLuoQiang/hyoga-egg-mysql/issues) 移步交流。

## License

[MIT](LICENSE)
