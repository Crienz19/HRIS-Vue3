(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["em-overtimes'~sv-overtimes'"],{"257a":function(e,t,n){"use strict";var r=n("7a23"),c=Object(r["createElementVNode"])("div",{class:"row"},[Object(r["createElementVNode"])("div",{class:"col-12"},[Object(r["createElementVNode"])("div",{class:"alert alert-primary"}," dfjklsdfjl ")])],-1),o={class:"row"},a={class:"col-12"},l={class:"card"},s={class:"card-header"},i=Object(r["createElementVNode"])("h3",{class:"card-title"}," Overtime Requests ",-1),m={class:"card-tools"},u=Object(r["createElementVNode"])("i",{class:"fas fa fa-plus mr-1"},null,-1),d=Object(r["createTextVNode"])(" Create Request"),b=[u,d],f={class:"card-body p-0"},O={class:"table table-striped table-sm table-hover"},j=Object(r["createElementVNode"])("thead",null,[Object(r["createElementVNode"])("tr",{class:"text-center"},[Object(r["createElementVNode"])("th",{class:"text-left"},"Date"),Object(r["createElementVNode"])("th",null,"From"),Object(r["createElementVNode"])("th",null,"To"),Object(r["createElementVNode"])("th",null,"Reason"),Object(r["createElementVNode"])("th",null,"Status"),Object(r["createElementVNode"])("th",null,"Actions")])],-1),p={key:0},v=Object(r["createElementVNode"])("tr",{class:"text-center"},[Object(r["createElementVNode"])("td",{colspan:"10"},[Object(r["createElementVNode"])("i",{class:"fas fa-spinner fa-pulse fa-2x"})])],-1),E=[v],V={key:1},N={class:"text-left"},h={key:0,class:"fas fa fa-exclamation text-warning"},g={key:1,class:"fas fa fa-check text-success"},R={key:2,class:"fas fa fa-times text-danger"},k=["onClick"],w=Object(r["createElementVNode"])("i",{class:"fas fa-search"},null,-1),x=[w],q=["onClick"],y=Object(r["createElementVNode"])("i",{class:"fas fa-times"},null,-1),C=[y],B={key:1};function T(e,t,n,u,d,v){return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[c,Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("div",l,[Object(r["createElementVNode"])("div",s,[i,Object(r["createElementVNode"])("div",m,[Object(r["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(t){return e.EmOvertime.setComponentTo("overtime-create-request-component")}),class:"btn btn-primary btn-sm"},b)])]),Object(r["createElementVNode"])("div",f,[Object(r["createElementVNode"])("table",O,[j,e.EmOvertime.isRequestLoading?(Object(r["openBlock"])(),Object(r["createElementBlock"])("tbody",p,E)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("tbody",V,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.requests,(function(t,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("tr",{class:"text-center",key:t.id},[Object(r["createElementVNode"])("td",N,Object(r["toDisplayString"])(t.date),1),Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(t.from.standard),1),Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(t.to.standard),1),Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(t.reason),1),Object(r["createElementVNode"])("td",null,["Pending"==t.status?(Object(r["openBlock"])(),Object(r["createElementBlock"])("i",h)):Object(r["createCommentVNode"])("",!0),"Approved"==t.status?(Object(r["openBlock"])(),Object(r["createElementBlock"])("i",g)):Object(r["createCommentVNode"])("",!0),"Disapproved"==t.status?(Object(r["openBlock"])(),Object(r["createElementBlock"])("i",R)):Object(r["createCommentVNode"])("",!0)]),Object(r["createElementVNode"])("td",null,["Pending"==t.status?(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:0},[Object(r["createElementVNode"])("button",{onClick:function(n){return e.editRequest(t.id)},class:"btn btn-primary btn-xs mr-1"},x,8,k),Object(r["createElementVNode"])("button",{onClick:function(r){return e.deleteRequest(t.id,n)},class:"btn btn-danger btn-xs mr-1"},C,8,q)],64)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",B,"Not applicable"))])])})),128))]))])])])])])],64)}var D=n("1da1"),S=(n("96cf"),n("a293")),L=n("854a"),M=Object(r["defineComponent"])({setup:function(){return Object(D["a"])(regeneratorRuntime.mark((function e(){var t,n,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(S["a"])(),n=Object(r["computed"])((function(){return t.getAllRequests})),c=function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.setSelectedRequest(n),t.setComponentTo("overtime-show-request-component");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(n,r){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c=confirm("Delete this request?"),!c){e.next=4;break}return e.next=4,t.deleteEmployeeOvertimeRequest(n,r);case 4:L["success"]("Overtime request deleted.");case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),e.abrupt("return",{EmOvertime:t,requests:n,editRequest:c,deleteRequest:o});case 5:case"end":return e.stop()}}),e)})))()}}),F=n("6b0d"),U=n.n(F);const A=U()(M,[["render",T]]);t["a"]=A},"56fb":function(e,t,n){"use strict";var r=n("7a23"),c=Object(r["createElementVNode"])("div",{class:"row"},[Object(r["createElementVNode"])("div",{class:"col-12"},[Object(r["createElementVNode"])("div",{class:"alert alert-primary"}," dfjklsdfjl ")])],-1),o={class:"row"},a={class:"col-12"},l={class:"card"},s={class:"card-header"},i=Object(r["createElementVNode"])("h3",{class:"card-title"},"Edit Overtime",-1),m={class:"card-tools"},u=Object(r["createElementVNode"])("i",{class:"fas fa fa-sign-out-alt"},null,-1),d=Object(r["createTextVNode"])(" Cancel Request "),b=[u,d],f={class:"card-body"},O={class:"row"},j={class:"form-group col-12"},p=Object(r["createElementVNode"])("label",null,"Date",-1),v={class:"form-group col-xs-12 col-md-6"},E=Object(r["createElementVNode"])("label",null,"From",-1),V={class:"form-group col-xs-12 col-md-6"},N=Object(r["createElementVNode"])("label",null,"To",-1),h={class:"form-group col-xs-12 col-12"},g=Object(r["createElementVNode"])("label",null,"Reason",-1),R=Object(r["createElementVNode"])("div",{class:"card-footer"},[Object(r["createElementVNode"])("button",{type:"submit",class:"btn btn-primary btn-sm"},"Submit Request")],-1);function k(e,t,n,u,d,k){return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[c,Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("div",l,[Object(r["createElementVNode"])("div",s,[i,Object(r["createElementVNode"])("div",m,[Object(r["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(t){return e.EmOvertime.setComponentTo("overtime-request-component")}),class:"btn btn-danger btn-sm"},b)])]),Object(r["createElementVNode"])("form",{onSubmit:t[5]||(t[5]=Object(r["withModifiers"])((function(t){return e.updateRequest()}),["prevent"]))},[Object(r["createElementVNode"])("div",f,[Object(r["createElementVNode"])("div",O,[Object(r["createElementVNode"])("div",j,[p,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.date=t}),type:"date",class:"form-control form-control-sm"},null,512),[[r["vModelText"],e.form.date]])]),Object(r["createElementVNode"])("div",v,[E,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.from=t}),type:"time",class:"form-control form-control-sm"},null,512),[[r["vModelText"],e.form.from]])]),Object(r["createElementVNode"])("div",V,[N,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.form.to=t}),type:"time",class:"form-control form-control-sm"},null,512),[[r["vModelText"],e.form.to]])]),Object(r["createElementVNode"])("div",h,[g,Object(r["withDirectives"])(Object(r["createElementVNode"])("textarea",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.form.reason=t}),cols:"30",rows:"10",class:"form-control"},null,512),[[r["vModelText"],e.form.reason]])])])]),R],32)])])])],64)}var w=n("1da1"),x=(n("96cf"),n("a293")),q=n("854a"),y=Object(r["defineComponent"])({setup:function(){var e=Object(x["a"])(),t=Object(r["computed"])((function(){return e.getSelectedRequest})),n=function(){var n=Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.updateEmployeeOvertimeRequest(t.value,null===(r=t.value)||void 0===r?void 0:r.id),n.next=3,e.setComponentTo("overtime-request-component");case 3:q["success"]("Overtime request updated.");case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return{EmOvertime:e,form:t,updateRequest:n}}}),C=n("6b0d"),B=n.n(C);const T=B()(y,[["render",k]]);t["a"]=T},"7db0":function(e,t,n){"use strict";var r=n("23e7"),c=n("b727").find,o=n("44d2"),a="find",l=!0;a in[]&&Array(1)[a]((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{find:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),o(a)},a293:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("1da1"),c=(n("96cf"),n("7db0"),n("a434"),n("be92")),o=n("5a15"),a=Object(c["b"])({id:"employee_overtime",state:function(){return{overtimes:[],selected_id:0,active_component:"overtime-request-component",isRequestLoading:!1}},getters:{getAllRequests:function(){return this.overtimes},getOvertimeCount:function(){return this.overtimes.length},getActiveComponent:function(){return this.active_component},getSelectedRequest:function(){var e=this;return this.overtimes.find((function(t){return t.id==e.selected_id}))}},actions:{loadEmployeeOvertimeRequests:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.overtimes.length){t.next=7;break}return e.isRequestLoading=!0,t.next=4,o["a"].get("/api/em/overtimes");case 4:n=t.sent,e.overtimes=n.data.data,e.isRequestLoading=!1;case 7:case"end":return t.stop()}}),t)})))()},setComponentTo:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.active_component=e;case 1:case"end":return n.stop()}}),n)})))()},setSelectedRequest:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.selected_id=e;case 1:case"end":return n.stop()}}),n)})))()},addEmployeeOvertimeRequest:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.isRequestLoading=!0,n.next=3,o["a"].post("/api/em/overtimes",e);case 3:r=n.sent,t.overtimes.unshift(r.data.data),t.isRequestLoading=!1;case 6:case"end":return n.stop()}}),n)})))()},updateEmployeeOvertimeRequest:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.isRequestLoading=!0,r.next=3,o["a"].patch("/api/em/overtimes/".concat(t),e);case 3:r.sent,n.isRequestLoading=!1;case 5:case"end":return r.stop()}}),r)})))()},deleteEmployeeOvertimeRequest:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.isRequestLoading=!0,r.next=3,o["a"].delete("/api/em/overtimes/".concat(e));case 3:n.overtimes.splice(t,1),n.isRequestLoading=!1;case 5:case"end":return r.stop()}}),r)})))()}}})},f94d:function(e,t,n){"use strict";var r=n("7a23"),c=Object(r["createElementVNode"])("div",{class:"row"},[Object(r["createElementVNode"])("div",{class:"col-12"},[Object(r["createElementVNode"])("div",{class:"alert alert-primary"}," dfjklsdfjl ")])],-1),o={class:"row"},a={class:"col-12"},l={class:"card"},s={key:0,class:"overlay"},i=Object(r["createElementVNode"])("i",{class:"fas fa-spinner fa-pulse fa-2x"},null,-1),m=[i],u={class:"card-header"},d=Object(r["createElementVNode"])("h3",{class:"card-title"},"Create Overtime",-1),b={class:"card-tools"},f=Object(r["createElementVNode"])("i",{class:"fas fa fa-sign-out-alt"},null,-1),O=Object(r["createTextVNode"])(" Cancel Request "),j=[f,O],p={class:"card-body"},v={class:"row"},E={class:"form-group col-12"},V=Object(r["createElementVNode"])("label",null,"Date",-1),N={class:"form-group col-xs-12 col-md-6"},h=Object(r["createElementVNode"])("label",null,"From",-1),g={class:"form-group col-xs-12 col-md-6"},R=Object(r["createElementVNode"])("label",null,"To",-1),k={class:"form-group col-xs-12 col-12"},w=Object(r["createElementVNode"])("label",null,"Reason",-1),x=Object(r["createElementVNode"])("div",{class:"card-footer"},[Object(r["createElementVNode"])("button",{type:"submit",class:"btn btn-primary btn-sm"},"Submit Request")],-1);function q(e,t,n,i,f,O){return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[c,Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("div",l,[e.EmOvertime.isRequestLoading?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",s,m)):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",u,[d,Object(r["createElementVNode"])("div",b,[Object(r["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(t){return e.EmOvertime.setComponentTo("overtime-request-component")}),class:"btn btn-danger btn-sm"},j)])]),Object(r["createElementVNode"])("form",{onSubmit:t[5]||(t[5]=Object(r["withModifiers"])((function(t){return e.submitRequest()}),["prevent"]))},[Object(r["createElementVNode"])("div",p,[Object(r["createElementVNode"])("div",v,[Object(r["createElementVNode"])("div",E,[V,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.date=t}),type:"date",class:"form-control form-control-sm"},null,512),[[r["vModelText"],e.form.date]])]),Object(r["createElementVNode"])("div",N,[h,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.from=t}),type:"time",class:"form-control form-control-sm"},null,512),[[r["vModelText"],e.form.from]])]),Object(r["createElementVNode"])("div",g,[R,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.form.to=t}),type:"time",class:"form-control form-control-sm"},null,512),[[r["vModelText"],e.form.to]])]),Object(r["createElementVNode"])("div",k,[w,Object(r["withDirectives"])(Object(r["createElementVNode"])("textarea",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.form.reason=t}),cols:"30",rows:"10",class:"form-control"},null,512),[[r["vModelText"],e.form.reason]])])])]),x],32)])])])],64)}var y=n("1da1"),C=(n("96cf"),n("a293")),B=n("854a"),T=Object(r["defineComponent"])({setup:function(){var e=Object(C["a"])(),t=Object(r["reactive"])({date:null,from:null,to:null,reason:null}),n=function(){var n=Object(y["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.addEmployeeOvertimeRequest(t);case 2:return n.next=4,e.setComponentTo("overtime-request-component");case 4:B["success"]("Overtime request added.");case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return{EmOvertime:e,form:t,submitRequest:n}}}),D=n("6b0d"),S=n.n(D);const L=S()(T,[["render",q]]);t["a"]=L}}]);
//# sourceMappingURL=em-overtimes'~sv-overtimes'.051eb38a.js.map