const solution = (x) => {
	let arr = x.toString().split('');
	let answer = arr.reduce((a,b) => +a + +b, 0)
	
	return (x % answer === 0) ? true: false;
}