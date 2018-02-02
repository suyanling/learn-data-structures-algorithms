// 将序列每相邻两个数字进行归并操作，ceil(n/2)个序列，排序后每个序列包含两/一个元素
// 若此时序列数不是1个则将上述序列再次归并，形成 ceil(n/4)个序列，每个序列包含四/三个元素
// 重复步骤2，直到所有元素排序完毕，即序列数为1

// split each element into partitions of size 1

// recursively merge adjancent partitions

//   for i = leftPartStartIndex to rightPartLastIndex inclusive

//     if leftPartHeadValue <= rightPartHeadValue

//       copy leftPartHeadValue

//     else: copy rightPartHeadValue; Increase InvIdx

// copy elements back to original array

function MergeSort(array) {
    let len = array.length;
    if (len < 2) return array;
    let mid = parseInt(len / 2); // 分治合并
    return merge(MergeSort(array.slice(0, mid)), MergeSort(array.slice(mid)));
}
function merge(left, right) {
    let final = []; // 合并之后存放的位置
    let leftLen = left.length;
    let rightLen = right.length;
    let i = 0, j = 0; 
    if(leftLen && rightLen) {
        for (; i < leftLen, j < rightLen ; ) {
            if(left[i] < right[j]) {
                final.push(left[i]);
                i ++;
            }else {
                final.push(right[j]);
                j ++;
            }
        }
    }
    final = final.concat(left.slice(i)).concat(right.slice(j));
    return final;
}

let test = MergeSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]);
console.log('test', test);