# UniSMS Node.js SDK

[UniSMS](https://unisms.apistd.com/) - 高可用聚合短信服务平台官方 Node.js SDK.

## 文档

查看完整产品介绍与 API 文档请访问 [UniSMS Documentation](https://unisms.apistd.com/docs).

## 安装

Uni Node.js SDK 使用 npm 托管，可从公共 [npm 仓库](https://www.npmjs.com/package/unisms) 中获得。

在项目中添加 `unisms` 作为依赖：

```bash
npm i unisms
```

或使用 Yarn：

```bash
yarn add unisms
```

## 使用示例

以下示例展示如何使用 Uni Node.js SDK 快速调用服务。

### 发送短信

```js

import UniSMS from 'unisms'

// 初始化
const client = new UniSMS({
  accessKeyId: 'your access key id',
  accessKeySecret: 'your access key secret',
})

// 发送短信
client.send({
  to: 'your phone number',
  signature: 'UniSMS',
  templateId: 'login_tmpl',
  templateData: {
    code: 8888,
  },
})
  .then(ret => {
    console.info('Result:', ret)
  })
  .catch(e => {
    console.error(e)
  })

```

## 相关参考

### 其他语言 SDK

- [Java](https://github.com/apistd/uni-java-sdk)
- [PHP](https://github.com/apistd/uni-php-sdk)
