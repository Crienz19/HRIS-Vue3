(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sa-branches"],{"0b42":function(e,t,n){var r=n("e8b5"),c=n("68ee"),a=n("861d"),o=n("b622"),l=o("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,c(t)&&(t===Array||r(t.prototype))?t=void 0:a(t)&&(t=t[l],null===t&&(t=void 0))),void 0===t?Array:t}},"1dde":function(e,t,n){var r=n("d039"),c=n("b622"),a=n("2d00"),o=c("species");e.exports=function(e){return a>=51||!r((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"4c0b":function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),c=Object(r["createElementVNode"])("div",{class:"row"},[Object(r["createElementVNode"])("div",{class:"col-12"},[Object(r["createElementVNode"])("div",{class:"alert alert-primary"}," sadasd ")])],-1),a={class:"row"},o={class:"col-3"},l={class:"card"},i=Object(r["createElementVNode"])("div",{class:"card-header"},[Object(r["createElementVNode"])("h3",{class:"card-title"}," Branches ")],-1),s={class:"card-body"},u={class:"form-group"},d=Object(r["createElementVNode"])("label",null,"Name",-1),b={class:"form-group"},m=Object(r["createElementVNode"])("label",null,"Display Name",-1),p={class:"form-group"},f={class:"col-9"},h={class:"card"},j=Object(r["createElementVNode"])("div",{class:"card-header"},[Object(r["createElementVNode"])("h3",{class:"card-title"},"Branch List")],-1),O={class:"card-body p-0"},v={class:"table table-sm table-striped"},E=Object(r["createElementVNode"])("thead",null,[Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("th",null,"ID"),Object(r["createElementVNode"])("th",null,"Name"),Object(r["createElementVNode"])("th",null,"Display"),Object(r["createElementVNode"])("th",null,"Actions")])],-1),N=["onClick"],V=Object(r["createElementVNode"])("i",{class:"fas fa-edit"},null,-1),g=[V],w=["onClick"],y=Object(r["createElementVNode"])("i",{class:"fas fa-times"},null,-1),B=[y];function k(e,t,n,V,y,k){return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[c,Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("div",l,[i,Object(r["createElementVNode"])("div",s,[Object(r["createElementVNode"])("div",u,[d,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.branchForm.name=t}),type:"text",class:"form-control form-control-sm"},null,512),[[r["vModelText"],e.branchForm.name]])]),Object(r["createElementVNode"])("div",b,[m,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.branchForm.display_name=t}),type:"text",class:"form-control form-control-sm"},null,512),[[r["vModelText"],e.branchForm.display_name]])]),Object(r["createElementVNode"])("div",p,[e.isEdit?(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:1},[Object(r["createElementVNode"])("button",{onClick:t[3]||(t[3]=function(t){return e.updateBranch()}),class:"btn btn-success btn-sm mr-1"},"Update"),Object(r["createElementVNode"])("button",{onClick:t[4]||(t[4]=function(t){return e.cancelBranch()}),class:"btn btn-danger btn-sm"},"Cancel")],64)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{key:0,onClick:t[2]||(t[2]=function(t){return e.addBranch()}),class:"btn btn-primary btn-sm"},"Add"))])])])]),Object(r["createElementVNode"])("div",f,[Object(r["createElementVNode"])("div",h,[j,Object(r["createElementVNode"])("div",O,[Object(r["createElementVNode"])("table",v,[E,Object(r["createElementVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.branches,(function(t,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("tr",{key:t.id},[Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(t.id),1),Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(t.name),1),Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(t.display_name),1),Object(r["createElementVNode"])("td",null,[Object(r["createElementVNode"])("button",{onClick:function(r){return e.editBranch(t,n)},class:"btn btn-primary btn-xs mr-1"},g,8,N),Object(r["createElementVNode"])("button",{onClick:function(r){return e.deleteBranch(t.id,n)},class:"btn btn-danger btn-xs mr-1"},B,8,w)])])})),128))])])])])])])],64)}var x=n("1da1"),R=(n("96cf"),n("95b5")),_=Object(r["defineComponent"])({setup:function(){var e=Object(R["a"])(),t=Object(r["computed"])((function(){return e.getAllBranch})),n=Object(r["reactive"])({id:0,name:"",display_name:"",created_at:""}),c=Object(r["ref"])(!1),a=Object(r["ref"])(0);Object(r["onBeforeMount"])(Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadAllBranches();case 2:case"end":return t.stop()}}),t)}))));var o=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.addBranch(n);case 2:u();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(e,t){n.id=e.id,n.name=e.name,n.display_name=e.display_name,n.created_at=e.created_at,c.value=!0,a.value=t},i=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.updateBranch(n,a.value);case 2:n.name="",n.display_name="";case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(n,r){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(c=confirm("Delete this branch?"),!c){t.next=4;break}return t.next=4,e.deleteBranch(n,r);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),u=function(){n.id=0,n.name="",n.display_name="",n.created_at="",c.value=!1};return{isEdit:c,branches:t,branchForm:n,addBranch:o,editBranch:l,updateBranch:i,deleteBranch:s,cancelBranch:u}}}),A=n("6b0d"),C=n.n(A);const D=C()(_,[["render",k]]);t["default"]=D},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},8418:function(e,t,n){"use strict";var r=n("a04b"),c=n("9bf2"),a=n("5c6c");e.exports=function(e,t,n){var o=r(t);o in e?c.f(e,o,a(0,n)):e[o]=n}},"95b5":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("1da1"),c=(n("a434"),n("96cf"),n("5a15")),a=n("be92"),o=Object(a["b"])({id:"superadmin_settings_branch",state:function(){return{branches:[]}},getters:{getAllBranch:function(){return this.branches}},actions:{loadAllBranches:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.branches.length){t.next=5;break}return t.next=3,c["a"].get("/api/sa/branches");case 3:n=t.sent,e.branches=n.data;case 5:case"end":return t.stop()}}),t)})))()},addBranch:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c["a"].post("/api/sa/branches",e);case 2:r=n.sent,t.branches.unshift(r.data);case 4:case"end":return n.stop()}}),n)})))()},updateBranch:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,c["a"].patch("/api/sa/branches/".concat(e.id),e);case 2:n.branches.splice(t,1,e);case 3:case"end":return r.stop()}}),r)})))()},deleteBranch:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,c["a"].delete("/api/sa/branches/".concat(e));case 2:n.branches.splice(t,1);case 3:case"end":return r.stop()}}),r)})))()}}})},a434:function(e,t,n){"use strict";var r=n("23e7"),c=n("23cb"),a=n("a691"),o=n("50c4"),l=n("7b0b"),i=n("65f0"),s=n("8418"),u=n("1dde"),d=u("splice"),b=Math.max,m=Math.min,p=9007199254740991,f="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,r,u,d,h,j,O=l(this),v=o(O.length),E=c(e,v),N=arguments.length;if(0===N?n=r=0:1===N?(n=0,r=v-E):(n=N-2,r=m(b(a(t),0),v-E)),v+n-r>p)throw TypeError(f);for(u=i(O,r),d=0;d<r;d++)h=E+d,h in O&&s(u,d,O[h]);if(u.length=r,n<r){for(d=E;d<v-r;d++)h=d+r,j=d+n,h in O?O[j]=O[h]:delete O[j];for(d=v;d>v-r+n;d--)delete O[d-1]}else if(n>r)for(d=v-r;d>E;d--)h=d+r-1,j=d+n-1,h in O?O[j]=O[h]:delete O[j];for(d=0;d<n;d++)O[d+E]=arguments[d+2];return O.length=v-r+n,u}})},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=sa-branches.6ff35b4d.js.map