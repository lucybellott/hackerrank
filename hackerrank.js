//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
//Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    // Write your code here
    
    let sortedArr = arr.sort((a, b) => a - b)
    let sumLow = 0
    let sumHigh = 0
    let i
    
    for(i=0; i< sortedArr.length - 1; i++){
        sumLow = sumLow + sortedArr[i]
    }
    //console.log(sumLow)
    
    for(i=1; i < sortedArr.length; i++){
        sumHigh = sumHigh + sortedArr[i]
    }
    console.log(sumLow,sumHigh)
}

// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

//s='12:01:00PM'
// Return '12:01:00'.

//s='12:01:00AM'
// Return '00:01:00'.

function timeConversion(s) {
    // Write your code here
   
   
//     let firstTwo = s.slice(0,2)
//     let lastTwo = s.slice(-2)
//     let military = (parseInt(firstTwo) + 12, 10)
//     military = military.toString()
       
//        if(firstTwo == '12' && lastTwo == 'PM' ){
//       military = '12'
//         }
//         if(firstTwo == '12' && lastTwo == 'AM' ){
//         military = '00'
//         }
      
//         if(lastTwo == 'AM' && firstTwo !== '12'){
//             military = firstTwo
//         }
 

//     return(military + s.substring(2,8))

// }
    
    
    let amPm = s.charAt(8)
    let militaryHour = ""
    if (amPm == "A") {
        if (s.substring(0,2) == '12'){
            militaryHour ='00'
        }
        else {
            militaryHour = s.substring(0,2)
        }
    }
    else { //PM
        if (s.substring(0,2) == '12'){
            militaryHour = s.substring(0,2)
        }
        else {
            militaryHour = parseInt(s.substring(0,2)) + 12
        }
    }
    return militaryHour + s.substring(2,8)



}

//find the median

let arr = [0,1,2,3,4,5,6]

let middle = Math.floor(arr.length/2)

//console.log(middle)

for(let i=0; i< arr.length; i++){
    if(i === middle) {
        //console.log(arr[i])
    }
}

//lonely integer
function lonelyinteger(a) {
    // Write your code here

    //console.log(a)
    
   // destructure the first (and only) element, sort then reduce
    const [lonely] = a.sort((a, b) => a - b).reduce((acc, curr) => {      
        // here we'll start the reduce with an empty array and check
        // if the current integer is already on the array
        if(!acc.includes(curr)) {
            // if not, we'll add it
            acc.push(curr)
        } else {
            // if so, we'll remove the last element.
            // This way we'll be removing all duplicates
            acc.pop()
        }

        // return the array to the next iteration
        return acc
    }, [])

    return lonely
}

//option 2
function lonelyinteger(a) {
    // Write your code here

    for (let i = 0; i < a.length; i++) {
            const count = a.filter((item) => item === a[i]).length;
            if (count === 1) {
                console.log(a[i]);
                return a[i];
            }
        }


}

//find the closest 

let array2 = [200,300,2,4,900,1]

let goal = 8

const distance = array2.reduce((a,b) => Math.abs(a - goal) < Math.abs(b - goal) ? a : b)
//console.log(distance)

//option 2
function findClosest(numbers, target) {

    let closest = numbers[0]; 
    // Assume the first number is the closest
    let closestDiff = Math.abs(target - closest); 
    
    // Calculate the difference between the target and closest
    for (let i = 1; i < numbers.length; i++) {
       let current = numbers[i];
       let currentDiff = Math.abs(target - current); 
       
       // Calculate the difference between the target and current number
       if (currentDiff < closestDiff) {
          closest = current; 
          
          // Update the closest number
          closestDiff = currentDiff; 
          
          // Update the closest difference
       }
    }
    return closest;
 }

 //missing number in a sequence

 var missingNumber = function(nums) {
    
    
    nums.sort((a,b)=> a-b)
    //console.log(nums)
    let missing
    
    for(let i= 0; i < nums.length -1; i++) {
        let curr = nums[i]
        let next = nums[i+1]
        if(curr + 1 !== next){
            missing = curr + 1
        }
        
        
    }
    return missing
};


//add digitis till single digit
//ex:n = 38, 3+8 =11, 1+1 = 2

var addDigits = function(num) {
   

    if (num < 10) {
        return num;
      } else {
       let num2 = [...num.toString()].reduce((a, c) => a + Number(c), 0);
        return addDigits(num2);
      }
              
            
        
    };

    //reduce test
    let arr3 = [90,6,34]

    let redTest = arr3.reduce((acc,curr)=> {
      return acc/curr
    })
//console.log(redTest)

//MERGE SORTED ARRAY 
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

var merge = function(nums1, m, nums2, n) {
    // console.log(nums1, m, nums2, n)
 
     
     if(n === 0) {
         return nums1
     }
 
     else {
     
     let i
     const index = nums1.indexOf(0)
     
     for(i=0; i< nums1.length; i++){
         nums1.splice(index,1)
     }
     console.log(nums1)
 
    nums1.push(...nums2)
 
     nums1.sort((a,b) => a-b)
     return nums1
     }
 
 };

// Kth Largest Element in an Array

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

//SORTING

