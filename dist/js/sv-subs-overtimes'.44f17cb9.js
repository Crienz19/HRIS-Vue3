(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sv-subs-overtimes'"],{"0b42":function(e,t,r){var n=r("e8b5"),a=r("68ee"),c=r("861d"),o=r("b622"),l=o("species");e.exports=function(e){var t;return n(e)&&(t=e.constructor,a(t)&&(t===Array||n(t.prototype))?t=void 0:c(t)&&(t=t[l],null===t&&(t=void 0))),void 0===t?Array:t}},"107c":function(e,t,r){var n=r("d039"),a=r("da84"),c=a.RegExp;e.exports=n((function(){var e=c("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,r){var n=r("825a"),a=r("1626"),c=r("c6b6"),o=r("9263");e.exports=function(e,t){var r=e.exec;if(a(r)){var l=r.call(e,t);return null!==l&&n(l),l}if("RegExp"===c(e))return o.call(e,t);throw TypeError("RegExp#exec called on incompatible receiver")}},"1dde":function(e,t,r){var n=r("d039"),a=r("b622"),c=r("2d00"),o=a("species");e.exports=function(e){return c>=51||!n((function(){var t=[],r=t.constructor={};return r[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"466d":function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),c=r("50c4"),o=r("577e"),l=r("1d80"),s=r("dc4a"),i=r("8aa5"),d=r("14c3");n("match",(function(e,t,r){return[function(t){var r=l(this),n=void 0==t?void 0:s(t,e);return n?n.call(t,r):new RegExp(t)[e](o(r))},function(e){var n=a(this),l=o(e),s=r(t,n,l);if(s.done)return s.value;if(!n.global)return d(n,l);var u=n.unicode;n.lastIndex=0;var m,b=[],v=0;while(null!==(m=d(n,l))){var f=o(m[0]);b[v]=f,""===f&&(n.lastIndex=i(l,c(n.lastIndex),u)),v++}return 0===v?null:b}]}))},"4db7":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a=Object(n["createElementVNode"])("div",{class:"row"},[Object(n["createElementVNode"])("div",{class:"col-12"},[Object(n["createElementVNode"])("div",{class:"alert alert-primary"},[Object(n["createElementVNode"])("h5",null,"Subs Overtime Request")])])],-1),c={class:"row"},o={class:"col-12"},l={class:"card"},s={class:"card-header"},i=Object(n["createElementVNode"])("h3",{class:"card-title"},"Overtime subs",-1),d={class:"card-tools"},u={class:"input-group input-group-sm",style:{width:"150px"}},m={class:"card-body p-0"},b={class:"table table-sm table-striped text-center"},v=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th",{class:"text-left"},"ID"),Object(n["createElementVNode"])("th",null,"First name"),Object(n["createElementVNode"])("th",null,"Last name"),Object(n["createElementVNode"])("th",null,"Date"),Object(n["createElementVNode"])("th",null,"From"),Object(n["createElementVNode"])("th",null,"To"),Object(n["createElementVNode"])("th",null,"Reason"),Object(n["createElementVNode"])("th",null,"Status"),Object(n["createElementVNode"])("th",null,"Created At"),Object(n["createElementVNode"])("th",null,"Actions")])],-1),f={key:0},p=Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("td",{colspan:"10"},[Object(n["createElementVNode"])("i",{class:"fas fa fa-pulse fa-spinner fa-2x"})])],-1),O=[p],j={key:1},g={class:"text-left"},h={key:0,class:"text-warning fas fa fa-exclamation"},E={key:1,class:"text-success fas fa fa-check"},x={key:2,class:"text-danger fas fa fa-times"},N=["onClick"],V=Object(n["createElementVNode"])("i",{class:"fas fa fa-search"},null,-1),y=[V],w={key:1},k=Object(n["createElementVNode"])("td",{colspan:"10"},"No record to display",-1),R=[k],S={class:"modal fade show",id:"modal-lg","aria-modal":"true",role:"dialog"},B={class:"modal-dialog modal-lg modal-dialog-centered"},D={class:"modal-content"},I={key:0,class:"overlay"},T=Object(n["createElementVNode"])("i",{class:"fas fa-2x fa-spinner fa-spin"},null,-1),A=[T],_={class:"modal-header"},q={class:"modal-title"},C=Object(n["createElementVNode"])("button",{id:"modal-close",type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(n["createElementVNode"])("span",{"aria-hidden":"true"},"×")],-1),L={class:"modal-body"},M={class:"row"},U={class:"form-group col-12"},F=Object(n["createElementVNode"])("label",null,"Date",-1),P={class:"form-group col-6"},J=Object(n["createElementVNode"])("label",null,"From",-1),K={class:"form-group col-6"},Y=Object(n["createElementVNode"])("label",null,"To",-1),$={class:"form-group col-12"},z=Object(n["createElementVNode"])("label",null,"Reason",-1),G={class:"modal-footer"},H=["disabled"],Q=["disabled"];function W(e,t,r,p,V,k){return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[a,Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",s,[i,Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("div",u,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.overtimeSearch=t}),type:"text",name:"table_search",class:"form-control float-right",placeholder:"Search"},null,512),[[n["vModelText"],e.overtimeSearch]])])])]),Object(n["createElementVNode"])("div",m,[Object(n["createElementVNode"])("table",b,[v,e.overtime.isRequestLoading?(Object(n["openBlock"])(),Object(n["createElementBlock"])("tbody",f,O)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("tbody",j,[e.overtimes.length>0?(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],{key:0},Object(n["renderList"])(e.overtimes,(function(t,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:t.id},[Object(n["createElementVNode"])("td",g,Object(n["toDisplayString"])(t.id),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.employee.first_name),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.employee.last_name),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.date),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.from.other),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.to.other),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.reason),1),Object(n["createElementVNode"])("td",null,["Pending"==t.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",h)):Object(n["createCommentVNode"])("",!0),"Approved"==t.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",E)):Object(n["createCommentVNode"])("",!0),"Disapproved"==t.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",x)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.created_at),1),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("button",{"data-toggle":"modal","data-target":"#modal-lg",onClick:function(n){return e.selectThisOvertime(t,r)},class:"btn btn-sm btn-primary"},y,8,N)])])})),128)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",w,R))]))])])])])]),Object(n["createElementVNode"])("div",S,[Object(n["createElementVNode"])("div",B,[Object(n["createElementVNode"])("div",D,[e.overtime.isRequestLoading?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",I,A)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",_,[Object(n["createElementVNode"])("h4",q,"Overtime of "+Object(n["toDisplayString"])(e.selectedOvertime.first_name)+" "+Object(n["toDisplayString"])(e.selectedOvertime.last_name),1),C]),Object(n["createElementVNode"])("div",L,[Object(n["createElementVNode"])("div",M,[Object(n["createElementVNode"])("div",U,[F,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.selectedOvertime.date=t}),type:"text",class:"form-control form-control-sm",disabled:""},null,512),[[n["vModelText"],e.selectedOvertime.date]])]),Object(n["createElementVNode"])("div",P,[J,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.selectedOvertime.from=t}),type:"text",class:"form-control form-control-sm",disabled:""},null,512),[[n["vModelText"],e.selectedOvertime.from]])]),Object(n["createElementVNode"])("div",K,[Y,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.selectedOvertime.to=t}),type:"text",class:"form-control form-control-sm",disabled:""},null,512),[[n["vModelText"],e.selectedOvertime.to]])]),Object(n["createElementVNode"])("div",$,[z,Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.selectedOvertime.reason=t}),disabled:"",cols:"30",rows:"10",class:"form-control form-control-sm"},null,512),[[n["vModelText"],e.selectedOvertime.reason]])])])]),Object(n["createElementVNode"])("div",G,[Object(n["createElementVNode"])("button",{onClick:t[5]||(t[5]=function(t){return e.approveThisRequest(e.selectedOvertime.id)}),disabled:"Approved"==e.selectedOvertime.status,class:"btn btn-success btn-block"},"Approve",8,H),Object(n["createElementVNode"])("button",{onClick:t[6]||(t[6]=function(t){return e.disapproveThisRequest(e.selectedOvertime.id)}),disabled:"Disapproved"==e.selectedOvertime.status,class:"btn btn-danger btn-block"},"Disapprove",8,Q)])])])])],64)}var X=r("1da1"),Z=(r("96cf"),r("4de4"),r("ac1f"),r("466d"),r("a434"),r("5a15")),ee=r("be92"),te=Object(ee["b"])({id:"supervisor_overtime",state:function(){return{overtimes:[],isRequestLoading:!1}},getters:{getSubsOvertimes:function(){return this.overtimes}},actions:{loadSubsOvertime:function(){var e=this;return Object(X["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.overtimes.length){t.next=14;break}return t.prev=1,e.isRequestLoading=!0,t.next=5,Z["a"].get("/api/sv/overtimes");case 5:r=t.sent,e.overtimes=r.data.data,e.isRequestLoading=!1,t.next=14;break;case 10:throw t.prev=10,t.t0=t["catch"](1),e.isRequestLoading=!1,new Error;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},approveSelectedOvertime:function(e,t){var r=this;return Object(X["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,r.isRequestLoading=!0,n.next=4,Z["a"].patch("/api/sv/overtimes/".concat(e,"/approved"));case 4:a=n.sent,r.overtimes.splice(t,1,a.data.data),r.isRequestLoading=!1,n.next=13;break;case 9:throw n.prev=9,n.t0=n["catch"](0),r.isRequestLoading=!1,new Error;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))()},disapproveSelectedOvertime:function(e,t){var r=this;return Object(X["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,r.isRequestLoading=!0,n.next=4,Z["a"].patch("/api/sv/overtimes/".concat(e,"/disapproved"));case 4:a=n.sent,r.overtimes.splice(t,1,a.data.data),r.isRequestLoading=!1,n.next=13;break;case 9:throw n.prev=9,n.t0=n["catch"](0),r.isRequestLoading=!1,new Error;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))()}}}),re=Object(n["defineComponent"])({setup:function(){var e=te(),t=Object(n["ref"])(""),r=Object(n["computed"])((function(){return e.getSubsOvertimes.filter((function(e){return e.employee.last_name.toLowerCase().match(t.value)}))})),a=Object(n["ref"])(0),c=Object(n["ref"])({id:0,first_name:"",last_name:"",date:"",from:"",to:"",reason:"",status:""});Object(n["onBeforeMount"])(Object(X["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadSubsOvertime();case 2:case"end":return t.stop()}}),t)}))));var o=function(e,t){c.value.id=e.id,c.value.first_name=e.employee.first_name,c.value.last_name=e.employee.last_name,c.value.date=e.date,c.value.from=e.from.standard,c.value.to=e.to.standard,c.value.reason=e.reason,c.value.status=e.status,a.value=t},l=function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.approveSelectedOvertime(r,a.value);case 2:null===(n=document.getElementById("modal-close"))||void 0===n||n.click();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.disapproveSelectedOvertime(r,a.value);case 2:null===(n=document.getElementById("modal-close"))||void 0===n||n.click();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{overtime:e,overtimes:r,selectedOvertime:c,overtimeSearch:t,selectThisOvertime:o,approveThisRequest:l,disapproveThisRequest:s}}}),ne=r("6b0d"),ae=r.n(ne);const ce=ae()(re,[["render",W]]);t["default"]=ce},"4de4":function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").filter,c=r("1dde"),o=c("filter");n({target:"Array",proto:!0,forced:!o},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(e,t,r){var n=r("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},8418:function(e,t,r){"use strict";var n=r("a04b"),a=r("9bf2"),c=r("5c6c");e.exports=function(e,t,r){var o=n(t);o in e?a.f(e,o,c(0,r)):e[o]=r}},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("577e"),a=r("ad6d"),c=r("9f7f"),o=r("5692"),l=r("7c73"),s=r("69f3").get,i=r("fce3"),d=r("107c"),u=RegExp.prototype.exec,m=o("native-string-replace",String.prototype.replace),b=u,v=function(){var e=/a/,t=/b*/g;return u.call(e,"a"),u.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),f=c.UNSUPPORTED_Y||c.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],O=v||p||f||i||d;O&&(b=function(e){var t,r,c,o,i,d,O,j=this,g=s(j),h=n(e),E=g.raw;if(E)return E.lastIndex=j.lastIndex,t=b.call(E,h),j.lastIndex=E.lastIndex,t;var x=g.groups,N=f&&j.sticky,V=a.call(j),y=j.source,w=0,k=h;if(N&&(V=V.replace("y",""),-1===V.indexOf("g")&&(V+="g"),k=h.slice(j.lastIndex),j.lastIndex>0&&(!j.multiline||j.multiline&&"\n"!==h.charAt(j.lastIndex-1))&&(y="(?: "+y+")",k=" "+k,w++),r=new RegExp("^(?:"+y+")",V)),p&&(r=new RegExp("^"+y+"$(?!\\s)",V)),v&&(c=j.lastIndex),o=u.call(N?r:j,k),N?o?(o.input=o.input.slice(w),o[0]=o[0].slice(w),o.index=j.lastIndex,j.lastIndex+=o[0].length):j.lastIndex=0:v&&o&&(j.lastIndex=j.global?o.index+o[0].length:c),p&&o&&o.length>1&&m.call(o[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&x)for(o.groups=d=l(null),i=0;i<x.length;i++)O=x[i],d[O[0]]=o[O[1]];return o}),e.exports=b},"9f7f":function(e,t,r){var n=r("d039"),a=r("da84"),c=a.RegExp;t.UNSUPPORTED_Y=n((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a434:function(e,t,r){"use strict";var n=r("23e7"),a=r("23cb"),c=r("a691"),o=r("50c4"),l=r("7b0b"),s=r("65f0"),i=r("8418"),d=r("1dde"),u=d("splice"),m=Math.max,b=Math.min,v=9007199254740991,f="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var r,n,d,u,p,O,j=l(this),g=o(j.length),h=a(e,g),E=arguments.length;if(0===E?r=n=0:1===E?(r=0,n=g-h):(r=E-2,n=b(m(c(t),0),g-h)),g+r-n>v)throw TypeError(f);for(d=s(j,n),u=0;u<n;u++)p=h+u,p in j&&i(d,u,j[p]);if(d.length=n,r<n){for(u=h;u<g-n;u++)p=u+n,O=u+r,p in j?j[O]=j[p]:delete j[O];for(u=g;u>g-n+r;u--)delete j[u-1]}else if(r>n)for(u=g-n;u>h;u--)p=u+n-1,O=u+r-1,p in j?j[O]=j[p]:delete j[O];for(u=0;u<r;u++)j[u+h]=arguments[u+2];return j.length=g-n+r,d}})},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b727:function(e,t,r){var n=r("0366"),a=r("44ad"),c=r("7b0b"),o=r("50c4"),l=r("65f0"),s=[].push,i=function(e){var t=1==e,r=2==e,i=3==e,d=4==e,u=6==e,m=7==e,b=5==e||u;return function(v,f,p,O){for(var j,g,h=c(v),E=a(h),x=n(f,p,3),N=o(E.length),V=0,y=O||l,w=t?y(v,N):r||m?y(v,0):void 0;N>V;V++)if((b||V in E)&&(j=E[V],g=x(j,V,h),e))if(t)w[V]=g;else if(g)switch(e){case 3:return!0;case 5:return j;case 6:return V;case 2:s.call(w,j)}else switch(e){case 4:return!1;case 7:s.call(w,j)}return u?-1:i||d?d:w}};e.exports={forEach:i(0),map:i(1),filter:i(2),some:i(3),every:i(4),find:i(5),findIndex:i(6),filterReject:i(7)}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("9263"),c=r("d039"),o=r("b622"),l=r("9112"),s=o("species"),i=RegExp.prototype;e.exports=function(e,t,r,d){var u=o(e),m=!c((function(){var t={};return t[u]=function(){return 7},7!=""[e](t)})),b=m&&!c((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[u]=/./[u]),r.exec=function(){return t=!0,null},r[u](""),!t}));if(!m||!b||r){var v=/./[u],f=t(u,""[e],(function(e,t,r,n,c){var o=t.exec;return o===a||o===i.exec?m&&!c?{done:!0,value:v.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}));n(String.prototype,e,f[0]),n(i,u,f[1])}d&&l(i[u],"sham",!0)}},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},fce3:function(e,t,r){var n=r("d039"),a=r("da84"),c=a.RegExp;e.exports=n((function(){var e=c(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=sv-subs-overtimes'.44f17cb9.js.map