(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hr-leaves"],{"0b42":function(e,t,a){var c=a("e8b5"),n=a("68ee"),l=a("861d"),o=a("b622"),r=o("species");e.exports=function(e){var t;return c(e)&&(t=e.constructor,n(t)&&(t===Array||c(t.prototype))?t=void 0:l(t)&&(t=t[r],null===t&&(t=void 0))),void 0===t?Array:t}},"1dde":function(e,t,a){var c=a("d039"),n=a("b622"),l=a("2d00"),o=n("species");e.exports=function(e){return l>=51||!c((function(){var t=[],a=t.constructor={};return a[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,a){var c=a("0b42");e.exports=function(e,t){return new(c(e))(0===t?0:t)}},8418:function(e,t,a){"use strict";var c=a("a04b"),n=a("9bf2"),l=a("5c6c");e.exports=function(e,t,a){var o=c(t);o in e?n.f(e,o,l(0,a)):e[o]=a}},a434:function(e,t,a){"use strict";var c=a("23e7"),n=a("23cb"),l=a("a691"),o=a("50c4"),r=a("7b0b"),s=a("65f0"),d=a("8418"),i=a("1dde"),m=i("splice"),u=Math.max,p=Math.min,b=9007199254740991,v="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var a,c,i,m,f,j,O=r(this),E=o(O.length),V=n(e,E),N=arguments.length;if(0===N?a=c=0:1===N?(a=0,c=E-V):(a=N-2,c=p(u(l(t),0),E-V)),E+a-c>b)throw TypeError(v);for(i=s(O,c),m=0;m<c;m++)f=V+m,f in O&&d(i,m,O[f]);if(i.length=c,a<c){for(m=V;m<E-c;m++)f=m+c,j=m+a,f in O?O[j]=O[f]:delete O[j];for(m=E;m>E-c+a;m--)delete O[m-1]}else if(a>c)for(m=E-c;m>V;m--)f=m+c-1,j=m+a-1,f in O?O[j]=O[f]:delete O[j];for(m=0;m<a;m++)O[m+V]=arguments[m+2];return O.length=E-c+a,i}})},a8a1:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),n=Object(c["createElementVNode"])("div",{class:"row"},[Object(c["createElementVNode"])("div",{class:"col-12"},[Object(c["createElementVNode"])("div",{class:"alert alert-primary"},[Object(c["createElementVNode"])("h5",null,"Testing")])])],-1),l={class:"row"},o={class:"col-12"},r={class:"card"},s=Object(c["createElementVNode"])("div",{class:"card-header"},[Object(c["createElementVNode"])("h3",{class:"card-title"},"Leave Subs")],-1),d={class:"card-body p-0"},i={class:"table table-sm table-striped text-center"},m=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th",{class:"text-left"},"ID"),Object(c["createElementVNode"])("th",null,"First name"),Object(c["createElementVNode"])("th",null,"Last name"),Object(c["createElementVNode"])("th",null,"Type"),Object(c["createElementVNode"])("th",null,"Pay"),Object(c["createElementVNode"])("th",null,"From"),Object(c["createElementVNode"])("th",null,"To"),Object(c["createElementVNode"])("th",null,"Recommending Approval"),Object(c["createElementVNode"])("th",null,"Final Approval"),Object(c["createElementVNode"])("th",null,"Created At"),Object(c["createElementVNode"])("th",null,"Actions")])],-1),u={key:0},p=Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("td",{colspan:"11"},[Object(c["createElementVNode"])("i",{class:"fas fa fa-pulse fa-spinner fa-2x"})])],-1),b=[p],v={key:1},f={class:"text-left"},j={key:0,class:"text-warning fas fa fa-exclamation"},O={key:1,class:"text-success fas fa fa-check"},E={key:2,class:"text-danger fas fa fa-times"},V={key:0,class:"text-warning fas fa fa-exclamation"},N={key:1,class:"text-success fas fa fa-check"},g={key:2,class:"text-danger fas fa fa-times"},y=["onClick"],h=Object(c["createElementVNode"])("i",{class:"fas fa fa-search"},null,-1),k=[h],x={class:"modal fade show",id:"modal-lg","aria-modal":"true",role:"dialog"},_={class:"modal-dialog modal-lg modal-dialog-centered"},w={class:"modal-content"},L={key:0,class:"overlay"},R=Object(c["createElementVNode"])("i",{class:"fas fa-2x fa-spinner fa-spin"},null,-1),B=[R],D={class:"modal-header"},T={class:"modal-title"},A=Object(c["createElementVNode"])("button",{id:"modal-close",type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["createElementVNode"])("span",{"aria-hidden":"true"},"×")],-1),C={class:"modal-body"},q={class:"row"},F={class:"form-group col-md-6"},M=Object(c["createElementVNode"])("label",null,"Type",-1),S={class:"form-group col-md-6"},U=Object(c["createElementVNode"])("label",null,"Pay",-1),P={class:"form-group col-md-6"},I=Object(c["createElementVNode"])("label",null,"From",-1),J={class:"form-group col-md-6"},z=Object(c["createElementVNode"])("label",null,"To",-1),G={key:0,class:"form-group col-6"},H=Object(c["createElementVNode"])("label",null,"Time From",-1),K={key:1,class:"form-group col-6"},Q=Object(c["createElementVNode"])("label",null,"Time To",-1),W={class:"form-group col-12"},X=Object(c["createElementVNode"])("label",null,"Reason",-1),Y={class:"modal-footer"},Z=["disabled"],$=["disabled"];function ee(e,t,a,p,h,R){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[n,Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("div",r,[s,Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("table",i,[m,e.leave.isRequestLoading?(Object(c["openBlock"])(),Object(c["createElementBlock"])("tbody",u,b)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("tbody",v,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.leaves,(function(t,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:t.id},[Object(c["createElementVNode"])("td",f,Object(c["toDisplayString"])(t.id),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(t.employee.first_name),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(t.employee.last_name),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(t.type),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(t.pay_type),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(t.from),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(t.to),1),Object(c["createElementVNode"])("td",null,["Pending"==t.recommending_approval?(Object(c["openBlock"])(),Object(c["createElementBlock"])("i",j)):Object(c["createCommentVNode"])("",!0),"Approved"==t.recommending_approval?(Object(c["openBlock"])(),Object(c["createElementBlock"])("i",O)):Object(c["createCommentVNode"])("",!0),"Disapproved"==t.recommending_approval?(Object(c["openBlock"])(),Object(c["createElementBlock"])("i",E)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("td",null,["Pending"==t.final_approval?(Object(c["openBlock"])(),Object(c["createElementBlock"])("i",V)):Object(c["createCommentVNode"])("",!0),"Approved"==t.final_approval?(Object(c["openBlock"])(),Object(c["createElementBlock"])("i",N)):Object(c["createCommentVNode"])("",!0),"Disapproved"==t.final_approval?(Object(c["openBlock"])(),Object(c["createElementBlock"])("i",g)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(t.created_at),1),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("button",{"data-toggle":"modal","data-target":"#modal-lg",onClick:function(c){return e.selectThisRequest(t,a)},class:"btn btn-sm btn-primary"},k,8,y)])])})),128))]))])])])])]),Object(c["createElementVNode"])("div",x,[Object(c["createElementVNode"])("div",_,[Object(c["createElementVNode"])("div",w,[e.leave.isRequestLoading?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",L,B)):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",D,[Object(c["createElementVNode"])("h4",T,"Leave of "+Object(c["toDisplayString"])(e.selectedLeave.first_name)+" "+Object(c["toDisplayString"])(e.selectedLeave.last_name),1),A]),Object(c["createElementVNode"])("div",C,[Object(c["createElementVNode"])("div",q,[Object(c["createElementVNode"])("div",F,[M,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.selectedLeave.type=t}),type:"text",class:"form-control form-control-sm",disabled:""},null,512),[[c["vModelText"],e.selectedLeave.type]])]),Object(c["createElementVNode"])("div",S,[U,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.selectedLeave.pay_type=t}),type:"text",class:"form-control form-control-sm",disabled:""},null,512),[[c["vModelText"],e.selectedLeave.pay_type]])]),Object(c["createElementVNode"])("div",P,[I,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.selectedLeave.from=t}),type:"text",class:"form-control form-control-sm",disabled:""},null,512),[[c["vModelText"],e.selectedLeave.from]])]),Object(c["createElementVNode"])("div",J,[z,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.selectedLeave.to=t}),type:"text",class:"form-control form-control-sm",disabled:""},null,512),[[c["vModelText"],e.selectedLeave.to]])]),e.selectedLeave.time_from?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",G,[H,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.selectedLeave.time_from=t}),type:"text",class:"form-control form-control-sm",disabled:""},null,512),[[c["vModelText"],e.selectedLeave.time_from]])])):Object(c["createCommentVNode"])("",!0),e.selectedLeave.time_to?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",K,[Q,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.selectedLeave.time_to=t}),type:"text",class:"form-control form-control-sm",disabled:""},null,512),[[c["vModelText"],e.selectedLeave.time_to]])])):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",W,[X,Object(c["withDirectives"])(Object(c["createElementVNode"])("textarea",{"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.selectedLeave.reason=t}),disabled:"",cols:"30",rows:"10",class:"form-control form-control-sm"},null,512),[[c["vModelText"],e.selectedLeave.reason]])])])]),Object(c["createElementVNode"])("div",Y,[Object(c["createElementVNode"])("button",{onClick:t[7]||(t[7]=function(t){return e.approveThisRequest(e.selectedLeave.id)}),disabled:"Approved"==e.selectedLeave.final_approval,class:"btn btn-success btn-block"},"Approve",8,Z),Object(c["createElementVNode"])("button",{onClick:t[8]||(t[8]=function(t){return e.disapproveThisRequest(e.selectedLeave.id)}),disabled:"Disapproved"==e.selectedLeave.final_approval,class:"btn btn-danger btn-block"},"Disapprove",8,$)])])])])],64)}var te=a("1da1"),ae=(a("96cf"),a("a434"),a("5a15")),ce=a("be92"),ne=Object(ce["b"])({id:"hr_leaves",state:function(){return{leaves:[],isRequestLoading:!1}},getters:{getRecommendedLeaves:function(){return this.leaves}},actions:{loadRecommendedLeaves:function(){var e=this;return Object(te["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.leaves.length){t.next=7;break}return e.isRequestLoading=!0,t.next=4,ae["a"].get("/api/hr/leaves");case 4:a=t.sent,e.leaves=a.data.data,e.isRequestLoading=!1;case 7:case"end":return t.stop()}}),t)})))()},approveFinalApproval:function(e,t){var a=this;return Object(te["a"])(regeneratorRuntime.mark((function c(){var n;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return a.isRequestLoading=!0,c.next=3,ae["a"].patch("/api/hr/leaves/".concat(e,"/approved"));case 3:n=c.sent,a.leaves.splice(t,1,n.data.data),a.isRequestLoading=!1;case 6:case"end":return c.stop()}}),c)})))()},disapproveFinalApproval:function(e,t){var a=this;return Object(te["a"])(regeneratorRuntime.mark((function c(){var n;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return a.isRequestLoading=!0,c.next=3,ae["a"].patch("/api/hr/leaves/".concat(e,"/disapproved"));case 3:n=c.sent,a.leaves.splice(t,1,n.data.data),a.isRequestLoading=!1;case 6:case"end":return c.stop()}}),c)})))()}}}),le=Object(c["defineComponent"])({setup:function(){var e=ne(),t=Object(c["computed"])((function(){return e.getRecommendedLeaves})),a=Object(c["ref"])(0),n=Object(c["ref"])({id:0,first_name:"",last_name:"",type:"",pay_type:"",from:"",to:"",time_from:"",time_to:"",reason:"",recommending_approval:"",final_approval:""}),l=function(e,t){n.value.id=e.id,n.value.first_name=e.employee.first_name,n.value.last_name=e.employee.last_name,n.value.type=e.type,n.value.pay_type=e.pay_type,n.value.from=e.from,n.value.to=e.to,n.value.time_from=e.time_from,n.value.time_to=e.time_to,n.value.reason=e.reason,n.value.recommending_approval=e.recommending_approval,n.value.final_approval=e.final_approval,a.value=t},o=function(){var t=Object(te["a"])(regeneratorRuntime.mark((function t(c){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.approveFinalApproval(c,a.value);case 2:null===(n=document.getElementById("modal-close"))||void 0===n||n.click();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r=function(){var t=Object(te["a"])(regeneratorRuntime.mark((function t(c){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.disapproveFinalApproval(c,a.value);case 2:null===(n=document.getElementById("modal-close"))||void 0===n||n.click();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c["onBeforeMount"])(Object(te["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadRecommendedLeaves();case 2:case"end":return t.stop()}}),t)})))),{leave:e,leaves:t,selectedLeave:n,selectThisRequest:l,approveThisRequest:o,disapproveThisRequest:r}}}),oe=a("6b0d"),re=a.n(oe);const se=re()(le,[["render",ee]]);t["default"]=se},e8b5:function(e,t,a){var c=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==c(e)}}}]);
//# sourceMappingURL=hr-leaves.5aea89e9.js.map