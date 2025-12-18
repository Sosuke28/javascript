// const getId = document.getElementById("same")
// console.log(getId)
//  this GETELEMENTBYID get the id name in the html elements
// getElementByTagname() this get the tag element example: div
// getElementByClass() this get the class name of a html element


//CHALLNGE 1
// let btn = document.getElementById("clk");
// let res = document.getElementById("res");
// let b = true;
// btn.addEventListener('click', () => {
//     if(b){
//         res.innerHTML = "ON";
//         b = false;
//     }else{
//         res.innerHTML = "OFF";
//         b = true;
//     }
// })


//CHALLENGE 2
// let inp = document.getElementById("inp");
// let output = document.getElementById("output");
// inp.addEventListener('input', () => {
//     output.innerHTML = "you entered: " + inp.value;
// })

//CHALLENGE 3
// let box = document.getElementById("clk");
// box.addEventListener('click', () => {
//     let colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple'];
//     let getColor = colors[Math.floor(Math.random() * colors.length)];
//     box.style.backgroundColor = getColor;
// });


//CHALLENGE 4
// let add = document.getElementById("add");
// let sub = document.getElementById("sub");
// let countDisplay = document.getElementById("count");
// let count = 0;
// add.addEventListener('click', () => {
//     count++;
//     countDisplay.innerHTML = count;
// });
// sub.addEventListener('click', () => {
//     count--;
//     countDisplay.innerHTML = count;
// });

//CHALLENGE 5
// let inp = document.getElementById("item");
// let add = document.getElementById("add");
// let list = document.getElementById("list");

// add.addEventListener('click', () => {
//     let li = document.createElement("li");
//     li.innerHTML = inp.value;
//     list.appendChild(li);
//     inp.value = "";
// });

//Challenge 6
// let swt = document.getElementById("swt")
// let sh = document.getElementById("show")

// swt.addEventListener('click', () => {
// 	if(sh.style.display === "none"){
//     	sh.style.display = "block"
//     }else {
//     	sh.style.display = "none"
//     }

// })

//Challenge 7
let btn = document.getElementById("swt")
let bg = document.getElementById("b")
let b = true

btn.addEventListener('click', () => {
	if(b) {
    bg.style.background = "black"
    bg.style.color = "white"
    b = false;
    }
    else{
    bg.style.background = "white"
    bg.style.color = "black"
    b = true;
    
    }
})