(function(e){function t(t){for(var r,s,l=t[0],i=t[1],c=t[2],u=0,p=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},n={app:0},o=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"11750d9d"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=s(e);var c=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(u);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,a[1](c)}n[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/my-first-project/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"220e":function(e,t,a){"use strict";var r=a("8d3f"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",fixed:"top"}},[r("b-navbar-brand",{attrs:{href:"#"}},[r("img",{attrs:{alt:"Vue logo",src:a("cf05")}})]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{tag:"router-link",to:"/"}},[e._v("Home")]),r("b-nav-item",{attrs:{tag:"router-link",to:"/about"}},[e._v("About")])],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-form",[r("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),r("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Search")])],1),r("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[r("b-dropdown-item",{attrs:{href:"#"}},[e._v("EN")]),r("b-dropdown-item",{attrs:{href:"#"}},[e._v("ES")]),r("b-dropdown-item",{attrs:{href:"#"}},[e._v("RU")]),r("b-dropdown-item",{attrs:{href:"#"}},[e._v("FA")])],1),r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("em",[e._v("User")])]},proxy:!0}])},[r("b-dropdown-item",{attrs:{href:"#"}},[e._v("Profile")]),r("b-dropdown-item",{attrs:{href:"#"}},[e._v("Sign Out")])],1)],1)],1)],1)},l=[],i={name:"Header"},c=i,u=a("2877"),d=Object(u["a"])(c,s,l,!1,null,null,null),p=d.exports,m={name:"App",components:{Header:p}},f=m,v=Object(u["a"])(f,n,o,!1,null,null,null),b=v.exports,h=(a("d3b7"),a("8c4f")),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},_=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._m(0),a("h3",[e._v("Installed CLI Plugins")]),e._m(1),a("h3",[e._v("Essential Links")]),e._m(2),a("h3",[e._v("Ecosystem")]),e._m(3)])},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),e._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],j={name:"HelloWorld",props:{msg:String}},k=j,x=(a("220e"),Object(u["a"])(k,y,w,!1,null,"116c7c08",null)),P=x.exports,M={name:"Home",components:{HelloWorld:P}},E=M,C=Object(u["a"])(E,g,_,!1,null,null,null),A=(C.exports,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"mt-5"},[a("div",[a("b-table",{attrs:{"head-variant":"light",striped:"",outlined:"",responsive:"",items:e.items},scopedSlots:e._u([{key:"cell(name)",fn:function(){return[a("b-avatar",{staticClass:"mr-3",attrs:{variant:"info",text:"J"}}),a("span",{staticClass:"mr-auto"},[e._v("Jonathan")])]},proxy:!0},{key:"cell(progress)",fn:function(){return[a("b-progress",{attrs:{value:53,"show-value":"",max:e.max}})]},proxy:!0},{key:"cell(status)",fn:function(){return[a("b-icon",{staticClass:"mr-3",attrs:{icon:"exclamation-circle-fill",variant:"danger"}}),a("span",{staticClass:"mr-auto"},[e._v("Pending")])]},proxy:!0},{key:"cell(actions)",fn:function(){return[a("b-button",{staticClass:"mr-3",attrs:{size:"sm",variant:"light"}},[a("b-icon",{attrs:{icon:"pencil","aria-label":"Help"}})],1),a("b-button",{attrs:{size:"sm",variant:"light"}},[a("b-icon",{attrs:{icon:"envelope","aria-label":"Help"}})],1)]},proxy:!0}])})],1)])}),O=[],S={data:function(){return{items:[{Name:"Stephen Anderson",Project:"Analysis for Helix",Date:"07/24/2020",Status:"Macdonald",Progress:"Macdonald",Actions:"Macdonald"},{Name:"Jonathan Chapman",Project:"Analysis for Helix",Date:"07/24/2020",Status:"Macdonald",Progress:"Macdonald",Actions:"Macdonald"},{Name:"Keith Bulter",Project:"Analysis for Helix",Date:"07/24/2020",Status:"Macdonald",Progress:"Macdonald",Actions:"Macdonald"},{Name:"Luke Davidson",Project:"Analysis for Helix",Date:"07/24/2020",Status:"Macdonald",Progress:"Macdonald",Actions:"Macdonald"},{Name:"Matt Persons",Project:"Analysis for Helix",Date:"07/24/2020",Status:"Macdonald",Progress:"Macdonald",Actions:"Macdonald"},{Name:"Neil Jones",Project:"Analysis for Helix",Date:"07/24/2020",Status:"Macdonald",Progress:"Macdonald",Actions:"Macdonald"}]}}},H=S,N=Object(u["a"])(H,A,O,!1,null,null,null),$=N.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"mt-5"},[a("div",{attrs:{id:"app"}},[a("vue-bootstrap4-table",{attrs:{striped:"",rows:e.rows,classes:e.classes,actions:e.actions,columns:e.columns,config:e.config}})],1)])},T=[],z=a("12f9"),J={name:"App",data:function(){return{rows:[{id:1,name:{first_name:"Vladimir",last_name:"Nitzsche"},address:{country:"Mayotte"},email:"franecki.anastasia@gmail.com"},{id:2,name:{first_name:"Irwin",last_name:"Bayer"},age:23,address:{country:"Guernsey"},email:"rlittle@macejkovic.biz"},{id:3,name:{first_name:"Don",last_name:"Herman"},address:{country:"Papua New Guinea"},email:"delia.becker@cormier.com"}],columns:[{label:"id",name:"id",filter:{type:"simple",placeholder:"Enter first name",case_sensitive:!0,showClearButton:!1,filterOnPressEnter:!1,debounceRate:1e3},sort:!0},{label:"First Name",name:"name.first_name",filter:{type:"simple",placeholder:"Enter first name"},sort:!0},{label:"Email",name:"email",sort:!0},{label:"Country",name:"address.country",filter:{type:"simple",placeholder:"Enter country"}}],actions:[{btn_text:"Download",event_name:"on-download",class:"btn btn-primary my-custom-class",event_payload:{msg:"my custom msg"}}],config:{checkbox_rows:!0,rows_selectable:!0,card_title:"Vue Bootsrap 4 advanced table"}}},components:{VueBootstrap4Table:z["a"]}},L=J,V=Object(u["a"])(L,D,T,!1,null,null,null),B=V.exports;r["default"].use(h["a"]);var F=[{path:"/",name:"Form",component:$},{path:"/table",name:"Table",component:B},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],W=new h["a"]({mode:"history",base:"/my-first-project/",routes:F}),I=W,G=a("5f5b"),R=a("b1e0"),U=a("ecee"),q=a("c074"),K=a("f2d1"),Y=a("ad3d");a("d8bb"),a("f9e3"),a("2dd8");r["default"].use(G["a"]),r["default"].use(R["a"]),U["c"].add(q["a"]),U["c"].add(K["a"]),r["default"].component("font-awesome-icon",Y["a"]),r["default"].config.productionTip=!1,new r["default"]({router:I,render:function(e){return e(b)}}).$mount("#app")},"8d3f":function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.6873ee56.png"},d8bb:function(e,t,a){}});
//# sourceMappingURL=app.691589a8.js.map