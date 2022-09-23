//console.log("hacked the mainframe");  //debug console log hehe

// function submit() {  // function to submit changes to top 10 list
//     console.log("yes");
// }
let car = new Array(); // array of racecar pictures
let start = Date.now(); // remember start time
for (let i = 1; i < 11; ) {
  // get all car imgs and insert them into array to use for later
  car[i] = document.getElementById("car" + i);
  //console.log(car[i]);
  i++;
}

// we wrap all of it in a for loop with the length of car array to make sure we move every car
for (let x = 0; x < car.length; x++) {
  let timer = setInterval(function () {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 2000) {
      clearInterval(timer); // finish the animation after 2 seconds
      return;
    }

    // draw the animation when timePassed
    draw(timePassed);
  }, 20);

  // as timePassed goes from 0 to 2000 ( 0 seconds to 2 seconds)
  // the images will get exponentially closer to left (furthest away at top point) and will go down a static amount
  function draw(timePassed) {  
    car[x].style.left = timePassed / (2 * x) + "px";
    car[x].style.top = 56 + (x * 41)  + "px";
  }
}
