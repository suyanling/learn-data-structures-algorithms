// for each (unsorted) partition

// set first element as pivot

//   storeIndex = pivotIndex + 1

//   for i = pivotIndex + 1 to rightmostIndex

//     if element[i] < element[pivot]

//       swap(i, storeIndex); storeIndex++

//   swap(pivot, storeIndex - 1)

function QuickSort(array) {
    let len = array.length;
    if(len < 2) {
        return array;
    }
    let pivotIndex = len - 1;
    let storeIndex = 0; // 是一轮排序之后，pivot新的位置
    for(let i = 0; i < len - 1; i ++) {
        if(array[i] < array[pivotIndex]) { 
            [array[storeIndex], array[i]] = [array[i], array[storeIndex]]; //  swap(i, storeIndex);
            storeIndex ++; 
        }
    }
    [array[pivotIndex], array[storeIndex]] = [array[storeIndex], array[pivotIndex]];
    return [
        ...QuickSort(array.slice(0, storeIndex)),
        array[storeIndex],
        ...QuickSort(array.slice(storeIndex + 1)),
    ]
}
let test = QuickSort([6, 5, 1, 3, 8, 4, 7, 9, 2]);
console.log('test', test);

// 下面是最能体现快排思想的，作者是知乎一个答主
let qsort = fn =>([x,...xs]) => x == null ? []
  : [
     ...qsort(fn)(xs.filter(a=>fn(a,x))),
     x,
     ...qsort(fn)(xs.filter(a=>!fn(a,x)))
    ]

let test1 = qsort((a,b)=>a<b)([6, 5, 1, 3, 8, 4, 7, 9, 2]);
console.log('test1', test1)


