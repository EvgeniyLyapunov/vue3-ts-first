"use strict";(self["webpackChunkvue3_first_app"]=self["webpackChunkvue3_first_app"]||[]).push([[126],{9731:function(l,e,t){t.r(e),t.d(e,{default:function(){return G}});var a=t(3396);const s={class:"calc"},o=(0,a._)("h1",null,"This is a my first task page",-1),c={class:"calc-widget"};function n(l,e,t,n,i,u){const r=(0,a.up)("CalcModal"),d=(0,a.up)("CalcForm"),m=(0,a.up)("CalcResultView");return(0,a.wg)(),(0,a.iD)("div",s,[o,(0,a._)("div",c,[(0,a._)("span",{onClick:e[0]||(e[0]=(...e)=>l.showModal&&l.showModal(...e)),class:"calc-widget__about"},"About this Project"),(0,a.Wm)(r,{modalActive:l.modalActive,onModalClose:l.modalClose},null,8,["modalActive","onModalClose"]),(0,a.Wm)(d,{onGetSum:l.getSum},null,8,["onGetSum"]),(0,a.Wm)(m,{result:l.result,onClearAll:l.clearAll},null,8,["result","onClearAll"])])])}var i=t(9242);const u={class:"calc-widget__form-label"},r=(0,a._)("span",{class:"calc-widget__form-label-text"},"first value",-1),d={class:"calc-widget__form-label"},m=(0,a._)("span",{class:"calc-widget__form-label-text"},"second value",-1),_=(0,a._)("button",{class:"btn calc-widget__form-btn",type:"submit"},"Get Summa",-1);function p(l,e,t,s,o,c){return(0,a.wg)(),(0,a.iD)("form",{onSubmit:e[2]||(e[2]=(0,i.iM)(((...e)=>l.getSum&&l.getSum(...e)),["prevent"])),class:"calc-widget__form"},[(0,a._)("label",u,[r,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[0]||(e[0]=e=>l.firstValue=e),class:"calc-widget__form-input",type:"number"},null,512),[[i.nr,l.firstValue]])]),(0,a._)("label",d,[m,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[1]||(e[1]=e=>l.secondValue=e),class:"calc-widget__form-input",type:"number"},null,512),[[i.nr,l.secondValue]])]),_],32)}var f=(0,a.aZ)({data(){return{firstValue:null,secondValue:null}},methods:{getSum(){this.$emit("getSum",{firstValue:this.firstValue?this.firstValue:0,secondValue:this.secondValue?this.secondValue:0}),this.firstValue=null,this.secondValue=null}},emits:{getSum:l=>l}}),g=t(89);const v=(0,g.Z)(f,[["render",p]]);var w=v,h=t(7139);const b={class:"calc-widget__result-block"},V={class:"calc-widget__result"};function C(l,e,t,s,o,c){return(0,a.wg)(),(0,a.iD)("div",b,[(0,a._)("button",{onClick:e[0]||(e[0]=(...e)=>l.clearAll&&l.clearAll(...e)),class:"btn calc-widget__reset-btn"},"Clear All"),(0,a._)("span",V,(0,h.zw)(l.result),1)])}var A=(0,a.aZ)({props:{result:{type:Number,required:!0}},methods:{clearAll(){this.$emit("clearAll")}},emits:["clearAll"]});const S=(0,g.Z)(A,[["render",C]]);var y=S;const k=(0,a._)("span",{class:"calc-widget__modal-boss"},"Автор идеи: Виталий",-1),M=(0,a._)("span",{class:"calc-widget__modal-dev"},"Разработка: Евгений Ляпунов",-1);function Z(l,e,t,s,o,c){return(0,a.wg)(),(0,a.iD)("div",{class:(0,h.C_)(["calc-widget__modal",{"calc-widget__modal_active":l.modalActive}])},[(0,a._)("span",{onClick:e[0]||(e[0]=(...e)=>l.modalClose&&l.modalClose(...e)),class:"calc-widget__modal-close"}),k,M],2)}var U=(0,a.aZ)({props:{modalActive:{type:Boolean}},methods:{modalClose(){this.$emit("modalClose")}},emits:["modalClose"]});const D=(0,g.Z)(U,[["render",Z]]);var x=D,$=(0,a.aZ)({components:{CalcForm:w,CalcResultView:y,CalcModal:x},data(){return{result:0,modalActive:!1}},methods:{getSum(l){l.firstValue&&l.secondValue?this.result=l.firstValue+l.secondValue:this.result=0},clearAll(){this.result=0},showModal(){this.modalActive=!0},modalClose(){this.modalActive=!1}}});const q=(0,g.Z)($,[["render",n]]);var G=q},6063:function(l,e,t){t.r(e),t.d(e,{default:function(){return p}});t(560);var a=t(3396),s=t(9242),o=t(4870),c=t(7627),n=t(2483);const i={class:"login"},u=["onSubmit"],r=(0,a._)("h1",{class:"login-form__title"},"Пожалуйста, авторизуйтесь",-1),d=(0,a._)("button",{class:"login-form__submit",type:"submit"},"Авторизоваться",-1);var m=(0,a.aZ)({__name:"LoginView",setup(l){const e=(0,n.tv)();let t="",m="";function _(){"admin"===t&&"admin"===m&&(localStorage.setItem("Authorized","true"),c.$.value=!0,e.push({name:"home"}))}return(l,e)=>((0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("form",{onSubmit:(0,s.iM)(_,["prevent"]),class:"login-form"},[r,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>(0,o.dq)(t)?t.value=l:t=l),class:"login-form__input",type:"text",placeholder:"login"},null,512),[[s.nr,(0,o.SU)(t)]]),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>(0,o.dq)(m)?m.value=l:m=l),class:"login-form__input",type:"text",placeholder:"password"},null,512),[[s.nr,(0,o.SU)(m)]]),d],40,u)]))}});const _=m;var p=_}}]);
//# sourceMappingURL=calculater.75353dea.js.map