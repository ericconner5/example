//prompts
var divide = function(number1, number2) {
	return number1 / number2;
}

var result = divide(10,2);

alert(result);

var age = prompt("Enter your age: ");

var name = prompt("Enter your name: ");

var favoriteFood = prompt("Enter your favorite food: ");

var add = function(age, name, favoriteFood) {
	return age + name + favoriteFood;
}

var result = add("I'm " + age + " years old. ", "My name is " + name + ". ", "My favorite food is " + favoriteFood + ".");

alert(result);

//BMI Calculator
var divide = function(number1, number2) {
  var weight = number1;
  var height = number2;
  return(weight /(height*height) * 703);
}

var number1 = parseInt(prompt("Enter your weight:"));

var number2 = parseInt(prompt("Enter your height:"));

alert("Your BMI is " +  divide(number1, number2));

//Celsius converter
var number1 = parseFloat(prompt("Enter the temperature in Celsius:"));

var fahrenheit = parseFloat(number1 * 1.8 + 32);

alert("This is the temperature in Fahrenheit " + fahrenheit)

//imperial to metric converter

var imperial = parseFloat(prompt("Enter the weight in ounces:"));
var metric = parseFloat(imperial / 0.035274);

alert("The weight in metric, the superior measurement used by everyone in the world except the USA, Liberia and Myanmar, is: " + metric);
