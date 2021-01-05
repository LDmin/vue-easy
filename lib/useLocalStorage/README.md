### Usage example 使用示例

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

打开 localStorage, 修改输入框的值，对应的 localStorage 值也相应改变。
