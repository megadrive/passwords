import{S as e,i as s,s as t,e as n,a as o,t as r,b as a,c as l,d as c,l as i,f as u,n as d,g as m,m as p,h as g,j as f,k as h,o as b,p as j,q as y}from"./vendor.a30485f1.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?s.credentials="include":"anonymous"===e.crossorigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();function v(e){let s,t,p,g,f,h,b,j,y,v;return{c(){s=n("div"),t=n("input"),p=o(),g=n("div"),f=r("Time to crack: "),h=r(e[0]),b=o(),j=n("input"),a(t,"type","text"),a(t,"placeholder","Ready"),t.value=e[1],a(t,"class","svelte-1oo0jkc"),a(j,"type","submit"),j.value="Generate",a(s,"id","container"),a(s,"class","svelte-1oo0jkc")},m(n,o){l(n,s,o),c(s,t),c(s,p),c(s,g),c(g,f),c(g,h),c(s,b),c(s,j),y||(v=i(j,"click",e[2]),y=!0)},p(e,[s]){2&s&&t.value!==e[1]&&(t.value=e[1]),1&s&&u(h,e[0])},i:d,o:d,d(e){e&&m(s),y=!1,v()}}}function w(e,s,t){let n="generate and see!";const o={numbers:3,symbols:2,length:14};let r={};const a={adjs:[{url:"https://raw.githubusercontent.com/megadrive/corpora/master/data/words/adjs.json",func:e=>e.adjs},{url:"https://raw.githubusercontent.com/megadrive/corpora/master/data/words/verbs.json",func:e=>e.verbs.map((e=>e.past))}],nouns:[{url:"https://raw.githubusercontent.com/megadrive/corpora/master/data/animals/common.json",func:e=>e.animals}]};let l="",c={};(async()=>{console.log("Fetching words");try{const e={adjs:a.adjs.map((e=>fetch(e.url,{mode:"cors"}).then((e=>e.json())).then((s=>e.func(s))))),nouns:a.nouns.map((e=>fetch(e.url,{mode:"cors"}).then((e=>e.json())).then((s=>e.func(s)))))};c={adjs:await Promise.all(e.adjs),nouns:await Promise.all(e.nouns)},c.adjs=[...c.adjs[0],...c.adjs[1]],c.nouns=[...c.nouns[0]],console.log(`Got ${c.adjs.length} adjectives and ${c.nouns.length} nouns.`)}catch(e){console.error("fetch error",e)}})();const i=e=>e[Math.floor(Math.random()*e.length)],u=e=>e[0].toUpperCase()+e.substring(1);return[n,l,()=>{const e=()=>{const e=[];e.push(u(i(c.adjs).replace(/[^A-Za-z]/g,""))),e.push((()=>{const s=c.nouns.filter((s=>s.toLowerCase().startsWith(e[0][0].toLowerCase())));console.info({alliterations:s});let t=i(s);return t=u(t.replace(/[^A-Za-z]/g,"")),t})());for(let s=0;s<o.symbols;s++)e.push(i("!@#$%^&*/\\"));for(let s=0;s<o.numbers;s++)e.push(i("1234567890"));return e.join("")};let s="",a=!1;do{s=e(),r=(e=>"string"!=typeof e?null:{numbers:e.replace(/[^0123456789]/g,"").length,symbols:e.replace(/[^\\\/!@#$%\^&\*]/g,"").length,length:e.length})(s),console.log({config:o,stats:r}),a=r.numbers>=o.numbers&&r.symbols>=o.symbols&&r.length>=o.length}while(!a);t(1,l=s);const d=p(s);t(0,n=d.crack_times_display.offline_slow_hashing_1e4_per_second)}]}class $ extends e{constructor(e){super(),s(this,e,w,v,t,{})}}function k(e){let s,t,r,i,u,p,v;return p=new $({}),{c(){s=n("main"),t=n("div"),r=n("img"),u=o(),g(p.$$.fragment),f(r.src,i="/passwords/assets/title.a2bd4c5c.png")||a(r,"src","/passwords/assets/title.a2bd4c5c.png"),a(r,"alt","PasswordGen title logo"),a(s,"class","svelte-15k8vw2")},m(e,n){l(e,s,n),c(s,t),c(t,r),c(t,u),h(p,t,null),v=!0},p:d,i(e){v||(b(p.$$.fragment,e),v=!0)},o(e){j(p.$$.fragment,e),v=!1},d(e){e&&m(s),y(p)}}}new class extends e{constructor(e){super(),s(this,e,null,k,t,{})}}({target:document.getElementById("app")});
