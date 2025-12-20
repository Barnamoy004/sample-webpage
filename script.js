document.querySelectorAll(".fade").forEach(e=>{
setTimeout(()=>e.classList.add("show"),200)
})

document.querySelectorAll(".action").forEach(b=>{
b.addEventListener("click",()=>{
b.style.boxShadow="0 10px 25px rgba(0,0,0,.4)"
})
})
