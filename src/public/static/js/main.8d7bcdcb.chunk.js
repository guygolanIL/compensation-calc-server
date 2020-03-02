(this["webpackJsonpcompensation-calculator-client"]=this["webpackJsonpcompensation-calculator-client"]||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=(a(88),a(14)),l=a(72),s=a(15),u=a(149),m=a(141),d=Object(m.a)((function(e){return{IntegrationSelector:{display:"inline-block",border:"solid 1px #b0abab",boxShadow:"0px 0px 7px 3px #b0abab",maxWidth:"700px",borderRadius:"10px"},CheckboxCard:{display:"inline-block"},IntegrationName:{marginRight:"10px"}}}));function p(e){var t=e.style,a=e.integrations,n=e.onCheck,o=d();return r.a.createElement("div",{style:t,className:o.IntegrationSelector},a.map((function(e){return r.a.createElement("div",{className:o.CheckboxCard,key:e},r.a.createElement(u.a,{onChange:function(t){n({provider:e,status:t.target.checked})},color:"primary",id:"".concat(e,"-checkbox")}),r.a.createElement("span",{className:o.IntegrationName},e.toUpperCase()))})))}var b=a(145),f=a(146),x=a(147),g=a(61),h=a.n(g),E=a(76);var v=a(54),j=a.n(v),C=a(152),y=a(144),O=a(151),k=a(148),S=a(153),w=j()((function(e){return{formControl:{margin:e.spacing(2),minWidth:120},Filters:{margin:"auto",padding:"10px 20px",textAlign:"center",display:"inline-block",border:"solid 1px #b0abab",boxShadow:"0px 0px 7px 3px #b0abab",width:"73vw",borderRadius:"10px"}}})),N=r.a.memo((function(e){var t=e.jobs,a=e.onSelectJob,n=e.selectedJob,o=(e.exp,e.onChangedExp),c=e.maxYears,i=w();return r.a.createElement("div",{className:i.Filters},r.a.createElement(y.a,{className:i.formControl},r.a.createElement(O.a,{id:"jobSelectLabel"},"Job"),r.a.createElement(k.a,{labelId:"jobSelectLabel",id:"jobSelect",value:n,onChange:function(e){return a(e.target.value)}},t?t.map((function(e){return r.a.createElement(C.a,{key:e,value:e},e)})):null)),r.a.createElement(y.a,{className:i.formControl},r.a.createElement(O.a,{id:"expSliderLabel"},"Exp"),r.a.createElement(S.a,{onChangeCommitted:function(e,t){return o(t)},defaultValue:0,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",max:c})))})),I=j()((function(e){return{App:{},IntegrationSelectorContainer:{display:"flex",marginTop:"50px"},Loader:{textAlign:"center",margin:"100px auto"},FiltersContainer:{display:"flex",margin:"1rem 0 1rem 0"}}})),F=r.a.createElement("div",null,"Failed to fetch data...");var J=function(){var e=I(),t=Object(n.useState)({}),a=Object(s.a)(t,2),o=a[0],c=a[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),d=m[0],g=m[1],v=Object(n.useState)(0),j=Object(s.a)(v,2),C=j[0],y=j[1],O=function(e,t){var a=t.url,r=t.options,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],c=Object(n.useState)(o),i=Object(s.a)(c,2),l=i[0],u=i[1],m=Object(n.useState)(!1),d=Object(s.a)(m,2),p=d[0],b=d[1];return Object(n.useEffect)((function(){function t(){return(t=Object(E.a)(h.a.mark((function t(){var n,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e&&b(!0),t.next=4,fetch(a,r);case 4:if(!(n=t.sent).ok){t.next=10;break}return t.next=8,n.json();case 8:o=t.sent,u(o);case 10:e&&b(!1),t.next=16;break;case 13:throw t.prev=13,t.t0=t.catch(0),t.t0;case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),[l,p]}(!0,{url:"/data",options:{method:"GET"}}),k=Object(s.a)(O,2),S=k[0],w=k[1],J=Object(n.useMemo)((function(){return r.a.createElement("div",{className:e.Loader},r.a.createElement(b.a,{size:"7rem",color:"primary"}))}),[e.Loader]),L=Object(n.useMemo)((function(){return r.a.createElement(f.a,{timeout:1500,direction:"up",in:!w},r.a.createElement("div",{style:{margin:"auto"}},r.a.createElement(x.a,{timeout:3500,in:!w},r.a.createElement(p,{onCheck:function(e){var t=e.provider,a=e.status;c(Object(l.a)({},o,Object(i.a)({},t,a)))},integrations:S.map((function(e){return e.name}))}))))}),[S,w,o]),A=Object(n.useMemo)((function(){return r.a.createElement(f.a,{timeout:2500,direction:"up",in:!w},r.a.createElement("div",{style:{margin:"auto"}},r.a.createElement(x.a,{timeout:5e3,in:!w},r.a.createElement("div",null,r.a.createElement(N,{maxYears:9,exp:C,onChangedExp:function(e){console.log(e),y(e)},onSelectJob:function(e){return g(e)},selectedJob:d,jobs:S&&S.length>0?Object.keys(S[0].data):null})))))}),[S,d,C,w]),T=Object(n.useCallback)((function(){return w?J:0!==S.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.IntegrationSelectorContainer},L),r.a.createElement("div",{className:e.FiltersContainer},A)):F}),[w,S,J,L,e.IntegrationSelectorContainer,A,e.FiltersContainer]);return r.a.createElement("div",{className:e.App},T())};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(143),A=a(77),T=Object(A.a)({palette:{primary:{main:"#d4387c",contrastText:"#ffffff"},secondary:{main:"#E3E2DF",contrastText:"#0000ff"}}});c.a.render(r.a.createElement(L.a,{theme:T},r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){e.exports=a(114)},88:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.8d7bcdcb.chunk.js.map