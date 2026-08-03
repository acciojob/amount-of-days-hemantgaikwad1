//your JS code here. If required.
function daysOfYear( year){
	if(year%100!=0 && year%4===0){
		return 366;
	}
	else if(year%400===0){
		return 366;
	}
	return 365;
}