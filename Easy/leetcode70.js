
function climbStairs(n) {
    if( n <= 2) {
        return n;
    } 

    let steps = [1,1];
    
    for( let i = steps.length; i <= n ; i++) {
        steps[i] = steps[i-2] + steps[i-1]; 
    }

    return steps[n];
}

const res = climbStairs(45);
console.log(res);