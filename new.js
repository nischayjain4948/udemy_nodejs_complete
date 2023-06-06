const permu = (nums) =>{

    const result = [];
    const dfs  = (i, nums) =>{

        // base-case
        if(i === nums.length){
            result.push(nums.slice());
        }


        // recursive case
        for(let j=i; j<nums.length;j++){
          [nums[i], nums[j]] = [nums[j], nums[i]];
          dfs(i+1, nums);


        //   backTracking
        [nums[i], nums[j]] = [nums[j], nums[i]];

        }
    }
    dfs(0, nums);
    result.sort();

    return result;
}

console.log(permu(["a", "b", "c", "d"]));



const maxsubArraySum = (arr) =>{

    let max = -Infinity;
    let sum = -1;
    for(let i of arr){
        if(sum < 0){
            sum = i;
        }
        else{
            sum += i;
        }
        if(sum > max){
            max = sum;
        }
    }

    return max;

}


console.log(maxsubArraySum([-2,1,-3,4,-1,2,1,-5,4]))



const stockBuyAndSell = (arr) =>{

    let maxP = 0;
    let miniSoFar = arr[0];
    for(let i = 1; i<arr.length;i++){
        miniSoFar = Math.min(miniSoFar, arr[i]);
        let profit = arr[i] - miniSoFar;
        maxP = Math.max(profit, maxP);
    }
    return maxP;



}
console.log(stockBuyAndSell([2,3,4,11,43,3]));
