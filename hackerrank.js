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

// VALID PALIDROME

function isPalindrome(s) {
    s = s.replace(/[^a-z0-9]/gi,'')
    .toLowerCase()
    .split('')

    //or
    let filtered = s.split("").filter((item) => item.toLowerCase() != item.toUpperCase())
   
    let str= filtered.join("").toLowerCase()

    for(let i = 0, j = s.length - 1; i <= j; i++, j--){
        if(s[i] !== s[j]) return false;
        } 
         return true;
    }

    //or

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - 1 - i]) {
          return false; // Characters don't match, not a palindrome
        }
      }
    
      return true; // All characters match, it is a palindrome
    
    //or to INCLUDE NUMBERS

    let filtered = '';
  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      filtered += char;
    }
  }

  for (let i = 0; i <= Math.floor(filtered.length / 2); i++) {
    if (filtered[i] !== filtered[filtered.length - 1 - i]) {
      return false; // Characters don't match, not a palindrome
    }
  }

  return true;
    
    
    
      /////////////////////////////

      // MAX SUBARRAY

      var maxSubArray = function(nums) {

        let sum = nums[0]
        let max = nums[0]
    
        for(i=1; i<nums.length; i++) {
            if(nums[i]+ sum > nums[i]){
                sum=nums[i]+sum
            }
            else{
               sum=nums[i] 
            }
            max= Math.max(max,sum)
        }
    
        
    
       return max
        
    };

    ////////////////////////////////////////////////////////////////////////////

    //MERGE INTERVALS

    var merge = function(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
    
        let merged = [];
        let currentInterval = intervals[0];
    
        for (let i = 1; i < intervals.length; i++) {
            let nextInterval = intervals[i];
    
            if (currentInterval[1] >= nextInterval[0]) {
                currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
            } else {
                merged.push(currentInterval);
                currentInterval = nextInterval;
            }
        }
    
        merged.push(currentInterval);
    
        return merged;
    };
///////////////////////////////////////

//BINARY SEARCH

var search = function(nums, target) {
    //console.log(target)
   
  for(i=0; i<nums.length;i++){
      if(nums[i]=== target){
          return i
      }
      
  }
    return -1
    
    
    
};


///////////////////////////

//LONGEST COMMON PREFIX

var longestCommonPrefix = function(strs) {

if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0]; // Initialize prefix with the first string

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1); // Remove the last character
      if (prefix === "") {
        return ""; // If prefix becomes empty, there is no common prefix
      }
    }
  }

  return prefix;

  //or


//   // Return early on empty input
//   if (!strs.length) return '';

//   // Loop through the letters of the first word
//   for (let i = 0; i <= strs[0].length; i++) {
//       // Check if this character is present in the same position of every string
//       if (!strs.every((string) => string[i] === strs[0][i])) {
//           // If not, return the string up to and including the previous character
//           return strs[0].slice(0, i);
//       }
//   }

//   return strs[0];
}


////////////////////////////////////////////////////////////////

//VALIDATE BRACKETS

