const solution = (numbers) => {
	let answer = 0;
	let sum = numbers.reduce(function (prev, curr){
	return prev + curr;
	});
	return(sum/numbers.length);
}