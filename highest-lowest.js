// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let nums = numbers.split(" ").map(Number);

    nums.sort(function(a, b){
        return a - b})

    let lowest = nums[0];
    let highest = nums[nums.length-1]
    return `${highest} ${lowest}`    
}