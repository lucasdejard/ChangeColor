const colorCHANGE = document.querySelector(".bloco");
const bodyBCG = document.querySelector("div");

const colors = ["yellow","red","green"];

colorCHANGE.addEventListener("click",changeColor);

function changeColor (){
    //bodyBCG.style.backgroundColor=colors[2];
    let random = Math.floor(Math.random()*colors.length)
    bodyBCG.style.backgroundColor = colors[random];
}

const colorCHANGE2 = document.querySelector(".bloco2");
const bodyBCG2 = document.querySelector("div.bloco2");

const colors2 = ["yellow","red","green"];

colorCHANGE2.addEventListener("click",changeColor2);

function changeColor2 (){
    //bodyBCG.style.backgroundColor=colors[2];
    let random = Math.floor(Math.random()*colors2.length)
    bodyBCG2.style.backgroundColor = colors2[random];
}