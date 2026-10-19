/* ===== Configuration : collez ici vos liens ===== */
const FACEBOOK_URL = ""; // ex : "https://www.facebook.com/votrepage"

 /* collez ici le lien Facebook */
if(FACEBOOK_URL){const f=document.getElementById("fb");f.href=FACEBOOK_URL;f.hidden=false}
document.getElementById("y").textContent=new Date().getFullYear();
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("on");io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll(".r").forEach(e=>io.observe(e));

const hd=document.querySelector("header"),nv=document.querySelector("nav"),bg=document.querySelector(".bg");
addEventListener("scroll",()=>hd.classList.toggle("sc",scrollY>10),{passive:true});
bg.addEventListener("click",()=>{const o=nv.classList.toggle("open");bg.setAttribute("aria-expanded",o)});
nv.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nv.classList.remove("open")));
