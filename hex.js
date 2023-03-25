const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

 // add the event listener and a callback function to the btn const i created 

 btn.addEventListener('click', function(){
let hexColor = '#'

// make a loop to generate a 6 digit hex value

for( i = 0; i < 6; i++ ){
    hexColor = hexColor + hex[getRandomNum()]
    console.log(hexColor)
}

color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
 })


 // Same as previous >. generated a random num by the length of array [hex] 

 function getRandomNum(){
    return Math.floor(Math.random() * hex.length)
 }   

 console.log(getRandomNum())