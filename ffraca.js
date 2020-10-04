const letters = {
	lower: ["q" ,"w" ,"e" ,"r" ,"t" ,"y" ,"u" ,"i" ,"o" ,"p" ,"a" ,"s" ,"d" ,"f" ,"g" ,"h" ,"j" ,"k" ,"l" ,"z" ,"x" ,"c" ,"v" ,"b" ,"n" ,"m"],
	upper: ["q" ,"w" ,"e" ,"r" ,"t" ,"y" ,"u" ,"i" ,"o" ,"p" ,"a" ,"s" ,"d" ,"f" ,"g" ,"h" ,"j" ,"k" ,"l" ,"z" ,"x" ,"c" ,"v" ,"b" ,"n" ,"m"]
};

for(var i = 0; i < letters.upper.length; i++){
	letters.upper[i] = letters.upper[i].toUpperCase();
}


var nice_to_meet_you = "NICE TO MEET YOU TOO!";

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
	return [...this].invert().join('');
}

function extension(fileName){
	return fileName.split('.')[fileName.split('.').length - 1];
}

String.prototype.replaceAll = function(search, replace) {
	return this.split(search).join(replace);
};

Array.prototype.random = function(){
	return this[random(this.length - 1)];
}

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
	current.date.month.number.number = d.getMonth() + 1;
	current.date.month.number.string = d.getMonth() < 10 ? "0" + String(d.getMonth() + 1) : String(d.getMonth() + 1);
	current.date.month.string = months[current.date.month.number.number - 1];
	current.date.year = d.getYear() + 1900;
	current.date.string['dd-mm-yyyy'] = current.date.day.month.string + "-" + current.date.month.number.string + "-" + String(current.date.year);
	current.date.string['mm-dd-yyyy'] = current.date.month.number.string + "-" + current.date.day.month.string + "-" + String(current.date.year);
	current.date.string['yyyy-mm-dd'] = String(current.date.year) + "-" + current.date.month.number.string + "-" + current.date.day.month.string;

	return current;
}

function randomColor(){
	let output = {};
	output.RGB = {};
	output.RGB.numbers = {};
	output.HEX = {};
	output.HEX.splitted = {};
	output.RGB.numbers.r = parseInt(random(0, 255));
	output.RGB.numbers.g = parseInt(random(0, 255));
	output.RGB.numbers.b = parseInt(random(0, 255));
	output.RGB.string = "rgb(" + String(output.RGB.numbers.r) + ", " + String(output.RGB.numbers.g) + ", " + String(output.RGB.numbers.b) + ")";
	output.HEX.splitted.r = output.RGB.numbers.r.toString(16);
	output.HEX.splitted.g = output.RGB.numbers.g.toString(16);
	output.HEX.splitted.b = output.RGB.numbers.b.toString(16);
	let temp = "";
	for(var i = 0; i < 2 - output.HEX.splitted.r.length; i++){
		temp += "0";
	}
	output.HEX.splitted.r = temp + output.HEX.splitted.r;
	temp = "";
	for(var i = 0; i < 2 - output.HEX.splitted.g.length; i++){
		temp += "0";
	}
	output.HEX.splitted.g = temp + output.HEX.splitted.g;
	temp = "";
	for(var i = 0; i < 2 - output.HEX.splitted.b.length; i++){
		temp += "0";
	}
	output.HEX.splitted.b = temp + output.HEX.splitted.b;
	output.HEX.string = "#" + String(output.HEX.splitted.r) + String(output.HEX.splitted.g) + String(output.HEX.splitted.b);
	return output;
}

function HTTPReq(url, output){
	let richiesta = new XMLHttpRequest();
	richiesta.open('GET', url);
	richiesta.send();
	if(output !== undefined){
		richiesta.onreadystatechange = function(){
			window[output] = this;
		}
	}
}

function age(day, month, year){
	let current = {};
	current.day = time().date.day.month.number;
	current.month = time().date.month.number.number;
	current.year = time().date.year;

	let birth = {};
	birth.day = parseInt(day);
	birth.month = parseInt(month);
	birth.year = parseInt(year);

	base = current.year - birth.year;
	if(birth.month > current.month){
		base--;
	}
	else if(birth.month == current.month){
		if(birth.day > current.day){
			base--;
		}
	}


	return base;
}

Object.prototype.onClick = function(funzione){
	this.addEventListener('click', funzione);
}

function hide(query, all){
	if(all === true){
		document.querySelectorAll(query).forEach(elemento => { elemento.classList.add('hidden') });
	}
	else{
		document.querySelector(query).classList.add('hidden');	
	}
}

