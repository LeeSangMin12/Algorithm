const solution = (input) => {
	let arr = [];
	if(input.length === 4 || input.length === 6){
		
		for(let i=0; i<input.length; i++){
			if(48<=input[i].charCodeAt() && input[i].charCodeAt()<=57){
				arr.push(1)
			} else {
				arr.push(-1)
			}
		}
	} else {
		return false;
	}
	if(arr.includes(-1)){
		return false ;
	} else {
		return true;
	}
}