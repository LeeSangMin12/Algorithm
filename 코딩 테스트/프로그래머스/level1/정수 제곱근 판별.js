const solution = (n) => {
	let sqrt = Math.sqrt(n);
	if(Number.isInteger(sqrt)){
		return ((Math.sqrt(n)+1) * (Math.sqrt(n)+1));
	} else {
		return -1;
	}
}