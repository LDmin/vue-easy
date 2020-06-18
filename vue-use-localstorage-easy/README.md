# 一个在 vue3 里很方便地同步 localstorage

## Getting Started 使用指南

适用于浏览器。

### Installation 安装

npm install:

```sh
npm i vue-use-localstorage-easy --save
```

### Usage example 使用示例

```
<template>
  <div>
    <input type="text" v-model="item" />
    <p>
      <button @click="setZhangSan">点我设置成张三</button>
    </p>
    <p>{{ item }}</p>
    <small>可打开控制台查看localstorage</small>
  </div>
</template>

<script>
import useLocalstorage from 'vue-use-localstorage-easy'

export default {
  name: 'App',
  setup() {
    const [item] = useLocalstorage('name', '初始化的值')

    const setZhangSan = () => (item.value = '张三')

    return {
      item,
      setZhangSan,
    }
  },
}
</script>

```

### 考虑加入的功能

- [ ] 可 reset 为初始值

## Authors 关于作者

- **LuDongmin**
