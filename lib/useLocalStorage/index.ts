import { ref, onMounted, watch, Ref } from 'vue'

export interface useLocalStorageOption {
  isJson?: boolean
  initValue?: any
}

const useLocalStorage = <T = any>(
  key: string,
  option?: useLocalStorageOption
) => {
  const item = ref(localStorage.getItem(key)) as Ref<any>
  if (typeof key !== 'string') {
    console.error('第一个参数必须是string类型！')
  }

  watch(
    () => item.value,
    (value) => {
      if (value === undefined) {
        localStorage.removeItem(key)
      } else if (option.isJson) {
        localStorage.setItem(key, JSON.stringify(value))
      } else {
        localStorage.setItem(key, value as string)
      }
    }
  )

  onMounted(() => {
    let value: string | object = ''
    if (item.value === undefined) {
      value = option && option.initValue
    } else {
      value = item.value
    }

    if (option.isJson) {
      try {
        item.value = JSON.parse(value as string)
      } catch (e) {
        console.error(e)
      }
    } else {
      item.value = value
    }
  })

  return [item]
}

export default useLocalStorage
