'use strict';

const assert = require('assert');
const Mysql = require('@hyoga/mysql');

/**
 * @param  {Object} config   框架处理之后的配置项，如果应用配置了多个 MySQL 实例，会将每一个配置项分别传入并调用多次 createMysql
 * @param  {Application} app 当前的应用
 * @return {Object}          返回创建的 MySQL 实例
 */
function createMysql(config, app) {
  assert(config.host && config.user && config.database);
  // 创建实例
  const client = new Mysql(config);

  // 做启动应用前的检查
  app.beforeStart(async () => {
    const rows = await client.query('select now() as currentTime;');
    app.coreLogger.info(`[egg-mysql] init instance success, rds currentTime: ${rows[0].currentTime}`);
  });

  return client;
}

module.exports = app => {
  // 第一个参数 mysql 指定了挂载到 app 上的字段，我们可以通过 `app.mysql` 访问到 MySQL singleton 实例
  // 第二个参数 createMysql 接受两个参数(config, app)，并返回一个 MySQL 的实例
  app.addSingleton('mysql', createMysql);
};
