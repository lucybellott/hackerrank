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