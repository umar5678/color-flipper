// creat array of color 
// btn variable and target it by id
// make color variable and target 'color' class by quresletr
// add event lisner to btn var created..
  // >> get a random num from array color
    // >> make a function and target body bg color through randnum var
    // and change the color

    // function > get a random num and store it in random num var above
     // 

      
const colors = ["green", "red",'yellow', "blue", "orange", "pink", "purple", "brown", "rgba(133,120,200", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber)


    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
    
})

function getRandomNumber(){
    return Math.floor( Math.random() *colors.length); 
}
