// mark first element as sorted

// for each unsorted element X

//   'extract' the element X

//   for j = lastSortedIndex down to 0

//     if current element j > X

//       move sorted element to the right by 1

//     break loop and insert X here

function Insert(array) {
    let len = array.length;
    for (let i = 1; i < len; i ++) {
        let current = array[i];
        let inserIndex = i;
        for(let j = i - 1; j >= 0; j -- ) {
            if(array[j] > current) {
                array[j + 1] = array[j];
                inserIndex = j;
            }
        }
        array[inserIndex] = current;
    }
    return array;
}
let insert = Insert([3,44,38,5,47,15,36,5,26,27,2,46,4,19,50,48]);
console.log('insert', insert);