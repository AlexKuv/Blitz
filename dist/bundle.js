!function(){"use strict";(function(){var e,t=document.querySelector(".slider-content"),n=document.querySelectorAll(".slider-item"),c=document.querySelectorAll(".dash"),a=document.querySelectorAll(".slide-description"),i=0;if(~document.location.pathname.indexOf("index")||~document.location.pathname.indexOf("Blitz")){var o=function(e,t,n){e[t].classList.remove(n)},r=function(e,t,n){e[t].classList.add(n)},s=function(){o(n,i,"open"),o(c,i,"active"),o(a,i,"description-active"),++i>=n.length&&(i=0),r(n,i,"open"),r(c,i,"active"),r(a,i,"description-active")},l=function(){e=setInterval(s,2e3)};t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".dash")&&(o(n,i,"open"),o(c,i,"active"),o(a,i,"description-active"),t.matches(".dash")&&c.forEach((function(e,n){e===t&&(i=n)})),r(n,i,"open"),r(c,i,"active"),r(a,i,"description-active"))})),t.addEventListener("mouseover",(function(t){t.target.matches(".dash")&&clearInterval(e)})),t.addEventListener("mouseout",(function(e){e.target.matches(".dash")&&l()})),l()}})(),function(){if(~document.location.pathname.indexOf("projects")){var e=document.querySelector(".nav-menu").querySelectorAll("li>a"),t=document.querySelectorAll(".project-page");e.forEach((function(n){n.addEventListener("click",(function(n){n.preventDefault();var c,a=n.target;e.forEach((function(e){return e.classList.remove("nav-link_active")})),a.classList.add("nav-link_active"),c=a.dataset.category,t.forEach((function(e){var t=!e.classList.contains(c),n="all"===c.toLowerCase();e.style.display=t&&!n?"none":"block"}))}))}))}}()}();