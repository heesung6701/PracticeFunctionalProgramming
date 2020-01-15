function partial1(fun, arg1) {
    return (...args) => {
        return fun.apply(fun, [arg1, ...args]);
    }
}
function solution(s) {
    return [...Array(s.length)]
        .map((it, index) => index + 1)
        .map(partial1(findAnswer, s))
        .reduce((cur, nxt) => {
            return cur > nxt ? nxt : cur;
        }, s.length);
}
function findAnswer(target, size){
    return chain(target, partial1(split, ''), partial1(tie, size),zip, toString, length);
}
function split(delimiter,target){
    return target.split(delimiter);
}
function chain(...args){
    const target = args.shift();
    const calls = args;
    return calls.reduce((cur, fun)=> fun(cur), target);
}
function last(arr) {
    return arr[arr.length - 1];
}
function tie(size, arr) {
    return arr.reduce((cur, nxt) => {
        let last = cur.pop() || '';
        if(last.length == size){
            cur.push(last);
            last = '';
        } 
        cur.push(`${last}${nxt}`);
        return cur;
    }, []);
}

function zip(arr, size) {
    return arr.reduce((cur, nxt) => {
        const first = last(cur) || {cnt: 0 , str: ''};
        const cnt = first.cnt || 0;
        const str = first.str || '';
        if(str == nxt)
            first.cnt++;
        else
            cur.push({cnt:1, str: nxt});
        return cur;
    }, []);
}
function toString(arr){
    return arr.map(it => `${it.cnt > 1 ? it.cnt : ''}${it.str}`).join('');
}
function length(str){
    return str.length;
}