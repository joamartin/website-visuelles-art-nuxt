(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{211:function(t,e,n){var content=n(214);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("6cc84568",content,!0,{sourceMap:!1})},212:function(t,e,n){var content=n(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2db42600",content,!0,{sourceMap:!1})},213:function(t,e,n){"use strict";var o=n(211);n.n(o).a},214:function(t,e,n){(e=n(16)(!1)).push([t.i,"h2[data-v-24fbbd5a]{margin-top:2rem}h3[data-v-24fbbd5a]{padding:.5rem 0}.video-profile[data-v-24fbbd5a]{text-align:justify}@supports (((-moz-text-align-last:right) or (text-align-last:right)) and ((-moz-text-align-last:left) or (text-align-last:left))){.align-last-right[data-v-24fbbd5a]{-moz-text-align-last:right;text-align-last:right}.align-last-right h3[data-v-24fbbd5a]{margin-left:60px}.align-last-left[data-v-24fbbd5a]{-moz-text-align-last:left;text-align-last:left}.align-last-left h3[data-v-24fbbd5a]{margin-right:60px}}",""]),t.exports=e},215:function(t,e,n){"use strict";var o=n(212);n.n(o).a},216:function(t,e,n){(e=n(16)(!1)).push([t.i,"@-webkit-keyframes spinAround-data-v-0c3817e4{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes spinAround-data-v-0c3817e4{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}li[data-v-0c3817e4]{margin-bottom:6rem}.column[data-v-0c3817e4]{padding:0 1.2rem}.video-container[data-v-0c3817e4]{padding-top:1rem}@media (min-width:769px){.video-container[data-v-0c3817e4]{padding-top:0}}",""]),t.exports=e},217:function(t,e,n){"use strict";n(209);var o={name:"VideoIframe",props:{url:{type:String,required:!0},width:{type:String,default:"100%"},height:{type:String,default:"auto"}},data:function(){return{loading:!0}}},r=n(12),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{display:"inline-block",width:t.width,height:t.height}},[n("iframe",{style:{width:t.width,height:t.height},attrs:{src:t.url,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},on:{load:function(e){t.loading=!1}}}),t._v(" "),n("b-loading",{attrs:{"is-full-page":!1,active:t.loading}})],1)}),[],!1,null,null,null).exports,d={name:"VideoProfile",props:{video:{type:Object,required:!0},align:{type:String,default:function(t){return"right"===t?"right":"left"}}}},c=(n(213),{name:"VideoListItem",components:{VideoIframe:l,VideoProfile:Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["video-profile","align-last-"+t.align]},[n("h2",[t._v(t._s(t.video.title))]),t._v(" "),n("h3",[t._v(t._s(t.video.subtitle))]),t._v(" "),n("div",{staticClass:"interview-description",domProps:{innerHTML:t._s(t.video.description)}})])}),[],!1,null,"24fbbd5a",null).exports},props:{video:{type:Object,required:!0},index:{type:Number,required:!0}},computed:{align:function(){return this.index%2==0?"right":"left"}}}),h=(n(215),{name:"VideoList",components:{VideoListItem:Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"columns"},[n("div",{class:["column is-half",{"is-hidden-tablet":"left"===t.align}]},[n("video-profile",{attrs:{video:t.video,align:t.align}})],1),t._v(" "),n("div",{staticClass:"column is-half video-container"},[n("video-iframe",{attrs:{url:t.video.url,width:"100%",height:"400px"}})],1),t._v(" "),"left"===t.align?n("div",{staticClass:"column is-half is-hidden-mobile"},[n("video-profile",{attrs:{video:t.video,align:t.align}})],1):t._e()])])}),[],!1,null,"0c3817e4",null).exports},props:{videos:{type:Array,required:!0}}}),m=Object(r.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("ul",this._l(this.videos,(function(video,t){return e("video-list-item",{key:video.url,attrs:{video:video,index:t}})})),1)}),[],!1,null,null,null);e.a=m.exports},222:function(t,e,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("523e3d0b",content,!0,{sourceMap:!1})},230:function(t){t.exports=JSON.parse('[{"title":"Marie Buscatto","subtitle":"Enter, remain, be recognized : the conditions of the feminization in the artistic sphere","url":"https://www.youtube.com/embed/KiPivjAkrLs","description":"Marie Buscatto is a art, labor and gender sociologist","context":"","type":"long"},{"title":"Fabienne Dumont","subtitle":"Write art history,  complement the missing","url":"https://www.youtube.com/embed/IDiXmFr-EFk","description":"Fabienne Dumont is a art historian, critic and teacher","context":"","type":"long"},{"title":"Julie Crenn","subtitle":"Use cunning to undermine the oppression","url":"https://www.youtube.com/embed/69tz8LQ_OLQ","description":"Julie Crenn is a art historian and exhibition commissioner","context":"","type":"long"},{"title":"Céline Kopp & Etienne Bernard","subtitle":"Behind the “talent”","url":"https://www.youtube.com/embed/XpSticKEhUk","description":"Céline Kopp and Etienne Bernard are commissioners of Rennes Contemporary Art Biennial “A cris ouverts”","context":"","type":"long"},{"title":"Camille Morineau","subtitle":"Make visible, exhibit","url":"https://www.youtube.com/embed/u4tMHC9vfkw","description":"Camille Morineau is a art historian, commissioner of Elles@CentrePompidou exhibition, president of AWARE","context":"","type":"long"},{"title":"Pascale Obolo","subtitle":"Produce common good, resist","url":"https://www.youtube.com/embed/c7VuGK5eqPU","description":"Pascale Obolo is a moviemaker, independent exhibition commissioner, founder of Afrikadaa magazine, Ateliers des Horizons tutor","context":"","type":"long"}]')},231:function(t,e,n){"use strict";var o=n(222);n.n(o).a},232:function(t,e,n){(e=n(16)(!1)).push([t.i,"@-webkit-keyframes spinAround-data-v-a6cd73b8{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes spinAround-data-v-a6cd73b8{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.home .project[data-v-a6cd73b8]{margin-bottom:32px}.home img[data-v-a6cd73b8]{display:block;max-width:80%;height:auto;margin:32px auto auto}.home a.page-link[data-v-a6cd73b8]{display:block;color:#363636;background-color:#fff;transition:background-color .4s;text-decoration:unset}.home a.page-link[data-v-a6cd73b8]:hover{background-color:hsla(0,0%,94.9%,.7);transition:background-color .5s}.home .category[data-v-a6cd73b8]{margin-bottom:3rem}@media (min-width:769px){.home a.page-link[data-v-a6cd73b8]{padding:1.8rem}}",""]),t.exports=e},241:function(t,e,n){"use strict";n.r(e);var o=n(230),r={components:{VideoList:n(217).a},head:function(){return{title:"Visuelles.art - The project"}},data:function(){return{videos:o}}},l=(n(231),n(12)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home page"},[e("div",{staticClass:"container",style:{"max-width":"1216px"}},[this._m(0),this._v(" "),e("section",{staticClass:"section"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-12"},[e("video-list",{attrs:{videos:this.videos}})],1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-12"},[n("h1",{staticClass:"has-text-centered underline-centered"},[t._v("The project")]),t._v(" "),n("div",{staticClass:"has-text-justified project"},[n("p",[t._v("\n              What is the impact of gender on Art ? What does the artist's social and ethnic origins have to do with art ?\n            ")]),t._v(" "),n("p",[t._v("\n              This is the issue that links these fascinating and enlightening interviews. Led by "),n("a",{attrs:{href:"https://docher.com/",target:"_blank"}},[t._v("Marie Docher")]),t._v(", they are a great source of information, articulation of issues, variety of points of view expressed by those who contribute to the world of art and culture.\n            ")]),t._v(" "),n("p",[t._v("\n              She has met with curators, sociologists, art historians, exhibition curators, photographers... all those who today question, study, research and focus on the issue of the representation of women and racialized artists in art history, but also in collections, exhibitions or on the market. Through these meetings and these rich and diverse points of view, the aim is to question our conventional ideas, our habits, our perception of art and its restitution.\n            ")]),t._v(" "),n("p",[t._v("\n              Are there still inequalities in culture, and how can we understand the resistance to establishing balance?"),n("br"),t._v("\n              What are the differences between women and men in culture?"),n("br"),t._v("\n              How and why is it necessary to deconstruct the figure of the creator and the established mythology when it comes to the question of talent, which are excluding factors for many artists?"),n("br"),t._v('\n              How can we fill the gaps and the field left empty by the place of women and "minorities" in the history of art when it was written by men, in order to rewrite it and reconstruct a richer and more representative vision of real artistic production?'),n("br"),t._v("\n              How, in the light of this re-writing, can we resist, implement a common and emancipatory production?"),n("br"),t._v("\n              How can the art market be biased by the dimension of gender when it comes to the acquisitions and valorisation of artists and collections?"),n("br"),t._v("\n              How do institutions and festivals share the same mechanisms that exclude women?\n            ")]),t._v(" "),n("p",[t._v("\n              All these questions - and more - are addressed and analyzed in these interviews, which contribute to composing a rich material that can broaden the horizons of anyone interested in art be they professionals, teachers, students, or the general public.\n            ")])])])])])}],!1,null,"a6cd73b8",null);e.default=component.exports}}]);