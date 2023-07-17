


//MANUAL MATH.MAX()

function getMax(candies){
    let highest= candies[0];
    for(let i=1;i<candies.length;i++){
        if(highest < candies[i]){
            highest = candies[i]
        }
    }
}
