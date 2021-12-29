//Thursday: Sum All Numbers in a Range
//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them

function sumAll(arr){
    let i = arr[0]<arr[1]? arr[0]:arr[1];
    let j= arr[0]>arr[1]? arr[0]: arr[1];
    let sum=0;

    for (i; i<=j; i++) {
        sum+=i;
    }
    return sum;
}

let X=[1,4];
let Y=[4,1];
let Z =[5,10];

console.log(sumAll(X));
console.log(sumAll(Y));
console.log(sumAll(Z));