// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var counter = 0;
var story = "once upon a time,";
var minus50Btn = document.getElementById("minus50");
var diplayEl = document.getElementById("display");
var minus10Btn = document.getElementById("minus10");
var minus1btn = document.getElementById("minus1");
var plus50Btn = document.getElementById("plus50");
var plus10Btn = document.getElementById("plus10");
var plus1btn = document.getElementById("plus1");
var strngInEl = document.getElementById("strIn");
var storyEl = document.getElementById("strOut");
var roundBtn1 = document.getElementById("rand1");
var roundBtn2 = document.getElementById("rand2");
var roundBtn3 = document.getElementById("rand3");
var roundBtn4 = document.getElementById("rand4");
var resetBtn = document.getElementById("reset");

var picBtn = document.getElementById("pic-btn");
var picContainer = document.getElementById("pic-container");

var toyBtn = document.getElementById("toy-btn");
var toyContainer = document.getElementById("toy-container");
// Event Listers
resetBtn.addEventListener("click", resetpage);
minus50Btn.addEventListener("click", minus50fcn);
minus10Btn.addEventListener("click", minus10fcn);
minus1btn.addEventListener("click", minus1fcn);
strngInEl.addEventListener("change", updateStory);
plus1btn.addEventListener("click", add1fcn);
plus10Btn.addEventListener("click", add10fcn);
plus50Btn.addEventListener("click", add50fcn);

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
// event function
function minus50fcn() {
  //update the value of the country (JS)
  counter = counter - 50;
  console.log(counter);

  // use the counter to update the website (HTML)
  diplayEl.innerHTML = counter;
}

function minus10fcn() {
  counter -= 10;

  diplayEl.innerHTML = counter;
}

function minus1fcn() {
  counter -= 1;

  diplayEl.innerHTML = counter;
}
// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

function add1fcn() {
  counter += 1;

  diplayEl.innerHTML = counter;
}

function add10fcn() {
  counter += 10;

  diplayEl.innerHTML = counter;
}

function add50fcn() {
  counter += 50;

  diplayEl.innerHTML = counter;
}
function updateStory() {
  // save the users word to variable
  var word = strngInEl.value;

  // update the story variable
  story += word + "";

  //clear the input field
  strngInEl.value = "";

  storyEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);
roundBtn3.addEventListener("click", round3);
roundBtn4.addEventListener("click", round4);

function round1() {
  // create random dec 0-1
  let rand = Math.random();

  //round to 3 dec places
  rand = rand.toFixed(3);

  //update site
  document.getElementById("rand1-out").innerHTML = rand;
}

function round2() {
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  document.getElementById("rand2-out").innerHTML = rand;
}

function round3() {
  // -5 to 5
  var rand = Math.random() * 10 - 5;
  rand = Math.round(rand);

  document.getElementById("rand3-out").innerHTML = rand;
}

function round4() {
  var rand1 = document.getElementById("rand-in1").value;
  rand11 = Math.round(rand1);

  var rand2 = document.getElementById("rand-in2").value;
  rand22 = Math.round(rand2);

  // Math.random() *(big number - small number) + small number

  var rand = Math.random() * (rand11 - rand22) + rand22;
  rand = rand.toFixed();

  document.getElementById("rand4-out").innerHTML = rand;
}

function resetpage() {
  var clear = 0;

  console.log(clear);
  document.getElementById("display").innerHTML = clear;

  var clear2 = "Once upon a time,";

  document.getElementById("strOut").innerHTML = clear2;

  var clear1 = `----------`;

  document.getElementById("rand1-out").innerHTML = clear1;

  var clear2 = `----------`;

  document.getElementById("rand2-out").innerHTML = clear2;

  var clear3 = `----------`;

  document.getElementById("rand3-out").innerHTML = clear3;

  var clear4 = `----------`;

  document.getElementById("rand4-out").innerHTML = clear4;
}

picBtn.addEventListener("click", addCandy);

function addCandy() {
  picContainer.innerHTML += "<img width='50px' src='img/richiecandy.jpg'>";
}

toyBtn.addEventListener("click", addToy);

function addToy() {
  toyContainer.innerHTML += "<img width='50px' src='img/train.jpg'>";
}

// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//      document.getElementById('HTML').style.background = rgbString

// Your job is to make the values random in the above code snippet.

// 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.
