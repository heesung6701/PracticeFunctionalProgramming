function chain(...args){
    const target = args.shift();
    const calls = args;
    return calls.reduce((cur, fun) => fun(cur), target);
}
function solution(n, arr1, arr2) {
    return chain({arr1, arr2}, merge, hash);
}
function merge({arr1, arr2}){
    return [...Array(arr1.length)].map((it, index) => arr1[index] | arr2[index]);
}
function hash(arr){
    const n = arr.length;
    return arr.map(item => {
        return [...Array(n)].map((it, index) => 2**index).reverse().map(it => it & item ? '#' : ' ').join('')
    });
}
