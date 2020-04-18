function random(min, max){
	if(max === undefined){
		min += .99999999;
		return Math.floor(Math.random() * (min) + 0);
	}
	else{
		max += .99999999;
		return Math.floor(Math.random() * (max - min) + min);
	}
}

String.prototype.invert = function(){
	let stringa = [];
	let output = "";
	for(i in this){
		if(!isNaN(i)){
			stringa.push(this[i]);
		}
	}

	for(var i = stringa.length; i--; i >= 0){
		output += stringa[i];
	}

	return output;
}

String.prototype.replaceAll = function(search, replace) {
	let stringa = "";
	for(i in this){
		if(!isNaN(parseInt(i))){
			stringa += this[i];
		}
	}

	for(var i = 0; i < stringa.length; i++){
		stringa = stringa.replace(search, replace);
	}

	let parametri = "";

	if(search === undefined) parametri += "search, ";
	if(replace === undefined) parametri += "replace, ";

	if(parametri.length > 0){
		parametri = parametri.substring(0, parametri.length - 2);
		console.error("You must define a [" + parametri + "] value in \"" + stringa + "\".replaceAll!");
	}
	else{
		return stringa;
	}
};

function time(){

	let weekDay = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
	let months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

	let current = {};
	current.time = {};
	current.date = {};
	current.time.string = {};
	current.date.string = {};
	current.date.day = {};
	current.date.day.week = {};
	current.date.month = {};
	current.date.day.month = {};
	current.date.month.number = {};
	let d = new Date();
	current.time.hour = d.getHours();
	current.time.minutes = d.getMinutes();
	current.time.seconds = d.getSeconds();
	current.time.hour < 10 ? current.time.string.hour = "0" + String(current.time.hour) : current.time.string.hour = String(current.time.hour);
	current.time.minutes < 10 ? current.time.string.minutes = "0" + String(current.time.minutes) : current.time.string.minutes = String(current.time.minutes);
	current.time.seconds < 10 ? current.time.string.seconds = "0" + String(current.time.seconds) : current.time.string.seconds = String(current.time.seconds);
	current.time.string.complete = current.time.string.hour + ":" + current.time.string.minutes + ":" + current.time.string.seconds;
	current.date.day.month.number = d.getDate();
	current.date.day.month.string = d.getDate() < 10 ? "0" + String(d.getDate()) : String(d.getDate());
	current.date.day.week.number = d.getDay();
	current.date.day.week.string = weekDay[current.date.day.week.number];
	current.date.month.number.number = d.getMonth();
	current.date.month.number.string = d.getMonth() < 10 ? "0" + String(d.getMonth()) : String(d.getMonth());
	current.date.month.string = months[current.date.month.number.number - 1];
	current.date.year = d.getYear() + 1900;
	current.date.string['dd-mm-yyyy'] = current.date.day.month.string + "-" + current.date.month.number.string + "-" + String(current.date.year);
	current.date.string['mm-dd-yyyy'] = current.date.month.number.string + "-" + current.date.day.month.string + "-" + String(current.date.year);
	current.date.string['yyyy-mm-dd'] = String(current.date.year) + "-" + current.date.month.number.string + "-" + current.date.day.month.string;

	return current;
}

function help(){
	let output = `
 - help() => GET THIS
 - random(min, max) => CHOOSE A RANDOM NUMBER FROM min TO max
 - random(max) => CHOOSE A RANDOM NUMBER FROM 0 TO max
 - "your_string".replaceAll(search, replace) => REPLACE ALL search WITH replace IN "your_string"
 - "your_string".invert() => INVERT CHARS OF "your_string", OUTPUT: "gnirts_ruoy"
 - time() => GET A JSJON WITH ALL STUFF OF TIME AND DATE
 	`;
	return output;
}
