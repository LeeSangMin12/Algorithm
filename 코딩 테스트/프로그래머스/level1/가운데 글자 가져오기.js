function solution (s) {
	let answer = '';
	let len = s.length;
	if(len % 2 === 0){
		answer = s[len/2-1] + s[len/2]
	} else {
		answer = s[len/2-0.5];
	}
	return answer;
}