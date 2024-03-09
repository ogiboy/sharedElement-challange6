"use strict";
var sharedElement;
(function (sharedElement) {
    // Challenge 6
    //
    // Beklenenler:
    // TypeScript dosyaları nasıl derlenir?
    // verilen iki dizi için;
    // 1: ortak elemanların olduğu
    // 2: en çok tekrar eden elemanı
    // bulan programı yazın
    //
    // Örnek Çıktı:
    // Verilen dizi 1: [0,1,2,3,4]
    // Verilen dizi 2: [3,2,6,8,3]
    // ortak eleman dizisi: [2,3]
    // en çok tekrar eden eleman: 3
    // EN ÇOK TEKRAR EDEN
    // ORTAK ELEMAN DİZİSİ
    function findCommon(arr1, arr2) {
        var setOne = new Set(arr1);
        var commonElement = [];
        for (var _i = 0, arr2_1 = arr2; _i < arr2_1.length; _i++) {
            var item = arr2_1[_i];
            if (setOne.has(item)) {
                commonElement.push(item);
            }
        }
        return commonElement;
    }
    sharedElement.findCommon = findCommon;
    function findMostRepeated(arr) {
        var counts = {};
        var maxCount = 0;
        var mostRepeateds = [];
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            counts[item] = (counts[item] || 0) + 1;
            if (counts[item] > maxCount) {
                maxCount = counts[item];
                mostRepeateds = [item];
            }
            else if (counts[item] === maxCount) {
                mostRepeateds.push(item);
            }
        }
        if (mostRepeateds.length === 1) {
            return mostRepeateds[0];
        }
        else {
            return Math.max.apply(Math, mostRepeateds);
        }
    }
    sharedElement.findMostRepeated = findMostRepeated;
})(sharedElement || (sharedElement = {}));
var arr1 = [0, 1, 2, 3, 4];
var arr2 = [3, 2, 6, 8, 3];
var sharedElem = sharedElement.findCommon(arr1, arr2);
console.log('Shared Elements: ' + sharedElem);
var mostRepeated = sharedElement.findMostRepeated(sharedElem);
console.log(mostRepeated);
//# sourceMappingURL=index.js.map