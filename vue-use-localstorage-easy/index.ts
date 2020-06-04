import { ref, onMounted, watch } from 'vue'

export default (key: string, initValue: any) => {
  const item = ref(localStorage.getItem(key))
  if (typeof key !== 'string') {
    console.error('第一个参数必须是string类型！')
  }

  watch(
    () => item.value,
    () => {
      localStorage.setItem(key, item.value)
    }
  )

  onMounted(() => {
    if (item.value === undefined || item.value === null) {
      item.value = initValue
    }
  })

  return [item]
}
