//your JS code here. If required.
function daysOfAYear( year){
	if(year%100!=0 && year%4===0){
		return 366;
	}
	else if(year%400===0){
		return 366;
	}
	return 365;
}
daysOfAYear(2000);
