(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",[r("div",{staticClass:"page-title"},[r("h3",[t._v(t._s(t._f("localize")("AccountTitle")))]),r("button",{staticClass:"btn waves-effect waves-light btn-small",on:{click:t.refresh}},[r("i",{staticClass:"material-icons"},[t._v("refresh")])])]),t.loading?r("Loader"):r("div",{staticClass:"row"},[r("HomeBill",{attrs:{rates:t.currency.rates}}),r("HomeCurrency",{attrs:{rates:t.currency.rates,date:t.currency.date}})],1)],1)])},s=[],a=(r("d3b7"),r("96cf"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col s12 m6 l4"},[r("div",{staticClass:"card light-blue bill-card"},[r("div",{staticClass:"card-content white-text"},[r("span",{staticClass:"card-title"},[t._v(t._s(t._f("localize")("HomeBill_accountCurrency")))]),t._l(t.currencies,(function(e){return r("p",{key:e,staticClass:"currency-line"},[r("span",[t._v(t._s(t._f("currency")(t.getCurrency(e),e))+" ")])])}))],2)])])}),c=[],i={props:["rates"],data:function(){return{currencies:["RUB","USD","EUR"]}},computed:{base:function(){return this.$store.getters.info.bill/(this.rates["RUB"]/this.rates["EUR"])}},methods:{getCurrency:function(t){return Math.floor(this.base*this.rates[t])}}},l=i,u=r("2877"),o=Object(u["a"])(l,a,c,!1,null,null,null),d=o.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col s12 m6 l8"},[r("div",{staticClass:"card orange darken-3 bill-card"},[r("div",{staticClass:"card-content white-text"},[r("div",{staticClass:"card-header"},[r("span",{staticClass:"card-title"},[t._v(t._s(t._f("localize")("HomeCurrency_CurrencyRate")))])]),r("table",[r("thead",[r("tr",[r("th",[t._v(t._s(t._f("localize")("HomeCurrency_Currency")))]),r("th",[t._v(t._s(t._f("localize")("HomeCurrency_Rate")))]),r("th",[t._v(t._s(t._f("localize")("HomeCurrency_Date")))])])]),r("tbody",t._l(t.currencies,(function(e){return r("tr",{key:e},[r("td",[t._v(t._s(e)+" ")]),r("td",[t._v(t._s(t.rates[e].toFixed(3))+" ")]),r("td",[t._v(t._s(t._f("datefilter")(t.date,"date"))+" ")])])})),0)])])])])},_=[],f={props:["rates","date"],data:function(){return{currencies:["RUB","USD","EUR"]}}},m=f,v=Object(u["a"])(m,h,_,!1,null,null,null),C=v.exports,p={metaInfo:function(){return{title:this.$title("CategoryTitle"),meta:[{name:"description",content:"Сайт учета расходов и доходов, с учетом категорий и бюджета, графический анализ, CRM Vue"}]}},name:"home",data:function(){return{loading:!0,currency:null}},mounted:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$store.dispatch("fetchCurrency"));case 2:this.currency=t.sent,this.loading=!1;case 4:case"end":return t.stop()}}),null,this)},methods:{refresh:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,regeneratorRuntime.awrap(this.$store.dispatch("fetchCurrency"));case 3:this.currency=t.sent,this.loading=!1;case 5:case"end":return t.stop()}}),null,this)}},components:{HomeBill:d,HomeCurrency:C}},y=p,b=Object(u["a"])(y,n,s,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d21a3d2.ed999dc6.js.map