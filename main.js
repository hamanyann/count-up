const btn = document.querySelector(".btn");

let count = 0;

btn.addEventListener("click",()=>{
count += 1; 
document.querySelector('p').textContent = count;
});




document.querySelector('p').textContent = count