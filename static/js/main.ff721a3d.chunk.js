(this.webpackJsonpdoggy=this.webpackJsonpdoggy||[]).push([[0],{12:function(e,t,n){e.exports={container:"Main_container__2lu24",item:"Main_item__OXgRW",image:"Main_image__Ib4go"}},15:function(e,t,n){e.exports={header:"Header_header__10kfi",select:"Header_select__32uBo"}},28:function(e,t,n){e.exports={app:"App_app__3GFgb"}},33:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),o=n.n(c),i=(n(33),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))}),s=n(2),d=n(6),u=n(25),g=n(27),b=n(5),l=n.n(b),j=n(11),p=n(4),f=n(26).create({baseURL:"https://dog.ceo/api/"}),O=function(){return f.get("breeds/list/all")},h=function(e){return f.get("/breed/".concat(e,"/images"))},x=function(e,t){return f.get("/breed/".concat(e,"/").concat(t,"/images"))},v="SET_DOGGIES",m="SET_BREED",y="SET_SUB_BREAD",B="SET_BREED_IMAGES",_={doggiesData:null,dogBreed:"affenpinscher",dogSubBreed:null,breedImages:null},w=function(e){return{type:B,payload:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(p.a)(Object(p.a)({},e),{},{doggiesData:t.payload});case m:return Object(p.a)(Object(p.a)({},e),{},{dogBreed:t.payload});case y:return Object(p.a)(Object(p.a)({},e),{},{dogSubBreed:t.payload});case B:return Object(p.a)(Object(p.a)({},e),{},{breedImages:t.payload});default:return e}},E=Object(d.combineReducers)({doggy:S}),D=Object(d.createStore)(E,Object(u.composeWithDevTools)(Object(d.applyMiddleware)(g.a))),I=n(28),k=n.n(I),T=n(10),C=n(15),N=n.n(C),R=n(1),F=function(e){var t=e.dogData,n=e.dogBreed,r=e.dogSubBreed,a=Object(s.b)();return Object(R.jsx)("header",{className:N.a.header,children:Object(R.jsx)("select",{className:N.a.select,onChange:function(e){var t;a((t=e.target.value.split(" ")[0],{type:m,payload:t})),a(function(e){return{type:y,payload:e}}(e.target.value.split(" ")[1]))},placeholder:"Choose breed",value:r?n+" "+r:n,children:Object.entries(t).map((function(e){var t=Object(T.a)(e,2),n=t[0],r=t[1];return 0===r.length?Object(R.jsx)("option",{value:n,children:n},n):Object(R.jsx)(R.Fragment,{children:r.map((function(e){return Object(R.jsx)("option",{value:n+" "+e,children:n+" "+e},e)}))})}),t)})})},M=n.p+"static/media/preloader.a6f61220.svg",L=function(){return Object(R.jsx)("div",{style:{display:"flex",justifyContent:"center",alignSelf:"center",position:"absolute",top:"20%",width:"100px",height:"100px",zIndex:999},children:Object(R.jsx)("img",{src:M,alt:"preloader"})})},A=n(12),G=n.n(A);function H(){var e=Object(r.useState)(!1),t=Object(T.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=function(){window.pageYOffset>400?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),Object(R.jsx)("div",{className:"scroll-to-top",children:n&&Object(R.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{width:"50px",background:"rgba(0, 139, 139, 0.483)",color:"white",borderRadius:"50%",textAlign:"center",padding:"0 5px",position:"fixed",bottom:"20px",right:"20px",cursor:"pointer"},children:Object(R.jsx)("h3",{children:"\u02c4"})})})}var J=function(e){var t=e.breedImages;return Object(R.jsxs)("main",{className:G.a.container,children:[t.map((function(e,t){return Object(R.jsx)("div",{className:G.a.item,children:Object(R.jsx)("img",{className:G.a.image,src:e,alt:"sweet dog"},t)})})),Object(R.jsx)(H,{})]})},P=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.doggy.dogBreed})),n=Object(s.c)((function(e){return e.doggy.dogSubBreed})),a=Object(s.c)((function(e){return e.doggy.breedImages}));return Object(r.useEffect)((function(){var r,a;e(n?(r=t,a=n,function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(r,a);case 2:n=e.sent,t(w(n.data.message));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e);case 2:r=t.sent,n(w(r.data.message));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}),[e,t,n]),a?Object(R.jsx)(J,{dogBreed:t,breedImages:a}):Object(R.jsx)(L,{})},U=function(e){var t=e.dogData,n=e.dogBreed,r=e.dogSubBreed;return Object(R.jsxs)("div",{className:k.a.app,children:[Object(R.jsx)(F,{dogData:t,dogBreed:n,dogSubBreed:r}),Object(R.jsx)(P,{})]})},W=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.doggy.doggiesData})),n=Object(s.c)((function(e){return e.doggy.dogBreed})),a=Object(s.c)((function(e){return e.doggy.dogSubBreed}));return Object(r.useEffect)((function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:n=e.sent,t((r=n.data.message,{type:v,payload:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),t?Object(R.jsx)(U,{dogData:t,dogBreed:n,dogSubBreed:a}):Object(R.jsx)(L,{})};o.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(s.a,{store:D,children:Object(R.jsx)(W,{})})}),document.getElementById("root")),i()}},[[60,1,2]]]);
//# sourceMappingURL=main.ff721a3d.chunk.js.map