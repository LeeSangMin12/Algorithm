const solution = (numbers) => {
	let num = numbers.split('');
	for(let i=0; i<num.length-4; i++){
		num[i] = '*'
	}
	return(num.join(''))
}