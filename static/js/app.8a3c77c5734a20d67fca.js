webpackJsonp([1],{0:function(t,n){},"30Ic":function(t,n){},"6U20":function(t,n){},HMMJ:function(t,n,e){t.exports=e.p+"static/img/banner.87802ec.png"},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"box"}},[n("div",{attrs:{id:"box1"}},[n("div",{attrs:{id:"divtou"}},[n("img",{attrs:{src:e("HMMJ"),alt:""}})])])])}]};var a={name:"App",components:{yaoqing:e("VU/8")({name:"yaoqing",data:function(){return{}},methods:{},watch:{}},i,!1,function(t){e("30Ic")},"data-v-2d7dc8f6",null).exports},data:function(){return{ethToCoin:0,in_address:null,fistplay:!1}},created:function(){console.log(this.getToken("code"))},methods:{getToken:function(t){var n=window.location.href,e=new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(n),o=null;if(null!=e)try{o=decodeURIComponent(decodeURIComponent(e[1]))}catch(t){try{o=decodeURIComponent(e[1])}catch(t){o=e[1]}}return o},geturl:function(){for(var t=window.location.href,n=0;n<t.length;n++){if("?"==t[n]){var e=t.split("?");break}e=t.split("#")}this.$store.state.qianurl=e[0]}},mounted:function(){}},c={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("yaoqing")],1)},staticRenderFns:[]};var s=e("VU/8")(a,c,!1,function(t){e("6U20")},null,null).exports,u=e("/ocq");o.a.use(u.a);var r=new u.a({routes:[]}),l=r;r.beforeEach(function(t,n,e){!t.query.token&&n.query.token?e({name:t.name,query:{token:n.query.token}}):e()});var f,d=e("NYxO"),p=e("bOdI"),h=e.n(p),m=(f={},h()(f,"SET_ACCOUNT",function(t,n){this.state.account=n}),h()(f,"SET_BALANCE",function(t,n){this.state.balance=n}),h()(f,"SET_NETWORK",function(t,n){this.state.isMainNetWork=n}),h()(f,"SET_INVITE",function(t,n){this.state.invitePara=n}),h()(f,"SET_INVITECODE",function(t,n){this.state.invite=n}),h()(f,"SET_CHECKBIND",function(t,n){this.state.checkBind=n}),h()(f,"SET_COIN",function(t,n){this.state.coin=n}),h()(f,"SET_CODE",function(t,n){this.state.code=n}),h()(f,"SET_RESULTCODE",function(t,n){this.state.resultcode=n}),h()(f,"SET_WALLET",function(t,n){this.state.wallet=n}),h()(f,"SET_LIST",function(t,n){this.state.list=n}),h()(f,"SET_MINSHAREOUT",function(t,n){this.state.minshareout=n}),h()(f,"SET_STATUS",function(t,n){this.state.status=n}),f);o.a.use(d.a);var v=new d.a.Store({state:{account:null,invite:null,invitePara:1,checkBind:!1,balance:0,isMainNetWork:!1,coin:0,code:null,wallet:{},configBaseURL:"http://api.cm1949.com",signn:"",qianurl:""},mutations:m,actions:{}}),E=e("mtWM"),T=e.n(E),_=e("fGGl"),w=e.n(_),y=(e("hjuD"),e("wvfG")),S=e.n(y),x=e("8+8L");function C(t){var n=window.location.href,e=new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(n),o=null;if(null!=e)try{o=decodeURIComponent(decodeURIComponent(e[1]))}catch(t){try{o=decodeURIComponent(e[1])}catch(t){o=e[1]}}return o}o.a.use(x.a),o.a.use(S.a),o.a.use(d.a),o.a.use(w.a),o.a.config.productionTip=!1,o.a.prototype.$axios=T.a,null==C("haha")?o.a.prototype.$axios.defaults.baseURL="":o.a.prototype.$axios.defaults.baseURL=C("haha"),o.a.prototype.$axios.defaults.timeout=1e4,o.a.filter("coin",function(t){return isNaN(t)?"":Number(t).toFixed(2)}),new o.a({el:"#app",router:l,store:v,components:{App:s},template:"<App/>"})},fGGl:function(t,n){var e={};e.install=function(t,n){t.prototype.$tips=function(n,e,o){var i=t.extend({template:'<div class="tips cl  num-abc-warp" v-if="show">{{info}}</div>',data:function(){return{show:!0,info:null,time:2e3}},created:function(){this.info=n,e&&(this.time=e)},mounted:function(){var t=this;setTimeout(function(){t.show=!1},t.time)}});new i;var a=(new i).$mount().$el;document.body.appendChild(a)}},t.exports=e},hjuD:function(t,n){}},["NHnr"]);