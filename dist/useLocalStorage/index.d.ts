import { Ref } from 'vue';
export interface useLocalStorageOption {
    isJson?: boolean;
    initValue?: any;
}
declare const useLocalStorage: <T = any>(key: string, option?: useLocalStorageOption) => Ref<any>[];
export default useLocalStorage;
