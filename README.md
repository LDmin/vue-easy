# vue3-setup

vue3 简单钩子。欢迎提出建议或者 bug。
[github](https://github.com/LDmin/vue3-setup.git)

### Installation 安装

npm install:

```sh
npm i vue3-setup --save
```

### Usage example 使用示例

#### 1. useLocalstorage

```
<template>
  <input type="text" v-model="name" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLocalStorage } from 'vue3-setup'

export default defineComponent({
  name: 'App',
  setup() {
    const [name] = useLocalStorage('name', '默认值')
    return {
      name,
    }
  },
})
</script>
```

打开 localStorage, 修改输入框的值，对应的打开 localStorage 值也相应改变。
