(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sa-dashboard"],{"0b42":function(e,t,r){var n=r("e8b5"),l=r("68ee"),c=r("861d"),a=r("b622"),o=a("species");e.exports=function(e){var t;return n(e)&&(t=e.constructor,l(t)&&(t===Array||n(t.prototype))?t=void 0:c(t)&&(t=t[o],null===t&&(t=void 0))),void 0===t?Array:t}},"107c":function(e,t,r){var n=r("d039"),l=r("da84"),c=l.RegExp;e.exports=n((function(){var e=c("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,r){var n=r("825a"),l=r("1626"),c=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if(l(r)){var o=r.call(e,t);return null!==o&&n(o),o}if("RegExp"===c(e))return a.call(e,t);throw TypeError("RegExp#exec called on incompatible receiver")}},"1dde":function(e,t,r){var n=r("d039"),l=r("b622"),c=r("2d00"),a=l("species");e.exports=function(e){return c>=51||!n((function(){var t=[],r=t.constructor={};return r[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"2f48":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("1da1"),l=(r("96cf"),r("4de4"),r("a434"),r("5a15")),c=r("be92"),a=Object(c["b"])({id:"superadmin_users",state:function(){return{users:[],isLoading:!1}},getters:{getRegisteredUsers:function(){return this.users},getSupervisorUsers:function(){return this.users.filter((function(e){return"supervisor"==e.role}))},getDataIsLoading:function(){return this.isLoading}},actions:{searchByEmail:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.users.filter((function(t){return t.email==e}));case 2:case"end":return r.stop()}}),r)})))()},loadAllPortalUsers:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.users.length){t.next=7;break}return e.isLoading=!0,t.next=4,l["a"].get("/api/sa/users");case 4:r=t.sent,e.users=r.data,e.isLoading=!1;case 7:case"end":return t.stop()}}),t)})))()},resetSelectUserPassword:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["a"].post("/api/sa/users/setToDefault/".concat(e));case 2:case"end":return t.stop()}}),t)})))()},setUserActive:function(e,t,r){var c=this;return Object(n["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,l["a"].patch("/api/users/".concat(e),{isActivated:t});case 2:a=n.sent,c.users.splice(r,1,a.data);case 4:case"end":return n.stop()}}),n)})))()},setUserRole:function(e,t,r){var c=this;return Object(n["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,l["a"].patch("/api/users/".concat(e),{role:t});case 2:a=n.sent,c.users.splice(r,1,a.data);case 4:case"end":return n.stop()}}),n)})))()},updateLeaveCredits:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].patch("/api/sa/credits/".concat(e),t);case 3:r.sent,r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](0),console.log(r.t0);case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))()}}})},"466d":function(e,t,r){"use strict";var n=r("d784"),l=r("825a"),c=r("50c4"),a=r("577e"),o=r("1d80"),s=r("dc4a"),d=r("8aa5"),i=r("14c3");n("match",(function(e,t,r){return[function(t){var r=o(this),n=void 0==t?void 0:s(t,e);return n?n.call(t,r):new RegExp(t)[e](a(r))},function(e){var n=l(this),o=a(e),s=r(t,n,o);if(s.done)return s.value;if(!n.global)return i(n,o);var u=n.unicode;n.lastIndex=0;var b,m=[],p=0;while(null!==(b=i(n,o))){var O=a(b[0]);m[p]=O,""===O&&(n.lastIndex=d(o,c(n.lastIndex),u)),p++}return 0===p?null:m}]}))},"4de4":function(e,t,r){"use strict";var n=r("23e7"),l=r("b727").filter,c=r("1dde"),a=c("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(e,t,r){var n=r("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},"6d98":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("1da1"),l=(r("a434"),r("96cf"),r("5a15")),c=r("be92"),a=Object(c["b"])({id:"superadmin_settings_role",state:function(){return{roles:[],errors:[]}},getters:{getAllRoles:function(){return this.roles},getAllErrors:function(){return this.errors}},actions:{loadAllRoles:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.roles.length){t.next=5;break}return t.next=3,l["a"].get("/api/sa/roles");case 3:r=t.sent,e.roles=r.data;case 5:case"end":return t.stop()}}),t)})))()},addRole:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].post("/api/sa/roles",e);case 3:n=r.sent,t.roles.unshift(n.data),t.errors=[],r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),t.errors=null===(c=r.t0.response)||void 0===c?void 0:c.data.errors;case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},updateRole:function(e,t){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function n(){var c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l["a"].patch("/api/sa/roles/".concat(e.id),e);case 3:c=n.sent,r.roles.splice(t,1,c.data),r.errors=[],n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),r.errors=null===(a=n.t0.response)||void 0===a?void 0:a.data.errors;case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},deleteRole:function(e,t){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l["a"].delete("/api/sa/roles/".concat(e));case 3:r.roles.splice(t,1),r.errors=[],n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),r.errors=null===(c=n.t0.response)||void 0===c?void 0:c.data.errors;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}})},8418:function(e,t,r){"use strict";var n=r("a04b"),l=r("9bf2"),c=r("5c6c");e.exports=function(e,t,r){var a=n(t);a in e?l.f(e,a,c(0,r)):e[a]=r}},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("577e"),l=r("ad6d"),c=r("9f7f"),a=r("5692"),o=r("7c73"),s=r("69f3").get,d=r("fce3"),i=r("107c"),u=RegExp.prototype.exec,b=a("native-string-replace",String.prototype.replace),m=u,p=function(){var e=/a/,t=/b*/g;return u.call(e,"a"),u.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),O=c.UNSUPPORTED_Y||c.BROKEN_CARET,v=void 0!==/()??/.exec("")[1],j=p||v||O||d||i;j&&(m=function(e){var t,r,c,a,d,i,j,f=this,E=s(f),V=n(e),g=E.raw;if(g)return g.lastIndex=f.lastIndex,t=m.call(g,V),f.lastIndex=g.lastIndex,t;var N=E.groups,h=O&&f.sticky,y=l.call(f),x=f.source,w=0,U=V;if(h&&(y=y.replace("y",""),-1===y.indexOf("g")&&(y+="g"),U=V.slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==V.charAt(f.lastIndex-1))&&(x="(?: "+x+")",U=" "+U,w++),r=new RegExp("^(?:"+x+")",y)),v&&(r=new RegExp("^"+x+"$(?!\\s)",y)),p&&(c=f.lastIndex),a=u.call(h?r:f,U),h?a?(a.input=a.input.slice(w),a[0]=a[0].slice(w),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:p&&a&&(f.lastIndex=f.global?a.index+a[0].length:c),v&&a&&a.length>1&&b.call(a[0],r,(function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(a[d]=void 0)})),a&&N)for(a.groups=i=o(null),d=0;d<N.length;d++)j=N[d],i[j[0]]=a[j[1]];return a}),e.exports=m},"9f7f":function(e,t,r){var n=r("d039"),l=r("da84"),c=l.RegExp;t.UNSUPPORTED_Y=n((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a434:function(e,t,r){"use strict";var n=r("23e7"),l=r("23cb"),c=r("a691"),a=r("50c4"),o=r("7b0b"),s=r("65f0"),d=r("8418"),i=r("1dde"),u=i("splice"),b=Math.max,m=Math.min,p=9007199254740991,O="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var r,n,i,u,v,j,f=o(this),E=a(f.length),V=l(e,E),g=arguments.length;if(0===g?r=n=0:1===g?(r=0,n=E-V):(r=g-2,n=m(b(c(t),0),E-V)),E+r-n>p)throw TypeError(O);for(i=s(f,n),u=0;u<n;u++)v=V+u,v in f&&d(i,u,f[v]);if(i.length=n,r<n){for(u=V;u<E-n;u++)v=u+n,j=u+r,v in f?f[j]=f[v]:delete f[j];for(u=E;u>E-n+r;u--)delete f[u-1]}else if(r>n)for(u=E-n;u>V;u--)v=u+n-1,j=u+r-1,v in f?f[j]=f[v]:delete f[j];for(u=0;u<r;u++)f[u+V]=arguments[u+2];return f.length=E-n+r,i}})},ac1f:function(e,t,r){"use strict";var n=r("23e7"),l=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b727:function(e,t,r){var n=r("0366"),l=r("44ad"),c=r("7b0b"),a=r("50c4"),o=r("65f0"),s=[].push,d=function(e){var t=1==e,r=2==e,d=3==e,i=4==e,u=6==e,b=7==e,m=5==e||u;return function(p,O,v,j){for(var f,E,V=c(p),g=l(V),N=n(O,v,3),h=a(g.length),y=0,x=j||o,w=t?x(p,h):r||b?x(p,0):void 0;h>y;y++)if((m||y in g)&&(f=g[y],E=N(f,y,V),e))if(t)w[y]=E;else if(E)switch(e){case 3:return!0;case 5:return f;case 6:return y;case 2:s.call(w,f)}else switch(e){case 4:return!1;case 7:s.call(w,f)}return u?-1:d||i?i:w}};e.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6),filterReject:d(7)}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),l=r("9263"),c=r("d039"),a=r("b622"),o=r("9112"),s=a("species"),d=RegExp.prototype;e.exports=function(e,t,r,i){var u=a(e),b=!c((function(){var t={};return t[u]=function(){return 7},7!=""[e](t)})),m=b&&!c((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[u]=/./[u]),r.exec=function(){return t=!0,null},r[u](""),!t}));if(!b||!m||r){var p=/./[u],O=t(u,""[e],(function(e,t,r,n,c){var a=t.exec;return a===l||a===d.exec?b&&!c?{done:!0,value:p.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}));n(String.prototype,e,O[0]),n(d,u,O[1])}i&&o(d[u],"sham",!0)}},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},fce3:function(e,t,r){var n=r("d039"),l=r("da84"),c=l.RegExp;e.exports=n((function(){var e=c(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fdca:function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),l=Object(n["createElementVNode"])("div",{class:"alert alert-primary"},[Object(n["createElementVNode"])("b",null,"Registered User")],-1),c={class:"card"},a={class:"card-header"},o=Object(n["createElementVNode"])("h3",{class:"card-title"},[Object(n["createElementVNode"])("b",null,"Registered Users")],-1),s={class:"card-tools"},d={class:"input-group input-group-sm",style:{width:"150px"}},i={class:"card-body table-responsive p-0",style:{height:"70vh"}},u={class:"table table-head-fixed text-nowrap1 table-striped text-sm"},b=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th",null,"ID"),Object(n["createElementVNode"])("th",null,"Username"),Object(n["createElementVNode"])("th",null,"Email Address"),Object(n["createElementVNode"])("th",null,"Role"),Object(n["createElementVNode"])("th",null,"Is Activated"),Object(n["createElementVNode"])("th",null,"Is Filled"),Object(n["createElementVNode"])("th",null,"Created At"),Object(n["createElementVNode"])("th",null,"Actions")])],-1),m={key:0},p=Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("td",{colspan:"8",class:"text-center"},[Object(n["createElementVNode"])("i",{class:"fas fa fa-spinner fa-pulse fa-2x"})])],-1),O=[p],v={key:1},j=["onChange"],f={selected:""},E=["value"],V={key:0,class:"fas fa-check text-success"},g={key:1,class:"fas fa-times text-danger"},N={key:0,class:"fas fa-check text-success"},h={key:1,class:"fas fa-times text-danger"},y=["onClick"],x=Object(n["createElementVNode"])("i",{class:"fas fa-search"},null,-1),w=[x],U=["onClick"],k=Object(n["createElementVNode"])("i",{class:"fas fa-redo"},null,-1),S=[k],R=["onClick"],D=Object(n["createElementVNode"])("i",{class:"fas fa-list-alt"},null,-1),B=[D],_=["onClick"],C=Object(n["createElementVNode"])("i",{class:"fas fa-unlock"},null,-1),L=[C],T=["onClick"],I=Object(n["createElementVNode"])("i",{class:"fas fa-lock"},null,-1),A=[I],P={key:1},M=Object(n["createElementVNode"])("td",{colspan:"8",class:"text-center"},"No user to display",-1),F=[M],z={class:"modal fade show",id:"modal-leave-credits","aria-modal":"true",role:"dialog"},G={class:"modal-dialog modal-md modal-dialog-centered"},H={class:"modal-content"},J=Object(n["createElementVNode"])("div",{class:"modal-header"},[Object(n["createElementVNode"])("h4",{class:"modal-title"},"Setting leave credits"),Object(n["createElementVNode"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(n["createElementVNode"])("span",{"aria-hidden":"true"},"×")])],-1),K={class:"modal-body"},Y={class:"row"},$={class:"form-group col-6"},q=Object(n["createElementVNode"])("label",null,"VL",-1),Q={class:"form-group col-6"},W=Object(n["createElementVNode"])("label",null,"Total VL",-1),X={class:"form-group col-6"},Z=Object(n["createElementVNode"])("label",null,"SL",-1),ee={class:"form-group col-6"},te=Object(n["createElementVNode"])("label",null,"Total SL",-1),re={class:"form-group col-6"},ne=Object(n["createElementVNode"])("label",null,"PTO",-1),le={class:"form-group col-6"},ce=Object(n["createElementVNode"])("label",null,"Total PTO",-1),ae={class:"form-group col-6"},oe=Object(n["createElementVNode"])("label",null,"Special Leave",-1),se={class:"form-group col-6"},de=Object(n["createElementVNode"])("label",null,"Total Special Leave",-1),ie={class:"modal-footer"},ue={class:"modal fade show",id:"modal-personal","aria-modal":"true",role:"dialog"},be={class:"modal-dialog modal-xl modal-dialog-centered"},me={class:"modal-content"},pe=Object(n["createElementVNode"])("div",{class:"modal-header"},[Object(n["createElementVNode"])("h4",{class:"modal-title"},"Personal"),Object(n["createElementVNode"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(n["createElementVNode"])("span",{"aria-hidden":"true"},"×")])],-1),Oe={class:"modal-body"},ve={class:"row"},je={class:"col-3"},fe={class:"card"},Ee={class:"card-body"},Ve=["src"],ge={class:"col-9",style:{"overflow-y":"auto"}},Ne={class:"card"},he=Object(n["createElementVNode"])("div",{class:"card-header"},[Object(n["createElementVNode"])("h4",{class:"card-title"},"Personal Details")],-1),ye={class:"card-body p-0"},xe={class:"table table-sm table-striped"},we=Object(n["createElementVNode"])("td",{style:{width:"55%"}},"First Name",-1),Ue=Object(n["createElementVNode"])("td",null,"Middle Name",-1),ke=Object(n["createElementVNode"])("td",null,"Last Name",-1),Se=Object(n["createElementVNode"])("td",null,"E-mail address",-1),Re=Object(n["createElementVNode"])("td",null,"Birth Date",-1),De=Object(n["createElementVNode"])("td",null,"Civil Status",-1),Be=Object(n["createElementVNode"])("td",null,"Contact #1",-1),_e=Object(n["createElementVNode"])("td",null,"Contact #2",-1),Ce=Object(n["createElementVNode"])("td",null,"Present Address",-1),Le=Object(n["createElementVNode"])("td",null,"Permanent Address",-1),Te=Object(n["createElementVNode"])("td",null,"SSS Number",-1),Ie=Object(n["createElementVNode"])("td",null,"PAGIBIG ID",-1),Ae=Object(n["createElementVNode"])("td",null,"PhilHealth ID",-1),Pe=Object(n["createElementVNode"])("td",null,"TIN",-1),Me={class:"card"},Fe=Object(n["createElementVNode"])("div",{class:"card-header"},[Object(n["createElementVNode"])("h4",{class:"card-title"},"Company Details")],-1),ze={class:"card-body p-0"},Ge={class:"table table-sm table-striped"},He=Object(n["createElementVNode"])("td",{style:{width:"55%"}},"Employee ID",-1),Je=Object(n["createElementVNode"])("td",null,"Date Hired",-1),Ke=Object(n["createElementVNode"])("td",null,"Branch",-1),Ye=Object(n["createElementVNode"])("td",null,"Skype ID",-1),$e=Object(n["createElementVNode"])("td",null,"Department",-1),qe=Object(n["createElementVNode"])("td",null,"Designation",-1),Qe={class:"card"},We=Object(n["createElementVNode"])("div",{class:"card-header"},[Object(n["createElementVNode"])("h4",{class:"card-title"},"Leave Credits")],-1),Xe={class:"card-body p-0"},Ze={class:"table table-sm table-striped"},et=Object(n["createElementVNode"])("td",{style:{width:"55%"}},"VL",-1),tt={class:"progress progress"},rt=Object(n["createElementVNode"])("td",null,"SL",-1),nt={class:"progress progress"},lt=Object(n["createElementVNode"])("td",null,"PTO",-1),ct={class:"progress progress"},at={key:0},ot=Object(n["createElementVNode"])("td",null,"Skype ID",-1),st={class:"progress progress"};function dt(e,t,r,p,x,k){var D,C,I,M,dt,it,ut,bt,mt,pt,Ot,vt,jt,ft,Et,Vt,gt,Nt,ht,yt,xt,wt,Ut,kt,St,Rt,Dt,Bt,_t,Ct,Lt,Tt,It,At,Pt,Mt,Ft,zt;return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[l,Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("div",a,[o,Object(n["createElementVNode"])("div",s,[Object(n["createElementVNode"])("div",d,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.userSearch=t}),type:"text",name:"table_search",class:"form-control float-right",placeholder:"Search by email"},null,512),[[n["vModelText"],e.userSearch]])])])]),Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("table",u,[b,e.usersIsLoading?(Object(n["openBlock"])(),Object(n["createElementBlock"])("tbody",m,O)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("tbody",v,[e.registeredUsers.length>0?(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],{key:0},Object(n["renderList"])(e.registeredUsers,(function(t,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:t.id},[Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.id),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.name),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.email),1),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("select",{onChange:function(n){return e.setUserRole(t.id,n.target.value,r)},class:"form-control form-control-xs"},[Object(n["createElementVNode"])("option",f,Object(n["toDisplayString"])(t.role),1),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.registeredRole,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("option",{key:e.id,value:e.name},Object(n["toDisplayString"])(e.display_name),9,E)})),128))],40,j)]),Object(n["createElementVNode"])("td",null,[t.isActivated?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",V)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",g))]),Object(n["createElementVNode"])("td",null,[t.isFilled?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",N)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",h))]),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.created_at),1),Object(n["createElementVNode"])("td",null,[t.employee?(Object(n["openBlock"])(),Object(n["createElementBlock"])("button",{key:0,onClick:function(r){return e.selectThisUser(t)},"data-toggle":"modal","data-target":"#modal-personal",class:"btn btn-success btn-xs mr-1"},w,8,y)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("button",{onClick:function(r){return e.setToDefaultPassword(t.id)},class:"btn btn-warning btn-xs mr-1"},S,8,U),Object(n["createElementVNode"])("button",{onClick:function(r){return e.selectThisCredit(null===t||void 0===t?void 0:t.credits)},"data-toggle":"modal","data-target":"#modal-leave-credits",class:"btn btn-primary btn-xs mr-1"},B,8,R),0==t.isActivated?(Object(n["openBlock"])(),Object(n["createElementBlock"])("button",{key:1,onClick:function(n){return e.setUserToActive(t.id,r)},class:"btn btn-success btn-xs mr-1"},L,8,_)):Object(n["createCommentVNode"])("",!0),1==t.isActivated?(Object(n["openBlock"])(),Object(n["createElementBlock"])("button",{key:2,onClick:function(n){return e.setUserToInactive(t.id,r)},class:"btn btn-danger btn-xs mr-1"},A,8,T)):Object(n["createCommentVNode"])("",!0)])])})),128)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",P,F))]))])])]),Object(n["createElementVNode"])("div",z,[Object(n["createElementVNode"])("div",G,[Object(n["createElementVNode"])("div",H,[J,Object(n["createElementVNode"])("div",K,[Object(n["createElementVNode"])("div",Y,[Object(n["createElementVNode"])("div",$,[q,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.toBeUpdatedCredits.VL=t}),type:"text",class:"form-control form-control-xs"},null,512),[[n["vModelText"],e.toBeUpdatedCredits.VL]])]),Object(n["createElementVNode"])("div",Q,[W,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.toBeUpdatedCredits.total_VL=t}),type:"text",class:"form-control form-control-xs"},null,512),[[n["vModelText"],e.toBeUpdatedCredits.total_VL]])]),Object(n["createElementVNode"])("div",X,[Z,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.toBeUpdatedCredits.SL=t}),type:"text",class:"form-control form-control-xs"},null,512),[[n["vModelText"],e.toBeUpdatedCredits.SL]])]),Object(n["createElementVNode"])("div",ee,[te,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.toBeUpdatedCredits.total_SL=t}),type:"text",class:"form-control form-control-xs"},null,512),[[n["vModelText"],e.toBeUpdatedCredits.total_SL]])]),Object(n["createElementVNode"])("div",re,[ne,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.toBeUpdatedCredits.PTO=t}),type:"text",class:"form-control form-control-xs"},null,512),[[n["vModelText"],e.toBeUpdatedCredits.PTO]])]),Object(n["createElementVNode"])("div",le,[ce,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.toBeUpdatedCredits.total_PTO=t}),type:"text",class:"form-control form-control-xs"},null,512),[[n["vModelText"],e.toBeUpdatedCredits.total_PTO]])]),Object(n["createElementVNode"])("div",ae,[oe,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.toBeUpdatedCredits.special_leave=t}),type:"text",class:"form-control form-control-xs"},null,512),[[n["vModelText"],e.toBeUpdatedCredits.special_leave]])]),Object(n["createElementVNode"])("div",se,[de,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.toBeUpdatedCredits.total_special_leave=t}),type:"text",class:"form-control form-control-xs"},null,512),[[n["vModelText"],e.toBeUpdatedCredits.total_special_leave]])])])]),Object(n["createElementVNode"])("div",ie,[Object(n["createElementVNode"])("button",{onClick:t[9]||(t[9]=function(t){return e.setLeaveCredits()}),class:"btn btn-primary btn-sm btn-block"},"Update")])])])]),Object(n["createElementVNode"])("div",ue,[Object(n["createElementVNode"])("div",be,[Object(n["createElementVNode"])("div",me,[pe,Object(n["createElementVNode"])("div",Oe,[Object(n["createElementVNode"])("div",ve,[Object(n["createElementVNode"])("div",je,[Object(n["createElementVNode"])("div",fe,[Object(n["createElementVNode"])("div",Ee,[Object(n["createElementVNode"])("img",{src:null===(D=e.selectedUser)||void 0===D?void 0:D.profile_image,alt:"User image",style:{width:"100%",height:"200"}},null,8,Ve)])])]),Object(n["createElementVNode"])("div",ge,[Object(n["createElementVNode"])("div",Ne,[he,Object(n["createElementVNode"])("div",ye,[Object(n["createElementVNode"])("table",xe,[Object(n["createElementVNode"])("tbody",null,[Object(n["createElementVNode"])("tr",null,[we,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(C=e.selectedUser)||void 0===C?void 0:C.employee.first_name),1)]),Object(n["createElementVNode"])("tr",null,[Ue,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(I=e.selectedUser)||void 0===I?void 0:I.employee.middle_name),1)]),Object(n["createElementVNode"])("tr",null,[ke,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(M=e.selectedUser)||void 0===M?void 0:M.employee.last_name),1)]),Object(n["createElementVNode"])("tr",null,[Se,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(dt=e.selectedUser)||void 0===dt?void 0:dt.email),1)]),Object(n["createElementVNode"])("tr",null,[Re,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(it=e.selectedUser)||void 0===it?void 0:it.employee.birth_date),1)]),Object(n["createElementVNode"])("tr",null,[De,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(ut=e.selectedUser)||void 0===ut?void 0:ut.employee.civil_status),1)]),Object(n["createElementVNode"])("tr",null,[Be,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(bt=e.selectedUser)||void 0===bt?void 0:bt.employee.contact_no_1),1)]),Object(n["createElementVNode"])("tr",null,[_e,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(mt=e.selectedUser)||void 0===mt?void 0:mt.employee.contact_no_2),1)]),Object(n["createElementVNode"])("tr",null,[Ce,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(pt=e.selectedUser)||void 0===pt?void 0:pt.employee.present_address),1)]),Object(n["createElementVNode"])("tr",null,[Le,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(Ot=e.selectedUser)||void 0===Ot?void 0:Ot.employee.permanent_address),1)]),Object(n["createElementVNode"])("tr",null,[Te,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(vt=e.selectedUser)||void 0===vt?void 0:vt.employee.sss),1)]),Object(n["createElementVNode"])("tr",null,[Ie,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(jt=e.selectedUser)||void 0===jt?void 0:jt.employee.pagibig),1)]),Object(n["createElementVNode"])("tr",null,[Ae,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(ft=e.selectedUser)||void 0===ft?void 0:ft.employee.philhealth),1)]),Object(n["createElementVNode"])("tr",null,[Pe,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(Et=e.selectedUser)||void 0===Et?void 0:Et.employee.tin),1)])])])])]),Object(n["createElementVNode"])("div",Me,[Fe,Object(n["createElementVNode"])("div",ze,[Object(n["createElementVNode"])("table",Ge,[Object(n["createElementVNode"])("tbody",null,[Object(n["createElementVNode"])("tr",null,[He,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(Vt=e.selectedUser)||void 0===Vt?void 0:Vt.employee.employee_id),1)]),Object(n["createElementVNode"])("tr",null,[Je,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(gt=e.selectedUser)||void 0===gt?void 0:gt.employee.date_hired),1)]),Object(n["createElementVNode"])("tr",null,[Ke,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(Nt=e.selectedUser)||void 0===Nt?void 0:Nt.employee.branch.display_name),1)]),Object(n["createElementVNode"])("tr",null,[Ye,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(ht=e.selectedUser)||void 0===ht?void 0:ht.employee.skype_id),1)]),Object(n["createElementVNode"])("tr",null,[$e,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(yt=e.selectedUser)||void 0===yt?void 0:yt.employee.department.display_name),1)]),Object(n["createElementVNode"])("tr",null,[qe,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(null===(xt=e.selectedUser)||void 0===xt?void 0:xt.employee.position),1)])])])])]),Object(n["createElementVNode"])("div",Qe,[We,Object(n["createElementVNode"])("div",Xe,[Object(n["createElementVNode"])("table",Ze,[Object(n["createElementVNode"])("tbody",null,[Object(n["createElementVNode"])("tr",null,[et,Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("div",tt,[Object(n["createElementVNode"])("div",{class:"progress-bar bg-primary progress-bar-striped",role:"progressbar",style:Object(n["normalizeStyle"])("width:".concat((null===(wt=e.selectedUser)||void 0===wt?void 0:wt.credits.VL)/(null===(Ut=e.selectedUser)||void 0===Ut?void 0:Ut.credits.total_VL)*100,"%;"))},[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(null===(kt=e.selectedUser)||void 0===kt?void 0:kt.credits.VL)+" / "+Object(n["toDisplayString"])(null===(St=e.selectedUser)||void 0===St?void 0:St.credits.total_VL),1)],4)])])]),Object(n["createElementVNode"])("tr",null,[rt,Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("div",nt,[Object(n["createElementVNode"])("div",{class:"progress-bar bg-primary progress-bar-striped",role:"progressbar",style:Object(n["normalizeStyle"])("width:".concat((null===(Rt=e.selectedUser)||void 0===Rt?void 0:Rt.credits.SL)/(null===(Dt=e.selectedUser)||void 0===Dt?void 0:Dt.credits.total_SL)*100,"%;"))},[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(null===(Bt=e.selectedUser)||void 0===Bt?void 0:Bt.credits.SL)+" / "+Object(n["toDisplayString"])(null===(_t=e.selectedUser)||void 0===_t?void 0:_t.credits.total_SL),1)],4)])])]),Object(n["createElementVNode"])("tr",null,[lt,Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("div",ct,[Object(n["createElementVNode"])("div",{class:"progress-bar bg-primary progress-bar-striped",role:"progressbar",style:Object(n["normalizeStyle"])("width:".concat((null===(Ct=e.selectedUser)||void 0===Ct?void 0:Ct.credits.PTO)/(null===(Lt=e.selectedUser)||void 0===Lt?void 0:Lt.credits.total_PTO)*100,"%;"))},[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(null===(Tt=e.selectedUser)||void 0===Tt?void 0:Tt.credits.PTO)+" / "+Object(n["toDisplayString"])(null===(It=e.selectedUser)||void 0===It?void 0:It.credits.total_PTO),1)],4)])])]),(null===(At=e.selectedUser)||void 0===At?void 0:At.credits.special_leave)>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",at,[ot,Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("div",st,[Object(n["createElementVNode"])("div",{class:"progress-bar bg-primary progress-bar-striped",role:"progressbar",style:Object(n["normalizeStyle"])("width:".concat((null===(Pt=e.selectedUser)||void 0===Pt?void 0:Pt.credits.special_leave)/(null===(Mt=e.selectedUser)||void 0===Mt?void 0:Mt.credits.total_special_leave)*100,"%;"))},[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(null===(Ft=e.selectedUser)||void 0===Ft?void 0:Ft.credits.special_leave)+" / "+Object(n["toDisplayString"])(null===(zt=e.selectedUser)||void 0===zt?void 0:zt.credits.special_leave),1)],4)])])])):Object(n["createCommentVNode"])("",!0)])])])])])])])])])])],64)}var it=r("1da1"),ut=(r("96cf"),r("4de4"),r("ac1f"),r("466d"),r("2f48")),bt=r("6d98"),mt=Object(n["defineComponent"])({setup:function(){var e=Object(ut["a"])(),t=Object(bt["a"])(),r=Object(n["ref"])(""),l=Object(n["computed"])((function(){return e.getDataIsLoading})),c=Object(n["computed"])((function(){return t.getAllRoles})),a=Object(n["computed"])((function(){return e.getRegisteredUsers.filter((function(e){return e.email.toLowerCase().match(r.value)}))})),o=Object(n["ref"])(),s=Object(n["ref"])({id:0,user_id:0,VL:0,total_VL:0,SL:0,total_SL:0,OB:0,OT:0,PTO:0,total_PTO:0,special_leave:0,total_special_leave:0});Object(n["onBeforeMount"])(Object(it["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.loadAllPortalUsers();case 2:return r.next=4,t.loadAllRoles();case 4:case"end":return r.stop()}}),r)}))));var d=function(e){o.value=e},i=function(e){s.value=e},u=function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=confirm("Set this user password to default?"),!n){t.next=4;break}return t.next=4,e.resetSelectUserPassword(r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.updateLeaveCredits(s.value.user_id,s.value);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(r,n){var l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(l=confirm("Set this user to active?"),!l){t.next=4;break}return t.next=4,e.setUserActive(r,!0,n);case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),p=function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(r,n){var l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(l=confirm("Set this user to inactive?"),!l){t.next=4;break}return t.next=4,e.setUserActive(r,!1,n);case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),O=function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(r,n,l){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.setUserRole(r,n,l);case 2:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),v=function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.searchByEmail(r.value);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{selectThisUser:d,selectThisCredit:i,setToDefaultPassword:u,setLeaveCredits:b,setUserToActive:m,setUserToInactive:p,setUserRole:O,searchUser:v,userSearch:r,usersIsLoading:l,toBeUpdatedCredits:s,selectedUser:o,registeredUsers:a,registeredRole:c}}}),pt=r("6b0d"),Ot=r.n(pt);const vt=Ot()(mt,[["render",dt]]);t["default"]=vt}}]);
//# sourceMappingURL=sa-dashboard.c72e4297.js.map