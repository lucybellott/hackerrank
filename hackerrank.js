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

console.log(middle)

for(let i=0; i< arr.length; i++){
    if(i === middle) {
        console.log(arr[i])
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
console.log(distance)

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




