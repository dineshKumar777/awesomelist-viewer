(this["webpackJsonpawesome-markdown2"]=this["webpackJsonpawesome-markdown2"]||[]).push([[0],{405:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(46),c=n.n(o),s=(n(90),n(11)),i=(n(91),n(47)),l=n.n(i),u=n(70),d=n(49),b="https://api.github.com/repos/",p=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(n=e.sent,!t.startsWith(b)){e.next=10;break}if(console.log("inside baseapi url"),!n.ok){e.next=10;break}return console.log("baseapi url ok status"),e.next=9,n.json();case 9:return e.abrupt("return",e.sent);case 10:if(!n.ok){e.next=15;break}return console.log("readme fetchine done"),e.next=14,n.text();case 14:return e.abrupt("return",e.sent);case 15:return e.next=17,fetch(t.toLowerCase());case 17:if(!(r=e.sent).ok){e.next=22;break}return e.next=21,r.text();case 21:return e.abrupt("return",e.sent);case 22:return e.next=24,r.text();case 24:return e.abrupt("return",e.sent);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){if(!e)throw new Error("Path is required");var t=b+e;console.log("inside userequest"),console.log("defaultbranch url:"+t);var n=Object(d.a)(t,p,{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1,onErrorRetry:!1,shouldRetryOnError:!1}).data,r=Object(d.a)((function(){return"https://raw.githubusercontent.com/"+e+"/".concat(n.default_branch,"/README.md")}),p,{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1,onErrorRetry:!1,shouldRetryOnError:!1});return{data:r.data,error:r.error,repo:n}},f=n(24),h=n.n(f),O=(n(54),n(81)),g=n(2),m=a.a.memo((function(e){var t=e.data,n=e.gitreponame,r=e.defaultBranchname;return console.log("rendering readmepreviewer"),Object(g.jsx)("div",{children:Object(g.jsx)(O.a,{source:t,transformImageUri:function(e){return e.startsWith("http")?e:"https://raw.githubusercontent.com/".concat(n,"/").concat(r,"/").concat(e)}})})})),x=n(26),v=function(e){var t=e.gitreponame;console.log("rendering sliderGitreadme");var n=j(t),r=n.data,a=n.error,o=n.repo;return a?"An error has occured":r?Object(g.jsx)("div",{children:Object(g.jsx)(m,{data:r,gitreponame:t,defaultBranchname:o.default_branch})}):(console.log("fetching data"),Object(g.jsx)(x.FulfillingBouncingCircleSpinner,{color:"#000000",size:"50"}))},k=a.a.memo((function(e){var t=e.reponame;console.log("rendering gitreadme4"),console.log("git repo name => ".concat(t));var n=Object(r.useState)({isPaneOpen:!1,isPaneOpenLeft:!1}),a=Object(s.a)(n,2),o=a[0],c=a[1],i=Object(r.useState)("nolink"),l=Object(s.a)(i,2),u=l[0],d=l[1],b=Object(r.useState)("nohtext"),p=Object(s.a)(b,2),f=p[0],O=p[1],k=j(t),w=k.data,y=k.error,C=k.repo;return Object(r.useEffect)((function(){w&&(document.querySelectorAll('[href*="https"]').forEach((function(e){e.href.startsWith("https://github.com")?(console.log("Adding click listerner to github links"),e.addEventListener("click",(function(e){return function(e){e.preventDefault(),console.log("href value : ".concat(e.currentTarget.href)),console.log("value : ".concat(e.currentTarget.text)),d(e.currentTarget.href),O(e.currentTarget.text),c({isPaneOpen:!0}),document.body.style.overflow="hidden"}(e)}))):(console.log("adding target=_blank for non github links"),e.setAttribute("target","_blank"))})),console.log("inside second useeffect"))}),[w,C]),y?"An error has occured..":w?Object(g.jsxs)("div",{children:[Object(g.jsx)(m,{data:w,gitreponame:t,defaultBranchname:C.default_branch}),Object(g.jsx)(h.a,{className:"slide-pane",overlayClassName:"slide-pane__overlay",isOpen:o.isPaneOpen,title:f,subtitle:u,onRequestClose:function(){c({isPaneOpen:!1}),document.body.style.overflow="visible"},children:Object(g.jsx)(v,{gitreponame:u.replace("https://github.com/","")})})]}):(console.log("first try"),Object(g.jsx)(x.FulfillingBouncingCircleSpinner,{color:"#000000",size:"100"}))}));function w(){console.log("rendering app.js");var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(!1),c=Object(s.a)(o,2),i=c[0],l=c[1],u=Object(r.useState)({isPaneOpen:!1,isPaneOpenLeft:!1}),d=Object(s.a)(u,2),b=d[0],p=d[1],j=function(e){l(!0),a(e.currentTarget.textContent)};return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("button",{onClick:function(){return p({isPaneOpen:!0})},children:"slidingpane demo"}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{onClick:function(e){return j(e)},children:"brillout/awesome-react-components"}),Object(g.jsx)("button",{onClick:function(e){return j(e)},children:"remarkjs/awesome-remark"}),Object(g.jsx)("button",{onClick:function(e){return j(e)},children:"rockerBOO/awesome-neovim"}),Object(g.jsx)("p",{children:"Non-github links will be opened in new window"}),Object(g.jsx)("br",{}),i&&Object(g.jsx)(k,{reponame:n}),Object(g.jsxs)(h.a,{className:"slide-pane",overlayClassName:"slide-pane__overlay",isOpen:b.isPaneOpen,title:"Hey, it is optional pane title.  I can be component too.",subtitle:"Optional subtitle.",onRequestClose:function(){p({isPaneOpen:!1})},children:[Object(g.jsx)("div",{children:"And I am pane content. BTW, what rocks?"}),Object(g.jsx)("br",{}),Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/neovide/neovide/main/assets/BasicScreenCap.png",alt:"Basic screen cap"})]})]})}var y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,417)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root")),y()},90:function(e,t,n){},91:function(e,t,n){}},[[405,1,2]]]);
//# sourceMappingURL=main.e7798da5.chunk.js.map