const solution = (input) => {
	let answer = []
	for(let i=1; i<=input; i++){
		if(i % 2 === 0){
			answer.push('박');
		} else {
			answer.push('수');			
		}
	}
	return(answer.join(''));	
}