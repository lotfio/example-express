const conf = require('../../app/config/index');
const path = require('path');

test('app config contains port', () => {
    expect(conf.app).toEqual(
        expect.objectContaining({
          port: 8080
        })
      );
});

test('path config contains views', () => {
  expect(conf.path).toEqual(
      expect.objectContaining({
        views: path.join(path.dirname(path.dirname(__dirname)), path.sep + "app" + path.sep + 'views')
      })
    );
});

test('link config contains assets', () => {
  expect(conf.link).toEqual(
      expect.objectContaining({
        assets: conf.app.host + ":" + conf.app.port + "/static/assets/"
      })
    );
});