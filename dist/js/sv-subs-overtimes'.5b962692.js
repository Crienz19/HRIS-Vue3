(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sv-subs-overtimes'"],{"0b42":function(e,t,r){var a=r("e8b5"),n=r("68ee"),c=r("861d"),o=r("b622"),l=o("species");e.exports=function(e){var t;return a(e)&&(t=e.constructor,n(t)&&(t===Array||a(t.prototype))?t=void 0:c(t)&&(t=t[l],null===t&&(t=void 0))),void 0===t?Array:t}},"1dde":function(e,t,r){var a=r("d039"),n=r("b622"),c=r("2d00"),o=n("species");e.exports=function(e){return c>=51||!a((function(){var t=[],r=t.constructor={};return r[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"4db7":function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n=Object(a["createElementVNode"])("div",{class:"row"},[Object(a["createElementVNode"])("div",{class:"col-12"},[Object(a["createElementVNode"])("div",{class:"alert alert-primary"},[Object(a["createElementVNode"])("h5",null,"Testing")])])],-1),c={class:"row"},o={class:"col-12"},l={class:"card"},s=Object(a["createElementVNode"])("div",{class:"card-header"},[Object(a["createElementVNode"])("h3",{class:"card-title"},"Overtime subs")],-1),i={class:"card-body p-0"},d={class:"table table-sm table-striped text-center"},u=Object(a["createElementVNode"])("thead",null,[Object(a["createElementVNode"])("tr",null,[Object(a["createElementVNode"])("th",{class:"text-left"},"ID"),Object(a["createElementVNode"])("th",null,"First name"),Object(a["createElementVNode"])("th",null,"Last name"),Object(a["createElementVNode"])("th",null,"Date"),Object(a["createElementVNode"])("th",null,"From"),Object(a["createElementVNode"])("th",null,"To"),Object(a["createElementVNode"])("th",null,"Reason"),Object(a["createElementVNode"])("th",null,"Status"),Object(a["createElementVNode"])("th",null,"Created At"),Object(a["createElementVNode"])("th",null,"Actions")])],-1),m={key:0},b=Object(a["createElementVNode"])("tr",null,[Object(a["createElementVNode"])("td",{colspan:"10"},[Object(a["createElementVNode"])("i",{class:"fas fa fa-pulse fa-spinner fa-2x"})])],-1),v=[b],O={key:1},p={class:"text-left"},f={key:0,class:"text-warning fas fa fa-exclamation"},j={key:1,class:"text-success fas fa fa-check"},E={key:2,class:"text-danger fas fa fa-times"},V=["onClick"],h=Object(a["createElementVNode"])("i",{class:"fas fa fa-search"},null,-1),g=[h],N={class:"modal fade show",id:"modal-lg","aria-modal":"true",role:"dialog"},k={class:"modal-dialog modal-lg modal-dialog-centered"},y={class:"modal-content"},w={key:0,class:"overlay"},x=Object(a["createElementVNode"])("i",{class:"fas fa-2x fa-spinner fa-spin"},null,-1),R=[x],B={class:"modal-header"},D={class:"modal-title"},S=Object(a["createElementVNode"])("button",{id:"modal-close",type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(a["createElementVNode"])("span",{"aria-hidden":"true"},"×")],-1),q={class:"modal-body"},L={class:"row"},T={class:"form-group col-12"},_=Object(a["createElementVNode"])("label",null,"Date",-1),A={class:"form-group col-6"},C=Object(a["createElementVNode"])("label",null,"From",-1),M={class:"form-group col-6"},F=Object(a["createElementVNode"])("label",null,"To",-1),U={class:"form-group col-12"},I=Object(a["createElementVNode"])("label",null,"Reason",-1),J={class:"modal-footer"},P=["disabled"],z=["disabled"];function G(e,t,r,b,h,x){return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[n,Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",l,[s,Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("table",d,[u,e.overtime.isRequestLoading?(Object(a["openBlock"])(),Object(a["createElementBlock"])("tbody",m,v)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("tbody",O,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.overtimes,(function(t,r){return Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",{key:t.id},[Object(a["createElementVNode"])("td",p,Object(a["toDisplayString"])(t.id),1),Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(t.employee.first_name),1),Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(t.employee.last_name),1),Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(t.date),1),Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(t.from.other),1),Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(t.to.other),1),Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(t.reason),1),Object(a["createElementVNode"])("td",null,["Pending"==t.status?(Object(a["openBlock"])(),Object(a["createElementBlock"])("i",f)):Object(a["createCommentVNode"])("",!0),"Approved"==t.status?(Object(a["openBlock"])(),Object(a["createElementBlock"])("i",j)):Object(a["createCommentVNode"])("",!0),"Disapproved"==t.status?(Object(a["openBlock"])(),Object(a["createElementBlock"])("i",E)):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(t.created_at),1),Object(a["createElementVNode"])("td",null,[Object(a["createElementVNode"])("button",{"data-toggle":"modal","data-target":"#modal-lg",onClick:function(a){return e.selectThisOvertime(t,r)},class:"btn btn-sm btn-primary"},g,8,V)])])})),128))]))])])])])]),Object(a["createElementVNode"])("div",N,[Object(a["createElementVNode"])("div",k,[Object(a["createElementVNode"])("div",y,[e.overtime.isRequestLoading?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",w,R)):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("div",B,[Object(a["createElementVNode"])("h4",D,"Overtime of "+Object(a["toDisplayString"])(e.selectedOvertime.first_name)+" "+Object(a["toDisplayString"])(e.selectedOvertime.last_name),1),S]),Object(a["createElementVNode"])("div",q,[Object(a["createElementVNode"])("div",L,[Object(a["createElementVNode"])("div",T,[_,Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.selectedOvertime.date=t}),type:"text",class:"form-control form-control-sm",disabled:""},null,512),[[a["vModelText"],e.selectedOvertime.date]])]),Object(a["createElementVNode"])("div",A,[C,Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.selectedOvertime.from=t}),type:"text",class:"form-control form-control-sm",disabled:""},null,512),[[a["vModelText"],e.selectedOvertime.from]])]),Object(a["createElementVNode"])("div",M,[F,Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.selectedOvertime.to=t}),type:"text",class:"form-control form-control-sm",disabled:""},null,512),[[a["vModelText"],e.selectedOvertime.to]])]),Object(a["createElementVNode"])("div",U,[I,Object(a["withDirectives"])(Object(a["createElementVNode"])("textarea",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.selectedOvertime.reason=t}),disabled:"",cols:"30",rows:"10",class:"form-control form-control-sm"},null,512),[[a["vModelText"],e.selectedOvertime.reason]])])])]),Object(a["createElementVNode"])("div",J,[Object(a["createElementVNode"])("button",{onClick:t[4]||(t[4]=function(t){return e.approveThisRequest(e.selectedOvertime.id)}),disabled:"Approved"==e.selectedOvertime.status,class:"btn btn-success btn-block"},"Approve",8,P),Object(a["createElementVNode"])("button",{onClick:t[5]||(t[5]=function(t){return e.disapproveThisRequest(e.selectedOvertime.id)}),disabled:"Disapproved"==e.selectedOvertime.status,class:"btn btn-danger btn-block"},"Disapprove",8,z)])])])])],64)}var H=r("1da1"),K=(r("96cf"),r("a434"),r("5a15")),Q=r("be92"),W=Object(Q["b"])({id:"supervisor_overtime",state:function(){return{overtimes:[],isRequestLoading:!1}},getters:{getSubsOvertimes:function(){return this.overtimes}},actions:{loadSubsOvertime:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.overtimes.length){t.next=14;break}return t.prev=1,e.isRequestLoading=!0,t.next=5,K["a"].get("/api/sv/overtimes");case 5:r=t.sent,e.overtimes=r.data.data,e.isRequestLoading=!1,t.next=14;break;case 10:throw t.prev=10,t.t0=t["catch"](1),e.isRequestLoading=!1,new Error;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},approveSelectedOvertime:function(e,t){var r=this;return Object(H["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,r.isRequestLoading=!0,a.next=4,K["a"].patch("/api/sv/overtimes/".concat(e,"/approved"));case 4:n=a.sent,r.overtimes.splice(t,1,n.data.data),r.isRequestLoading=!1,a.next=13;break;case 9:throw a.prev=9,a.t0=a["catch"](0),r.isRequestLoading=!1,new Error;case 13:case"end":return a.stop()}}),a,null,[[0,9]])})))()},disapproveSelectedOvertime:function(e,t){var r=this;return Object(H["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,r.isRequestLoading=!0,a.next=4,K["a"].patch("/api/sv/overtimes/".concat(e,"/disapproved"));case 4:n=a.sent,r.overtimes.splice(t,1,n.data.data),r.isRequestLoading=!1,a.next=13;break;case 9:throw a.prev=9,a.t0=a["catch"](0),r.isRequestLoading=!1,new Error;case 13:case"end":return a.stop()}}),a,null,[[0,9]])})))()}}}),X=Object(a["defineComponent"])({setup:function(){var e=W(),t=Object(a["computed"])((function(){return e.getSubsOvertimes})),r=Object(a["ref"])(0),n=Object(a["ref"])({id:0,first_name:"",last_name:"",date:"",from:"",to:"",reason:"",status:""});Object(a["onBeforeMount"])(Object(H["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadSubsOvertime();case 2:case"end":return t.stop()}}),t)}))));var c=function(e,t){n.value.id=e.id,n.value.first_name=e.employee.first_name,n.value.last_name=e.employee.last_name,n.value.date=e.date,n.value.from=e.from.standard,n.value.to=e.to.standard,n.value.reason=e.reason,n.value.status=e.status,r.value=t},o=function(){var t=Object(H["a"])(regeneratorRuntime.mark((function t(a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.approveSelectedOvertime(a,r.value);case 2:null===(n=document.getElementById("modal-close"))||void 0===n||n.click();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(H["a"])(regeneratorRuntime.mark((function t(a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.disapproveSelectedOvertime(a,r.value);case 2:null===(n=document.getElementById("modal-close"))||void 0===n||n.click();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{overtime:e,overtimes:t,selectedOvertime:n,selectThisOvertime:c,approveThisRequest:o,disapproveThisRequest:l}}}),Y=r("6b0d"),Z=r.n(Y);const $=Z()(X,[["render",G]]);t["default"]=$},"65f0":function(e,t,r){var a=r("0b42");e.exports=function(e,t){return new(a(e))(0===t?0:t)}},8418:function(e,t,r){"use strict";var a=r("a04b"),n=r("9bf2"),c=r("5c6c");e.exports=function(e,t,r){var o=a(t);o in e?n.f(e,o,c(0,r)):e[o]=r}},a434:function(e,t,r){"use strict";var a=r("23e7"),n=r("23cb"),c=r("a691"),o=r("50c4"),l=r("7b0b"),s=r("65f0"),i=r("8418"),d=r("1dde"),u=d("splice"),m=Math.max,b=Math.min,v=9007199254740991,O="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var r,a,d,u,p,f,j=l(this),E=o(j.length),V=n(e,E),h=arguments.length;if(0===h?r=a=0:1===h?(r=0,a=E-V):(r=h-2,a=b(m(c(t),0),E-V)),E+r-a>v)throw TypeError(O);for(d=s(j,a),u=0;u<a;u++)p=V+u,p in j&&i(d,u,j[p]);if(d.length=a,r<a){for(u=V;u<E-a;u++)p=u+a,f=u+r,p in j?j[f]=j[p]:delete j[f];for(u=E;u>E-a+r;u--)delete j[u-1]}else if(r>a)for(u=E-a;u>V;u--)p=u+a-1,f=u+r-1,p in j?j[f]=j[p]:delete j[f];for(u=0;u<r;u++)j[u+V]=arguments[u+2];return j.length=E-a+r,d}})},e8b5:function(e,t,r){var a=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}}}]);
//# sourceMappingURL=sv-subs-overtimes'.5b962692.js.map