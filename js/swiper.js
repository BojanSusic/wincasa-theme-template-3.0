const slider=document.querySelector(".homepage-swiper");let isDown=!1;let startX;let scrollLeft;slider.addEventListener("mousedown",e=>{isDown=!0;slider.classList.add("active");startX=e.pageX-slider.offsetLeft;scrollLeft=slider.scrollLeft});slider.addEventListener("mouseleave",()=>{isDown=!1;slider.classList.remove("active")});slider.addEventListener("mouseup",()=>{isDown=!1;slider.classList.remove("active")});slider.addEventListener("mousemove",e=>{if(!isDown)return;e.preventDefault();const x=e.pageX-slider.offsetLeft;const walk=x-startX;slider.scrollLeft=scrollLeft-walk})