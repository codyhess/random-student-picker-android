var pickButton;
var pairButton;
var header;
var body;
var choice;
var aList;
var titles;

var students = [
 "Guzal",
 "Chaltin",
 "Angel",
 "Cesa",
 "Asiya",
 "Drew",
 "Ivan",
 "Shanda",
 "John",
 "Thomas",
 "Stephanie",
 "Krystal",
 "Vanessa",
 "Rachel",
 "Rafael",
 "Susan",
 "Emin",
 "Steve",
 "AJ",
 "Tasi",
 "Deborah",
 "Eric",
 "Lucy",
 "Janette",
 "Monica",
 "Kevin",
 "Fabio",
 "Asia",
 "Julissa",
 "Mike",
 "Sheriff",
 "James",
 "Crystal",
 "Susana",
 "Kyla",
 "Omari"
];

var titles = [
  "The Giver",
  "The Destroyer",
  "The Evil One",
  "The DragonSlayer",
  "The Queen Of Dragons",
  "The Silent One",
  "The Shadow",
  "The Knower Of Things",
  "The Drinker Of Wine ",
  "The WebMaster",
  "The Internet Troll",
  "The Hacker Named 4Chan",
  "The Gift Wrapper",
  "The Indecisive",
  "The Jazz Guitarist",
  "The One Who Writes Titles"
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
  
  choice = document.getElementById('choice');
  aList = document.getElementById('aList');

  pickButton.addEventListener('click', pickOnClick );
  pairButton.addEventListener('click', pairClick );
  
  aList.addEventListener('click', aListOnClick );

  // build the attendance list
  for (let i=0; i<students.length; i++) {
    let li = document.createElement('li');
    li.innerText = students[i];
    aList.append(li);
    
  }
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


var aListOnClick = function (event) {
  if (event.target.tagName === 'LI') {
    event.target.style.textDecoration = 'line-through';
  }
}

