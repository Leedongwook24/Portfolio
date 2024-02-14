let pibtn=document.getElementById("pibtn");
let pivalue=document.getElementById("pivalue");
let pibtn1=document.getElementById("pibtn1");

pibtn.addEventListener('click',() => {
    pivalue.textContent="3.14159265358979323846264338327950288419716939937510582097849445923078164 ";
    pivalue.style.fontSize="15px";
    pivalue.style.color="red";
    pibtn.id="pibtn1";
    alert("50桁まで表示");
    })

pibtn1.addEventListener('click',() => {
    pivalue.style.fontSize="20px";
    pivalue.textContent="3.141592...";
    pivalue.style.color="black";
    pibtn1.id="pibtn";
    alert("元に戻します。");
   })

let gobtn=document.getElementById("gobtn");
    gobtn.addEventListener('click',() => {
    window.scrollTo({top:0, behavior:'smooth'});
   })