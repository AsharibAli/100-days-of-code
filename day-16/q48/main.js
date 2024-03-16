var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var mergedArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
console.log(mergedArray);
