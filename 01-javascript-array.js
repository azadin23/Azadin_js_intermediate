const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(param1) {
    start = 0;
    end = param1.length-1;
while (start < end){
    let temp = param1[start];
    param1[start] = param1[end];
    param1[end] = temp;
    start = start + 1;
    end = end - 1;
}
return param1;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);
