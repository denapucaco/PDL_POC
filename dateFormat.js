var shortMonthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
var longMonthNames = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
var currentChar = '';
var nextChar = '';
var pattern = '';

function formatDate(date, formatString){
	for(var i=0; i<formatString.length;i++){
		currentChar = formatString.charAt(i);
		nextChar = formatString.charAt(i+1);
		pattern+=currentChar;
		if(currentChar==nextChar){
			continue;
		}else{
			formatString = replacePattern(formatString, pattern, date);
			pattern = '';
		}
	}
	return formatString;
}

function replacePattern(formatString, pattern, date){
	switch(pattern){
		case 'd':
			formatString = formatString.replace(pattern, date.getDate());
			break;
		case 'dd':
			var dateStr = date.getDate();
			dateStr = ''+dateStr;
			dateStr = dateStr.length < 2 ? padToLeft('0',1,dateStr) : dateStr;
			formatString = formatString.replace(pattern, dateStr);
			break;
		case 'M':
			formatString = formatString.replace(pattern, (date.getMonth()+1));
			break;
		case 'MM':
			var monthStr = (date.getMonth()+1);
			monthStr = ''+monthStr;
			monthStr = monthStr.length < 2 ? padToLeft('0',1,monthStr) : monthStr;
			formatString = formatString.replace(pattern, monthStr);
			break;
		case 'MMM':
			formatString = formatString.replace(pattern, shortMonthNames[date.getMonth()]);
			break;
		case 'MMMM':
			formatString = formatString.replace(pattern, longMonthNames[date.getMonth()]);
			break;
		case 'yy':
			formatString = formatString.replace(pattern, (date.getYear()-100) );
			break;
		case 'yyyy':
			formatString = formatString.replace(pattern, date.getFullYear());
			break;
		default:
	}
	return formatString;
}

function padToLeft(padChar, padCount, targetString){
	var padStr = '';
	for(var i=0; i< padCount; i++){
		padStr+=padChar;
	}
	return (padStr+targetString);
}
