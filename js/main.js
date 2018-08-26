// #4 Create an array of 5 strings. Make sure to capitalize some of the letters in your strings
var myArray = ["LaUghinG", "CrYinG", "SLeePinG", "PLAying", "WalKiNg"];
var myNewArray = [];
// #5 Loop through the array
for (var i = 0; i < myArray.length; i++) {
	// Change each string to lowercase, and then add them to a new array
	myNewArray.push(myArray[i].toLowerCase());
};
console.log(myNewArray);
// #6 Loop through the new array (all lowercase strings) and log the first and last character of each string to the console.
var myNewArray = ["laughing", "crying", "sleeping", "playing", "walking"];
for (var i = 0; i < myNewArray.length; i++) {
	console.log(myNewArray[i][0]);
	console.log(myNewArray[i].length - 1);
};
// #7 Create a variable and store your name in it
var myName = "Acho Egbunu";
// Using the split method and a loop, log each letter of your name to the console.
var mySplitName = myName.split("");
for (var i = 0; i < myName.length; i++) {
	console.log(myName[i].split());
};
// Using the join method, put your name back together
mySplitName = mySplitName.join("");
// replace all occurrences of one letter with another. (ie: replace all a's with y's)
console.log(mySplitName.replace)