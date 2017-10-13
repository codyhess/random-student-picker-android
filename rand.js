var pickButton;
var pairButton;
var aramButton;
var header;
var body;
var choice;
var titles;

var students = [
  "Jervon Arnold",
  "Daniel Cortes",
  "Ashley Joachim",
  "Muaadh Melhi",
  "Anne Kochanski",
  "Victoria Leon",
  "Mustafizur Matin",
  "Tatiana Moronta",
  "Darnell Otto",
  "Amar Ahmed",
  "Amirah Oxendine",
  "Amy Rivera",
  "Anas Chikh",
  "Boubacar Bah",
  "Bryant Ramirez",
  "Francisco Andrade",
  "Joanne Song",
  "LaQuana Chisolm",
  "Lelucksamee Ampawa",
  "Melina Gonzalez",
  "Mohammad Naz",
  "Muhaimen Noor",
  "Murodjon Rahimov",
  "Niema Widaha",
  "Nikunjan GC",
  "Kevin Toro",
  "Oleg Siboglov",
  "Shantal Taveras",
  "Siran LI",
  "Taishawn Williams",
  "Tariqua Nehisi",
  "Vivian Kulumba",
  "Volha Kaleda",
  "Wayne Kellman",
  "Yisandy Marte",
  "Yoke Yen Lam",
];

var titles = [
  "The Just",
  "The Magnificent",
  "The Magnanimous",
  "The Furious",
  "The The Golden Hearted",
  "The Clever",
  "The Great Wit",
  "The Kind",
  "The Caring",
  "The Jovial",
  "The Courageous",
  "Whose Friendship is Magic",
  "Lover of Trail Mix",
  "The Caffeinated",
  "The Jazz Pianist",
  "The Java Whisperer",
];


var colors = [
  '#cf5d47',
  '#ffed00',
  '#800000',
  '#f7e100',
  '##500000',
  '#efed00',
  '#780000 ',
  '#f5d245',
  '#480000',
  '#fbdd45',
  '#880000 ',
];



var cur = 0;

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello rand.js');

  body = document.getElementById('body');
  header = document.getElementById('header');
  pickButton = document.getElementById('pickButton');
  pairButton = document.getElementById('pairButton');
  aramButton = document.getElementById('aramButton');
  
  choice = document.getElementById('choice');

  pickButton.addEventListener('click', pickOnClick );
  pairButton.addEventListener('click', pairClick );
  aramButton.addEventListener('click', aramOnClick );
});



var pickOnClick = function (event) {
  choice.innerHTML = '&nbsp;'
  var rand = students.splice(Math.floor(Math.random() * students.length),1); 
  var title = titles.splice(Math.floor(Math.random() * titles.length), 1);
  var x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      body.style.backgroundColor = 'goldenrod;'
      window.clearInterval(x);
      cur = 0;
      if (rand[0].length % 2 === 0) {
        rand[0] = rand[0] 
      }
      choice.innerText = (rand[0] + ' ' + title).toUpperCase() + '!'
    
      // return;
      
    }  
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  }, 200);
}


var pairClick = function (event) {
  choice.innerHTML = '&nbsp;'
  var rand = students.splice(Math.floor(Math.random() * students.length),1); 
  var randTwo = students.splice(Math.floor(Math.random() * students.length),1);

  var x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      window.clearInterval(x);
      cur = 0;
      choice.innerHTML = rand + ' &#x2764; ' + randTwo
      // return;  
    }  
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  }, 200);
}

var aramOnClick = function (event) {
  var studentsCopy = students.slice();
  while (students.length) {
    var i = Math.floor(Math.random() * students.length);
    console.log(i);
    console.log(students[i]);
    var s = students.splice(i, 1);
    console.log(s);
    var el = document.createElement('p');
    el.innerText = s;
    choice.appendChild(el);
  }
  students = studentsCopy; // restore students list from backup.
}
