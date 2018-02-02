
function Bubble(array) {
    let len = array.length;
    for(let i = 1; i < len; i ++) {
        let swapped = false;
        for (let j = 1; j <= len - i; j ++){
            if(array[j - 1] < array[j]) {
                let tmp = array[j - 1];
                    array[j - 1] = array[j];
                    array[j] = tmp;
                    swapped = true;
            }
        }
        if(!swapped) {
            break;
        }
    }
    return array
}
let bubble = Bubble([29,10,14,37,38, 59]);
console.log('bubble', bubble)