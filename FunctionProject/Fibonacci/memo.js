var bigInt = require("big-integer");

let memo = {};
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth;

    if (nth < 0) {
        throw 'must be greater than 0';
    }

    let answer = fibonacciMemo(nth);

    context.res = {
        body: answer.toString()
    };
}


function fibonacciMemo(nth) {
    
    if (memo.hasOwnProperty(nth)) {
        return memo[nth];
    }

    let res;

    if (n === 0) {
        res = bigInt.zero;
    } else if (n === 1) {
        res = bigInt.one;
    } else {
        // llamados recursivos
        res = fibonacciWithMemoization(nth - 1).add(fibonacciWithMemoization(nth - 2));
    }

    memo[n] = res;

    return result;
}
