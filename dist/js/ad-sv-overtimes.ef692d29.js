(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ad-sv-overtimes"],{"0b42":function(e,t,r){var n=r("e8b5"),a=r("68ee"),c=r("861d"),o=r("b622"),l=o("species");e.exports=function(e){var t;return n(e)&&(t=e.constructor,a(t)&&(t===Array||n(t.prototype))?t=void 0:c(t)&&(t=t[l],null===t&&(t=void 0))),void 0===t?Array:t}},1956:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a=Object(n["createElementVNode"])("div",{class:"row"},[Object(n["createElementVNode"])("div",{class:"col-12"},[Object(n["createElementVNode"])("div",{class:"alert alert-primary"},[Object(n["createElementVNode"])("h5",null,"Testing")])])],-1),c={class:"row"},o={class:"col-12"},l={class:"card"},s=Object(n["createElementVNode"])("div",{class:"card-header"},[Object(n["createElementVNode"])("h3",{class:"card-title"},"Overtime subs")],-1),i={class:"card-body p-0"},d={class:"table table-sm table-striped text-center"},m=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th",{class:"text-left"},"ID"),Object(n["createElementVNode"])("th",null,"First name"),Object(n["createElementVNode"])("th",null,"Last name"),Object(n["createElementVNode"])("th",null,"Date"),Object(n["createElementVNode"])("th",null,"From"),Object(n["createElementVNode"])("th",null,"To"),Object(n["createElementVNode"])("th",null,"Reason"),Object(n["createElementVNode"])("th",null,"Status"),Object(n["createElementVNode"])("th",null,"Created At"),Object(n["createElementVNode"])("th",null,"Actions")])],-1),u={key:0},b=Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("td",{colspan:"10"},[Object(n["createElementVNode"])("i",{class:"fas fa fa-pulse fa-spinner fa-2x"})])],-1),O=[b],v={key:1},p={class:"text-left"},f={key:0,class:"text-warning fas fa fa-exclamation"},j={key:1,class:"text-success fas fa fa-check"},E={key:2,class:"text-danger fas fa fa-times"},V=["onClick"],N=Object(n["createElementVNode"])("i",{class:"fas fa fa-search"},null,-1),h=[N],g={class:"modal fade show",id:"modal-lg","aria-modal":"true",role:"dialog"},y={class:"modal-dialog modal-lg modal-dialog-centered"},k={class:"modal-content"},x={key:0,class:"overlay"},w=Object(n["createElementVNode"])("i",{class:"fas fa-2x fa-spinner fa-spin"},null,-1),R=[w],B={class:"modal-header"},D={class:"modal-title"},S=Object(n["createElementVNode"])("button",{id:"modal-close",type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(n["createElementVNode"])("span",{"aria-hidden":"true"},"×")],-1),A={class:"modal-body"},T={class:"row"},_={class:"form-group col-12"},q=Object(n["createElementVNode"])("label",null,"Date",-1),C={class:"form-group col-6"},M=Object(n["createElementVNode"])("label",null,"From",-1),L={class:"form-group col-6"},F=Object(n["createElementVNode"])("label",null,"To",-1),U={class:"form-group col-12"},I=Object(n["createElementVNode"])("label",null,"Reason",-1),J={class:"modal-footer"},K=["disabled"],P=["disabled"];function z(e,t,r,b,N,w){return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[a,Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",l,[s,Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("table",d,[m,e.overtime.isRequestLoading?(Object(n["openBlock"])(),Object(n["createElementBlock"])("tbody",u,O)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("tbody",v,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.overtimes,(function(t,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:t.id},[Object(n["createElementVNode"])("td",p,Object(n["toDisplayString"])(t.id),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.employee.first_name),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.employee.last_name),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.date),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.from.other),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.to.other),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.reason),1),Object(n["createElementVNode"])("td",null,["Pending"==t.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",f)):Object(n["createCommentVNode"])("",!0),"Approved"==t.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",j)):Object(n["createCommentVNode"])("",!0),"Disapproved"==t.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",E)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.created_at),1),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("button",{"data-toggle":"modal","data-target":"#modal-lg",onClick:function(n){return e.selectThisOvertime(t,r)},class:"btn btn-sm btn-primary"},h,8,V)])])})),128))]))])])])])]),Object(n["createElementVNode"])("div",g,[Object(n["createElementVNode"])("div",y,[Object(n["createElementVNode"])("div",k,[e.overtime.isRequestLoading?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",x,R)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",B,[Object(n["createElementVNode"])("h4",D,"Overtime of "+Object(n["toDisplayString"])(e.selectedOvertime.first_name)+" "+Object(n["toDisplayString"])(e.selectedOvertime.last_name),1),S]),Object(n["createElementVNode"])("div",A,[Object(n["createElementVNode"])("div",T,[Object(n["createElementVNode"])("div",_,[q,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.selectedOvertime.date=t}),type:"text",class:"form-control form-control-sm",disabled:""},null,512),[[n["vModelText"],e.selectedOvertime.date]])]),Object(n["createElementVNode"])("div",C,[M,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.selectedOvertime.from=t}),type:"text",class:"form-control form-control-sm",disabled:""},null,512),[[n["vModelText"],e.selectedOvertime.from]])]),Object(n["createElementVNode"])("div",L,[F,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.selectedOvertime.to=t}),type:"text",class:"form-control form-control-sm",disabled:""},null,512),[[n["vModelText"],e.selectedOvertime.to]])]),Object(n["createElementVNode"])("div",U,[I,Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.selectedOvertime.reason=t}),disabled:"",cols:"30",rows:"10",class:"form-control form-control-sm"},null,512),[[n["vModelText"],e.selectedOvertime.reason]])])])]),Object(n["createElementVNode"])("div",J,[Object(n["createElementVNode"])("button",{onClick:t[4]||(t[4]=function(t){return e.approveThisRequest(e.selectedOvertime.id)}),disabled:"Approved"==e.selectedOvertime.status,class:"btn btn-success btn-block"},"Approve",8,K),Object(n["createElementVNode"])("button",{onClick:t[5]||(t[5]=function(t){return e.disapproveThisRequest(e.selectedOvertime.id)}),disabled:"Disapproved"==e.selectedOvertime.status,class:"btn btn-danger btn-block"},"Disapprove",8,P)])])])])],64)}var G=r("1da1"),H=(r("96cf"),r("a434"),r("5a15")),Q=r("be92"),W=Object(Q["b"])({id:"admin_supervisor_overtime",state:function(){return{overtimes:[],isRequestLoading:!1}},getters:{getAllOvertimeRequest:function(){return this.overtimes}},actions:{loadAllSupervisorOvertime:function(){var e=this;return Object(G["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.overtimes.length){t.next=7;break}return e.isRequestLoading=!0,t.next=4,H["a"].get("/api/admin/overtimes/getSupervisor");case 4:r=t.sent,e.overtimes=r.data.data,e.isRequestLoading=!1;case 7:case"end":return t.stop()}}),t)})))()},approveSelectedOvertime:function(e,t){var r=this;return Object(G["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,H["a"].patch("/api/overtimes/".concat(e,"/approveOvertime"));case 2:a=n.sent,r.overtimes.splice(t,1,a.data);case 4:case"end":return n.stop()}}),n)})))()},disapproveSelectedOvertime:function(e,t){var r=this;return Object(G["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,H["a"].patch("/api/overtimes/".concat(e,"/disapproveOvertime"));case 2:a=n.sent,r.overtimes.splice(t,1,a.data);case 4:case"end":return n.stop()}}),n)})))()}}}),X=Object(n["defineComponent"])({setup:function(){var e=W(),t=Object(n["computed"])((function(){return e.getAllOvertimeRequest})),r=Object(n["ref"])(0),a=Object(n["ref"])({id:0,first_name:"",last_name:"",date:"",from:"",to:"",reason:"",status:""}),c=function(e,t){a.value.id=e.id,a.value.first_name=e.employee.first_name,a.value.last_name=e.employee.last_name,a.value.date=e.date,a.value.from=e.from.standard,a.value.to=e.to.standard,a.value.reason=e.reason,a.value.status=e.status,r.value=t},o=function(){var t=Object(G["a"])(regeneratorRuntime.mark((function t(n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.approveSelectedOvertime(n,r.value);case 2:null===(a=document.getElementById("modal-close"))||void 0===a||a.click();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(G["a"])(regeneratorRuntime.mark((function t(n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.disapproveSelectedOvertime(n,r.value);case 2:null===(a=document.getElementById("modal-close"))||void 0===a||a.click();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n["onBeforeMount"])(Object(G["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadAllSupervisorOvertime();case 2:case"end":return t.stop()}}),t)})))),{overtime:e,overtimes:t,selectedKey:r,selectedOvertime:a,selectThisOvertime:c,approveThisRequest:o,disapproveThisRequest:l}}}),Y=r("6b0d"),Z=r.n(Y);const $=Z()(X,[["render",z]]);t["default"]=$},"1dde":function(e,t,r){var n=r("d039"),a=r("b622"),c=r("2d00"),o=a("species");e.exports=function(e){return c>=51||!n((function(){var t=[],r=t.constructor={};return r[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,r){var n=r("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},8418:function(e,t,r){"use strict";var n=r("a04b"),a=r("9bf2"),c=r("5c6c");e.exports=function(e,t,r){var o=n(t);o in e?a.f(e,o,c(0,r)):e[o]=r}},a434:function(e,t,r){"use strict";var n=r("23e7"),a=r("23cb"),c=r("a691"),o=r("50c4"),l=r("7b0b"),s=r("65f0"),i=r("8418"),d=r("1dde"),m=d("splice"),u=Math.max,b=Math.min,O=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var r,n,d,m,p,f,j=l(this),E=o(j.length),V=a(e,E),N=arguments.length;if(0===N?r=n=0:1===N?(r=0,n=E-V):(r=N-2,n=b(u(c(t),0),E-V)),E+r-n>O)throw TypeError(v);for(d=s(j,n),m=0;m<n;m++)p=V+m,p in j&&i(d,m,j[p]);if(d.length=n,r<n){for(m=V;m<E-n;m++)p=m+n,f=m+r,p in j?j[f]=j[p]:delete j[f];for(m=E;m>E-n+r;m--)delete j[m-1]}else if(r>n)for(m=E-n;m>V;m--)p=m+n-1,f=m+r-1,p in j?j[f]=j[p]:delete j[f];for(m=0;m<r;m++)j[m+V]=arguments[m+2];return j.length=E-n+r,d}})},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=ad-sv-overtimes.ef692d29.js.map