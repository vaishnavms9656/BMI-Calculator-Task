const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("male");
var female = document.getElementById("female");
var head= document.getElementById("head")
let load = document.getElementById("horizontalBar")

function calculate() {
  console.log(weight.value);
  if (
    isNaN(weight.value) ||
    isNaN(height.value) ||
    weight.value <= 0 ||
    height.value <= 0
  ) {
    alert("Enter a valid weight and height");
    return;
  }

  const heightInMeters = height.value / 100; 
  const bmi = weight.value / Math.pow(heightInMeters, 2);
  bmiText.textContent = bmi.toFixed(2);
  bmiText.className = desc;
  if (bmi < 18.5) {
    bmiText.style.color = "yellow";
    head.style.color = "yellow";
    desc = "underweight";
    load.style.left='40px'
  } else if (bmi < 25) {
    desc = "healthy";
    bmiText.style.color = "green";
    head.style.color = "green";
    load.style.left='130px'
  } else if (bmi < 30) {
    desc = "overweight";
    bmiText.style.color = "orange";
    head.style.color = "orange";
    load.style.left='225px'
  } else {
    desc = "obese";
    bmiText.style.color = "red";
    head.style.color = "red";
    load.style.left='300px'
  }
  descText.innerHTML = `<strong>You are <strong><blink>${desc}<blink>`;
}

