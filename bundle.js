(()=>{"use strict";const e=document.querySelector(".btn"),s=new class{render(e){const s=document.querySelector(".collapse");s.classList.toggle("block"),e.classList.add("btn-shadow"),e.addEventListener("mouseout",(()=>{s.classList.remove("block"),e.classList.remove("btn-shadow")}))}};e.addEventListener("click",(t=>{t.preventDefault(),s.render(e)}))})();