### Usage example 使用示例

```
<template>
  <input type="text" v-model="name" />
  <button @click="name = '李四'">设置成李四</button>
  <button @click="name = undefined">删除 name</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLocalStorage } from 'vue3-setup'

export default defineComponent({
  name: 'App',
  setup() {
    const [name] = useLocalStorage('name', '张三')
    return {
      name,
    }
  },
})
</script>
```

打开 localStorage, 修改输入框的值，对应的 localStorage 值也相应改变。值设置成 undefined 即可删除。
如果想删除值，只需设置为 undefined 即可，此时不应该设置初始值 initValue。

#### option

| 属性      | 类型    | 默认值 |
| --------- | ------- | ------ |
| isJson    | boolean | false  |
| initValue | any     | 无     |
