import { ref, onMounted, watch } from 'vue';
const useLocalStorage = (key, option) => {
    const item = ref(localStorage.getItem(key));
    if (typeof key !== 'string') {
        console.error('第一个参数必须是string类型！');
    }
    watch(() => item.value, (value) => {
        if (value === undefined) {
            localStorage.removeItem(key);
        }
        else if (option.isJson) {
            localStorage.setItem(key, JSON.stringify(value));
        }
        else {
            localStorage.setItem(key, value);
        }
    });
    onMounted(() => {
        let value = '';
        if (item.value === undefined) {
            value = option && option.initValue;
        }
        else {
            value = item.value;
        }
        if (option.isJson) {
            try {
                item.value = JSON.parse(value);
            }
            catch (e) {
                console.error(e);
            }
        }
        else {
            item.value = value;
        }
    });
    return [item];
};
export default useLocalStorage;
