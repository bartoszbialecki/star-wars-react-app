(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{71:function(e,n,t){"use strict";t.r(n);var r,a=t(1),c=t.n(a),o=t(19),i=t.n(o),s=t(14),u=t(13),l=t(37),d=t(30),h=t(7),p=t.n(h),b=t(9),f=t(15),m=t(8);!function(e){e.FETCH_CHARACTERS="@@characters/FETCH_CHARACTERS",e.FETCH_CHARACTERS_SUCCESS="@@characters/FETCH_CHARACTERS_SUCCESS",e.FETCH_CHARACTERS_ERROR="@@characters/FETCH_CHARACTERS_ERROR",e.SELECT_CHARACTER="@@characters/SELECT_CHARACTER"}(r||(r={}));var j={characters:{count:0,hasMoreData:!1,data:[]},selectedCharacter:null,loading:!1,error:null,page:1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.FETCH_CHARACTERS:return Object(m.a)(Object(m.a)({},e),{},{loading:!0,error:null,characters:1===n.payload.page?Object(m.a)(Object(m.a)({},e.characters),{},{data:[]}):e.characters});case r.FETCH_CHARACTERS_SUCCESS:var t=n.payload.characters,a=t.hasMoreData?e.page+1:1;return Object(m.a)(Object(m.a)({},e),{},{loading:!1,page:a,characters:{count:t.count,hasMoreData:t.hasMoreData,data:[].concat(Object(f.a)(e.characters.data),Object(f.a)(t.data))}});case r.FETCH_CHARACTERS_ERROR:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:n.payload.error});case r.SELECT_CHARACTER:return Object(m.a)(Object(m.a)({},e),{},{selectedCharacter:n.payload.character});default:return e}};function O(e,n){return{type:r.FETCH_CHARACTERS,payload:{searchValue:e,page:n}}}function C(e){return{type:r.SELECT_CHARACTER,payload:{character:e}}}var g=t(16),v=t(31),S=t(32),E=new(function(){function e(){Object(v.a)(this,e),this.baseUrl="https://swapi.dev/api/",this.peopleEndpoint="people/",this.planetsEndpoint="planets/",this.filmsEndpoint="films/",this.defaultHeaders={Accept:"application/json","Content-Type":"application/json; charset=UTF-8"}}return Object(S.a)(e,[{key:"fetchCharacters",value:function(){var e=Object(g.a)(p.a.mark((function e(n){var t,r,a,c=this,o=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,this.get("".concat(this.baseUrl).concat(this.peopleEndpoint,"?search=").concat(n,"&page=").concat(t));case 3:return r=e.sent,e.next=6,Promise.all(r.results.map(function(){var e=Object(g.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.mapToCharacter(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 6:return a=e.sent,e.abrupt("return",{count:r.count,hasMoreData:null!==r.next,data:a});case 8:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"fetchPlanet",value:function(){var e=Object(g.a)(p.a.mark((function e(n){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("".concat(this.baseUrl).concat(this.planetsEndpoint).concat(n,"/"));case 2:return t=e.sent,e.abrupt("return",this.mapToPlanet(t));case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"fetchFilm",value:function(){var e=Object(g.a)(p.a.mark((function e(n){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("".concat(this.baseUrl).concat(this.filmsEndpoint).concat(n,"/"));case 2:return t=e.sent,e.abrupt("return",this.mapToFilm(t));case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getIdFromUrl",value:function(e){return+e.split("/").reverse()[1]}},{key:"mapToCharacter",value:function(){var e=Object(g.a)(p.a.mark((function e(n){var t,r,a=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getIdFromUrl(n.homeworld),e.next=3,this.fetchPlanet(t);case 3:return r=e.sent,e.abrupt("return",{id:this.getIdFromUrl(n.url),name:n.name,homeworld:r,filmIds:n.films.map((function(e){return a.getIdFromUrl(e)}))});case 5:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"mapToPlanet",value:function(e){return{id:this.getIdFromUrl(e.url),name:e.name,population:e.population}}},{key:"mapToFilm",value:function(e){return{id:this.getIdFromUrl(e.url),title:e.title,releaseDate:new Date(e.release_date),openingCrawl:e.opening_crawl}}},{key:"get",value:function(){var e=Object(g.a)(p.a.mark((function e(n,t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(m.a)({method:"GET",headers:this.defaultHeaders},t),e.next=3,this.makeRequest(new Request(n,r));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"makeRequest",value:function(){var e=Object(g.a)(p.a.mark((function e(n){var t,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:if((t=e.sent).ok){e.next=5;break}throw new Error(t.statusText);case 5:return e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}]),e}()),w=p.a.mark(R),F=p.a.mark(T),y=p.a.mark(_);function R(e){var n,t,a,c;return p.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=e.payload,t=n.searchValue,a=n.page,o.prev=1,o.next=4,Object(b.b)([E,E.fetchCharacters],t,a);case 4:return c=o.sent,o.next=7,Object(b.d)((s=c,{type:r.FETCH_CHARACTERS_SUCCESS,payload:{characters:s}}));case 7:o.next=13;break;case 9:return o.prev=9,o.t0=o.catch(1),o.next=13,Object(b.d)((i=o.t0.message,{type:r.FETCH_CHARACTERS_ERROR,payload:{error:i}}));case 13:case"end":return o.stop()}var i,s}),w,null,[[1,9]])}function T(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.f)(r.FETCH_CHARACTERS,R);case 2:case"end":return e.stop()}}),F)}function _(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.c)(T)]);case 2:case"end":return e.stop()}}),y)}var H;!function(e){e.FETCH_FILMS="@@films/FETCH_FILMS",e.FETCH_FILMS_SUCCESS="@@films/FETCH_FILMS_SUCCESS",e.FETCH_FILMS_ERROR="@@films/FETCH_FILMS_ERROR",e.FETCH_CHARACTER_FILMS_SUCCESS="@@films/FETCH_CHARACTER_FILMS_SUCCESS"}(H||(H={}));var k={films:[],selectedCharacterFilms:[],loading:!1,error:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case H.FETCH_FILMS:return Object(m.a)(Object(m.a)({},e),{},{error:null,loading:!0});case H.FETCH_FILMS_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,films:[].concat(Object(f.a)(e.films),Object(f.a)(n.payload.films))});case H.FETCH_FILMS_ERROR:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:n.payload.error});case H.FETCH_CHARACTER_FILMS_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{selectedCharacterFilms:n.payload.films});default:return e}};function L(e){return{type:H.FETCH_FILMS_SUCCESS,payload:{films:e}}}function I(e){return{type:H.FETCH_CHARACTER_FILMS_SUCCESS,payload:{films:e}}}var M=p.a.mark(P),U=p.a.mark(q),D=p.a.mark(N),z=function(e,n){return n.find((function(n){return n.id===e}))},B=function(e){return e.films.films};function P(e){var n,t,r,a,c;return p.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=e.payload.filmIds,t=[],r=[],o.next=5,Object(b.e)(B);case 5:return a=o.sent,n.forEach((function(e){var n=z(e,a);n?t.push(n):r.push(e)})),o.prev=7,o.next=10,Object(b.a)(r.map((function(e){return Object(b.b)([E,E.fetchFilm],e)})));case 10:return c=o.sent,t.push.apply(t,Object(f.a)(c)),o.next=14,Object(b.d)(L(c));case 14:return o.next=16,Object(b.d)(I(t));case 16:o.next=22;break;case 18:return o.prev=18,o.t0=o.catch(7),o.next=22,Object(b.d)((i=o.t0.message,{type:H.FETCH_FILMS_ERROR,payload:{error:i}}));case 22:case"end":return o.stop()}var i}),M,null,[[7,18]])}function q(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.f)(H.FETCH_FILMS,P);case 2:case"end":return e.stop()}}),U)}function N(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.c)(q)]);case 2:case"end":return e.stop()}}),D)}var J=p.a.mark(W),V=Object(u.combineReducers)({characters:x,films:A});function W(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.c)(_),Object(b.c)(N)]);case 2:case"end":return e.stop()}}),J)}var G,Y,K,Q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,72)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))},X=t(4),Z=t(23),$=t(22),ee=t(6),ne="375px",te="425px",re="768px",ae="1024px",ce="1440px",oe="2560px",ie={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(ne,")"),mobileL:"(max-width: ".concat(te,")"),tablet:"(max-width: ".concat(re,")"),laptop:"(max-width: ".concat(ae,")"),laptopL:"(max-width: ".concat(ce,")"),desktop:"(max-width: ".concat(oe,")"),desktopL:"(max-width: ".concat(oe,")")},se=X.e.button(G||(G=Object(ee.a)(["\n  border: none;\n  border-radius: 50px;\n  box-shadow: ",";\n  cursor: pointer;\n  font-size: 1.6em;\n  outline: none;\n  padding: 0.6em 3em;\n  transition: box-shadow 0.3s ease-in-out;\n\n  ",";\n\n  &:active {\n    box-shadow: ",";\n  }\n\n  @media "," {\n    font-size: 1.2em;\n  }\n"])),(function(e){return e.theme.boxShadow}),(function(e){return e.disabled?Object(X.d)(Y||(Y=Object(ee.a)(["\n          background-color: rgba(0, 0, 0, 0.05);\n          color: rgba(0, 0, 0, 0.15);\n        "]))):Object(X.d)(K||(K=Object(ee.a)(["\n          background-color: ",";\n          color: ",";\n        "])),(function(e){return e.theme.componentBackgroundColor}),(function(e){return e.theme.primaryColor}))}),(function(e){return e.theme.activeBoxShadow}),ie.mobileL),ue=t(2);var le,de,he,pe=function(e){var n=e.children,t=Object($.a)(e,["children"]);return Object(ue.jsx)(se,Object(m.a)(Object(m.a)({},t),{},{children:n}))},be=function(e){var n,t,r=e.film,a=r.title,c=r.releaseDate,o=r.openingCrawl;return Object(ue.jsxs)("li",{children:[Object(ue.jsx)("h3",{children:a}),Object(ue.jsx)("p",{children:c.toLocaleDateString()}),Object(ue.jsx)("p",{children:(n=o,t=130,n.length>t?n.substring(0,t)+"...":n)})]})},fe=X.e.ul(le||(le=Object(ee.a)(["\n    max-height: calc(100vh - 200px);\n    overflow-y: auto;\n"]))),me=function(e){var n=e.films;return Object(ue.jsx)(fe,{children:n.map((function(e){return function(e){return Object(ue.jsx)(be,{film:e},e.id)}(e)}))})},je=X.e.p(de||(de=Object(ee.a)(["\n    color: #c62222;\n"]))),xe=X.e.p(he||(he=Object(ee.a)(["\n  color: ",";\n  display: inline-block;\n  font-size: 2.6rem;\n  margin: 0;\n"])),(function(e){return e.theme.primaryColor}));var Oe,Ce,ge,ve,Se,Ee,we,Fe,ye=function(e){var n=e.children,t=Object($.a)(e,["children"]);return Object(ue.jsx)(xe,Object(m.a)(Object(m.a)({},t),{},{children:n}))},Re=t(36),Te=t.n(Re),_e=function(){var e=Object(a.useContext)(X.a);return Object(ue.jsx)(Te.a,{type:"Oval",color:e.accentColor,height:40,width:40})},He=function(e){var n=e.character,t=Object(s.c)((function(e){return e.films})),r=t.selectedCharacterFilms,c=t.loading,o=t.error,i=Object(s.b)();Object(a.useEffect)((function(){var e;i((e=n.filmIds,{type:H.FETCH_FILMS,payload:{filmIds:e}}))}),[n.filmIds,i]);return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsxs)("h2",{children:["List of movies in which ",n.name," appeared"]}),c&&Object(ue.jsx)(_e,{}),!c&&Object(ue.jsx)(me,{films:r}),!c&&!o&&0===r.length&&Object(ue.jsx)(ye,{children:"No films found."}),!c&&o&&Object(ue.jsx)(je,{children:o})]})},ke=X.e.li(Oe||(Oe=Object(ee.a)(["\n    border-radius: 10px;\n    box-shadow: ",";\n    cursor: pointer;\n    padding: 1em 2em;\n"])),(function(e){return e.theme.boxShadow})),Ae=function(e){var n=e.character,t=e.onClick,r=n.homeworld,a=r.name,c=r.population;return Object(ue.jsxs)(ke,{onClick:function(){return t(n)},children:[Object(ue.jsx)("h3",{children:n.name}),Object(ue.jsxs)("p",{children:["Homeworld: ",a,", Population: ",c]})]})},Le=X.e.ul(Ce||(Ce=Object(ee.a)(["\n    display: grid;\n    gap: 2.5rem;\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n    margin: 2em 0;\n\n    @media "," {\n        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    }\n"])),ie.tablet),Ie=function(e){var n=e.characters,t=e.onCharacterSelect;return Object(ue.jsx)(Le,{children:n.map((function(e){return function(e){return Object(ue.jsx)(Ae,{character:e,onClick:t},e.id)}(e)}))})},Me=X.e.div(ge||(ge=Object(ee.a)(["\n    background: #fff;\n    border-radius: 5px;\n    margin: 20px auto;\n    max-height: calc(100vh - 40px);\n    overflow: hidden;\n    padding: 20px;\n    position: relative;\n    width: 60%;\n\n    @media "," {\n        width: 80%;\n    }\n\n    @media "," {\n        height: 100vh;\n        margin: 0;\n        max-height: initial;\n        padding: 20px 10px;\n        width: 100%;\n    }\n"])),ie.laptop,ie.tablet),Ue=X.e.button(ve||(ve=Object(ee.a)(["\n    background: none;\n    border: none;\n    color: #333;\n    cursor: pointer;\n    font-size: 30px;\n    font-weight: bold;\n    outline: none;\n    position: absolute;\n    right: 20px;\n    top: 10px;\n    transition: all 200ms;\n\n    &:hover {\n        color:",";\n    }\n"])),(function(e){return e.theme.accentColor})),De=X.e.div(Se||(Se=Object(ee.a)(["\n    margin: 1em 2em;\n\n    @media "," {\n        margin: 1em 0;\n    }\n"])),ie.tablet),ze=X.e.div(Ee||(Ee=Object(ee.a)(["\n    background: rgba(0, 0, 0, 0.7);\n    bottom: 0;\n    left: 0;\n    opacity: ",";\n    position: fixed;\n    right: 0;\n    top: 0;\n    transition: all 0.3s linear;\n    visibility: ",";\n"])),(function(e){return e.isOpen?"1":"0"}),(function(e){return e.isOpen?"visible":"hidden"})),Be=function(e){var n=e.isOpen,t=e.onClose,r=e.children;return Object(a.useEffect)((function(){return n&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}}),[n]),Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(ze,{isOpen:n,children:Object(ue.jsxs)(Me,{children:[Object(ue.jsx)(Ue,{onClick:t,children:"\xd7"}),Object(ue.jsx)(De,{children:r})]})})})},Pe=X.e.h1(we||(we=Object(ee.a)(["\n  color: ",";\n  margin: 0 0 2rem;\n\n  @media "," {\n    font-size: 1.6em;\n  }\n"])),(function(e){return e.theme.secondaryAccentColor}),ie.mobileL),qe=X.e.input(Fe||(Fe=Object(ee.a)(["\n  background-color: ",";\n  border: none;\n  border-radius: 50px;\n  box-shadow: ",";\n  color: ",";\n  font-size: 1.6em;\n  outline: none;\n  padding: 0.6em 1.5em;\n  width: 100%;\n\n  &::placeholder {\n    color: ",";\n  }\n\n  @media "," {\n    font-size: 1.2em;\n  }\n"])),(function(e){return e.theme.componentBackgroundColor}),(function(e){return e.theme.activeBoxShadow}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.placeholderColor}),ie.mobileL);var Ne,Je,Ve,We,Ge=function(e){return Object(ue.jsx)(qe,Object(m.a)({},e))},Ye=X.e.form(Ne||(Ne=Object(ee.a)(["\n  border-radius: 10px;\n  box-shadow: ",";\n  margin: 0 auto;\n  overflow: hidden;\n  padding: 4rem 2rem;\n  text-align: left;\n  width: 550px;\n\n  @media "," {\n    width: 100%;\n  }\n"])),(function(e){return e.theme.boxShadow}),ie.tablet),Ke=X.e.div(Je||(Je=Object(ee.a)(["\n  margin-bottom: 3rem;\n"]))),Qe=function(e){var n=e.searchCharacter,t=Object(a.useState)(""),r=Object(Z.a)(t,2),c=r[0],o=r[1];return Object(ue.jsxs)(Ye,{onSubmit:function(e){e.preventDefault(),n(c)},children:[Object(ue.jsx)(Pe,{children:"Search Your Favorite Characters"}),Object(ue.jsx)(Ke,{children:Object(ue.jsx)(Ge,{type:"text",name:"search",placeholder:"Search a character",onChange:function(e){o(e.target.value)}})}),Object(ue.jsx)(pe,{children:"Search"})]})},Xe=function(){var e=Object(s.c)((function(e){return e.characters})),n=e.characters,t=e.selectedCharacter,r=e.loading,c=e.page,o=e.error,i=Object(s.b)(),u=Object(a.useState)(null),l=Object(Z.a)(u,2),d=l[0],h=l[1],p=Object(a.useCallback)((function(e){h(e),i(O(e,1))}),[i]);return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(Qe,{searchCharacter:p}),Object(ue.jsx)(Ie,{characters:n.data,onCharacterSelect:function(e){i(C(e))}}),!r&&n.hasMoreData&&Object(ue.jsx)(pe,{onClick:function(){null!==d&&i(O(d,c))},children:"Load more characters"}),r&&Object(ue.jsx)(_e,{}),!r&&!o&&0===n.data.length&&null!==d&&Object(ue.jsx)(ye,{children:"No characters found."}),!r&&o&&Object(ue.jsx)(je,{children:o}),Object(ue.jsx)(Be,{isOpen:null!==t,onClose:function(){i(C(null))},children:null!==t&&Object(ue.jsx)(He,{character:t})})]})},Ze=X.e.div(Ve||(Ve=Object(ee.a)(["\n  margin: 2em 4em;\n\n  @media "," {\n    margin: 2em 1em;\n  }\n"])),ie.tablet),$e=Object(X.c)(We||(We=Object(ee.a)(['\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  body {\n    background-color: #ebecf0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-size: 1.6rem;\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n  }\n\n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n']))),en={accentColor:"#0850FA",activeBoxShadow:"inset 3px 5px 8px rgba(0, 0, 0, 0.2), -3px -5px 8px rgba(255, 255, 255, 0.5)",boxShadow:"5px 10px 15px rgba(0, 0, 0, 0.2), -5px -10px 15px rgba(255, 255, 255, 0.5)",componentBackgroundColor:"#ecedf0",placeholderColor:"#98a2ba",primaryColor:"#788093",progressBarLineStartColor:"rgb(6, 81, 250)",progressBarLineEndColor:"rgb(0, 223, 226)",secondaryAccentColor:"#326cf5"};var nn=function(){return Object(ue.jsxs)(X.b,{theme:en,children:[Object(ue.jsx)($e,{}),Object(ue.jsxs)(Ze,{children:[Object(ue.jsx)("h1",{children:"Star Wars"}),Object(ue.jsx)(Xe,{})]})]})},tn=function(){var e=Object(l.a)(),n=Object(u.applyMiddleware)(e),t=Object(d.composeWithDevTools)({}),r=Object(u.createStore)(V,t(n));return e.run(W),r}();i.a.render(Object(ue.jsx)(c.a.StrictMode,{children:Object(ue.jsx)(s.a,{store:tn,children:Object(ue.jsx)(nn,{})})}),document.getElementById("root")),Q()}},[[71,1,2]]]);
//# sourceMappingURL=main.bb7f5297.chunk.js.map