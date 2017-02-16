
'use strict';

function linearSearch(arr, target){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]=== target){
      return i;
  }
}
return -1;
}
//O(n)
//Linear search finds a particular value in an array that will go through every element of an array one at a time
//until it finds the lowest number.  It is an O(n) in terms of computational timing, considered to be very efficienct.
//It can be used with ordered and unordered arrays.

function binarySearch(arr, target){
  let low=0;
  let high= arr.length;
  while(low <=high) {
    let mid= Math.floor(low + (high- low)/2);
    if (arr[mid] === target){
      return mid;
    }else if(arr[mid] < target){
      low=mid+1;
    }else {
      high=mid-1;
  }
}
return -1;
}

//O(logn)
//Binary search is considered to be the most efficient way to search an already ordered array. It targets the middle
// of an array and splits the array.   It then cycles through the first new array looking for targets with
//values that are less than the value at the middle, sorting the first array.  In the second array it looks for
//targets with values equal to the value at the middle.  This is repeated over and over, until the target element is found
//and returned or not found. The sort order matters because you can eliminate half of the items in the array immediately
//if the target is not initially found after the binary split of the array. This process is repeated each time the array
//is split again, eliminating half of the items in each new array which makes the sorting process quicker and more
//efficient. 
