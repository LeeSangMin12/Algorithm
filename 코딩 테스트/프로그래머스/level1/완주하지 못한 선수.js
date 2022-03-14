const solution = (participant, completion) => {
	let part = participant.sort();
	let comp = completion.sort();

	for(let i=0; i<participant.length; i++){
		if(part[i] !== comp[i]){
			return part[i]
		}
	}
}