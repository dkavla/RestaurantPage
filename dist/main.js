(()=>{const e=document.getElementById("content"),n=(document.createElement("header"),document.createElement("div"));n.id="name";const t=document.createElement("nav"),d=document.createElement("div");d.id="home",d.innerHTML="Home",d.addEventListener("click",(()=>{console.log("Home")}));const i=document.createElement("div");i.id="menu",i.innerHTML="Menu",i.addEventListener("click",(()=>{console.log("Menu")}));const a=document.createElement("div");a.id="contact",a.innerHTML="Contact Us",a.addEventListener("click",(()=>{console.log("Contact")})),t.appendChild(d),t.appendChild(i),t.appendChild(a);const c=document.createElement("main"),o=document.createElement("div");o.id="center-main",o.innerHTML="Authentic French Cuisine";const r=document.createElement("div");r.innerHTML="What We Bring To the Table";const l=document.createElement("p");l.innerHTML="La Grande Culinaire aims to be the top French dining spot in the heart of New York City. Our chefs are world class trained by top artists like Marco Pierre White, Raymond Blanc, Gordon Ramsay, and others. They strive to bring cuisine that satisfies and quells hunger.";const m=document.createElement("p");m.innerHTML="We serve breakfast from 8:00 AM - 11:00 AM, lunch 11:00 AM - 4:00 PM, late lunch 4:00 PM - 4:45 PM, dinner 5:00 PM - 12:00 AM and brunch 9:00 AM - 3:45 PM. Reservations are recommended.",c.appendChild(o),c.appendChild(r),c.appendChild(l),c.appendChild(m),e.appendChild(n),e.appendChild(t),e.appendChild(c)})();