const solution = (a, b) => {
    let answer = 0;
    let arr = [];
    arr.push(a, b);
    arr.sort(function(a,b){
        return a-b;
    });
    if(a === b){
        answer = a;
    } else {
        for(let i=arr[0]; i<=arr[1]; i++){
            answer += i;
        }
    }
    return answer;
}