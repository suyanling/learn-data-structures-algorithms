// 伪代码
// repeat (numOfElements - 1) times

//   set the first unsorted element as the minimum

//   for each of the unsorted elements

//     if element < currentMinimum

//       set element as new minimum

//   swap minimum with first unsorted position

function Selection(array) {
    let len = array.length;
    for(let i = 0; i < len; i ++) {
        let minimum = array[i];
        let swaped = false;
        let k = 0; // minimum的index
        for(let j = i;  j < len; j ++) {
            if(array[j] < minimum) {
                minimum = array[j];
                k = j;
                swaped = true;
            }
        }
        if(swaped) {
            array[k] = array[i];
            array[i] = minimum;
        }
    }
    return array;
}

let selection = Selection([29,10,14,37,38,59]);
console.log('selection', selection);