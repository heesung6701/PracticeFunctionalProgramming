function solution(N, stages) {
    var _N = stages.length;
    return stages
    .reduce((cur, nxt) => {
        if(nxt == N + 1) return cur;
        cur[nxt - 1] ++;
        return cur;
    }, [...Array(N)].fill(0))
    .map((value) => {
        if(_N == 0) return 0;
        _N -= value;
        return value / (_N + value);
    })
    .map((it, idx) => [it, idx + 1])
    .sort((x, y) => {
        if(x[0] == y[0]) return x[1] - y[1];
        return y[0] - x[0];
    })
    .map(it => it[1]);
}