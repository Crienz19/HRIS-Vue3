(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register-page"],{"194c":function(e,t,r){e.exports=r.p+"img/zip_logo.52d07e4b.png"},"5b51":function(e,t,r){e.exports=r.p+"img/hiap_logo.663153ad.png"},e607:function(e,t,r){"use strict";r.r(t);r("b0c0");var a=r("7a23"),n=r("194c"),o=r.n(n),c=r("5b51"),s=r.n(c),l={class:"register-box"},i=Object(a["createElementVNode"])("div",{class:"register-logo"},[Object(a["createElementVNode"])("img",{src:o.a,class:"mx-2",style:{width:"130px",height:"130px"},alt:"zip_logo"}),Object(a["createElementVNode"])("img",{src:s.a,class:"mx-2",style:{width:"130px",height:"130px"},alt:"hiap_logo"})],-1),d={class:"card"},p={key:0,class:"overlay"},u=Object(a["createElementVNode"])("i",{class:"fas fa-spinner fa-pulse fa-2x"},null,-1),m=[u],b={class:"card-body register-card-body"},g=Object(a["createElementVNode"])("p",{class:"login-box-msg"},"Register a new membership",-1),O={key:0,class:"alert alert-danger alert-dismissable"},j=Object(a["createElementVNode"])("button",{type:"button",class:"close","data-dismiss":"alert","aria-hidden":"true"},"×",-1),f={class:"input-group mb-3"},v=Object(a["createElementVNode"])("div",{class:"input-group-append"},[Object(a["createElementVNode"])("div",{class:"input-group-text"},[Object(a["createElementVNode"])("span",{class:"fas fa-user"})])],-1),E={class:"input-group mb-3"},V=Object(a["createElementVNode"])("div",{class:"input-group-append"},[Object(a["createElementVNode"])("div",{class:"input-group-text"},[Object(a["createElementVNode"])("span",{class:"fas fa-envelope"})])],-1),N={class:"input-group mb-3"},w=Object(a["createElementVNode"])("div",{class:"input-group-append"},[Object(a["createElementVNode"])("div",{class:"input-group-text"},[Object(a["createElementVNode"])("span",{class:"fas fa-lock"})])],-1),h={class:"input-group mb-3"},x=Object(a["createElementVNode"])("div",{class:"input-group-append"},[Object(a["createElementVNode"])("div",{class:"input-group-text"},[Object(a["createElementVNode"])("span",{class:"fas fa-lock"})])],-1),y={class:"row"},k={class:"col-12"},F=Object(a["createElementVNode"])("button",{type:"submit",class:"btn btn-primary btn-block"},"Register",-1);function M(e,t,r,n,o,c){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,[i,Object(a["createElementVNode"])("div",d,[e.auth.isRequestLoading?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",p,m)):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("div",b,[g,e.errorMessage?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",O,[j,Object(a["createElementVNode"])("small",null,Object(a["toDisplayString"])(e.errorMessage),1)])):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("form",{onSubmit:t[5]||(t[5]=Object(a["withModifiers"])((function(t){return e.register()}),["prevent"]))},[Object(a["createElementVNode"])("div",f,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{class:Object(a["normalizeClass"])([e.errors.hasOwnProperty("name")?"is-invalid":"","form-control"]),"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.registerForm.name=t}),type:"text",placeholder:"Full name"},null,2),[[a["vModelText"],e.registerForm.name]]),v]),Object(a["createElementVNode"])("div",E,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{class:Object(a["normalizeClass"])([e.errors.hasOwnProperty("email")?"is-invalid":"","form-control"]),"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.registerForm.email=t}),type:"email",placeholder:"Email"},null,2),[[a["vModelText"],e.registerForm.email]]),V]),Object(a["createElementVNode"])("div",N,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{class:Object(a["normalizeClass"])([e.errors.hasOwnProperty("password")?"is-invalid":"","form-control"]),"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.registerForm.password=t}),type:"password",placeholder:"Password"},null,2),[[a["vModelText"],e.registerForm.password]]),w]),Object(a["createElementVNode"])("div",h,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{class:Object(a["normalizeClass"])([e.errors.hasOwnProperty("password_confirmation")?"is-invalid":"","form-control"]),"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.registerForm.password_confirmation=t}),type:"password",placeholder:"Retype password"},null,2),[[a["vModelText"],e.registerForm.password_confirmation]]),x]),Object(a["createElementVNode"])("div",y,[Object(a["createElementVNode"])("div",k,[F,Object(a["createElementVNode"])("button",{onClick:t[4]||(t[4]=function(t){return e.goToLoginPage()}),type:"button",class:"btn btn-success btn-block"},"Login to account")])])],32)])])])}var C=r("1da1"),_=(r("96cf"),r("3951")),P=r("6c02"),T=Object(a["defineComponent"])({setup:function(){var e=Object(_["a"])(),t=Object(P["d"])(),r=Object(a["reactive"])({name:null,email:null,password:null,password_confirmation:null}),n=Object(a["computed"])((function(){return e.getAllErrors})),o=Object(a["computed"])((function(){return e.getErrorMessage})),c=function(){var a=Object(C["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.registerThisData(r);case 3:return a.next=5,t.push("/");case 5:alert("Your registration request sent to superadmin."),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),alert(e.getErrorMessage);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}(),s=function(){t.push("/")};return{auth:e,errors:n,registerForm:r,errorMessage:o,register:c,goToLoginPage:s}}}),z=r("6b0d"),B=r.n(z);const D=B()(T,[["render",M]]);t["default"]=D}}]);
//# sourceMappingURL=register-page.3ebf5c54.js.map