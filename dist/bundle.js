!function(){"use strict";var e,t;e=document.querySelector(".m-menu"),t=document.querySelector(".m-links"),console.log("mLinks: ",t),e.addEventListener("click",(function(){e.classList.toggle("m-menu-active"),t.classList.toggle("m-links__active")})),function(){var e,t=document.querySelector(".slider-content"),n=document.querySelectorAll(".slider-item"),c=document.querySelectorAll(".dash"),o=document.querySelectorAll(".slide-description"),a=0;if(!(document.getElementById("projects")||document.getElementById("contacts")||document.getElementById("about")||document.getElementById("blog"))){var r=function(e,t,n){e[t].classList.remove(n)},i=function(e,t,n){e[t].classList.add(n)},l=function(){r(n,a,"open"),r(c,a,"active"),r(o,a,"description-active"),++a>=n.length&&(a=0),i(n,a,"open"),i(c,a,"active"),i(o,a,"description-active")},s=function(){e=setInterval(l,3e3)};t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".dash")&&(r(n,a,"open"),r(c,a,"active"),r(o,a,"description-active"),t.matches(".dash")&&c.forEach((function(e,n){e===t&&(a=n)})),i(n,a,"open"),i(c,a,"active"),i(o,a,"description-active"))})),t.addEventListener("mouseover",(function(t){t.target.matches(".dash")&&clearInterval(e)})),t.addEventListener("mouseout",(function(e){e.target.matches(".dash")&&s()})),s()}}(),function(){if(document.getElementById("projects")){var e=document.querySelector(".nav-menu").querySelectorAll("li>a"),t=document.querySelectorAll(".project-page");e.forEach((function(n){n.addEventListener("click",(function(n){n.preventDefault();var c,o=n.target;e.forEach((function(e){return e.classList.remove("nav-link_active")})),o.classList.add("nav-link_active"),c=o.dataset.category,t.forEach((function(e){var t=!e.classList.contains(c),n="all"===c.toLowerCase();e.style.display=t&&!n?"none":"block"}))}))}))}}(),function(){if(document.getElementById("contacts")){var e=document.querySelector("#form-user"),t=document.querySelector(".form-btn");e.querySelectorAll("input").forEach((function(e){e.addEventListener("input",(function(n){if(e.matches("[type=email]")){var c=document.querySelector("[type=email]"),o=/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;o.test(c.value)?o.test(c.value)&&(c.style.cssText="",t.disabled=!o.test(e.value)):(c.style.cssText="border: 1px solid red",t.disabled=!0)}e.matches("[type=text]")&&(e.value=e.value.replace(/[^а-яА-Яa-zA-Z]/,""))}))}));var n=document.querySelector(".message");n.addEventListener("input",(function(){n.value=n.value.replace(/[^а-яА-Яa-zA-Z\s\,\.\?\!\-\;\:]/,"")})),e.addEventListener("submit",(function(t){t.preventDefault();var n=new FormData(e),c={};n.forEach((function(e,t){c[t]=e})),fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(t){200===t.status?(e.querySelectorAll("input").forEach((function(e){return e.value=""})),e.querySelector(".message").value=""):(e.querySelectorAll("input").forEach((function(e){return e.value=""})),e.querySelector(".message").value="",console.error(t.status))})).catch((function(e){console.error(e)}))}))}}()}();