(function(){"use strict";var e={1983:function(e,n,t){var o=t(9242),s=t(3396),a=(t(8675),t(7380),t(1118),t(4870)),r=t(1114),i=t(7139);t(89);t(8552);var c=t(4543);var l=t(4198),u=t(1989);const d={class:"home"},h={class:"home-content"},m=(0,s._)("div",{class:"home-content-title"},[(0,s._)("h1",null,"汽车展示与选配")],-1),v=(0,s._)("h2",null,"选择车身颜色",-1),w={class:"select"},f=["onClick"],p=(0,s._)("h2",null,"选择贴膜材质",-1),g={class:"select"},_=["onClick"],O={class:"select-item-text"};var b={__name:"BaomaPage",setup(e){let n,t=(0,a.iH)(null);const o=new r.xsS,b=new r.cPb(75,window.innerWidth/window.innerHeight,.1,1e3);b.position.set(0,2,6);const k=new r.CP7({antialias:!0});k.setSize(window.innerWidth,window.innerHeight);const x=()=>{k.render(o,b),n&&n.update(),requestAnimationFrame(x)};let y,C,M,P,j=[];const D=new r.EJi({color:16711680,metalness:1,roughness:.5,clearcoat:1,clearcoatRoughness:0}),E=new r.EJi({color:16711680,metalness:1,roughness:.5,clearcoat:1,clearcoatRoughness:0}),R=new r.EJi({color:16711680,metalness:1,roughness:.5,clearcoat:1,clearcoatRoughness:0}),S=new r.EJi({color:16711680,metalness:1,roughness:.1}),J=new r.EJi({color:16777215,metalness:0,roughness:0,transmission:1,transparent:!0});let A=["red","blue","green","gray","orange","purple"],H=e=>{D.color.set(A[e]),E.color.set(A[e]),R.color.set(A[e]),S.color.set(A[e])},I=[{name:"磨砂",value:1},{name:"冰晶",value:0}],U=e=>{D.clearcoatRoughness=I[e].value,E.clearcoatRoughness=I[e].value,R.clearcoatRoughness=I[e].value};return(0,s.bv)((()=>{t.value.appendChild(k.domElement),k.setClearColor("#000"),o.background=new r.Ilk("#ccc"),o.environment=new r.Ilk("#ccc"),x();const e=new r.VLJ(10,10);e.material.opacity=.2,e.material.transparent=!0,o.add(e),n=new c.z(b,k.domElement),n.minPolarAngle=Math.PI/3,n.maxPolarAngle=Math.PI/2,n.autoRotate=!0,n.autoRotateSpeed=-1;const s=new l.E,a=new u._;a.setDecoderPath("./draco/gltf/"),s.setDRACOLoader(a),s.load("./model/bmw01.glb",(e=>{const n=e.scene;n.traverse((e=>{e.isMesh&&console.log(e.name),e.isMesh&&e.name.includes("轮毂")&&(e.material=S,j.push(e)),e.isMesh&&e.name.includes("Mesh002")&&(y=e,y.material=D),e.isMesh&&e.name.includes("前脸")&&(e.material=E,C=e),e.isMesh&&e.name.includes("引擎盖_1")&&(e.material=R,M=e),e.isMesh&&e.name.includes("挡风玻璃")&&(e.material=J,P=e)})),o.add(n)}));const i=new r.Ox3(16777215,1);i.position.set(0,0,10),o.add(i);const d=new r.Ox3(16777215,1);d.position.set(0,0,-10),o.add(d);const h=new r.Ox3(16777215,1);h.position.set(10,0,0),o.add(h);const m=new r.Ox3(16777215,1);m.position.set(-10,0,0),o.add(m);const v=new r.Ox3(16777215,1);v.position.set(0,10,0),o.add(v);const w=new r.Ox3(16777215,.3);w.position.set(5,10,0),o.add(w);const f=new r.Ox3(16777215,.3);f.position.set(0,10,5),o.add(f);const p=new r.Ox3(16777215,.3);p.position.set(0,10,-5),o.add(p);const g=new r.Ox3(16777215,.3);g.position.set(-5,10,0),o.add(g)})),(e,n)=>((0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",{class:"canvas-container",ref_key:"canvasDom",ref:t},null,512),(0,s._)("div",h,[m,v,(0,s._)("div",w,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,a.SU)(A),((e,n)=>((0,s.wg)(),(0,s.iD)("div",{class:"select-item",key:n,onClick:e=>(0,a.SU)(H)(n)},[(0,s._)("div",{class:"select-item-color",style:(0,i.j5)({backgroundColor:e})},null,4)],8,f)))),128))]),p,(0,s._)("div",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,a.SU)(I),((e,n)=>((0,s.wg)(),(0,s.iD)("div",{class:"select-item",key:n,onClick:e=>(0,a.SU)(U)(n)},[(0,s._)("div",O,(0,i.zw)(e.name),1)],8,_)))),128))])])]))}};const k=b;var x=k;t(2236);t(1273);const y={class:"home"};var C={__name:"App",setup(e){return(e,n)=>((0,s.wg)(),(0,s.iD)("div",y,[(0,s.Wm)(x)]))}};const M=C;var P=M;(0,o.ri)(P).mount("#app")}},n={};function t(o){var s=n[o];if(void 0!==s)return s.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,s,a){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],a=e[u][2];for(var i=!0,c=0;c<o.length;c++)(!1&a||r>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(i=!1,a<r&&(r=a));if(i){e.splice(u--,1);var l=s();void 0!==l&&(n=l)}}return n}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,s,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var s,a,r=o[0],i=o[1],c=o[2],l=0;if(r.some((function(n){return 0!==e[n]}))){for(s in i)t.o(i,s)&&(t.m[s]=i[s]);if(c)var u=c(t)}for(n&&n(o);l<r.length;l++)a=r[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},o=self["webpackChunkthreejs_home_page"]=self["webpackChunkthreejs_home_page"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(1983)}));o=t.O(o)})();
//# sourceMappingURL=app.60e699a6.js.map