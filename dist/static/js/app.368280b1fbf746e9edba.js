webpackJsonp([1],{"14Ot":function(t,e){},"2EwH":function(t,e){},"6HFJ":function(t,e){},"9n10":function(t,e){},CMWq:function(t,e){},Cl7w:function(t,e){},ClFC:function(t,e){},FVFs:function(t,e){},JutW:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("lU2a")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),u={name:"HomeHeader",computed:c()({},Object(l.c)(["city"]))},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{staticClass:"header-right",attrs:{to:"/city"}},[e("div",[this._v("\n      "+this._s(this.city)+"\n      "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    请输入城市/景点/游玩主题\n  ")])}]};var d=i("VU/8")(u,h,!1,function(t){i("Snza")},"data-v-6bc1940d",null).exports,p={name:"HomeSwiper",data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},props:{list:Array},computed:{swiperShow:function(){return this.list.length}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper"},[this.swiperShow?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.src}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var v=i("VU/8")(p,f,!1,function(t){i("rncp")},"data-v-2e507804",null).exports,m={name:"HomeIcons",data:function(){return{swiperOption:{autoplay:!1}}},props:{list:Array},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.iconSrc}})]),t._v(" "),i("p",{staticClass:"icon-txt"},[t._v(t._s(e.desc))])])}))}))],1)},staticRenderFns:[]};var C=i("VU/8")(m,_,!1,function(t){i("14Ot")},"data-v-16e4537e",null).exports,w={name:"HomeRecommend",data:function(){return{}},props:{list:Array}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgSrc}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var y=i("VU/8")(w,g,!1,function(t){i("ClFC")},"data-v-51fa4d1a",null).exports,b={name:"HomeWeekend",data:function(){return{}},props:{list:Array}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgSrc}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var k=i("VU/8")(b,S,!1,function(t){i("halu")},"data-v-4deec990",null).exports,x=i("mtWM"),$=i.n(x),T={name:"Home",data:function(){return{swiperList:[],iconsList:[],recommendList:[],weekendList:[],lastCity:""}},components:{HomeHeader:d,HomeSwiper:v,HomeIcons:C,HomeRecommend:y,HomeWeekend:k},computed:c()({},Object(l.c)(["city"])),methods:{getHomeInfo:function(){$.a.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconsList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.getHomeInfo(),this.lastCity=this.city},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconsList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var H=i("VU/8")(T,E,!1,function(t){i("Wi6C")},"data-v-0ad8b3c8",null).exports,F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"header"},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])]),this._v("\n    城市选择\n  ")],1)])},staticRenderFns:[]};var I=i("VU/8")({name:"CityHeader"},F,!1,function(t){i("bJCl")},"data-v-b7a11242",null).exports,N={name:"CitySearch",data:function(){return{timer:null,list:[],inputDate:""}},props:{cities:Object},methods:c()({handleChangeCity:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),computed:{hasNoData:function(){return!this.list.length}},watch:{inputDate:function(){var t=this;this.timer&&clearTimeout(this.timer),this.inputDate?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.inputDate)>-1||i.name.indexOf(t.inputDate)>-1)&&e.push(i)});t.list=e},100):this.list=[]}}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputDate,expression:"inputDate"}],staticClass:"search-class",attrs:{type:"text",placeholder:"请输入城市名或拼音"},domProps:{value:t.inputDate},on:{input:function(e){e.target.composing||(t.inputDate=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.inputDate,expression:"inputDate"}],staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-content-list border-bottom",on:{click:function(i){t.handleChangeCity(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-content-list border-bottom"},[t._v("没有找到匹配的数据~")])],2)])])},staticRenderFns:[]};var D=i("VU/8")(N,O,!1,function(t){i("SaO+")},"data-v-6ef23401",null).exports,L=i("GQaK"),R={name:"CityList",props:{hotCities:Array,cities:Object,letter:String,ifTapShow:Boolean},computed:c()({},Object(l.c)({currentCity:"city"})),methods:c()({handleChangeCity:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),mounted:function(){this.scroll=new L.a(this.$refs.wrapper)},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){t.handleChangeCity(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),t._l(e,function(e){return i("div",{key:e.id,staticClass:"item-list",on:{click:function(i){t.handleChangeCity(e.name)}}},[i("div",{staticClass:"item border-bottom"},[t._v(t._s(e.name))])])})],2)})],2),t._v(" "),i("div",{class:{tap:t.ifTapShow}},[t._v(t._s(t.letter))])])},staticRenderFns:[]};var U=i("VU/8")(R,A,!1,function(t){i("CMWq")},"data-v-5e5b1925",null).exports,V={name:"CityAlphabet",data:function(){return{ifChange:!1,ifTouch:!1,startY:0,timer:null,ifShow:!0}},props:{cities:Object,clientHeight:Number},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{handleClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(t){this.ifChange=!0,this.ifTouch=!0},handleTouchMove:function(t){var e=this;this.ifChange&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<=21&&(e.$emit("change",e.letters[s]),e.$emit("open"))},16))},handleTouchEnd:function(){var t=this;this.ifChange=!1,this.ifTouch=!1,this.timer=setTimeout(function(){t.$emit("close")},16)},handleResize:function(){document.documentElement.clientHeight<this.clientHeight?this.ifShow=!1:this.ifShow=!0}},activated:function(){window.addEventListener("resize",this.handleResize)},deactivated:function(){window.removeEventListener("resize",this.handleResize)},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifShow,expression:"ifShow"}],class:{list:!0,active:t.ifTouch}},t._l(t.letters,function(e){return i("div",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleClick,touchstart:t.handleTouchStart,touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[t._v("\n    "+t._s(e)+"\n  ")])}))},staticRenderFns:[]};var G={name:"City",data:function(){return{hotCities:[],cities:{},letter:"",ifTapShow:null,clientHeight:null}},components:{CityHeader:I,CitySearch:D,CityList:U,CityAlphabet:i("VU/8")(V,j,!1,function(t){i("lpdj")},"data-v-6bb08c3f",null).exports},methods:{getCitysInfo:function(){$.a.get("/api/city.json").then(this.getCitysInfoSucc)},getCitysInfoSucc:function(t){if((t=t.data).ret){var e=t.data;this.hotCities=e.hotCities,this.cities=e.cities}},handleChange:function(t){this.letter=t},closeTap:function(){this.ifTapShow=!1},openTap:function(){this.ifTapShow=!0}},mounted:function(){this.getCitysInfo(),this.clientHeight=document.documentElement.clientHeight}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{hotCities:t.hotCities,cities:t.cities,letter:t.letter,ifTapShow:t.ifTapShow}}),t._v(" "),i("city-alphabet",{staticClass:"alphabet",attrs:{cities:t.cities,clientHeight:t.clientHeight},on:{change:t.handleChange,close:t.closeTap,open:t.openTap}})],1)},staticRenderFns:[]};var z=i("VU/8")(G,M,!1,function(t){i("QnJp")},"data-v-0e4c6233",null).exports,W={name:"CommonGallery",data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observer:!0,observeParents:!0}}},props:{imgs:{type:Array,default:function(){return[]}}},methods:{handleClick:function(){this.$emit("close")}}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"swiper-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var J=i("VU/8")(W,B,!1,function(t){i("S0I3")},"data-v-8afd2554",null).exports,Y={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var P=i("VU/8")({name:"FadeAnimation"},Y,!1,function(t){i("2EwH")},"data-v-7f0f3362",null).exports,q={name:"DetailBanner",props:{sightName:String,bannerImg:String,bannerImgs:Array},components:{CommonGallary:J,FadeAnimation:P},data:function(){return{showGallary:!1}},methods:{handleClickBanner:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}}},Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleClickBanner}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(this.sightName))]),t._v(" "),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v("\n            "+t._s(this.bannerImgs.length)+"\n          ")])])]),t._v(" "),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.bannerImgs},on:{close:t.handleGallaryClose}})],1)],1)},staticRenderFns:[]};var X=i("VU/8")(q,Q,!1,function(t){i("Cl7w"),i("6HFJ")},"data-v-8d1b94a8",null).exports,K={name:"DetailHeader",data:function(){return{showAbs:!0,styleOpacity:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(console.log(0),t>60){var e=t/140;e=e>1?1:e,this.styleOpacity={opacity:e},this.showAbs=!1}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont header-abs-icon"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.styleOpacity},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-icon"},[this._v("")])]),this._v("\n    景点详情\n  ")],1)],1)},staticRenderFns:[]};var tt=i("VU/8")(K,Z,!1,function(t){i("fNYr")},"data-v-486df92c",null).exports,et={name:"DetailList",props:{list:Array}},it={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item-list"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icons"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.children,expression:"item.children"}],staticClass:"item-children"},[i("detail-list",{attrs:{list:e.children}})],1)])}))},staticRenderFns:[]};var st={name:"Detail",components:{DetailBanner:X,DetailHeader:tt,DetailList:i("VU/8")(et,it,!1,function(t){i("ye07"),i("JutW")},"data-v-993abd58",null).exports},data:function(){return{list:[],sightName:"",bannerImg:"",gallaryImgs:[]}},methods:{getDetailInfo:function(){$.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){this.getDetailInfo()}},nt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,bannerImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("detail-list",{attrs:{list:this.list}}),this._v(" "),e("div",{staticClass:"content"})],1)},staticRenderFns:[]};var at=i("VU/8")(st,nt,!1,function(t){i("XSwB"),i("FVFs")},"data-v-76e1a21b",null).exports;s.a.use(r.a);var rt=new r.a({routes:[{path:"/",name:"Home",component:H},{path:"/city",name:"City",component:z},{path:"/detail/:id",name:"Detail",component:at}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),ot="上海";try{localStorage.city&&(ot=localStorage.city)}catch(t){}var ct={city:ot},lt={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(l.a);var ut=new l.a.Store({state:ct,mutations:lt}),ht=i("v5o6"),dt=i.n(ht),pt=i("F3EI"),ft=i.n(pt);i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns");s.a.config.productionTip=!1,dt.a.attach(document.body),s.a.use(ft.a),new s.a({el:"#app",router:rt,store:ut,components:{App:a},template:"<App/>"})},QnJp:function(t,e){},S0I3:function(t,e){},"SaO+":function(t,e){},Snza:function(t,e){},TzC8:function(t,e){},Wi6C:function(t,e){},XSwB:function(t,e){},bJCl:function(t,e){},fNYr:function(t,e){},halu:function(t,e){},lU2a:function(t,e){},lpdj:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},rncp:function(t,e){},v2ns:function(t,e){},ye07:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.368280b1fbf746e9edba.js.map