# joyu-egg-framework

joyu-egg 基础集成框架

## 快速入门

如需进一步了解，参见 [egg 文档][egg]。

### 开发

```bash
$ npm install
$ npm test
```

将您的框架发布到 npm，然后更改应用程序的框架配置：

```json
// {app_root}/package.json
{
  "name": "your project name",
  "egg": {
    "framework": "joyu-egg-framework"
  }
}
```

### 提问 & 建议

请使用 issue [here](https://github.com/eggjs/egg/issues).

[egg]: https://eggjs.org
[knexjs]: http://knexjs.org
[egg-mongoose]: https://github.com/eggjs/egg-mongoose
[egg-unittest]: https://eggjs.org/zh-cn/core/unittest