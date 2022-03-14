const solution = (arr) => {
	const small = (arr) => {
		let min = Math.min(...arr);
		return arr.filter(e => e!=min);
	}
	let answer = small(arr);
	if(answer.length === 0){
		return [-1]
	} else {
		return answer;
	}
}