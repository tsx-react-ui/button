# @tsx-react-ui/button

* 作者：maqing01
* 邮箱：475986855@qq.com

## 介绍

_The button component of the react written in Typescript_

---

## 安装

组件使用 `npm` 进行管理，请使用以下命令进行组件安装：

```
npm i @tsx-react-ui/button --save
```

- 安装cnpm `npm install -g cnpm --registry=https://registry.npm.taobao.org`

---

## 使用

### 样例文档

- 待开发

### 使用
最少配置参数为：
```jsx
<Button />
```
配置参数实现带有子元素的吸底按钮使用方式为：
```jsx
<Button
    type="blue-white"
    position="fixed"
    handle={() => console.log('被触发！')} >
    <a style={{display: "block", width: "100%", height: "100%"}} href="/">去首页</a>
</Button>
```
### 配置参数

| Prop | Type | Default | Description |
| ---- |:----:|:-------:| :----------:|
| **`content`** | `string` | `undefined` | 按钮内容 |
| **`type`** | `string` | `undefined` | 按钮类型（颜色） |
| **`size`** | `string` | `undefined` | 按钮大小 |
| **`position`** | `string` | `undefined` | 按钮位置（正常文档流内还是吸底） |
| **`className`** | `string` | `undefined` | 按钮自定义样式 |
| **`disabled`** | `string/boolean` | `false` | 按钮是否可点击 |
| **`href`** | `string` | `undefined` | 按钮点击后的跳转链接 |
| **`handle`** | `func` | `undefined` | 点击触发事件 |

---

## 注意事项

- 组件注意事项

---

## 开发调试

进入项目目录后，使用 `node` 命令启动服务

```
npm run start
```

打包发布可通过 `node` 命令执行

```
npm run build
npm publish
```

---

## 相关资料

* [@tsx-react-ui/组件开发规范](http://)

---

## Changelog

---
