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







//////////////////LEETCODE///////////////////////////




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


var maxOperations2 = function(nums, k) {
    const hashMap = new Map();
    let operationsCount = 0;
    
    for(let i = 0; i < nums.length; i++) {
        const diff = k - nums[i];
        
		// if the current difference is not found then set the value to map
        if(!hashMap.has(diff)) {
            hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1);
            continue;
        }
		// In previous condition we checked that the hash presents
		// reduce the occurrance by 1
        hashMap.set(diff, hashMap.get(diff)-1);
		// if the value is 0 of hash then delete it
		// 0 means the hash has no more occurrances
        if(!hashMap.get(diff)) hashMap.delete(diff);
		// increase the operation count
        operationsCount++;
    }
    return operationsCount;    
};


// Increasing Triplet Subsequence

var increasingTriplet = function(nums) {
    let first = Infinity
    let second =Infinity
    for(let j=0;j<nums.length;j++){
        if(nums[j]<= first){
            first =nums[j]
        } else if (nums[j] <= second){
            second =nums[j]
        }else{
            return true
        }
    }
    return false
};

//or
var increasingTriplet2 = function(nums) {
    const temp = [Infinity, Infinity];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > temp[1] && temp[1] > temp[0]) return true;
        
        if (nums[i] > temp[0]) {
            temp[1] = nums[i];
        } else {
            temp[0] = nums[i];
        }
    }
    
    return false;
}; 

//STRING COMPRESSION
var compress = function(chars) {
    let i = 0;
    let j = 0;
    while (j < chars.length) {
        let count = 0;
        let curr = chars[j];
        while (j < chars.length && chars[j] === curr) {
            j++;
            count++;
        }
        chars[i++] = curr;
        if (count > 1) {
            for (let digit of count.toString()) {
                chars[i++] = digit;
            }
        }
    }
    return i;
};

//OR
var compress2 = function(chars) {
    let len = 1;
    let prev = chars[0];
    let idx = 0;
    for(let i=1; i<chars.length; i++) {
        if(chars[i] === prev) {
            len++;
        } else {
            chars[idx] = prev;
            idx++;
            if(len > 1) {
                let s = ""+len;
                s = s.split("");
                for(let c of s) {
                    chars[idx] = c;
                    idx++;
                }
            }
            prev = chars[i];
            len = 1;
        }
    }
    chars[idx] = prev;
    idx++;
    if(len > 1) {
        let s = ""+len;
        s = s.split("");
        for(let c of s) {
            chars[idx] = c;
            idx++;
        }
    }

    return idx;
};

//CONTAINER WITH MOST WATER
var maxArea = function (height) {
    var leftIndex = 0;
    var rightIndex = height.length - 1;
    var maxStoredWater = 0;

    while (leftIndex < rightIndex) {
        const leftHeight = height[leftIndex];
        const rightHeight = height[rightIndex];
        const width = rightIndex - leftIndex;
        const smallerHeight = leftHeight < rightHeight ? leftHeight : rightHeight;
        const storedWater = width * smallerHeight;

        maxStoredWater = storedWater > maxStoredWater ? storedWater : maxStoredWater;
        smallerHeight == leftHeight ? leftIndex++ : rightIndex--;
    }

    return maxStoredWater;
};
