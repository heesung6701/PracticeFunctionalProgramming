function chain(...args){
    const target = args.shift();
    const calls = args;
    return calls.reduce((cur, fun) => fun(cur), target);
}
function partial1(fun, arg1) {
    return (...args) => fun.apply(fun, [arg1, ...args]);
}
function last(arr){
    return arr[arr.length - 1];    
}
function split(delimeter, str){
    return str.split(delimeter);
}
function tap(...args){
    console.log(args);
    return args;
}
function solution(dartResult) {
    return chain(dartResult, partial1(split, ''), makeNum, toPower,sum);
}
function isNumber(it){
    try{
        return !isNaN(parseInt(it));
    } catch(err){
        return false;
    }    
}
function makeNum(arr){
    return arr.reduce((cur, nxt) => {
        if(isNumber(last(cur)) && isNumber(nxt)){
            const before = cur.pop();
            cur.push(parseInt(before) * 10 + parseInt(nxt));
        } else cur.push(nxt);
        return cur;
    }, [])
}
function bonus(nxt, cur){
       switch(nxt){
            case 'D':
                var before = cur.pop();
                cur.push(before ** 2);
               break;
            case 'T':
                var before = cur.pop();
                cur.push(before ** 3);
               break;
            case 'S':
               break;
            default:
               return false;
        }
        return true;
}
function option(nxt, cur){
       switch(nxt){
            case '*':
                var before = cur.pop();
               if(cur.length > 0){
                    var before2 = cur.pop();
                    cur.push(before2 * 2);   
               }
                cur.push(before * 2);
               break;
            case '#':
                var before = cur.pop();
                cur.push(before*-1);
                break;
            default:
               return false;
        }
        return true;
}
function sum(arr){
    return arr.reduce((cur, nxt) => cur + nxt, 0);
}
function toPower(arr){
    return arr.reduce((cur, nxt) => {
        if(bonus(nxt, cur)) return cur;
        if(option(nxt, cur)) return cur;
        cur.push(parseInt(nxt));
        return cur;
    }, []);
}
