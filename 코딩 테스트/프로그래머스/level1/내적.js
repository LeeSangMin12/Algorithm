const solution = (a, b) => {
	let arr = [];
	for(let i=0; i<a.length; i++){
		arr.push(a[i]*b[i])
	}
	let answer = arr.reduce(function(a, b){
		return a+b
	})
	return answer;
}