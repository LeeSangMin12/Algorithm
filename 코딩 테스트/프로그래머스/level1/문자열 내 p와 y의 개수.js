const solution = (s) => {
	let p = [];
	let y = [];
LowerCase = s.toLowerCase();
	for(let i=0; i<LowerCase.length; i++){
		if(LowerCase[i] === 'p'){
			p.push(1);
		} else if (LowerCase[i] === 'y'){
			y.push(1);
		}
	}
	if(p.length === y.length){
		return true
	} else {
		return false;
	}
}