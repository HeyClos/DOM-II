// Your code goes here


// mouseover
//  keydown
//  wheel
//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick

const signBtn = document.querySelectorAll(".btn");

// signBtn.forEach(button => {
//     button.addEventListener ("click", () => {
//         event.target.style.backgroundColor = 'blue';
//     }
// })


const goCrazy = document.querySelectorAll(".container home .content-section .text-content p");
goCrazy[0].addEventListener('mouseover', (event) =>{
    event.target.style.backgroundColor = 'yellow';
})

const mainNav = document.querySelector(".main-navigation");
mainNav.addEventListener("click", event => {
  event.target.style.color = "red";
});

const dest = document.querySelector(".content-destination");
dest.addEventListener("click", () => {
  console.log(`I'm pressing the key:${event.key}`)
});

const mainNav = document.querySelector(".main-navigation");
mainNav.addEventListener("click", event => {
  event.target.style.color = "red";
});