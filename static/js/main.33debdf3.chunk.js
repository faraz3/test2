(this["webpackJsonptest-2"]=this["webpackJsonptest-2"]||[]).push([[0],{52:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(8),s=n.n(c),o=(n(52),n(41)),l=n(40),u=n(13),r=n(93),d=n(98),m=n(97),j=n(100),b=n(99),f=n(37),p=n(38),g=n.n(p),h=n(6);var x=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!1),s=Object(u.a)(c,2),p=(s[0],s[1],Object(i.useState)(!1)),x=Object(u.a)(p,2),v=x[0],O=x[1],y=Object(i.useState)([]),w=Object(u.a)(y,2),E=w[0],S=w[1],q=Object(i.useState)(""),T=Object(u.a)(q,2),k=T[0],C=T[1],M=Object(i.useState)(""),N=Object(u.a)(M,2),I=(N[0],N[1]),D=Object(i.useState)(""),B=Object(u.a)(D,2),A=B[0],L=B[1],F=Object(i.useState)(""),J=Object(u.a)(F,2),P=J[0],R=J[1],U=Object(i.useState)("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque equat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, eque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"),X=Object(u.a)(U,2),Y=X[0];X[1],Object(i.useEffect)((function(){var e="";E.forEach((function(t){t.selectedText===A&&(e=t.writtenText,console.log(e))}))}),[A,E]),Object(i.useEffect)((function(){S(JSON.parse(localStorage.getItem("data")))}),[]),Object(i.useEffect)((function(){var e=JSON.stringify(E);localStorage.setItem("data",e),console.log(E)}),[E]);var V,z=Object(i.useRef)(null);V=z,Object(i.useEffect)((function(){function e(e){V.current&&!V.current.contains(e.target)&&(A||(document.getElementById("aa").style.display="none"))}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[V]);var H=Object(i.useRef)(null);!function(e){Object(i.useEffect)((function(){function t(t){e.current&&!e.current.contains(t.target)&&(document.getElementById("tip").style.display="none")}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e])}(H);var Q=Object(h.jsx)("div",{id:"popup",children:Object(h.jsxs)(r.a,{className:"",children:[Object(h.jsx)(m.a,{children:Object(h.jsx)(b.a,{id:"outlined-multiline-static",helperText:v?"Can't be empty":null,error:v,onChange:function(e){return function(e){C(e.target.value),O(!1)}(e)},label:"Enter Some Text",multiline:!0,rows:4,defaultValue:"",variant:"outlined"})}),Object(h.jsx)(d.a,{children:Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)(j.a,{variant:"contained",color:"secondary",onClick:function(){a(!1),C(""),O(!1)},children:"Close"}),Object(h.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(e){return function(e){var t=new Date;""!==k?(0!==E.length?E.forEach((function(e,n){if(A===e.selectedText){var i=Object(l.a)(E),a=Object(o.a)({},i[n]);a.writtenText=k,i[n]=a,S(i)}else S(E.concat({uuid:t.getTime()+Math.floor(100*Math.random())+Math.floor(100*Math.random()),writtenText:k,selectedText:A}))})):0===E.length&&S(E.concat({uuid:t.getTime()+Math.floor(100*Math.random())+Math.floor(100*Math.random()),writtenText:k,selectedText:A})),a(!1)):(console.log("please enter some text"),O(!0)),document.getElementById("aa").style.display="none",C("")}()},children:"Add"})]})})]})}),W=E.map((function(e){return e.selectedText})),G=W.join("|");return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Select And Mark Some Text"}),Object(h.jsxs)("div",{className:"",children:[Object(h.jsxs)("div",{id:"ele2",className:"text",onMouseUp:function(e){return function(e){var t,i=document.getElementById("aa"),a=e.clientX,c=e.clientY,s="";t=window.getSelection(),n||(s=t.toString(),L(s)),s.length>0&&!n&&(i.style.display="block",i.style.top=c-110+"px",i.style.left=a-90+"px"),I(s)}(e)},children:[Object(h.jsx)("span",{children:0!==W.length?g()({pattern:new RegExp("(".concat(G,")"),"gi"),decorator:function(e,t){return Object(h.jsx)("span",{style:{fontWeight:"bold",background:"yellow",cursor:"pointer"},onClick:function(e){return function(e){var t=E.map((function(t){return t.selectedText.toUpperCase()===e.target.innerText.toUpperCase()?t.writtenText:null}));R(t),console.log(t.join("")),console.log(e.clientX,e.clientY);var n=document.getElementById("tip"),i=e.clientX,a=e.clientY;n.style.display="block",n.style.top=a-50+"px",n.style.left=i-40+"px"}(e)},children:e},t)},input:Y}):Y}),Object(h.jsx)("div",{ref:z,id:"aa",onClick:function(e){return a(!0),void(document.getElementById("aa").style.display="none")},children:Object(h.jsx)(j.a,{variant:"contained",color:"secondary",children:"+"})})]}),Object(h.jsx)("div",{ref:H,id:"tip",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:P}),Object(h.jsx)("span",{onClick:function(){var e=P.filter((function(e){return null!==e})),t=E.filter((function(t){return e[0]!==t.writtenText}));S(t),document.getElementById("tip").style.display="none"},children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-trash",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#ff2825",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[Object(h.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(h.jsx)("line",{x1:"4",y1:"7",x2:"20",y2:"7"}),Object(h.jsx)("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),Object(h.jsx)("line",{x1:"14",y1:"11",x2:"14",y2:"17"}),Object(h.jsx)("path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}),Object(h.jsx)("path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"})]})})]})}),n?Q:null,Object(h.jsx)("div",{className:"download",children:Object(h.jsx)(j.a,{variant:"contained",color:"secondary",children:Object(h.jsx)(f.CSVLink,{data:E,children:"Download"})})})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),v()}},[[60,1,2]]]);
//# sourceMappingURL=main.33debdf3.chunk.js.map