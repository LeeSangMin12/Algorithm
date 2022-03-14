const solution = (a, b) => {
	let weekDay = ['SUN','MON','TUE','WED','THU','FRI','SAT']
	
	let date = new Date(2016, a-1, b);
	let day = weekDay[date.getDay()];

	return day;
}
// 월은 0부터 시작. 즉, 1월을 입력하고 싶은 경우 0을 입력