function solution(array, commands) {
    return commands.map(it => {
        var start = it[0] - 1;
        var end = it[1] - 1;
        var idx = it[2] - 1;
        var arr = array.slice(start, end + 1);
        var sorted = arr.sort((x, y) => x - y);
        return sorted[idx];
    })
}