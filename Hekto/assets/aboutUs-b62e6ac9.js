import{S as a,P as c}from"./main-e49fb60b.js";function d(){import.meta.url,import("_").catch(()=>1);async function*s(){}}a.use([c]);document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".about-us-slider-foto .about-us-slider-foto__img");function o(e){t.forEach((i,l)=>{l===e?i.classList.add("about-us-slider-foto__img--active"):i.classList.remove("about-us-slider-foto__img--active")})}const n=new a(".about-us-slider.swiper",{spaceBetween:50,initialSlide:1,pagination:{el:".swiper-pagination",clickable:!0},on:{slideChange:function(){o(this.activeIndex)}}});t.forEach((e,i)=>{e.addEventListener("click",()=>{n.slideTo(i),o(i)})}),t[1]&&t[1].classList.add("about-us-slider-foto__img--active")});export{d as __vite_legacy_guard};
