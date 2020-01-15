function chain(...args){
    const target = args.shift();
    const calls = args;
    return calls.reduce((cur, fun) => fun(cur), target);
}
function solution(n, arr1, arr2) {
    return chain({arr1, arr2}, merge, hash);
}
function merge({arr1, arr2}){
    return arr1.map((it, index) => it | arr2[index]);
}
function hash(arr){
    const n = arr.length;
    return arr.map(item => item.toString(2).padStart(n, 0).replace(/0/g,' ').replace(/1/g, '#'));
}