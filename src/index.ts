namespace sharedElement {
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

  // TypeScript dosyaları, .ts uzantılı dosya formatında yazılır ve daha sonra
  // TypeScript derleyicisi kullanılarak .js uzantılı JavaScript dosyalarına derlenir.

  export function findCommon(arr1: number[], arr2: number[]): number[] {
    const setOne = new Set(arr1)
    const commonElement: number[] = []
    for (const item of arr2) {
      if (setOne.has(item)) {
        commonElement.push(item)
      }
    }
    return commonElement
  }

  export function findMostRepeated(arr: number[]): number {
    const counts: { [key: number]: number } = {}
    let maxCount = 0
    let mostRepeateds: number[] = []

    for (const item of arr) {
      counts[item] = (counts[item] || 0) + 1

      if (counts[item] > maxCount) {
        maxCount = counts[item]
        mostRepeateds = [item]
      } else if (counts[item] === maxCount) {
        mostRepeateds.push(item)
      }
    }
    if (mostRepeateds.length === 1) {
      return mostRepeateds[0]
    } else {
      return Math.max(...mostRepeateds)
    }
  }
}

const arr1 = [0, 1, 2, 3, 4]
const arr2 = [3, 2, 6, 8, 3]

const sharedElem = sharedElement.findCommon(arr1, arr2)
console.log('Shared Elements: ' + sharedElem)

const mostRepeated = sharedElement.findMostRepeated(sharedElem)
console.log(mostRepeated)
