(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const g of o.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();const W=t=>new Promise((e,i)=>{const r=document.createElement("script");r.innerHTML=t.innerHTML;const n=t.getAttribute("src");n&&r.setAttribute("src",n),r.onload=()=>e(),r.onerror=o=>i(),document.head.appendChild(r),document.head.removeChild(r),n||e()}),F=["https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/1421674103941_.pic.jpg?Expires=1674374290&Signature=xP4hwJv2v1C8NwRhF7%2Bx%2BsCuESk%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/1431674216708_.pic.jpg?Expires=1674374294&Signature=3VeRb4TNWYDihSlJfAmn7rR1QLg%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/1441674216726_.pic.jpg?Expires=1674374298&Signature=%2BBTpjL9tW9nwIuZ%2F1aML3Lo0VsU%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/1451674217201_.pic.jpg?Expires=1674374302&Signature=ka%2BF41MnojLReVgDCtbI0r3zz9o%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/1461674217214_.pic.jpg?Expires=1674374306&Signature=dbH6jyNDlSsa8Evvhbvam%2BIbXq8%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/1471674217860_.pic.jpg?Expires=1674374310&Signature=MNKx%2BJrl%2BvFlGm%2FqVfW78vqMd7I%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/1481674217871_.pic.jpg?Expires=1674374314&Signature=41SNz%2BxJEtxz8UxYpAfDmBYeTLs%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/1491674218309_.pic.jpg?Expires=1674374318&Signature=qxCSivKqVV2Mlz25WFZaNzdcC0I%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/1501674218320_.pic.jpg?Expires=1674374323&Signature=bDJj0xcMhgrUEQrjsaWbTwePdDQ%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG112.jpeg?Expires=1674374327&Signature=%2BRZkDUHBSnMquPreeevFnO%2BqRg4%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG113.jpeg?Expires=1674374331&Signature=XzqogLcJf0L1OlG49jqVVtn4WI4%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG114.jpeg?Expires=1674374335&Signature=yInWmIkWpFMKO0hRE%2B2Y9ewk4Jw%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG118.png?Expires=1674374339&Signature=Eq0NCGSK3CJZvKjFyLFzwdFCiNI%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG120.png?Expires=1674374343&Signature=QphVsy7arChF3lLThrMn%2BWye2aU%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG125.jpeg?Expires=1674374347&Signature=xAGB3HV4b0w6MPdtAaqp9PCdwTo%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG126.jpeg?Expires=1674374351&Signature=TMi8AChIybyvdp9aI306sOzTHfc%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG127.jpeg?Expires=1674374355&Signature=N4uRmM7GiDesXmazYPucpxFwwQA%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG128.jpeg?Expires=1674374359&Signature=Svzzpxmy4GZ9rh0R3mT16X0wlcU%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG129.jpeg?Expires=1674374363&Signature=YRZ9yMg4e05NmDQeuIM%2B07hkZ4c%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG130.jpeg?Expires=1674374367&Signature=6a9oo7ElF2iFtzuqZOEGfGof5Yg%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG131.jpeg?Expires=1674374371&Signature=00lOnaUuqOZTv9OWoPdtys9PtKk%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG132.jpeg?Expires=1674374375&Signature=%2F60onFF4gs3EvcI6AhhO8UeAlVc%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG133.jpeg?Expires=1674374379&Signature=SaqWvkEdslMEIDWfb1eIDcxq0e8%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG134.jpeg?Expires=1674374383&Signature=Lz28rTfJunhrZxLtscXLtXnt2cg%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG135.jpeg?Expires=1674374387&Signature=9k2apP0bXiBvy4NXHOyGkxqeVOA%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG136.jpeg?Expires=1674374391&Signature=b4PU1BAPpYguBkhV9xOrRl0jf58%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG153.jpeg?Expires=1674374395&Signature=AZgNUVSiV6cnXLyB90HKXSbmSiU%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG154.jpeg?Expires=1674374399&Signature=nvdKMwuDa%2B5ox7XQ%2B0wFOQ2OfQw%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG157.jpeg?Expires=1674374403&Signature=X5jiXU5ZvAXFc3YmKjcpFzjxG1I%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG165.jpeg?Expires=1674374407&Signature=06%2B%2FThkmYCZjpvEBoZO%2FEfTWbeA%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG167.jpeg?Expires=1674374411&Signature=qdWk2o%2F1PrTOg1Y37RXiv1zxPEA%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG54.jpeg?Expires=1674374415&Signature=HdeoluQ%2Bq3WoNbb3VzkhJo8rk4w%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG57.jpeg?Expires=1674374419&Signature=v73Zr8cf1PmYsBSuWxx7evWRzgc%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG6.jpeg?Expires=1674374423&Signature=VDoIHIk5cK3er0c1b%2FPzA9tLJwM%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG65.png?Expires=1674374427&Signature=fm3%2FjNwdEO67IpgiidZQvEc1kwg%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG67.jpeg?Expires=1674374431&Signature=SLfUnOoXzHXaO0oOeHRJ4TfQf4E%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG68.jpeg?Expires=1674374435&Signature=gZ2ALesnJfeLYhSoFaQaOaRDpas%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG7.jpeg?Expires=1674374439&Signature=tF63E%2F3Mt2l5vDM%2Fk4rHVLNKo2w%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG70.png?Expires=1674374443&Signature=sW1mVXC10ihCyTsCXaUYVMEs%2BK4%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG7067.jpeg?Expires=1674374447&Signature=cGicmb0fMrZhyhIYRk7jV9uF7Kc%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG71.jpeg?Expires=1674374451&Signature=UKSETiT4lFz9t1XmQR4%2B0SQnfBE%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG72.jpeg?Expires=1674374455&Signature=MQvfBh18A872SIVBHdMbIBOmIQo%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG7262.jpeg?Expires=1674374460&Signature=mQ%2BfXhL0rMgXDC%2FQKPcPKnLM0us%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG7388.jpeg?Expires=1674374463&Signature=%2BUeOVKzY1n2yLV%2FogRQd2Wgcvpo%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG74.jpeg?Expires=1674374468&Signature=GJ5HkQMh4MYwNQnHiAbN1sCSml4%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG7502.jpeg?Expires=1674374472&Signature=XMsVonTOQxgLwZgqFzXGlrKzn0U%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG7503.png?Expires=1674374476&Signature=E5cJl6XGCdUPjHHxif4hT0iR3gw%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG7504.jpeg?Expires=1674374480&Signature=0qCDlftXdY1p2c%2Btk07BXsbgQg8%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG7505.jpeg?Expires=1674374484&Signature=h0YU4mwwPDFCNOS5nTMqwcGEze0%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG7591.jpeg?Expires=1674374488&Signature=pQ6tKHvXNZhibW0l7jrA%2BgU45U0%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG7606.jpeg?Expires=1674374492&Signature=SwUHtNSSK%2B8GsYSsJM%2FuObJQnPQ%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG8.png?Expires=1674374496&Signature=NV9uC3Q8Qp4OGFn5lCHO8%2FA1B2I%3D","https://qxy-bucket.oss-cn-shanghai.aliyuncs.com/db/WechatIMG8494.jpeg?Expires=1674374500&Signature=hmU%2Bm9eTDiMMugJQ9WAh%2B85GS1Q%3D"];~function(){var t=["H","Hydrogen","1.00794",1,1,"He","Helium","4.002602",18,1,"Li","Lithium","#6.941",1,2,"Be","Beryllium","9.012182",2,2,"B","Boron","#10.811",13,2,"C","Carbon","#12.0107",14,2,"N","Nitrogen","#14.0067",15,2,"O","Oxygen","#15.9994",16,2,"F","Fluorine","18.9984032",17,2,"Ne","Neon","#20.1797",18,2,"Na","Sodium","22.98976...",1,3,"Mg","Magnesium","#24.305",2,3,"Al","Aluminium","26.9815386",13,3,"Si","Silicon","#28.0855",14,3,"P","Phosphorus","30.973762",15,3,"S","Sulfur","#32.065",16,3,"Cl","Chlorine","#35.453",17,3,"Ar","Argon","#39.948",18,3,"K","Potassium","#39.948",1,4,"Ca","Calcium","#40.078",2,4,"Sc","Scandium","44.955912",3,4,"Ti","Titanium","#47.867",4,4,"V","Vanadium","#50.9415",5,4,"Cr","Chromium","#51.9961",6,4,"Mn","Manganese","54.938045",7,4,"Fe","Iron","#55.845",8,4,"Co","Cobalt","58.933195",9,4,"Ni","Nickel","#58.6934",10,4,"Cu","Copper","#63.546",11,4,"Zn","Zinc","#65.38",12,4,"Ga","Gallium","#69.723",13,4,"Ge","Germanium","#72.63",14,4,"As","Arsenic","#74.9216",15,4,"Se","Selenium","#78.96",16,4,"Br","Bromine","#79.904",17,4,"Kr","Krypton","#83.798",18,4,"Rb","Rubidium","#85.4678",1,5,"Sr","Strontium","#87.62",2,5,"Y","Yttrium","88.90585",3,5,"Zr","Zirconium","#91.224",4,5,"Nb","Niobium","92.90628",5,5,"Mo","Molybdenum","#95.96",6,5,"Tc","Technetium","(98)",7,5,"Ru","Ruthenium","#101.07",8,5,"Rh","Rhodium","#102.9055",9,5,"Pd","Palladium","#106.42",10,5,"Ag","Silver","#107.8682",11,5,"Cd","Cadmium","#112.411",12,5,"In","Indium","#114.818",13,5,"Sn","Tin","#118.71",14,5,"Sb","Antimony","#121.76",15,5,"Te","Tellurium","127.6",16,5,"I","Iodine","126.90447",17,5,"Xe","Xenon","#131.293",18,5,"Cs","Caesium","#132.9054",1,6,"Ba","Barium","#132.9054",2,6,"La","Lanthanum","138.90547",4,9,"Ce","Cerium","#140.116",5,9,"Pr","Praseodymium","140.90765",6,9,"Nd","Neodymium","#144.242",7,9,"Pm","Promethium","(145)",8,9,"Sm","Samarium","#150.36",9,9,"Eu","Europium","#151.964",10,9,"Gd","Gadolinium","#157.25",11,9,"Tb","Terbium","158.92535",12,9,"Dy","Dysprosium","162.5",13,9,"Ho","Holmium","164.93032",14,9,"Er","Erbium","#167.259",15,9,"Tm","Thulium","168.93421",16,9,"Yb","Ytterbium","#173.054",17,9,"Lu","Lutetium","#174.9668",18,9,"Hf","Hafnium","#178.49",4,6,"Ta","Tantalum","180.94788",5,6,"W","Tungsten","#183.84",6,6,"Re","Rhenium","#186.207",7,6,"Os","Osmium","#190.23",8,6,"Ir","Iridium","#192.217",9,6,"Pt","Platinum","#195.084",10,6,"Au","Gold","196.966569",11,6,"Hg","Mercury","#200.59",12,6,"Tl","Thallium","#204.3833",13,6,"Pb","Lead","207.2",14,6,"Bi","Bismuth","#208.9804",15,6,"Po","Polonium","(209)",16,6,"At","Astatine","(210)",17,6,"Rn","Radon","(222)",18,6,"Fr","Francium","(223)",1,7,"Ra","Radium","(226)",2,7,"Ac","Actinium","(227)",4,10,"Th","Thorium","232.03806",5,10,"Pa","Protactinium","#231.0588",6,10,"U","Uranium","238.02891",7,10,"Np","Neptunium","(237)",8,10,"Pu","Plutonium","(244)",9,10,"Am","Americium","(243)",10,10,"Cm","Curium","(247)",11,10,"Bk","Berkelium","(247)",12,10,"Cf","Californium","(251)",13,10,"Es","Einstenium","(252)",14,10,"Fm","Fermium","(257)",15,10,"Md","Mendelevium","(258)",16,10,"No","Nobelium","(259)",17,10,"Lr","Lawrencium","(262)",18,10,"Rf","Rutherfordium","(267)",4,7,"Db","Dubnium","(268)",5,7,"Sg","Seaborgium","(271)",6,7,"Bh","Bohrium","(272)",7,7,"Hs","Hassium","(270)",8,7,"Mt","Meitnerium","(276)",9,7,"Ds","Darmstadium","(281)",10,7,"Rg","Roentgenium","(280)",11,7,"Cn","Copernicium","(285)",12,7,"Uut","Unutrium","(284)",13,7,"Fl","Flerovium","(289)",14,7,"Uup","Ununpentium","(288)",15,7,"Lv","Livermorium","(293)",16,7,"Uus","Ununseptium","(294)",17,7,"Uuo","Ununoctium","(294)",18,7],e,i,r,n,o=[],g={table:[],sphere:[],helix:[],grid:[]};window.addEventListener("load",function(){d(),h()});function d(){e=new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,1e4),e.position.z=3e3,i=new THREE.Scene;let y=!!location.hash,m=[];y&&(m=F.map(I=>`${I}&OSSAccessKeyId=${location.hash.substring(1)}`));for(var l=0;l<t.length;l+=5){var b=document.createElement("div");b.className="element",b.style.backgroundColor="rgba(0,127,127,"+(Math.random()*.5+.25)+")";const I=~~(m.length*Math.random());if(y)b.style.backgroundImage=`url("${m[I]}")`,b.title="\u5927\u5B9D\u7684\u7F8E\u7167 - "+l/5+"/"+t.length/5,b.setAttribute("href",`${m[I]}`);else{const k=Math.random();b.style.backgroundImage=`url("https://source.unsplash.com/90x90/?christmas,holiday,festive?test=${k}&date=${Date.now()}")`,b.title=l/5+"/"+t.length/5,b.setAttribute("href",`https://source.unsplash.com/900x900/?christmas,holiday,festive?test=${k}&date=${Date.now()}`)}var c=new THREE.CSS3DObject(b);c.position.x=Math.random()*4e3-2e3,c.position.y=Math.random()*4e3-2e3,c.position.z=Math.random()*4e3-2e3,i.add(c),o.push(c);var c=new THREE.Object3D;c.position.x=t[l+3]*140-1330,c.position.y=-(t[l+4]*180)+990,g.table.push(c)}for(var v=new THREE.Vector3,l=0,S=o.length;l<S;l++){var M=Math.acos(-1+2*l/S),C=Math.sqrt(S*Math.PI)*M,c=new THREE.Object3D;c.position.x=800*Math.cos(C)*Math.sin(M),c.position.y=800*Math.sin(C)*Math.sin(M),c.position.z=800*Math.cos(M),v.copy(c.position).multiplyScalar(2),c.lookAt(v),g.sphere.push(c)}for(var v=new THREE.Vector3,l=0,S=o.length;l<S;l++){var M=l*.175+Math.PI,c=new THREE.Object3D;c.position.x=900*Math.sin(M),c.position.y=-(l*8)+450,c.position.z=900*Math.cos(M),v.x=c.position.x*2,v.y=c.position.y,v.z=c.position.z*2,c.lookAt(v),g.helix.push(c)}for(var l=0;l<o.length;l++){var c=new THREE.Object3D;c.position.x=l%5*400-800,c.position.y=-(Math.floor(l/5)%5)*400+800,c.position.z=Math.floor(l/25)*1e3-2e3,g.grid.push(c)}r=new THREE.CSS3DRenderer,r.setSize(window.innerWidth,window.innerHeight),r.domElement.style.position="absolute",document.getElementById("container").appendChild(r.domElement),n=new THREE.TrackballControls(e,r.domElement),n.rotateSpeed=.5,n.minDistance=500,n.maxDistance=6e3,n.addEventListener("change",u);var w=document.getElementById("table");w.addEventListener("click",function(I){p(g.table,2e3)},!1);var w=document.getElementById("sphere");w.addEventListener("click",function(I){p(g.sphere,2e3)},!1);var w=document.getElementById("helix");w.addEventListener("click",function(I){p(g.helix,2e3)},!1);var w=document.getElementById("grid");w.addEventListener("click",function(I){p(g.grid,2e3)},!1),p(g.sphere,3e3),window.addEventListener("resize",f,!1)}function p(y,m){TWEEN.removeAll();for(var l=0;l<o.length;l++){var b=o[l],c=y[l];new TWEEN.Tween(b.position).to({x:c.position.x,y:c.position.y,z:c.position.z},Math.random()*m+m).easing(TWEEN.Easing.Exponential.InOut).start(),new TWEEN.Tween(b.rotation).to({x:c.rotation.x,y:c.rotation.y,z:c.rotation.z},Math.random()*m+m).easing(TWEEN.Easing.Exponential.InOut).start()}new TWEEN.Tween(this).to({},m*2).onUpdate(u).start()}function f(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight),u()}function h(){requestAnimationFrame(h),TWEEN.update(),n.update()}function u(){r.render(i,e)}}();window.addEventListener("load",function(){$("div.element").imgbox({speedIn:0,speedOut:0,overlayShow:!0,zoomOpacity:!0,alignment:"center"});var t=$("#menu > button");t.bind("click.btns",function(e){t.removeClass("hover"),$(e.target).addClass("hover")})});(function(t,e,i){var r=[];t.requestAnimationFrame=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(h){setTimeout(h,1e3/60)}}(),n();function n(){p(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);z-index:9999999}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),g(),o()}function o(){for(var h=0;h<r.length;h++){if(r[h].alpha<=0){e.body.removeChild(r[h].el),r.splice(h,1);continue}r[h].y--,r[h].scale+=.004,r[h].alpha-=.013,r[h].el.style.cssText="left:"+r[h].x+"px;top:"+r[h].y+"px;opacity:"+r[h].alpha+";transform:scale("+r[h].scale+","+r[h].scale+") rotate(45deg);background:"+r[h].color}requestAnimationFrame(o)}function g(){var h=typeof t.onclick=="function"&&t.onclick;t.onclick=function(u){h&&h(),d(u)}}function d(h){var u=e.createElement("div");u.className="heart",r.push({el:u,x:h.clientX-1.3,y:h.clientY-1.3,scale:1.3,alpha:1.3,color:f()}),e.body.appendChild(u)}function p(h){var u=e.createElement("style");u.type="text/css";try{u.appendChild(e.createTextNode(h))}catch{u.styleSheet.cssText=h}e.getElementsByTagName("head")[0].appendChild(u)}function f(){return"rgb("+~~(Math.random()*255)+","+~~(Math.random()*255)+","+~~(Math.random()*255)+")"}})(window,document);var G={INIT_CHERRY_BLOSSOM_COUNT:30,MAX_ADDING_INTERVAL:10,init:function(){this.setParameters(),this.reconstructMethods(),this.createCherries(),this.render(),navigator.userAgent.match(/(phone|pod|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)},setParameters:function(){this.$container=$("#jsi-cherry-container"),this.width=this.$container.width(),this.height=this.$container.height(),this.context=$("<canvas />").attr({width:this.width,height:this.height}).appendTo(this.$container).get(0).getContext("2d"),this.cherries=[],this.maxAddingInterval=Math.round(this.MAX_ADDING_INTERVAL*1e3/this.width),this.addingInterval=this.maxAddingInterval},reconstructMethods:function(){this.render=this.render.bind(this)},createCherries:function(){for(var t=0,e=Math.round(this.INIT_CHERRY_BLOSSOM_COUNT*this.width/1e3);t<e;t++)this.cherries.push(new R(this,!0))},render:function(){requestAnimationFrame(this.render),this.context.clearRect(0,0,this.width,this.height),this.cherries.sort(function(e,i){return e.z-i.z});for(var t=this.cherries.length-1;t>=0;t--)this.cherries[t].render(this.context)||this.cherries.splice(t,1);--this.addingInterval==0&&(this.addingInterval=this.maxAddingInterval,this.cherries.push(new R(this,!1)))}},R=function(t,e){this.renderer=t,this.init(e)};R.prototype={FOCUS_POSITION:300,FAR_LIMIT:600,MAX_RIPPLE_COUNT:100,RIPPLE_RADIUS:100,SURFACE_RATE:.5,SINK_OFFSET:20,init:function(t){this.x=this.getRandomValue(-this.renderer.width,this.renderer.width),this.y=t?this.getRandomValue(0,this.renderer.height):this.renderer.height*1.5,this.z=this.getRandomValue(0,this.FAR_LIMIT),this.vx=this.getRandomValue(-2,2),this.vy=-2,this.theta=this.getRandomValue(0,Math.PI*2),this.phi=this.getRandomValue(0,Math.PI*2),this.psi=0,this.dpsi=this.getRandomValue(Math.PI/600,Math.PI/300),this.opacity=0,this.endTheta=!1,this.endPhi=!1,this.rippleCount=0;var e=this.getAxis(),i=this.theta+Math.ceil(-(this.y+this.renderer.height*this.SURFACE_RATE)/this.vy)*Math.PI/500;i%=Math.PI*2,this.offsetY=40*(i<=Math.PI/2||i>=Math.PI*3/2?-1:1),this.thresholdY=this.renderer.height/2+this.renderer.height*this.SURFACE_RATE*e.rate,this.entityColor=this.renderer.context.createRadialGradient(0,40,0,0,40,80),this.entityColor.addColorStop(0,"hsl(330, 70%, "+50*(.3+e.rate)+"%)"),this.entityColor.addColorStop(.05,"hsl(330, 40%,"+55*(.3+e.rate)+"%)"),this.entityColor.addColorStop(1,"hsl(330, 20%, "+70*(.3+e.rate)+"%)"),this.shadowColor=this.renderer.context.createRadialGradient(0,40,0,0,40,80),this.shadowColor.addColorStop(0,"hsl(330, 40%, "+30*(.3+e.rate)+"%)"),this.shadowColor.addColorStop(.05,"hsl(330, 40%,"+30*(.3+e.rate)+"%)"),this.shadowColor.addColorStop(1,"hsl(330, 20%, "+40*(.3+e.rate)+"%)")},getRandomValue:function(t,e){return t+(e-t)*Math.random()},getAxis:function(){var t=this.FOCUS_POSITION/(this.z+this.FOCUS_POSITION),e=this.renderer.width/2+this.x*t,i=this.renderer.height/2-this.y*t;return{rate:t,x:e,y:i}},renderCherry:function(t,e){t.beginPath(),t.moveTo(0,40),t.bezierCurveTo(-60,20,-10,-60,0,-20),t.bezierCurveTo(10,-60,60,20,0,40),t.fill();for(var i=-4;i<4;i++)t.beginPath(),t.moveTo(0,40),t.quadraticCurveTo(i*12,10,i*4,-24+Math.abs(i)*2),t.stroke()},render:function(t){var e=this.getAxis();if(e.y==this.thresholdY&&this.rippleCount<this.MAX_RIPPLE_COUNT&&(t.save(),t.lineWidth=2,t.strokeStyle="hsla(0, 0%, 100%, "+(this.MAX_RIPPLE_COUNT-this.rippleCount)/this.MAX_RIPPLE_COUNT+")",t.translate(e.x+this.offsetY*e.rate*(this.theta<=Math.PI?-1:1),e.y),t.scale(1,.3),t.beginPath(),t.arc(0,0,this.rippleCount/this.MAX_RIPPLE_COUNT*this.RIPPLE_RADIUS*e.rate,0,Math.PI*2,!1),t.stroke(),t.restore(),this.rippleCount++),(e.y<this.thresholdY||!this.endTheta||!this.endPhi)&&(this.y<=0&&(this.opacity=Math.min(this.opacity+.01,1)),t.save(),t.globalAlpha=this.opacity,t.fillStyle=this.shadowColor,t.strokeStyle="hsl(330, 30%,"+40*(.3+e.rate)+"%)",t.translate(e.x,Math.max(e.y,this.thresholdY+this.thresholdY-e.y)),t.rotate(Math.PI-this.theta),t.scale(e.rate*-Math.sin(this.phi),e.rate),t.translate(0,this.offsetY),this.renderCherry(t,e),t.restore()),t.save(),t.fillStyle=this.entityColor,t.strokeStyle="hsl(330, 40%,"+70*(.3+e.rate)+"%)",t.translate(e.x,e.y+Math.abs(this.SINK_OFFSET*Math.sin(this.psi)*e.rate)),t.rotate(this.theta),t.scale(e.rate*Math.sin(this.phi),e.rate),t.translate(0,this.offsetY),this.renderCherry(t,e),t.restore(),this.y<=-this.renderer.height/4){if(!this.endTheta){for(var i=Math.PI/2,r=Math.PI*3/2;i<=r;i+=Math.PI)if(this.theta<i&&this.theta+Math.PI/200>i){this.theta=i,this.endTheta=!0;break}}if(!this.endPhi){for(var n=Math.PI/8,r=Math.PI*7/8;n<=r;n+=Math.PI*3/4)if(this.phi<n&&this.phi+Math.PI/200>n){this.phi=Math.PI/8,this.endPhi=!0;break}}}return this.endTheta||(e.y==this.thresholdY?this.theta+=Math.PI/200*(this.theta<Math.PI/2||this.theta>=Math.PI&&this.theta<Math.PI*3/2?1:-1):this.theta+=Math.PI/500,this.theta%=Math.PI*2),this.endPhi?this.rippleCount==this.MAX_RIPPLE_COUNT&&(this.psi+=this.dpsi,this.psi%=Math.PI*2):(this.phi+=Math.PI/(e.y==this.thresholdY?200:500),this.phi%=Math.PI),this.y<=-this.renderer.height*this.SURFACE_RATE?(this.x+=2,this.y=-this.renderer.height*this.SURFACE_RATE):(this.x+=this.vx,this.y+=this.vy),this.z>-this.FOCUS_POSITION&&this.z<this.FAR_LIMIT&&this.x<this.renderer.width*1.5}};$(function(){G.init()});(function(t){t.fn.fixPNG=function(){return this.each(function(){var s=t(this).css("backgroundImage");s.match(/^url\(["']?(.*\.png)["']?\)$/i)&&(s=RegExp.$1,t(this).css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod="+(t(this).css("backgroundRepeat")=="no-repeat"?"crop":"scale")+", src='"+s+"')"}).each(function(){var a=t(this).css("position");a!="absolute"&&a!="relative"&&t(this).css("position","relative")}))})};var e,i,r,n,o,g=!1,d,p=90,f=0,h=20,u=20,y=-180,m,l=t.extend(t("<div/>")[0],{prop:0});t.fn.imgbox=function(s){return this.unbind("click.pb").bind("click.pb",function(){return t.imgbox(t(this),s),!1})},t.imgbox=function(s,a){if(g)return!1;if(e=s,i=t.extend({},t.fn.imgbox.defaults,a),d=jQuery.data(e[0]),t("#imgbox-wrap-"+d).length)return C(),!1;if(D(),i.overlayShow&&t("#imgbox-overlay").unbind().stop().hide().css({height:t(document).height(),opacity:i.overlayOpacity}).show(),r=new Image,r.src=t(e).attr("href"),r.complete===!1){q();var x=t("#imgbox-loading .ld-left div")[0],E=t("#imgbox-loading .ld-right div")[0];m=setInterval(function(){if(y+=30,y>0)return y=-180,clearInterval(m),setTimeout(function(){x.style.transform="rotateZ(-60deg)"},2e3),!1;E.style.transform="rotateZ("+y+"deg)"},1e3),t(r).unbind().one("load",function(){y=-180,clearInterval(m),E.style.transform="rotateZ(0deg)",setTimeout(function(){x.style.transform="rotateZ(0deg)"},2e3),setTimeout(function(){D(),b()},3500)})}else b()},t.fn.imgbox.defaults={padding:10,alignment:"auto",allowMultiple:!0,autoScale:!0,speedIn:500,speedOut:500,easingIn:"swing",easingOut:"swing",zoomOpacity:!1,overlayShow:!1,overlayOpacity:.5,hideOnOverlayClick:!0,hideOnContentClick:!0};function b(){g=!0,i.allowMultiple===!1?(t(".imgbox-wrap").remove(),t(".imgbox-bg-wrap").remove()):p=p+2,o=w();var s=t(e).attr("title")||"";if(t('<div id="imgbox-wrap-'+d+'" class="imgbox-wrap"></div>').css({"z-index":p,padding:i.padding}).append('<img class="imgbox-img" id="imgbox-img-'+d+'" src="'+r.src+'" alt="'+s+'" />').appendTo("body"),t('<div id="imgbox-bg-'+d+'" class="imgbox-bg-wrap"><div class="imgbox-bg imgbox-bg-n"/><div class="imgbox-bg imgbox-bg-ne"/><div class="imgbox-bg imgbox-bg-e"/><div class="imgbox-bg imgbox-bg-se"/><div class="imgbox-bg imgbox-bg-s"/><div class="imgbox-bg imgbox-bg-sw"/><div class="imgbox-bg imgbox-bg-w"/><div class="imgbox-bg imgbox-bg-nw"/></div>').appendTo("body"),t.browser.msie&&parseInt(t.browser.version.substr(0,1))<7&&t("#imgbox-bg-"+d).find(".imgbox-bg").fixPNG(),f=0,s.length>0&&(t('<div id="imgbox-tmp" class="imgbox-title" />').html(s).css("width",o.width).appendTo("body"),f=t("#imgbox-tmp").outerHeight(),o.height+=f,o.top-=f>u+h?u:u*.5,t("#imgbox-tmp").remove(),t("#imgbox-wrap-"+d).append('<div class="imgbox-title">'+s+"</div>")),i.speedIn>0){var a=k();n={top:a.top-i.padding,left:a.left-i.padding,width:a.width,height:a.height},t("#imgbox-wrap-"+d).css(n).show(),t("#imgbox-bg-"+d).css({top:n.top,left:n.left,width:n.width+i.padding*2,height:n.height+i.padding*2,"z-index":p-1}).show(),i.zoomOpacity&&(o.opacity=1),l.prop=0,t(l).animate({prop:1},{duration:i.speedIn,easing:i.easingIn,step:c,complete:S})}else t("#imgbox-img-"+d).css("height",o.height-f+"px"),t("#imgbox-wrap-"+d).css(o).fadeIn("normal",S),t("#imgbox-bg-"+d).css({top:o.top,left:o.left,width:o.width+i.padding*2,height:o.height+i.padding*2,"z-index":p-1}).fadeIn("normal")}function c(s){var a=Math.round(n.width+(o.width-n.width)*s),x=Math.round(n.height+(o.height-n.height)*s),E=Math.round(n.top+(o.top-n.top)*s),P=Math.round(n.left+(o.left-n.left)*s);if(t("#imgbox-wrap-"+d).css({width:a+"px",height:x+"px",top:E+"px",left:P+"px"}),t("#imgbox-bg-"+d).css({width:Math.round(a+i.padding*2)+"px",height:Math.round(x+i.padding*2)+"px",top:E+"px",left:P+"px"}),t("#imgbox-img-"+d).css("height",Math.round(x-(x-Math.min(n.height,o.height))*100/Math.max(n.height-o.height,o.height-n.height)*f/100)+"px"),typeof o.opacity<"u"){var T=s<.3?.3:s;t("#imgbox-wrap-"+d).css("opacity",T),t.browser.msie===!1&&t("#imgbox-bg-"+d).css("opacity",T)}}function S(){i.overlayShow&&i.hideOnOverlayClick&&t("#imgbox-overlay").bind("click",{elem:e,nr:d,opts:i,titleh:f},M),t("#imgbox-wrap-"+d).css("filter","").bind("click",{elem:e,nr:d,opts:i,titleh:f},M).append('<a href="javascript:;" class="imgbox-close"></a>').children(".imgbox-title").show(),t.browser.msie&&parseInt(t.browser.version.substr(0,1))<7&&t("#imgbox-wrap-"+d).find(".imgbox-close").fixPNG(),g=!1}function M(s){s.stopPropagation(),s.target.className=="imgbox-close"||s.data.opts.hideOnOverlayClick&&s.target.id=="imgbox-overlay"||s.data.opts.hideOnContentClick&&s.target.className=="imgbox-img"&&(t(this).css("z-index")==p||t(".imgbox-img").length==1)?(e=s.data.elem,d=s.data.nr,i=s.data.opts,f=s.data.titleh,C()):t(this).css("z-index")<p&&(t(this).next(".imgbox-bg-wrap").css("z-index",++p),t(this).css("z-index",++p))}function C(){if(g)return!1;if(g=!0,t("#imgbox-wrap-"+d).children(".imgbox-close, .imgbox-title").remove(),i.speedOut>0){var s=k();n={top:s.top-i.padding,left:s.left-i.padding,width:s.width,height:s.height},s=t("#imgbox-wrap-"+d).position(),o={top:s.top,left:s.left,width:t("#imgbox-wrap-"+d).width(),height:t("#imgbox-wrap-"+d).height()},i.zoomOpacity&&(o.opacity=0),setTimeout(function(){t("#imgbox-wrap-"+d).css("z-index",90),t("#imgbox-bg-"+d).css("z-index",90)},i.speedOut*.5),l.prop=1,t(l).animate({prop:0},{duration:i.speedIn,easing:i.easingIn,step:c,complete:v})}else i.overlayShow?v():(t("#imgbox-bg-"+d).fadeOut("fast"),t("#imgbox-wrap-"+d).fadeOut("fast",v))}function v(){t("#imgbox-bg-"+d).stop().remove(),t("#imgbox-wrap-"+d).remove(),p=p>90?p-2:90,i.overlayShow&&t("#imgbox-overlay").unbind().stop().fadeOut(200),g=!1}function w(){var s=I(),a={width:r.width,height:r.height},x=(i.padding+h+u)*2,E=(i.padding+h+u)*2;if(i.autoScale&&(a.width>s[0]-x||a.height>s[1]-E)){var P=Math.min(Math.min(s[0]-x,a.width)/a.width,Math.min(s[1]-E,a.height)/a.height);a.width=Math.round(P*a.width),a.height=Math.round(P*a.height)}if(i.alignment=="center")a.top=s[3]+(s[1]-a.height-i.padding*2)*.5,a.left=s[2]+(s[0]-a.width-i.padding*2)*.5;else{var T=k();a.top=T.top-(a.height-T.height)*.5-i.padding,a.left=T.left-(a.width-T.width)*.5-i.padding,a.top=a.top>s[3]+u+h?a.top:s[3]+u+h,a.left=a.left>s[2]+u+h?a.left:s[2]+u+h,a.top=a.top>s[1]+s[3]-(a.height+E)?s[1]+s[3]-(a.height+(u+h+i.padding*2)):a.top,a.left=a.left>s[0]+s[2]-(a.width+x)?s[0]+s[2]-(a.width+(u+h+i.padding*2)):a.left}return i.autoScale===!1&&(a.top=a.top>s[3]+h+u?a.top:s[3]+h+u,a.left=a.left>s[2]+h+u?a.left:s[2]+h+u),a.top=parseInt(a.top),a.left=parseInt(a.left),a}function I(){return[t(window).width(),t(window).height(),t(document).scrollLeft(),t(document).scrollTop()]}function k(){var s=t(e).find("img").eq(0),a=s.offset();return a.top+=parseFloat(s.css("paddingTop")),a.left+=parseFloat(s.css("paddingLeft")),a.top+=parseFloat(s.css("border-top-width")),a.left+=parseFloat(s.css("border-left-width")),a.width=s.width(),a.height=s.height(),a}function q(){var s=k();t("#imgbox-loading").css(s).show()}function D(){t(r).unbind(),t("#imgbox-loading").hide(),clearInterval(m),t("#imgbox-loading .ld-left div")[0].style.transform="rotateZ(-180deg)",t("#imgbox-loading .ld-right div")[0].style.transform="rotateZ(-178deg)"}function O(){D(),i.overlayShow&&t("#imgbox-overlay").unbind().stop().fadeOut(200)}function A(){t('<div id="imgbox-loading" title="\u6B63\u5728\u52A0\u8F7D\u7167\u7247\uFF0C\u5355\u51FB\u505C\u6B62"><div class="ld-left"><div></div></div><div class="ld-right"><div></div></div><div class="ld-progress"><span>\u25A0</span><div></div></div></div><div id="imgbox-overlay"></div>').appendTo("body"),t("#imgbox-loading").click(O)}t(document).ready(function(){A()})})(jQuery);document.querySelector("head").innerHTML=`
    ${document.querySelector("head").innerHTML}
`;document.querySelector("#app").innerHTML=`
<div id="jsi-cherry-container" class="container">
  <audio id="audio" autoplay="autoplay" loop>
        <source src="./love-qxy.mp3" type="audio/mp3" />
  </audio>
  <div id="mediaDiv">
    <div class="penguin ">
      <div class="cheek"></div>
      <div class="cheek"></div>
      <div class="eye"></div>
      <div class="eye"></div>
      <div class="beak"></div>
      <div class="foot"></div>
      <div class="foot"></div>
      <div class="arm"></div>
      <div class="arm"></div>
    </div>
  </div>
  <div class="penguin">
  <div class="cheek"></div>
  <div class="cheek"></div>
  <div class="eye"></div>
  <div class="eye"></div>
  <div class="beak"></div>
  <div class="foot"></div>
  <div class="foot"></div>
  <div class="arm"></div>
  <div class="arm"></div>
</div>

  <div id="container"></div>
  <div id="info"><b>\u5927\u5B9D\u7684\u4E13\u5C5E\u76F8\u518C</b><br /><span style="color:rgba(255,255,255, 0.9);">\u6E29\u99A8\u63D0\u793A\uFF1A\u652F\u6301\u624B\u52BF\u3001\u9F20\u6807\u65CB\u8F6C\u89D2\u5EA6\u3001\u6EDA\u8F6E\u653E\u5927\u6216\u7F29\u5C0F</span></div>
  <div id="menu">
  <button id="table">\u5355\u9762</button>
  <button id="sphere" class="hover">\u7403\u4F53</button>
  <button id="helix">\u87BA\u65CB</button>
  <button id="grid">\u591A\u9762</button>
  </div>
</div>
`;window.addEventListener("load",function(){const t=document.querySelector("#audio"),e=()=>setTimeout(()=>{let n=document.querySelector("#info");n.style.display==="none"?n.style.display="block":n.style.display="none",n=null},3e3),i=(n,o)=>{n.addEventListener(o,function(){t.paused?t.play():e()})};e(),i(document.querySelector("#mediaDiv>.penguin"),"click"),i(document.querySelector("#mediaDiv>.penguin"),"touch"),[...document.querySelector("#app").querySelectorAll("script")].filter(n=>!n.id).reduce((n,o)=>n.then(()=>W(o)),Promise.resolve())});