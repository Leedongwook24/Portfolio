let pibtn=document.getElementById("pibtn");
let pivalue=document.getElementById("pivalue");
let pibtn1=document.getElementById("pibtn1")

pibtn.addEventListener('click',() => {
    pivalue.textContent="3.14159265358979323846264338327950288419716939937510582097849445923078164";
    pivalue.style.color="red";
    pibtn.id="pibtn1";
})

pibtn1.addEventListener('click',() => {
    pivalue.textContent="3.141592...";
    pivalue.style.color="black";
    pibtn1.id="pibtn";
   })




