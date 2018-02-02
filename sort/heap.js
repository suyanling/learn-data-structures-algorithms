/* 
堆排序steps
1 先创建有序堆
2 取出堆顶元素
3 重新调整堆为有序堆
4 循环2，3,直到堆无元素
*/

let oldArr = [10, 2, 26, 25, 19, 17, 1, 90, 3, 36];
let arr = []; 
let result = []; // 返回的结果的一个数组

/* 
 * 把二叉堆节点从1编号到N，以此作为数组下标, 
 * a[0]没有存放任何值！ 数组是从a[1]开始存放的 
*/
function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function swim(k) {
    while(k > 1 && arr[k] > arr[parseInt(k / 2)]) { 
        // 当子节点大于父节点时，子节点和父节点交换
        swap(k, parseInt(k / 2));
        k = parseInt(k / 2);
    }
}

function sink(k) {
    while(k < Math.ceil(arr.length / 2) && arr[2 * k]) { // 父节点个子节点交换 所以要保证子节点存在
        let maxIndex = 2 * k;
        if(arr[2 * k + 1]) { 
            arr[2 * k + 1] > arr[2 * k] ? maxIndex = 2 * k + 1 : maxIndex = 2 * k;
        }
        if(arr[maxIndex] > arr[k]) {
            swap(k, maxIndex);
        }
        k = maxIndex;
    }
}

function create() {
    for(let i = 0; i < oldArr.length; i ++) {
        arr[i + 1] = oldArr[i];
        swim(i);
    }
}

function deleteMax() {
    result.push(arr[1]); // result是最终排序之后的数组 每次加入最大堆的第一个元素
    /* 
        把最大堆的第一个元素和最后一个元素交换，
        打乱堆的顺序，重新建立有序堆。
    */
    swap(1, arr.length - 1);
    arr.splice(arr.length - 1, 1);
    sink(1);
}

function Heap() {
    create();
    for(let i = 1; i <= oldArr.length; i ++) {
        deleteMax();
    }
}

Heap();
console.log('result', result)