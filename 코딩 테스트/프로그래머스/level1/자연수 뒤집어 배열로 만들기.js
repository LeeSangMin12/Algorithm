const solution = (n) => {
	let num = n.toString().split('').reverse();
	let answer = [];
	for(let i=0; i<num.length; i++){
		answer.push(+num[i]);
	}
	return answer;
}

	// let num = n.toString().split(); => ['12345'];
	// let num = n.toString().split(''); => [ '1', '2', '3', '4', '5' ];