function isValid(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char); // Push opening brackets onto the stack
      } else {
        // Check if the stack is empty or the current closing bracket doesn't match the top opening bracket
        if (
          stack.length === 0 ||
          (char === ')' && stack[stack.length - 1] !== '(') ||
          (char === '}' && stack[stack.length - 1] !== '{') ||
          (char === ']' && stack[stack.length - 1] !== '[')
        ) {
          return false; // Invalid string
        }
  
        stack.pop(); // Matched opening and closing brackets, remove the opening bracket from the stack
      }
    }
  
    return stack.length === 0; // If the stack is empty, all opening brackets have been closed correctly
  }
  
  //or

  function isValid2(s) {
    const stack = [];
    const brackets = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else {
        const lastOpeningBracket = stack.pop();
        if (brackets[lastOpeningBracket] !== char) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }

  //or

  var isValid3 = function(s) {
    if (s.length % 2 !== 0 ) return false;
    let str = s.trim().split('');
    let temp = [];
    for(let i of str){
        if(i == '(' || i=='{' || i=='['){
            temp.push(i);
        }
        if(i==')'){
            if(temp.pop() != '(') return false;
        }
        if(i=='}'){
            if(temp.pop() != '{') return false;
        }
        if(i==']'){
            if(temp.pop() != '[') return false;
        }
    };
    return temp.length > 0 ? false: true;
};


  ///////////////////////////
  
  
  //WORD BREAK/DICT

  var wordBreak = function(s, wordDict) {
    const words = new Set(wordDict)
       const starts = new Set([0])
       
       for(const start of starts){
           for(const word of words){
               const end = start + word.length
               // we are slicing the word from s and check if that sliced word is exist in wordDict
               // it could be the current word or it could be the other word which has same length of current word
               // either way, we admit that the current starting index to the index of word length exist
               // so now we want to add the next starting index which is 'end'
               // we repeat this process until the last index of s
               // if we reached to last index of s, that means that we checked that every sliced word exist in wordDict
               // until the last index of s
               // this will conclude that the s has every word from wordDict
               if(words.has(s.slice(start, end))) starts.add(end)
           }
       }
       return starts.has(s.length)
   
       
   
   };

   ////////////////////////////////////////////////////////////////////////////

   //An activity at our university requires students to work in pairs. Given a list of student ID number, course name pairs, write a function that returns a collection of all possible pairs of student ID numbers.

  
    
//    let enroll = [
//         ["58", "Linear Algebra"],
//         ["94", "Art History"],
//         ["94", "Operating Systems"],
//         ["17", "Software Design"],
//         ["58", "Mechanics"],
//         ["58", "Economics"],
//         ["17", "Linear Algebra"],
//         ["17", "Political Science"],
//         ["94", "Economics"],
//         ["25", "Economics"],
//         ["58", "Software Design"],
//         ]

function findPairs(enroll) {
    let onlyNums = [];
    let onlyPairs = [];
  
    for (let i = 0; i < enroll.length; i++) {
      onlyNums.push(enroll[i].shift());
    }
    //console.log(onlyNums)
  
    let unique = [...new Set(onlyNums)];
  
    for (let i = 0; i < unique.length; i++) {
      for (let j = i + 1; j < unique.length; j++) {
        onlyPairs.push(unique[i] + "," + unique[j]);
      }
    }
  
    return onlyPairs;
  }

        



   

   //console.log(findPairs())

   //expected output
//    Expected output: [
//     "58,17",
//     "58,94",
//     "58,25",
//     "94,25",
//     "17,94",
//     "17,25"
//     ]


////////////////////////////////////////////////////////////////

//ROMAN TO INTERGER

function RomantoInt(s) {

    let result =0
    let romanObj = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1}

    for(let i=0; i<s.length; i++){
        if(romanObj[s[i]]<romanObj[s[i+1]]){
            result = result - romanObj[s[i]]
        }
        else{
            result+=romanObj[s[i]]
        }
    }
    return result

}

/////////////////////////////////////


//MERGE STRINGS ALTERNATELY

