(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{288:function(t,i,s){},327:function(t,i,s){"use strict";var e=s(288);s.n(e).a},332:function(t,i,s){"use strict";s.r(i);var e={ArticleList:[{title:"one",imgUrl:"http://q96psm3r4.bkt.clouddn.com/l_one.jpg",createTime:"2020-04-20",desc:"hello this is my first blog",blogUrl:"/world/one"},{title:"two",imgUrl:"http://q96psm3r4.bkt.clouddn.com/two.jpg",createTime:"2020-04-22",desc:"hello this is my two blog",blogUrl:"/world/two"}]},l={name:"LifeArticleBox",data:function(){return{ArticleList:e.ArticleList}},methods:{handleGoToDetail:function(t){this.$router.push({path:t})}}},c=(s(327),s(33)),o=Object(c.a)(l,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"wrap"},[s("ul",{staticClass:"ArticleBox"},t._l(t.ArticleList,(function(i,e){return s("li",{key:e,staticClass:"ArticleItem",on:{click:function(s){return t.handleGoToDetail(i.blogUrl)}}},[s("img",{attrs:{src:i.imgUrl,alt:""}}),t._v(" "),s("div",{staticClass:"ArticleInfo"},[s("p",{staticClass:"title"},[t._v(t._s(i.title))]),t._v(" "),s("p",{staticClass:"desc"},[t._v(" "+t._s(i.desc))]),t._v(" "),s("p",{staticClass:"time"},[t._v(t._s(i.createTime))]),t._v(" "),s("span",{staticClass:"btn"},[t._v("查看详情")])])])})),0)])}),[],!1,null,"818c2614",null);i.default=o.exports}}]);