(this["webpackJsonpawesome-markdown2"]=this["webpackJsonpawesome-markdown2"]||[]).push([[0],{395:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(44),o=n.n(c),s=(n(83),n(11)),i=(n(84),n(45)),u=n.n(i),l=n(65),d=n(74),j=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",n.text());case 5:return e.next=7,fetch(t.toLowerCase());case 7:if(!(r=e.sent).ok){e.next=10;break}return e.abrupt("return",r.text());case 10:return e.abrupt("return",r.text());case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){if(!e)throw new Error("Path is required");var t="https://raw.githubusercontent.com/"+e+"/master/README.md";t.toLowerCase();var n=Object(d.a)(t,j,{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1,onErrorRetry:!1,shouldRetryOnError:!1});return{data:n.data,error:n.error}},p=n(24),O=n.n(p),f=(n(49),n(73)),h=n(2),m=a.a.memo((function(e){var t=e.data,n=e.gitreponame;return console.log("rendering readmepreviewer"),Object(h.jsx)("div",{children:Object(h.jsx)(f.a,{source:t,transformImageUri:function(e){return e.startsWith("http")?e:"https://raw.githubusercontent.com/".concat(n,"/main/").concat(e)}})})})),g=function(e){var t=e.gitreponame;console.log("rendering sliderGitreadme");var n=b(t),r=n.data;return n.error?"An error has occured":r?Object(h.jsx)("div",{children:Object(h.jsx)(m,{data:r,gitreponame:t})}):(console.log("fetching data"),"Loading..")},v=a.a.memo((function(e){var t=e.reponame;console.log("git repo name => ".concat(t));var n=Object(r.useState)({isPaneOpen:!1,isPaneOpenLeft:!1}),a=Object(s.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)("nolink"),u=Object(s.a)(i,2),l=u[0],d=u[1],j=Object(r.useState)("nohtext"),p=Object(s.a)(j,2),f=p[0],v=p[1],x=b(t),k=x.data,w=x.error;return Object(r.useEffect)((function(){k&&(document.querySelectorAll('[href*="https"]').forEach((function(e){console.log("adding clicklistener github links"),e.addEventListener("click",(function(e){return function(e){e.preventDefault(),console.log("href value : ".concat(e.currentTarget.href)),console.log("value : ".concat(e.currentTarget.text)),d(e.currentTarget.href),v(e.currentTarget.text),o({isPaneOpen:!0})}(e)}))})),console.log("inside second useeffect"))}),[k]),w?"An error has occured..":k?Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{data:k,gitreponame:t}),Object(h.jsxs)(O.a,{className:"slide-pane",overlayClassName:"slide-pane__overlay",isOpen:c.isPaneOpen,title:f,subtitle:l,onRequestClose:function(){o({isPaneOpen:!1})},children:[Object(h.jsx)("div",{children:"And I am pane content. BTW, what rocks?"}),Object(h.jsx)("br",{}),Object(h.jsx)(g,{gitreponame:l.replace("https://github.com/","")})]})]}):(console.log("first try"),"Loading...")}));function x(){console.log("rendering app.js");var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),o=Object(s.a)(c,2),i=o[0],u=o[1],l=Object(r.useState)({isPaneOpen:!1,isPaneOpenLeft:!1}),d=Object(s.a)(l,2),j=d[0],b=d[1],p=function(e){u(!0),a(e.currentTarget.textContent)};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("button",{onClick:function(){return b({isPaneOpen:!0})},children:"slidingpane"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(e){return p(e)},children:"remarkjs/awesome-remark"}),Object(h.jsx)("button",{onClick:function(e){return p(e)},children:"rockerBOO/awesome-neovim"}),Object(h.jsx)("button",{onClick:function(e){return p(e)},children:"neovide/neovide"}),i&&Object(h.jsx)(v,{reponame:n}),Object(h.jsxs)(O.a,{className:"slide-pane",overlayClassName:"slide-pane__overlay",isOpen:j.isPaneOpen,title:"Hey, it is optional pane title.  I can be component too.",subtitle:"Optional subtitle.",onRequestClose:function(){b({isPaneOpen:!1})},children:[Object(h.jsx)("div",{children:"And I am pane content. BTW, what rocks?"}),Object(h.jsx)("br",{}),Object(h.jsx)("img",{src:"https://raw.githubusercontent.com/neovide/neovide/main/assets/BasicScreenCap.png"})]})]})}var k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,407)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),k()},83:function(e,t,n){},84:function(e,t,n){}},[[395,1,2]]]);
//# sourceMappingURL=main.0242f357.chunk.js.map