var mergeAlternately = function(word1, word2) {
    //word1="abc", word2="pqr"

   let newWordArr =[]
   let maxLength = Math.max(word1.length, word2.length)
    

    for(let i=0; i< maxLength; i++){
        newWordArr.push(word1[i])
    
        newWordArr.push(word2[i])
        
         //console.log ["a","p","b","q","c","r"]
          
    }
    let result = newWordArr.join("")

    return result

};
    /////////////////////////////

    //REMOVE ELEMENT

    var removeElement = function(nums, val) {
        while(nums.indexOf(val) !== -1) {
            nums.splice(nums.indexOf(val), 1)
        }
        return nums.length;
    };

    // KIDS WITH the Greatest Number of Candies
    var kidsWithCandies = function(candies, extraCandies) {
        let highest= candies[0];
        let array = []
        for(let i=1;i<candies.length;i++){
            if(highest < candies[i]){
                highest = candies[i]
            }
        }
    
        for(let i=0;i<candies.length;i++){
            if(candies[i]+extraCandies >= highest){
                array.push(true);
            }else{
                array.push(false)
            }
        }
    
        return array
    };

    //REMOVE DUPLICATES MODIFYING THE ORIGINAL ARRAY
    //Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

    //Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

    //Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
    //Return k.
    //     Input: nums = [1,1,2]
    // Output: 2, nums = [1,2,_]
    // Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
    // It does not matter what you leave beyond the returned k (hence they are underscores).

    var removeDuplicates = function(nums) {
        //console.log(nums) [1,1,2]
    
        let myset = new Set(nums)
    
        let uniqueArr = Array.from(myset)
        
        for (let i = 0; i < uniqueArr.length; i++) {
            nums[i] = uniqueArr[i];
        }
    
        return uniqueArr.length
        
    };

    ////////////////////////////////////////

    //MAJORITY ELEMENT(THE ONE THAT APPERS THE MOST OFTEN IN THE ARRAY)

    var majorityElement = function(nums) {

        let freqObj = {}
    
        for(i=0; i< nums.length; i++){
            //assigning the value to 1 if not present in the obj
            if(!freqObj[nums[i]]){
                freqObj[nums[i]] = 1
            }
            else{
                freqObj[nums[i]]++
            }
        }
    
        let keysSorted = Object.keys(freqObj).sort((a,b)=>freqObj[b]-freqObj[a])
        
    
        return keysSorted[0]
    
     };

     //or

     var majorityElement2 = function(nums) {
            let n= nums.length/2;
        let obj={};
        for(let i=0;i<nums.length;i++){
            if(obj[nums[i]]==undefined){
                obj[nums[i]]=1;
            }else{
                obj[nums[i]]++
            }
        }
        for(let i in obj){
            if(obj[i]>n){
                return i
            }
        }
        };

        //////////////////////////////

  //NUMBER OF STEPS TO REDUCE A NUMBER TO ZERO
  
//   Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.


var numberOfSteps = function(num) {
    
    let counter = 0

    while(num > 0){
        if(num%2 ===0){
            num = num/2
            counter++
        }
        else {
           num= num -1
            counter++
        }

    }
return counter

};

////////////////////////////////////////////////////////////////

//FIND THE GREATEST COMMON DIVISOR OF STRINGS

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

//find the length of the greatest common divisor and that will be the length of the string you need to return.
//if it matches on both strings then you have a string of common divisor otherwise just return an empty string

function findCommonDivisor(str1, str2) {
    // Step 1: Calculate the lengths of str1 and str2
    const len1 = str1.length;
    const len2 = str2.length;

    // Helper function to find the Greatest Common Divisor (GCD) using Euclidean algorithm
  function gcd(a, b) {
    while (b !== 0) {
      const remainder = a % b;
      a = b;
      b = remainder;
    }
    return a;
  }
  
    // Step 2: Find the GCD using the Euclidean algorithm
    const gcdVal = gcd(len1, len2);
  
    // Step 3: Extract substring of length gcdVal from str1 and str2 using slice
    const substring1 = str1.slice(0, gcdVal);
    const substring2 = str2.slice(0, gcdVal);
  
    // Step 4: Check if the substrings are the same to find the common divisor
    if (substring1 === substring2) {
      return substring1; // Common divisor found
    } else {
      return ""; // No common divisor found
    }
  }
  
  
  
  // Test cases
 // console.log(findCommonDivisor("abcabcdef", "abcabc")); // Output: "abc"
 // console.log(findCommonDivisor("orangeapplebanana", "apple")); // Output: ""
 // console.log(findCommonDivisor("hello", "hellohellohello")); // Output: "hello"
  //console.log(findCommonDivisor("abcdabcd", "abcdabcdabcdabcdabcd")); // Output: "abcd"
  //console.log(findCommonDivisor("abababab", "abab")); // Output: "ab"

  //OR

  var gcdOfStrings2 = function(str1, str2) {
    
    // If the concatenated strings are not equal,
   // then a common divisor cannot be found
   if (str1 + str2 !== str2 + str1) {
     return '';
   }
 
   // Calculate the greatest common divisor of the string lengths
   const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
   const len = gcd(str1.length, str2.length);
 
   // Return the substring that is a common divisor
   return str1.substring(0, len);
   
   
 };

 ///////////////////////////////////

 //KIDS WITH CANDIES

 var kidsWithCandies2 = function(candies, extraCandies) {
    
    let result = []
    let maxCandies = Math.max(...candies)
   
   for(i=0; i< candies.length; i++){
       if(candies[i] + extraCandies >= maxCandies){
           result.push(true)
       }
       else{
           result.push(false)
       }
   }
   return result
};
///////////////////////////////////

