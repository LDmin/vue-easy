import { ref, reactive, watch } from 'vue'

export interface useLocalStorageOption {
  isJson?: boolean
  initValue?: any
}

const useLocalStorage = <T = any>(
  key: string,
  option?: useLocalStorageOption
) => {
  const getInitValue = () => {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, option.initValue)
      return option.initValue
    } else {
      return localStorage.getItem(key)
    }
  }
  const getJsonValue = () => {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify(option.initValue))
      return option.initValue
    } else {
      try {
        return JSON.parse(localStorage.getItem(key))
      } catch (e) {
        console.error(e)
      }
      return ''
    }
  }
  const item = option.isJson ? reactive(getJsonValue()) : ref(getInitValue())

  watch(
    () => item,
    () => {
      if (option.isJson) {
        localStorage.setItem(key, JSON.stringify(item))
      } else {
        if (item.value === undefined) {
          localStorage.removeItem(key)
        } else {
          localStorage.setItem(key, item.value)
        }
      }
    },
    {
      deep: true,
    }
  )

  return [item]
}

export default useLocalStorage
