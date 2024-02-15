let picMD=document.getElementById("MD");
let picPA=document.getElementById("PA");
let picFA=document.getElementById("FA");

picMD.addEventListener('click',() => {
    picMD.src="./yugioh1.png";
})
picMD.addEventListener('mouseout',() => {
    picMD.src="./yugioh.png";
})


picPA.addEventListener('click',() => {
    picPA.src="./Palworld1.png";
})
picPA.addEventListener('mouseout',() => {
    picPA.src="./Palworld.png";
})

picFA.addEventListener('click',() => {
    picFA.src="./Factorio1.png";
})
picFA.addEventListener('mouseout',() => {
    picFA.src="./Factorio.png";
})


let gobtn=document.getElementById("gobtn");
    gobtn.addEventListener('click',() => {
    window.scrollTo({top:0, behavior:'smooth'});
   })