//CAN PLACE FLOWERS
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty,
//  and an integer n, return true if n new flowers 
// can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

var canPlaceFlowers = function(flowerbed, n) {
    
    let freeSpaces=[]

    for(i=0;i<flowerbed.length; i++){
      if (flowerbed[i] === 0) {
      if ((i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
        freeSpaces.push(i)
         flowerbed[i] = 1
       
      }
      }
    }
    //console.log(freeSpaces)
    if(freeSpaces.length< n){
      return false
    }
    else{
      return true
    }
    
};

////////////////////////////////////////////////////////////////

//REVERSE VOWELS IN THE ARRAY
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'];
    let wordV = [];
    let vowelIndices = []; 
    let string = [...s]
  
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        vowelIndices.push(i);
        wordV.push(string[i]);
      }
    }
  
    // Reverse the array containing the vowels
    wordV.reverse();
  
    // Convert the input string to an array of characters
    let strArray = s.split("");
  
    // Place reversed vowels back into the original string
    for (let j = 0; j < vowelIndices.length; j++) {
      strArray[vowelIndices[j]] = wordV[j];
    }
  
    // Join the array back into a string and return
    return strArray.join("");
     
  };

////////////////////////////////////////////////////////////////

//FIND THE INDEX OF THE FIRST OCCURENCE IN A STRING
var strStr = function(haystack, needle) {
  
    return haystack.indexOf(needle);
  
  };
  /////////////////////////////////

  
  
  //FIRST UNIQUE STRING
  var firstUniqChar = function(s) {
    // console.log(s)
    let obj={}
     
     for(i=0; i<s.length; i++){
         if(obj[s[i]]){
             obj[s[i]]++
         }
         else{
             obj[s[i]] =1
         }
     }
     
     for (let i = 0; i < s.length; i++) {
     if (obj[s[i]] === 1) {
       return i;
     }
   }
 
   return -1
 
 };

 //or
 var firstUniqChar2 = function(s) {
    for (let idx = 0; idx < s.length; idx++){
        // If same...
        if(s.indexOf(s[idx]) === s.lastIndexOf(s[idx])){
            // return the index of that unique character
            return idx
        } else {
            return -1       // If no character appeared exactly once...
        }
    }
};
 ////////////////////////////////
 
 function findMatchingIndices(str1, str2) {
    const minLength = Math.min(str1.length, str2.length)

    let matchArray = []

    for(let i=0; i<minLength; i++){
        if(str1[i] === str2[i]){
            matchArray.push(i)
        }
    }
    return matchArray


 }

 //or (brute force)

 function findMatchingIndices2(str1,str2) {

    let matches = []
    for(let i=0; i< str1.length; i++){
        for(let j=0; j<str2.length; j++){
            if(str1[i]===str2[j]){
                matches.push(i)
            }
        }
    }
    return matches

 }

 //////////////////////
 //matching values different index

 

 function sameVdifI(str1,str2){


    let res =[]

    for(let i=0; i<str1.length; i++){
        for(let j=0; j<str2.length; j++){
            if(str1[i]===str2[j] && i!== j){
                res.push(str1[i])
            }
        }
    }
    return res

 }
 ///////////////////////////////////

 //REVERSE WORDS OF A STRING

 var reverseWords = function(s) {
    let str = s.split(" ")
    s = ""
    for (let i = str.length - 1; i >= 0; i--) 
        if (str[i] != "" && str[i] != " ") s += str[i] + " "
    return s.trim()
};
//OR

