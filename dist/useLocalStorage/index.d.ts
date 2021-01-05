export interface useLocalStorageOption {
    isJson?: boolean;
    initValue?: any;
}
declare const useLocalStorage: <T = any>(key: string, option?: useLocalStorageOption) => any[];
export default useLocalStorage;
