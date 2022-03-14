const solution = (x) => {
	let answer = x;
	let count = 0;
	
while(count <500){
	if(answer === 1){
		return count;
	}
	if(answer % 2 === 0){
			answer = answer / 2;
		} else {
		answer =(answer *3) + 1;
	}
	count++;
}
	return -1;
	
}