function show(query, all){
	if(all === true){
		document.querySelectorAll(query).forEach(elemento => { elemento.classList.remove('hidden') });
	}
	else{
		document.querySelector(query).classList.remove('hidden');	
	}
}

window.addEventListener('load', () => {
	document.querySelector('body').innerHTML += "<style>.hidden { display: none; }</style>"
	document.querySelectorAll('button[for]').forEach(elemento => {
		elemento.addEventListener('click', function(){
			let tipo = document.querySelector("#" + elemento.getAttribute('for')).getAttribute('type');
			tipo.toLowerCase() === 'password' ? document.querySelector("#" + elemento.getAttribute('for')).setAttribute('type', "text") : document.querySelector("#" + elemento.getAttribute('for')).setAttribute('type', "password");
		});
	});
});

function int(stringa){
	if(typeof stringa === 'string'){
		return parseInt(stringa.only([0,1,2,3,4,5,6,7,8,9]));
	}
	else{
		console.error("In int(string), string anin't String");
		return false;
	}
}

String.prototype.only = function(chars){
	let stringa = "";
	let output = [];

	for(var i = 0; i < chars.length; i++) chars[i] = String(chars[i]);

	for(i in this){
		if(!isNaN(i)){
			stringa += this[i];
		}
	}

	stringa = stringa.split('');

	if(typeof chars !== 'object'){
		console.error("In String.only(chars) function, chars must be an object of type array");
		return false
	}
	else{
		let compare = 0;
		try{ test = chars.length } catch (e) { console.error("In String.only(chars) function, chars must be an object of type array"); return false; }
		for(var i = 0; i < stringa.length; i++){
			if(chars.indexOf(stringa[i]) > -1){
				output.push(stringa[i]);
				compare++;
			}
		}
		let res = "";
		for(var i = 0; i < output.length; i++) res += output[i];

		if(compare === stringa.length){
			return true;
		}
		else{
			return res;
		}

	}
}

function help(){
	let output = `0 help() => GET THIS
 1 random(min, max) => CHOOSE A RANDOM NUMBER FROM min TO max
 2 random(max) => CHOOSE A RANDOM NUMBER FROM 0 TO max
 3 "your_string".replaceAll(search, replace) => REPLACE ALL search WITH replace IN "your_string"
 4 "your_string".invert() => INVERT CHARS OF "your_string", OUTPUT: "gnirts_ruoy"
 5 time() => GET A JSON WITH ALL STUFF OF TIME AND DATE
 6 ["your", "array"].random() => PICK A RANDOM ITEM FROM THE ARRAY
 7 HTTPReq(url, "output_var") => GET FILE CONTENT OF url, INSERT IN THE STRING "output_var" THE NAME OF THE VARIABLE WHERE YOU WANT TO SAVE THE OUTPUT WHEN IT IS READY
 8 randomColor() => GET A RANDOM COLOR (BOTH RGB AND HEX SYNTAX)
 9 age(day, month, year) => GET THE AGE OF A PERSON USING HIS/HER DATE OF BIRTH
 10 extension(fileName) => GET THE EXTENSION FROM A FILE NAME (STRING)
 11 hide(query, all) => HIDE HTML OBJECT WITH THIS FUNCTION, QUERY IS THE CSS QUERY OF THE OBJECT, IF YOU WANT TO HIDE ALL OBJECTS WITH THE SAME QUERY SPECIFIED, SET THE ATTRIBUTE "all" WITH true
 12 show(query, all); => SHOW OBJECT/OBJECTS THAT WAS/WERE HID WITH hide FUNCTION, SAME SYNTAX
 13 "your_string".only(['a', 'b', 'c', 'd']) => TEST IF A STRING CONTAINS ONLY THE CHARS DECLARED IN THE PARAMETER OF THE FUNCTION USING AN ARRAY, IF SO IT RETURNS true ELSE IT RETURN THE CONVERTED STRING THAT CONTAINS ONLY THESE CHARS
 14 int("your_string") => FILTER ONLY NUMBERS IN A STRING, EXAMPLE: int("ASDAD998E9190") WILL RETURN 9989190
 15 HTMLObject.onClick(your_function) => ADD THE LISTENER FOR THE CLICK ON AN HTML OBJECT
 	`;
	return output;
}

let AS809N8D091UIJOS;

setInterval(function(){
	try{ AS809N8D091UIJOS = setInterval(loop); } catch(errore) {  }
});
