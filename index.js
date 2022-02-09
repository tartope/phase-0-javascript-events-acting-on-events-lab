// Your code here
//1. get and create variable for dodger id.
const dodger = document.getElementById("dodger");
//2. use (document.addEventListener("keydown", function (event) {console.log(event);});) to determine key property ('ArrowLeft/ArrowRight') for keys.
//3. create function moveDodgerLeft.
//3. use (dodger.style.left) to get the current value of the dodgers property and use the 'replace()' method (replace 'px' with empty string) to strip out the 'px', then store the result in 'leftNumbers' variable.
//4. parseInt leftNumbers and store in 'left' variable.
//5. make an if statement to stop dodger from leaving the edge of the game field, and update the dodger's style.left property using string interpolation, injecting the current value minus 1.
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
//6. make eventListener for moveDodgerLeft/Right with if statement to return functions moveDodgerLeft/Right.
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }else if(e.key === "ArrowRight"){
    moveDodgerRight();
  }
});
//7. make moveDodgerRight funcion using steps above; instead change if statement to define right boarder of game field (game field size (400px) - dodger size (40px)).
//8. make string interpolation left + 1.
function moveDodgerRight(){
  const leftNumbers = dodger.style.left. replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if(left < 360){
    dodger.style.left = `${left + 1}px`;
  }
}






















// const dodger = document.getElementById("dodger");

// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`;
//     }
//   }

//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   });

// function moveDodgerRight() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);

//     if (left < 360) {
//         dodger.style.left = `${left + 1}px`;
//     }
// }

// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowRight") {
//         moveDodgerRight();
//     }
// });