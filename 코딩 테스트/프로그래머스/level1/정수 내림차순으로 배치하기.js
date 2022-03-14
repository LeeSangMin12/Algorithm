const solution = (n) => {
	let num = n.toString().split('');
	let answer = num.sort(function(a,b){
		return a-b;
	})
	return(parseInt(answer.reverse().join('')));
}
