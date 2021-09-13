# joyu-egg-framework

joyu-egg base integration framework

## QuickStart

see [egg docs][egg] for more detail.

### Development

```bash
$ npm install
$ npm test
```

publish your framework to npm, then change app's framework config:

```json
// {app_root}/package.json
{
  "name": "your project name",
  "egg": {
    "framework": "joyu-egg-framework"
  }
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

[egg]: https://eggjs.org
[knexjs]: http://knexjs.org
[egg-mongoose]: https://github.com/eggjs/egg-mongoose
[egg-unittest]: https://eggjs.org/zh-cn/core/unittest