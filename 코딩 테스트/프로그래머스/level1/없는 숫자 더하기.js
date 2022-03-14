const solution = (numbers) => {
	let answer = 0;
	numbers.sort(function(a,b){
		return a-b;
	})
	for(let i=0; i<10; i++){
		if(numbers.includes(i)){
			
		} else {
			answer += i;
		}
	}
	return answer
}