var findKthLargest = function(nums, k) {

    let sorted = nums.sort((a,b) => a-b)
  
    let kIndex = sorted.length - k
  
    let result = nums[kIndex]
  
    return result
      
  };

//TWO SUM
let arr5 =[2,7,11,15]
let target = 9

for(i=0 ; i < arr5.length; i++) {
    for (let j = i + 1; j < arr5.length; j++) {
     if(arr5[i] + arr5[j] === target) {
       // console.log(i,j)
        
    }
    }
 }
///////////

//let words =["doll", "house", "map"]
//  for(i=0 ; i < words.length; i++) {
//     console.log("i",words[i])
//     for (let j = 0 ; j < words.length; j++) {
//      console.log("j",words[j])
//     }
//  }

 //Longest Consecutive Sequence
//Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

var longestConsecutive = function(nums) {
    nums.sort((a,b)=>a-b)

    let count =0
    let i
  

    for(i=0; i<nums.length; i++){
        let next = nums[i+1]

        if(next - nums[i] === 1){
            count++
            
        }
        
    }
    let len = count +1
    //return len



};

//option 2

var longestConsecutive = function(nums) {
    if(nums.length < 1) return 0

    let max = 1
    let count = 1
    const sorted = nums.sort((a, b) => a - b);
    
    for(let i = 0; i < sorted.length; i++){

        // if we see a duplicate in array go to last entry in sequence 
        // with same values
        if(sorted[i] === sorted[i + 1]) continue

        // if next entry in array is consecutive, add to count 
        if(sorted[i] === sorted[i + 1] - 1 ){
            count++
            max = Math.max(count, max) 
        } 
        // if next entry in array is not consectutive, reset count
        else {
            count = 1
        }
    }

   // return max
};

let words =["doll", "house", "map", "map"]

function countFrequencies(words) {

    
    words.sort()

    let frequencyMap ={}

    for(word of words) {
        if(frequencyMap[word]){
           frequencyMap[word]++
           
        }
        else {
            frequencyMap[word] = 1 
        }
        
    }
    
    
    let sortedFrequencies = Object.values(frequencyMap)
    return sortedFrequencies
   // return frequencyMap

}

//console.log(countFrequencies(words))

//FILTERING DUPLICATES

function filterDuplicates(data) {

    return Array.from(new Set(data))
}

let somearray = ["men", 1, "lucy","dog", "dog", "men", "lucy"]
let someobj ={
    firstName: 'Lucy',
    lastName: 'Bellott',
    age: 35
}

for(k in someobj){
   console.log(someobj[k])
}

let mySet = new Set(somearray)

console.log(mySet)

let str = 'something'

console.log(str.indexOf('me'))

for(let item of somearray){
    console.log(item)
}


//////////////////////////////////////////

// let input = 'cabbaabcca'
// function removeChars(input) {
//     // your code here
//   let indB = input.indexOf('b')
//   let indAc= input.indexOf('ac')
  
//   if(input[indB] !== -1){
//     indB = ""
//   }
//   if(input[indAc] !== -1){
//     indAc = ""
//   }
//   return(input)
  
//   }
//   console.log(removeChars(input))


////////////////////////////////////////////

//HASHMAP

let ageHashmap = {}

ageHashmap['Ana']= 23
ageHashmap['John'] =11
ageHashmap['Kurt'] = 45

console.log(ageHashmap)



for(key in ageHashmap){
    
    if(ageHashmap[key] === 23)
    console.log(key)
}

////////////////////////////////////////////

//REMOVE ALL OCCURRENCES OF A SUBSTRING

//Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

//Find the leftmost occurrence of the substring part and remove it from s.

//Input: s = "daabcbaabcbc", part = "abc"
//Output: "dab"

var removeOccurrences = function(s, part) {
    //checking if the 'part' is still there
    while(s.indexOf(part)!=-1){
        //if it is there, then replacing it with ""
                s=s.replace(part,"");
            }
            
            //return s;
    
};

//  OR

while (s.indexOf(part) !== -1) {
    const index = s.indexOf(part);
    //1st slice: from beginning until the index where part begins
    //2nd slice: end of part until the end of s
    s = s.slice(0, index) + s.slice(index + part.length, s.length);
  }

  ////////////////////////////////////////////////////////////////////////

  //DIAGONAL DIFFERENCE

  function diagonalDifference(arr) {
    var n = arr.length; 
    var d1 = 0;
    var d2 = 0;
  for(var i=0; i<n; i++){
     for(var j=0; j<n; j++){
       // finding the sum of primary diagonal
         if(i === j) {
           d1 += arr[i][j];
         }
       // finding the sum of secondary diagonal
         if(i + j === n - 1){
            d2 += arr[i][j];
         }
      }
  }
  return Math.abs(d1 - d2);
}

///////////////////////////////////////////

function diagonalDifference(arr) {
    var n = arr.length; 
    var d1 = 0;
    var d2 = 0;
  for(var i=0; i<n; i++){
     for(var j=0; j<n; j++){
       // finding the sum of primary diagonal
         if(i === j) {
           d1 += arr[i][j];
         }
       // finding the sum of secondary diagonal
         if(i + j === n - 1){
            d2 += arr[i][j];
         }
      }
  }
  return Math.abs(d1 - d2);
}