var reverseWords2 = function(s) {    
    let reverse = '';
    let words = s.split(' ');
    
    for( let i = words.length-1; i >= 0; i-- ) {
         if( words[i] == '' ) {
             continue;
         } 
         reverse += words[i] + ' ';               
    }
    
    return reverse.trim();
};
//OR
var reverseWords3 = function(s) {
    s = s.trim();
    let stack = []; 
    let temp ='';
    for(let i=0;i<s.length;i++){
        if(s[i]!=' ')
        {    temp +=s[i];
        }
        else if(s[i]==' ' && temp!=''){
            stack.push(temp);
            temp='';
        }
    }
    stack.push(temp);
    temp='';
    for(let i=stack.length-1;i>=0;i--){
        if(i>0)
            temp +=stack[i]+' '
        else
            temp +=stack[i];
    }
    return temp

};

//MOVE ZEROS
var moveZeroes = function(nums) {
   

    let filtered = nums.filter((item)=> item !== 0)

   let zLength = nums.length - filtered.length
   let indexZero= nums.length - zLength
  

   
    for(let i=0; i< nums.length; i++){
        nums[i] = filtered[i]
        nums.fill(0,indexZero)
        
     }

    return nums
    
};

//IS SUBSEQUENCE

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



var isSubsequence = function(s, t) {

    let count=0
    let stack=0
    for(let j=0;j<s.length;j++){
        for(let i=count;i<t.length;i++){
            if(s[j]===t[i]){    
                count++
                stack++
                break
            }
            count++
        }
    }
    if(stack===s.length){
        return true
    }else{
        return false
    }

};

//PRODUCT OF ARRAY EXECPT SELF

var productExceptSelf = function (nums) {
    let product = 1;
    let zeroCount = 0;
    for (let num of nums) {
        num === 0 ? zeroCount++ : product *= num
        if (zeroCount > 1) {
            return new Array(nums.length).fill(0)
        }
    }

    for (let i in nums) {
        if (!zeroCount) {
            nums[i] = product / nums[i]
        }
        else if (nums[i] !== 0 ) {
            nums[i] = 0
        } else{
            nums[i] = product
        }
    }
    return nums
};
//or
var productExceptSelf2 = function (nums) {
    const res = [];
    let product = 1;
  
    for (let i = 0; i < nums.length; i++) {
      res.push(product);
      product *= nums[i];
    }
  
    product = 1;
  
    for (let j = nums.length - 1; j >= 0; j--) {
      res[j] *= product;
      product *= nums[j];
    }
  
    return res;
  };

  //IS SUBSEQUENCE

  var isSubsequence = function(s, t) {
    if (s === "") {
      return true; // If s is an empty string, it's always a subsequence of t
    }
  
    let sIndex = 0; // Index for string s
    let tIndex = 0; // Index for string t
  
    while (tIndex < t.length) {
      if (s[sIndex] === t[tIndex]) {
        sIndex++; // Increment sIndex when a match is found
      }
  
      tIndex++; // Always increment tIndex
  
      if (sIndex === s.length) {
        // If we have reached the end of s, it means s is a subsequence of t
        return true;
      }
    }
  
    // If we haven't found all characters of s in t, it means s is not a subsequence of t
    return false;
  
  }

  //or

  var isSubsequence2 = function(s, t) {
    let currentIndex = -1;
   for (let i = 0; i < s.length; i++) {
     const target = t.indexOf(s[i], currentIndex + 1);
     if (target > currentIndex) {
       currentIndex = target;
     } else {
       return false;
     }
   }
   return true;
 };

 //MAX NUMBER OF K SUM PAIRS

 nums.sort((a, b) => a - b);

    let ans = 0;
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        if (nums[start] + nums[end] === k) {
            ans++;
            start++;
            end--;
            continue;
        } 
        nums[start] + nums[end] > k ? end-- : start++;
    }
    return ans;;