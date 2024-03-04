// Put your solution here
function divideArray(numbers){
    let evens = []
    let odds = []
    for(let num of numbers){
        if(num%2==0){
            evens.push(num)
        } else if (num%2==1){
            odds.push(num)
        }
    }
    evens = evens.sort(function(a,b){return a-b})
    odds = odds.sort(function(a,b){return a-b})
    console.log("Even numbers:")
    if(evens.length >0){
        for (let num of evens){
            console.log(num)
        }
    } else {
        console.log("None")
    }
    console.log("Odd numbers:")
    if(odds.length >0){
        for (let num of odds){
            console.log(num)
        }
    } else {
        console.log("None")
    }
}