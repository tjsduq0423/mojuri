(function(e){function n(n){for(var c,u,o=n[0],i=n[1],s=n[2],d=0,h=[];d<o.length;d++)u=o[d],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&h.push(a[u][0]),a[u]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(n);while(h.length)h.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],c=!0,u=1;u<t.length;u++){var o=t[u];0!==a[o]&&(c=!1)}c&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},u={app:0},a={app:0},r=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-9fe4fec8":"daeb18dd","chunk-243c1de9":"3b799a86","chunk-26d6ecdd":"6a15cf74","chunk-9a4b788a":"ba91e32d","chunk-23c741f1":"14dcbfd1","chunk-2424f7d3":"59389481","chunk-268ca1e1":"33b2de10","chunk-4bab9422":"1456d05a","chunk-60bd4034":"8cf49646","chunk-03d6ca6c":"e1e7c31f","chunk-17dd67d8":"dbbe52ee","chunk-28e2356e":"da7b348f","chunk-41ce0a1d":"59c1b25d","chunk-3c87c89f":"a0723375","chunk-3e4f4c7e":"f291703c","chunk-5655814e":"c1147bce","chunk-60883204":"89a9c1b5","chunk-61acc0fa":"43026139","chunk-656bb9cc":"150cc0d0","chunk-7f842fae":"f725df4c","chunk-9055f62a":"5cee52a6","chunk-d75659a2":"928073ae"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-9fe4fec8":1,"chunk-243c1de9":1,"chunk-26d6ecdd":1,"chunk-9a4b788a":1,"chunk-23c741f1":1,"chunk-2424f7d3":1,"chunk-268ca1e1":1,"chunk-4bab9422":1,"chunk-60bd4034":1,"chunk-03d6ca6c":1,"chunk-17dd67d8":1,"chunk-28e2356e":1,"chunk-41ce0a1d":1,"chunk-3c87c89f":1,"chunk-3e4f4c7e":1,"chunk-5655814e":1,"chunk-60883204":1,"chunk-61acc0fa":1,"chunk-656bb9cc":1,"chunk-7f842fae":1,"chunk-9055f62a":1,"chunk-d75659a2":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-9fe4fec8":"a6428ccf","chunk-243c1de9":"8ad0bb85","chunk-26d6ecdd":"8ad0bb85","chunk-9a4b788a":"dff140a3","chunk-23c741f1":"8ad0bb85","chunk-2424f7d3":"8ad0bb85","chunk-268ca1e1":"8ad0bb85","chunk-4bab9422":"9f701793","chunk-60bd4034":"42529c18","chunk-03d6ca6c":"a940ed21","chunk-17dd67d8":"d7b4a9df","chunk-28e2356e":"b3427efa","chunk-41ce0a1d":"1c1bcf8a","chunk-3c87c89f":"5f0b8708","chunk-3e4f4c7e":"55a7b9a8","chunk-5655814e":"70887aa9","chunk-60883204":"5bbdf98c","chunk-61acc0fa":"d1551d12","chunk-656bb9cc":"5bbdf98c","chunk-7f842fae":"e1c9c3b9","chunk-9055f62a":"e1c9c3b9","chunk-d75659a2":"19f44160"}[e]+".css",a=i.p+c,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var s=r[o],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===c||d===a))return n()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){s=h[o],d=s.getAttribute("data-href");if(d===c||d===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete u[e],f.parentNode.removeChild(f),t(r)},f.href=a;var l=document.getElementsByTagName("head")[0];l.appendChild(f)})).then((function(){u[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var r=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var h=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+u+")",h.name="ChunkLoadError",h.type=c,h.request=u,t[1](h)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var h=0;h<s.length;h++)n(s[h]);var f=d;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},3786:function(e,n,t){"use strict";t.d(n,"f",(function(){return u})),t.d(n,"d",(function(){return a})),t.d(n,"e",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return s}));var c=t("c1fb"),u=function(e,n,t){return c["a"].post("/auth/signUp",{userId:e,password:n,nickname:t})},a=function(e,n,t){return c["a"].post("/auth/login",{userId:e,password:n,stateMaintain:t})},r=function(){return c["a"].post("/auth/logout")},o=function(){return c["a"].get("/auth/user")},i=function(e,n,t){return c["a"].post("/auth/changePassword",{userId:e,password:n,newPassword:t})},s=function(e){return c["a"].post("/auth/emailAuth",{token:e})}},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},a=[],r={name:"App",data:function(){return{}}},o=r,i=(t("034f"),t("2877")),s=Object(i["a"])(o,u,a,!1,null,null,null),d=s.exports,h=t("1da1"),f=(t("96cf"),t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),l=t("2f62"),k=(t("159b"),t("fb6a"),t("c1fb")),m=function(){return k["a"].get("/report")},b={namespaced:!0,state:{list:[],listCount:0},mutations:{setList:function(e,n){var t=[];n.forEach((function(e,c){c%20==0&&t.push(n.slice(c,c+20))})),e.list=t},setListCount:function(e,n){e.listCount=n},LikeOn:function(e,n){e.list[n].likes=!0},LikeOff:function(e,n){e.list[n].likes=!1}},actions:{callData:function(e){return Object(h["a"])(regeneratorRuntime.mark((function n(){var t,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.commit,n.next=3,m();case 3:c=n.sent,t("setList",c.data.data.reports),t("setListCount",c.data.data.reports.length);case 6:case"end":return n.stop()}}),n)})))()}}},p={namespaced:!0,state:{auth:!1,userId:"",nickname:""},getters:{},mutations:{setAuth:function(e,n){e.auth=n},setUserId:function(e,n){e.userId=n},setNickname:function(e,n){e.nickname=n}},actions:{}},g=t("8465"),v={namespaced:!0,state:{stocks:[],industries:[],stockscount:"",industriescount:""},mutations:{setStocks:function(e,n){var t=[];n.forEach((function(e,c){c%25==0&&t.push(n.slice(c,c+25))})),e.stocks=t},setStocksCount:function(e,n){e.stockscount=n},setIndustriesCount:function(e,n){e.industriescount=n},setIndustries:function(e,n){var t=[];n.forEach((function(e,c){c%25==0&&t.push(n.slice(c,c+25))})),e.industries=t}},actions:{callInterest:function(e){return Object(h["a"])(regeneratorRuntime.mark((function n(){var t,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.commit,n.next=3,g["f"]();case 3:return c=n.sent,n.next=6,g["c"]();case 6:u=n.sent,t("setStocks",c.data.stocks.stocks),t("setStocksCount",c.data.stocks.stocks.length),t("setIndustries",u.data.industries.industries),t("setIndustriesCount",u.data.industries.industries.length);case 11:case"end":return n.stop()}}),n)})))()}}};c["a"].use(l["a"]);var w=new l["a"].Store({state:{},mutations:{},actions:{},modules:{list:b,auth:p,interest:v}}),y=t("3786");c["a"].use(f["a"]);var P=[{path:"/",name:"Default",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-60bd4034"),t.e("chunk-17dd67d8")]).then(t.bind(null,"a4f6"))},meta:{authReduired:!1}},{path:"/user-authentication",name:"UserAuthentication",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-4bab9422")]).then(t.bind(null,"9f9e"))},meta:{authReduired:!1}},{path:"/sign-up",name:"SignUp",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-2424f7d3")]).then(t.bind(null,"5c9c"))},meta:{authReduired:!1}},{path:"/find-password",name:"FindPassword",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-268ca1e1")]).then(t.bind(null,"b9e8"))},meta:{authReduired:!1}},{path:"/change-password",name:"ChangePassword",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-23c741f1")]).then(t.bind(null,"0060"))},meta:{authReduired:!0}},{path:"/email-authentication",name:"EmailAuthentication",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-26d6ecdd")]).then(t.bind(null,"fb3e"))},meta:{authReduired:!1}},{path:"/email-authentication-done/:id",name:"EmailAuthenticationDone",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-243c1de9")]).then(t.bind(null,"8989"))},meta:{authReduired:!1}},{path:"/logined",name:"Logined",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-60bd4034"),t.e("chunk-41ce0a1d"),t.e("chunk-3e4f4c7e")]).then(t.bind(null,"745b"))},meta:{authReduired:!0}},{path:"/bookmark",name:"Bookmark",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-60bd4034"),t.e("chunk-41ce0a1d"),t.e("chunk-656bb9cc")]).then(t.bind(null,"4f1d"))},meta:{authReduired:!0}},{path:"/board-logined",name:"BoardLogined",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-60bd4034"),t.e("chunk-41ce0a1d"),t.e("chunk-d75659a2")]).then(t.bind(null,"8a37"))},meta:{authReduired:!0}},{path:"/like-report",name:"LikeReport",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-60bd4034"),t.e("chunk-41ce0a1d"),t.e("chunk-3c87c89f")]).then(t.bind(null,"dafc"))},meta:{authReduired:!0}},{path:"/board",name:"Board",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-60bd4034"),t.e("chunk-03d6ca6c")]).then(t.bind(null,"5d6d"))},meta:{authReduired:!1}},{path:"/my-board",name:"MyBoard",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-60bd4034"),t.e("chunk-41ce0a1d"),t.e("chunk-60883204")]).then(t.bind(null,"b3d4"))},meta:{authReduired:!0}},{path:"/board-write",name:"BoardWrite",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-60bd4034"),t.e("chunk-41ce0a1d"),t.e("chunk-61acc0fa")]).then(t.bind(null,"904b"))},meta:{authReduired:!0}},{path:"/interest-corporation",name:"InterestCorporation",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-60bd4034"),t.e("chunk-41ce0a1d"),t.e("chunk-7f842fae")]).then(t.bind(null,"86ed"))},meta:{authReduired:!0}},{path:"/interest-industry",name:"InterestIndustry",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-60bd4034"),t.e("chunk-41ce0a1d"),t.e("chunk-9055f62a")]).then(t.bind(null,"98ef"))},meta:{authReduired:!0}},{path:"/article/:id",name:"Article",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-60bd4034"),t.e("chunk-28e2356e")]).then(t.bind(null,"3ad6"))},meta:{authReduired:!1}},{path:"/article-logined/:id",name:"ArticleLogined",component:function(){return Promise.all([t.e("chunk-9fe4fec8"),t.e("chunk-9a4b788a"),t.e("chunk-60bd4034"),t.e("chunk-41ce0a1d"),t.e("chunk-5655814e")]).then(t.bind(null,"c887"))},meta:{authReduired:!0}},{path:"/*",redirect:{name:"Default"}}],R=new f["a"]({mode:"history",base:"/",routes:P});R.beforeEach(function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(n,t,c){var u,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.matched.some((function(e){return e.meta.authReduired}))){e.next=15;break}return e.prev=1,e.next=4,y["c"]();case 4:u=e.sent,200===u.status&&(w.commit("auth/setUserId",u.data.userId),w.commit("auth/setNickname",u.data.nickname),w.commit("auth/setAuth",!0),c()),e.next=13;break;case 8:e.prev=8,e.t0=e["catch"](1),alert("로그인이 필요합니다"),w.commit("auth/setAuth",!1),c({path:"/user-authentication"});case 13:e.next=26;break;case 15:return e.prev=15,e.next=18,y["c"]();case 18:a=e.sent,200===a.status&&(w.commit("auth/setUserId",a.data.userId),w.commit("auth/setNickname",a.data.nickname),w.commit("auth/setAuth",!0),c({path:"/logined"})),e.next=26;break;case 22:e.prev=22,e.t1=e["catch"](15),w.commit("auth/setAuth",!1),c();case 26:case"end":return e.stop()}}),e,null,[[1,8],[15,22]])})));return function(n,t,c){return e.apply(this,arguments)}}());var I=R,x=t("f309");c["a"].use(x["a"]);var A=new x["a"]({});c["a"].config.productionTip=!1,new c["a"]({router:I,store:w,vuetify:A,render:function(e){return e(d)}}).$mount("#app")},8465:function(e,n,t){"use strict";t.d(n,"f",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"e",(function(){return r})),t.d(n,"d",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s}));var c=t("c1fb"),u=function(){return c["a"].get("/interest/stocks",{})},a=function(){return c["a"].get("/interest/industries",{})},r=function(e,n){return c["a"].post("/interest/registerStocks",{userId:e,selectedstocks:n})},o=function(e,n){return c["a"].post("/interest/registerIndustries",{userId:e,selectedindustries:n})},i=function(e){return c["a"].get("/interest/getinterestStocks",{userId:e})},s=function(e){return c["a"].get("/interest/getinterestIndustries",{userId:e})}},"85ec":function(e,n,t){},c1fb:function(e,n,t){"use strict";var c=t("bc3a"),u=t.n(c),a=u.a.create({baseURL:"ec2-13-125-115-211.ap-northeast-2.compute.amazonaws.com",withCredentials:!0});n["a"]=a}});
//# sourceMappingURL=app.f00c10ec.js.map