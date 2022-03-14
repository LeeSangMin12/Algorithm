function solution(absolutes, signs) {
    let answer = 0;
    let len = absolutes.length;
    for(let i=0; i<len; i++){
        if(signs[i] === true){
            answer += absolutes[i]
        } else {
            answer += -absolutes[i]
        }
    }
    return answer;
}