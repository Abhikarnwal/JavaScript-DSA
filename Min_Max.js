//Given an array A of size N of integers.
// Your task is to find the sum of minimum and maximum element in the array.

//Input:
// N = 5
// A[] = {-2, 1, -4, 5, 3}
// Output: 1
// Explanation: min = -4, max =  5. Sum = -4 + 5 = 1

//Output

let N = 5
let A = [-2, 1, -4, 5, 3]


function min_max(N,A){

    let Max=Number.NEGATIVE_INFINITY;
    let Min=Number.POSITIVE_INFINITY;

for(let i=0;i<N;i++){
    
    if(Max<A[i]){
        Max=A[i];
    }
    if(Min>A[i]){
        Min=A[i];
    }
}

// console.log(Max,Min)

console.log(Max+Min)

}

min_max(N,A);