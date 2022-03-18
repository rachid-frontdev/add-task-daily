const arrayOfQuotes = [
{
	"author":'rachid',
	"quote": 'in lam tasta7i faf3al ma ch6t' 
},
{
	author: 'bodi',
	quote: 'soug motok ya wadi'
},
{
	author: 'bomedien lite',
	quote: 'a5rj mn hyati nrmik fi la pobelle'
}
    
];

	const quote = document.getElementById('quote1');

const selectRandom = (arrayLength) => {
 return Math.floor(arrayLength * Math.random()); 
}
	const generateQuote = () => {
	let randomNumber = selectRandom(arrayOfQuotes.length);

document.querySelector("#author").style.borderTop = "1px solid red";

quote.style.borderTop = "1px solid red";

	quote.innerHTML = ` " ${arrayOfQuotes[randomNumber].quote} " `;

	document.getElementById('author').innerHTML = ` " ${arrayOfQuotes[randomNumber].author}  " .`;
}

var car = [
"toyota",
'mars',
'MG',
"Mercedes AMG 63s",
"Renault",
"accent"
];
car = car.map( (a) => a.toUpperCase());

const startEngine = (carLength) => Math.floor(Math.random() * carLength);
const carBecome = () => {
	const randomCar = startEngine(car.length);
	document.getElementById('car').textContent = car[randomCar];

}

window.onscroll = function() {
document.getElementById('enterAuto').click();
} 

const doing = (f,g) => (r) => f(g(r));
const num = (r) => r * 2;
const nub = (r) => r * 2;
doing(num,nub)