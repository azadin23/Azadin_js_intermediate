

const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(param) { 
    let data = [];
    for(let i = 0;i < param.length; i++){
        data[i] = param[i];
    }
    return data.reverse();
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);