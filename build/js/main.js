(()=>{"use strict";const e=document.querySelector("#tmpl"),t={IndependentLiving:"card__type--independent",SupportAvailable:"card__type--support"},r={CARD:".card",IMG:".card__img",TYPE:".card__type",TITLE:".card__title",ADDRESS:".card__address",PRICE:".card__price"},c=c=>{const n=e.content.cloneNode(!0),o=((e,t)=>{const r=Object.entries(t);let c={};for(let[t,n]of r)c[t]=e.querySelector(n);return c})(n,r),{CARD:d,IMG:l,TYPE:a,TITLE:s,ADDRESS:i,PRICE:u}=o;return d.href="/details/"+c.id,l.src="https://via.placeholder.com/380x227/D8D8FF/FFFFFF?text=card "+c.id,((e,r)=>{e.classList.add(t[r]),e.textContent=r})(a,c.type),s.textContent=c.title,i.textContent=c.address,u.textContent=c.price,n};let n=null;const o=document.querySelector(".form__input"),d=()=>{if(o.value.length>2)return document.querySelectorAll(".card").forEach((e=>{e.classList.add("hidden")})),e=o.value,void document.querySelectorAll(".card").forEach((t=>{t.querySelector(".card__title").textContent.startsWith(e)&&t.classList.remove("hidden")}));var e;document.querySelectorAll(".card").forEach((e=>{e.classList.remove("hidden")}))},l=document.querySelector(".main__catalog");fetch("https://603e38c548171b0017b2ecf7.mockapi.io/homes").then((e=>{if(e.ok)return e.json();throw new Error(`${e.status}, ${e.statusText}`)})).then((e=>{((e,t)=>{for(let r=0;r<t.length;r++)e.appendChild(c(t[r]))})(l,(e=>n=e.length>6?e.slice(0,6):e.slice())(e)),o.addEventListener("input",d)}))})();
//# sourceMappingURL=main.js.map