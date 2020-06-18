"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
exports.useLocalStorage = function (key, initValue) {
    var item = vue_1.ref(localStorage.getItem(key));
    if (typeof key !== "string") {
        console.error("第一个参数必须是string类型！");
    }
    vue_1.watch(function () { return item.value; }, function () {
        localStorage.setItem(key, item.value);
    });
    vue_1.onMounted(function () {
        if (item.value === undefined || item.value === null) {
            item.value = initValue;
        }
    });
    return [item];
};
