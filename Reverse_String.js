// You are given a string s. You need to reverse the string.


// Input:
// s = Geeks

// Output: skeeG


let A=[1,3,4,"abc",5,6,"fhj"];

// let s = "Geeks"

function reverseStr(A){
     
    A.reverse();

     for(let i=0;i<A.length;i++){
    
       if(typeof A[i]=="string"){

        A[i] = A[i].split('').arr.reverse().join('');

       }
      

     }

     console.log(A);
  
}

reverseStr(A)



// [str[left], str[right]] = [str[right], str[left]];

// [str[0],str[n-1]]=[str[n-1],str[0]]

