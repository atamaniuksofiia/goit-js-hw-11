import{S as u,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const m="46237249-998f0f24dffb15788a2eb0e4e",p="https://pixabay.com/api/",d=async t=>{try{const r=await fetch(`${p}?key=${m}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`);if(!r.ok)throw new Error("Network response was not ok");return(await r.json()).hits}catch(r){return console.error("Error fetching images:",r),[]}},y=new u(".gallery a"),h=t=>{const r=document.querySelector(".gallery");if(r.innerHTML="",t.length===0){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=t.map(({webformatURL:a,largeImageURL:e,tags:o,likes:n,views:i,comments:c,downloads:l})=>`
                <li class="gallery-item">
                    <a href="${e}" class="gallery-link">
                        <img src="${a}" alt="${o}" class="gallery-image" />
                    </a>
                    <div class="info">
                        <p class="info-item"><span>Likes:</span> ${n}</p>
                        <p class="info-item"><span>Views:</span> ${i}</p>
                        <p class="info-item"><span>Comments:</span> ${c}</p>
                        <p class="info-item"><span>Downloads:</span> ${l}</p>
                    </div>
                </li>
            `).join("");r.innerHTML=s,y.refresh()},g=()=>{const t=document.querySelector(".loader");t&&(t.style.display="block")},L=()=>{const t=document.querySelector(".loader");t&&(t.style.display="none")},w=document.querySelector(".form-search");w.addEventListener("submit",t=>{t.preventDefault();const r=document.querySelector('input[name="query"]').value.trim();if(!r){iziToast.error({title:"Error",message:"Search query cannot be empty."});return}g(),d(r).then(s=>{h(s)}).catch(s=>{console.error(s),iziToast.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
