(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{211:function(e,t,r){var content=r(214);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("6cc84568",content,!0,{sourceMap:!1})},212:function(e,t,r){var content=r(216);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("2db42600",content,!0,{sourceMap:!1})},213:function(e,t,r){"use strict";var n=r(211);r.n(n).a},214:function(e,t,r){(t=r(16)(!1)).push([e.i,"h2[data-v-24fbbd5a]{margin-top:2rem}h3[data-v-24fbbd5a]{padding:.5rem 0}.video-profile[data-v-24fbbd5a]{text-align:justify}@supports (((-moz-text-align-last:right) or (text-align-last:right)) and ((-moz-text-align-last:left) or (text-align-last:left))){.align-last-right[data-v-24fbbd5a]{-moz-text-align-last:right;text-align-last:right}.align-last-right h3[data-v-24fbbd5a]{margin-left:60px}.align-last-left[data-v-24fbbd5a]{-moz-text-align-last:left;text-align-last:left}.align-last-left h3[data-v-24fbbd5a]{margin-right:60px}}",""]),e.exports=t},215:function(e,t,r){"use strict";var n=r(212);r.n(n).a},216:function(e,t,r){(t=r(16)(!1)).push([e.i,"@-webkit-keyframes spinAround-data-v-0c3817e4{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes spinAround-data-v-0c3817e4{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}li[data-v-0c3817e4]{margin-bottom:6rem}.column[data-v-0c3817e4]{padding:0 1.2rem}.video-container[data-v-0c3817e4]{padding-top:1rem}@media (min-width:769px){.video-container[data-v-0c3817e4]{padding-top:0}}",""]),e.exports=t},217:function(e,t,r){"use strict";r(209);var n={name:"VideoIframe",props:{url:{type:String,required:!0},width:{type:String,default:"100%"},height:{type:String,default:"auto"}},data:function(){return{loading:!0}}},l=r(12),o=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{style:{display:"inline-block",width:e.width,height:e.height}},[r("iframe",{style:{width:e.width,height:e.height},attrs:{src:e.url,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},on:{load:function(t){e.loading=!1}}}),e._v(" "),r("b-loading",{attrs:{"is-full-page":!1,active:e.loading}})],1)}),[],!1,null,null,null).exports,c={name:"VideoProfile",props:{video:{type:Object,required:!0},align:{type:String,default:function(e){return"right"===e?"right":"left"}}}},d=(r(213),{name:"VideoListItem",components:{VideoIframe:o,VideoProfile:Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["video-profile","align-last-"+e.align]},[r("h2",[e._v(e._s(e.video.title))]),e._v(" "),r("h3",[e._v(e._s(e.video.subtitle))]),e._v(" "),r("div",{staticClass:"interview-description",domProps:{innerHTML:e._s(e.video.description)}})])}),[],!1,null,"24fbbd5a",null).exports},props:{video:{type:Object,required:!0},index:{type:Number,required:!0}},computed:{align:function(){return this.index%2==0?"right":"left"}}}),m=(r(215),{name:"VideoList",components:{VideoListItem:Object(l.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("div",{staticClass:"columns"},[r("div",{class:["column is-half",{"is-hidden-tablet":"left"===e.align}]},[r("video-profile",{attrs:{video:e.video,align:e.align}})],1),e._v(" "),r("div",{staticClass:"column is-half video-container"},[r("video-iframe",{attrs:{url:e.video.url,width:"100%",height:"400px"}})],1),e._v(" "),"left"===e.align?r("div",{staticClass:"column is-half is-hidden-mobile"},[r("video-profile",{attrs:{video:e.video,align:e.align}})],1):e._e()])])}),[],!1,null,"0c3817e4",null).exports},props:{videos:{type:Array,required:!0}}}),f=Object(l.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("ul",this._l(this.videos,(function(video,e){return t("video-list-item",{key:video.url,attrs:{video:video,index:e}})})),1)}),[],!1,null,null,null);t.a=f.exports},220:function(e){e.exports=JSON.parse('[{"title":"Marie Buscatto","subtitle":"Entrer, rester, être reconnue : les conditions de féminisation des mondes de l’art.","url":"https://www.youtube.com/embed/KiPivjAkrLs","description":"<p><a href=\\"http://www.pantheonsorbonne.fr/it/ufr/isst/annuaire-et-publications-des-enseignants-de-lisst/marie-buscatto/\\" target=\\"_blank\\">Marie Buscatto</a> est professeure de sociologie à l’Université Paris 1 Panthéon Sorbonne et chercheure à l’IDHES (Paris 1 – Cnrs).<br />Dans cet entretien consacré aux conditions de féminisation du travail artistique, elle fait un point sur les recherches menées depuis une vingtaine d’années sur le travail artistique et décrit de façon très complète les processus sociaux à l’œuvre, de l’invisibilisation à la transgression.</p>","context":"","type":"long"},{"title":"Fabienne Dumont","subtitle":"Ecrire l\'histoire de l\'art, compléter les vides","url":"https://www.youtube.com/embed/IDiXmFr-EFk","description":"<p><a href=\\"https://www.cairn.info/publications-de-Fabienne-Dumont--41025.htm\\" target=\\"_blank\\">Fabienne Dumont</a> est historienne de l’art, enseignante et critique d’art.<br />Elle nous montre qu’une autre histoire de l’art est possible, avec d’autres méthodologies et où les femmes sont plus présentes qu’on voudrait le laisser croire. Il est question ici d’artistes comme Nil Yalter, Raymonde Arcier et Lea Lublin et de l’importance d’intégrer les travaux d’artistes femmes dans les collections publiques, avant qu’il ne soit trop tard.</p>","context":"","type":"long"},{"title":"Julie Crenn","subtitle":"Renarder, dit-elle","url":"https://www.youtube.com/embed/69tz8LQ_OLQ","description":"<p><a href=\\"https://crennjulie.com/\\" target=\\"_blank\\">Julie Crenn</a> fait partie d’une nouvelle génération de critiques d’art et de commissaire d’exposition. Elle a défendu une thèse sur les pratiques textiles contemporaines et mené des recherches sur les arts contemporains africains.<br />Elle nous parle d’engagement, de l’exposition comme espace politique, d’intersectionnalité, d’activisme, et du projet à long terme qu’elle mène avec Pascal Lièvre : <a href=\\"https://archivesherstory.com/\\" target=\\"_blank\\">Herstory</a></p>","context":"","type":"long"},{"title":"Etienne Bernard et Céline Kopp","subtitle":"Au-delà du talent","url":"https://www.youtube.com/embed/XpSticKEhUk","description":"<p>Etienne Bernard et Céline Kopp dirigent respectivement le <a href=\\"https://www.fracbretagne.fr/\\" target=\\"_blank\\">FRAC Bretagne</a> et <a href=\\"http://www.trianglefrance.org/fr/\\" target=\\"_blank\\">Triangle France</a> et sont co-commissaires de la Biennale d’art contemporain de Rennes : <a href=\\"http://www.culture.gouv.fr/Thematiques/Arts-plastiques/Actualites-du-reseau/A-Cris-Ouverts-6eme-Biennale-des-Ateliers-de-Rennes\\" target=\\"_blank\\">A cris ouverts</a>. Nous sommes allées les rencontrer grâce à <a href=\\"https://hfbretagne.com/\\" target=\\"_blank\\">HF Bretagne</a> dans l’œuvre de l’artiste <a href=\\"http://revisitinggenesis.net/\\" target=\\"_blank\\">Oreet Ashery, Revisiting Genesis</a>, pour parler de leur travail.<br />Il et elle nous emmènent dans l’écriture de ce projet, parlent de leurs pratiques respectives ancrées dans des réalités sociales et politiques diverses, comment celles-ci ont été renforcées au fil des expériences ou ont fait évoluer leurs engagements. Ils redéfinissent le « talent », et parlent des artistes, de co-construction, d’économie, d’écologie, de militantisme, d’autres manières d’habiter le monde et d’imaginer l’être collectif.</p>","context":"","type":"long"},{"title":"Camille Morineau","subtitle":"Rendre visibles, exposer","url":"https://www.youtube.com/embed/u4tMHC9vfkw","description":"<p>Camille Morineau est directrice des expositions et collections de la Monnaie de Paris et historienne de l’art.<br />Elle nous raconte comment est née l’exposition <a href=\\"https://www.centrepompidou.fr/cpv/resource/ccBLAM/r8EK9Mn\\" target=\\"_blank\\">Elles@centrepompidou</a>, qui a créé un précédent jusque là jamais atteint dans la valorisation des travaux des artistes femmes, et nous parle également de la fondation d’<a href=\\"https://awarewomenartists.com\\" target=\\"_blank\\">AWARE</a> qu’elle a créé par la suite.</p>","context":"","type":"long"},{"title":"Pascale Obolo","subtitle":"Créer du commun, résister","url":"https://www.youtube.com/embed/c7VuGK5eqPU","description":"<p>Pascale Obolo est cinéaste, fondatrice de la revue d’art <a href=\\"http://www.afrikadaa.com/\\" target=\\"_blank\\">Afrikadaa</a>, commissaire d’exposition indépendante, tutrice aux <a href=\\"http://www.magasin-cnac.org/ecole\\" target=\\"_blank\\">Ateliers des horizons</a>. Tout ça, et encore plus…<br />D’une voix calme, elle parle de ses engagements, d’un art contemporain émancipateur, de la nécessité de « faire », de « produire du commun » pour soigner une société qui explose, de la richesse de la « périphérique », ce nouveau centre de la création contemporaine, de la reconstruction de narrations communes, du soin, de la transmission lorsque les coupes budgétaires ferment les portes de lieux de résistances, lorsque des institutions s\'approprient les histoires en les vidant de leur sens.</p>","context":"","type":"long"},{"title":"Agnes Saal","subtitle":"Un moment historique","url":"https://www.youtube.com/embed/GTedTdBJ7Ec","description":"<p>Agnès Saal, chargée de mission pour les labels Egalité et Diversité AFNOR, présente <a href=\\"http://www.culture.gouv.fr/Presse/Communiques-de-presse/Feuille-de-route-Egalite-2018-2022\\" target=\\"_blank\\">la feuille de route Egalité du Ministère de la Culture pour la période 2018-2022</a> qui ambitionne de passer enfin d’une égalité en droits à une égalité en actes.<br />Elle aborde avec nous les différents points de cette feuille de route tels que les objectifs chiffrés de progression de la part des femmes à la tête et dans la programmation des établissements publics et les contraintes mises en place pour y arriver, la lutte contre les stéréotypes ou encore la mise en place d’actions contre le harcèlement sexuel et sexiste dans les écoles d’art. Elle évoque également les principales difficultés auxquelles il faudra répondre pour que cette égalité puisse devenir réellement effective.</p>","context":"","type":"long"},{"title":"Alain Quemin","subtitle":"Accéder à la reconnaissance","url":"https://www.youtube.com/embed/b2AV_RFCCcw","description":"<p>Alain Quemin est <a href=\\"http://iee.univ-paris8.fr/?quemin-alain\\" target=\\"_blank\\">professeur de sociologie</a> et membre honoraire de l’Institut Universitaire de France.<br />Il évoque avec nous la situation des artistes femmes sur le marché de l’art contemporain, les évictions qu\'elles ont pu et peuvent encore subir et lorsque la notion de talent masque les inégalités.<br />L’entretien a été réalisé dans le cadre de l’événement organisé à la Maison Européenne de la Photographie intitulé : « <a href=\\"https://www.youtube.com/watch?v=agdXsa-E7Ic\\" target=\\"_blank\\">Ni vues ni connues : comment les femmes font carrière (ou pas) en photographie</a> ».</p>","context":"","type":"long"},{"title":"Marie Robert","subtitle":"Rendre aux femmes leur place réelle","url":"https://www.youtube.com/embed/KLHwaSSx_Fk","description":"<p>Marie Robert est conservatrice en charge de la photographie au Musée d’Orsay.<br />Elle nous parle de l’exposition « <a href=\\"https://www.musee-orsay.fr/fr/evenements/expositions/aux-musees/presentation-generale/article/qui-a-peur-des-femmes-photographes-42673.html?cHash=0dd2fbf778\\" target=\\"_blank\\">Qui a peur des femmes photographes 1839-1945 ?</a> » qui a permis de remettre en question l’effacement historique qu’ont pu connaître les artistes femmes de cette période.<br />L’entretien a été réalisé dans le cadre de l’événement organisé à la Maison Européenne de la Photographie intitulé : « Ni vues ni connues : comment les femmes font carrière (ou pas) en photographie ».</p>","context":"","type":"long"},{"title":"Femmes PHOTOgraphes","subtitle":"Se mobiliser","url":"https://www.youtube.com/embed/1juxUzfCNF4","description":"<p>Les métiers de la photographie sont devenus en une dizaine d’années encore plus précaires. Les difficultés pour les femmes rendent leurs carrières plus complexes que celles de leurs confrères pour de nombreuses raisons systémiques.<br />Nous avons rencontré trois des fondatrices de l’association <a href=\\"http://www.femmesphotographes.eu/\\" target=\\"_blank\\">femmesPHOTOgraphes</a> (Noémie Aubry, Isabelle Gressier et Kim lan Nguyên Thi), des femmes plurielles qui se rassemblent pour unir leurs forces, réfléchir aux sources de ces inégalités, à leurs conséquences et forgent leurs propres outils de résistance et d’émancipation.</p>","context":"","type":"long"},{"title":"Existe-t-il encore des inégalités entre femmes et hommes dans la culture ?","subtitle":"Marie Buscatto","url":"https://www.youtube.com/embed/_i6YyJrrzhc","description":"<ul><li>Existe-il encore des inégalités entre femmes et hommes dans la culture ?</li><li>Cela pourrait s\'expliquer parce qu\'il y a une résistance à l\'égalité concrète à l\'égalité ?</li><li>Comment expliquer ces différences entre femmes et hommes dans la culture ?</li></ul><p>Avec Marie Buscatto, professeure de sociologie à l’Université Paris 1 Panthéon Sorbonne et chercheure à l’IDHES</p>","context":"","type":"short"},{"title":"Pourquoi y a-t-il aussi peu de femmes en Histoire de l\'art ?","subtitle":"Fabienne Dumont","url":"https://www.youtube.com/embed/3XfrCvOK2Uc","description":"<ul><li>Pourquoi les femmes sont parfois aussi peu représentées en histoire de l\'art ?</li><li>Ont-elles été plus nombreuses dans d’autres contextes ?</li><li>Comment rendre aux femmes leur juste part dans l\'histoire de l\'art ?</li></ul><p>Avec Fabienne Dumont, historienne de l\'art, critique et enseignante</p>","context":"","type":"short"},{"title":"Est-ce que les artistes \\"racisé.e.s\\" sont aussi visibles que les autres artistes ?","subtitle":"Pascale Obolo","url":"https://www.youtube.com/embed/Ap3FchIUkqk","description":"<ul><li>Est-ce que les artistes \\"racisé.e.s\\" sont aussi visibles que les autres artistes ?</li><li>Quelles sont les conséquences de cette invisibilité ?</li><li>Comment changer cette situation ?</li></ul><p>Avec Pascale Obolo, fondatrice de la revue Afrikadaa, cinéaste et commissaire d\'exposition</p>","context":"","type":"short"},{"title":"Pourquoi le genre est important, si seul le talent compte ?","subtitle":"Céline Kopp & Etienne Bernard","url":"https://www.youtube.com/embed/NqrZ_2IEa5M","description":"<ul><li>Ce qui compte avant tout, c\'est le talent</li><li>Exposer des femmes, qu\'est-ce que ça change ?</li><li>Existe-t-il encore des situations où les femmes sont perçues différemment des hommes ?</li></ul><p>Avec Céline Kopp et Etienne Bernard, co-commissaires de la Biennale d\'Art Contemporain de Rennes \\"A cris ouverts\\"</p>","context":"","type":"short"},{"title":"Est-ce qu\'exposer plus de femmes se fait au détriment de la qualité ?","subtitle":"Julie Crenn","url":"https://www.youtube.com/embed/m2EYPygH2S8","description":"<ul><li>Depuis Elles@centrepompidou, les institutions ont-elles continué à exposer des femmes ?</li><li>Que mettre en place pour résoudre le problème du manque de visibilité des femmes artistes ?</li><li>Est-ce qu\'une exposition égalitaire se fait au détriment de la qualité ?</li></ul><p>Avec Julie Crenn, historienne de l\'art et commissaire d\'exposition</p>","context":"","type":"short"}]')},238:function(e,t,r){"use strict";r.r(t);var n=r(220),l={components:{VideoList:r(217).a},data:function(){return{videos:n.filter((function(video){return"long"===video.type}))}},head:function(){return{title:"Les entretiens - Visuelles.art"}}},o=r(12),component=Object(o.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container",style:{"max-width":"1216px"}},[this._m(0),this._v(" "),t("section",{staticClass:"section"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-12"},[t("video-list",{attrs:{videos:this.videos}})],1)])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"section"},[r("h1",{staticClass:"has-text-centered underline-centered"},[e._v("Les Entretiens")]),e._v(" "),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-12"},[r("p",{staticClass:"has-text-justified"},[e._v("\n          Qu'est-ce que le genre et l’origine font à l'art ? Vaste question ! Telle est la problématique qui relie ces entretiens aussi passionnants qu'éclairants. Menés par Marie Docher, ils sont une grande source d'informations, d'articulation de problématiques, de variétés de points de vue par les acteur.ices du monde de l'art et de la culture.\n        ")]),e._v(" "),r("p",{staticClass:"has-text-justified"},[e._v("\n          Elle est allée à la rencontre de conservateur·ices, de sociologues, d’historien·nes de l'art, de commissaires d'exposition, de photographes... en somme de celles et ceux qui aujourd'hui s'interrogent, étudient, recherchent et se mobilisent autour la question de la représentation des artistes femmes et des racisé.es dans l'histoire de l'art, mais aussi dans les collections, les expositions ou encore le marché. Il s'agit à travers ces rencontres et ces points de vue riches et divers de remettre en question comme en perspective nos idées reçues, nos habitudes, notre perception de l'art et de ses restitutions.\n        ")]),e._v(" "),r("p",{staticClass:"has-text-justified"},[e._v("\n          Existe-il encore des inégalités dans la culture, et comment expliquer les résistances à ces inégalités ?"),r("br"),e._v("\n          Quelles sont les différences entre femmes et hommes dans la culture ?"),r("br"),e._v("\n          Comment et pourquoi est-il indispensable de déconstruire la figure de créateur et la mythologie établie de la question du talent qui sont des facteurs excluants pour beaucoup d'artistes ?"),r("br"),e._v("\n          Comment combler les manques et le champ laissé vide par la place des femmes et des « minorités » dans l'histoire de l'art quand celle-ci a été écrite par les hommes, pour la réécrire et en reconstruire une plus riche et plus représentative de la production artistique réelle ?"),r("br"),e._v("\n          Comment, à l'aune de cette réécriture, faire résistance, mettre en œuvre une production commune et émancipatrice ?"),r("br"),e._v("\n          Comment le marché de l'art peut être biaisé par la dimension genrée quand il s'agit d'acquisitions et de valorisation des artistes et des collections ?"),r("br"),e._v("\n          Comment les institutions et les festivals partagent-ils les mêmes mécanismes excluant les femmes ?\n        ")]),e._v(" "),r("p",{staticClass:"has-text-justified"},[e._v("\n          Comment l'actuel ministère de la Culture se mobilise-t-il pour l’égalité et la diversité à travers sa feuille de route, un programme ambitieux, visant à la fois une plus grande représentations des femmes dans tous les secteurs de l'art, mais aussi une transmission de la culture de l'égalité, la fin des discriminations, des réticences, des violences sexistes ou encore des inégalités salariales dans les établissements publics ?\n        ")]),e._v(" "),r("p",{staticClass:"has-text-justified"},[e._v("\n          Toutes ces questions – et plus encore – sont abordées et analysées dans ces entretiens qui viennent composer une matériel riche d'ouverture, de réflexions pour toute personne s’intéressant à l'art, pour les professionnel·les, les enseignant·es, les étudiant·es, le public.\n        ")])])])])}],!1,null,null,null);t.default=component.exports}}]);