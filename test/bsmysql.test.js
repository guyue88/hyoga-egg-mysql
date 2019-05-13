'use strict';

const mock = require('egg-mock');

describe('test/bsmysql.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/bsmysql-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, bsmysql')
      .expect(200);
  });
});
