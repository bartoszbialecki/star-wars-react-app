(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var r,a,c=n(1),o=n.n(c),i=n(19),s=n.n(i),u=n(14),l=n(13),d=n(37),h=n(30),p=n(7),b=n.n(p),f=n(9),j=n(16),O=n(8);!function(e){e.FETCH_CHARACTERS="@@characters/FETCH_CHARACTERS",e.FETCH_CHARACTERS_SUCCESS="@@characters/FETCH_CHARACTERS_SUCCESS",e.FETCH_CHARACTERS_ERROR="@@characters/FETCH_CHARACTERS_ERROR",e.SELECT_CHARACTER="@@characters/SELECT_CHARACTER"}(r||(r={})),function(e){e.FETCH_FILMS="@@films/FETCH_FILMS",e.FETCH_FILMS_SUCCESS="@@films/FETCH_FILMS_SUCCESS",e.FETCH_FILMS_ERROR="@@films/FETCH_FILMS_ERROR",e.FETCH_CHARACTER_FILMS_SUCCESS="@@films/FETCH_CHARACTER_FILMS_SUCCESS"}(a||(a={}));var m={characters:{count:0,hasMoreData:!1,data:[]},selectedCharacter:null,loading:!1,error:null,page:1},C={films:[],selectedCharacterFilms:[],loading:!1,error:null},x=n(15),v=n(31),g=n(32),E=new(function(){function e(){Object(v.a)(this,e),this.baseUrl="https://swapi.dev/api/",this.peopleEndpoint="people/",this.planetsEndpoint="planets/",this.filmsEndpoint="films/",this.defaultHeaders={Accept:"application/json","Content-Type":"application/json; charset=UTF-8"}}return Object(g.a)(e,[{key:"fetchCharacters",value:function(){var e=Object(x.a)(b.a.mark((function e(t){var n,r,a,c=this,o=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,this.get("".concat(this.baseUrl).concat(this.peopleEndpoint,"?search=").concat(t,"&page=").concat(n));case 3:return r=e.sent,e.next=6,Promise.all(r.results.map(function(){var e=Object(x.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.mapToCharacter(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return a=e.sent,e.abrupt("return",{count:r.count,hasMoreData:null!==r.next,data:a});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchPlanet",value:function(){var e=Object(x.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("".concat(this.baseUrl).concat(this.planetsEndpoint).concat(t,"/"));case 2:return n=e.sent,e.abrupt("return",this.mapToPlanet(n));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchFilm",value:function(){var e=Object(x.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("".concat(this.baseUrl).concat(this.filmsEndpoint).concat(t,"/"));case 2:return n=e.sent,e.abrupt("return",this.mapToFilm(n));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getIdFromUrl",value:function(e){return+e.split("/").reverse()[1]}},{key:"mapToCharacter",value:function(){var e=Object(x.a)(b.a.mark((function e(t){var n,r,a=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.getIdFromUrl(t.homeworld),e.next=3,this.fetchPlanet(n);case 3:return r=e.sent,e.abrupt("return",{id:this.getIdFromUrl(t.url),name:t.name,homeworld:r,filmIds:t.films.map((function(e){return a.getIdFromUrl(e)}))});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"mapToPlanet",value:function(e){return{id:this.getIdFromUrl(e.url),name:e.name,population:e.population}}},{key:"mapToFilm",value:function(e){return{id:this.getIdFromUrl(e.url),title:e.title,releaseDate:new Date(e.release_date),openingCrawl:e.opening_crawl}}},{key:"get",value:function(){var e=Object(x.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(O.a)({method:"GET",headers:this.defaultHeaders},n),e.next=3,this.makeRequest(new Request(t,r));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"makeRequest",value:function(){var e=Object(x.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error(n.statusText);case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}());function S(e,t){return{type:r.FETCH_CHARACTERS,payload:{searchValue:e,page:t}}}function w(e){return{type:r.SELECT_CHARACTER,payload:{character:e}}}function F(e){return{type:a.FETCH_FILMS_SUCCESS,payload:{films:e}}}function R(e){return{type:a.FETCH_CHARACTER_FILMS_SUCCESS,payload:{films:e}}}var T=b.a.mark(I),y=b.a.mark(L),_=b.a.mark(M),H=b.a.mark(B),k=b.a.mark(P),A=b.a.mark(z);function I(e){var t,n,a,c;return b.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.searchValue,a=t.page,o.prev=1,o.next=4,Object(f.b)([E,E.fetchCharacters],n,a);case 4:return c=o.sent,o.next=7,Object(f.d)((s=c,{type:r.FETCH_CHARACTERS_SUCCESS,payload:{characters:s}}));case 7:o.next=13;break;case 9:return o.prev=9,o.t0=o.catch(1),o.next=13,Object(f.d)((i=o.t0.message,{type:r.FETCH_CHARACTERS_ERROR,payload:{error:i}}));case 13:case"end":return o.stop()}var i,s}),T,null,[[1,9]])}function L(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.f)(r.FETCH_CHARACTERS,I);case 2:case"end":return e.stop()}}),y)}function M(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(f.c)(L)]);case 2:case"end":return e.stop()}}),_)}var U=function(e,t){return t.find((function(t){return t.id===e}))},D=function(e){return e.films.films};function B(e){var t,n,r,c,o;return b.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload.filmIds,n=[],r=[],i.next=5,Object(f.e)(D);case 5:return c=i.sent,t.forEach((function(e){var t=U(e,c);t?n.push(t):r.push(e)})),i.prev=7,i.next=10,Object(f.a)(r.map((function(e){return Object(f.b)([E,E.fetchFilm],e)})));case 10:return o=i.sent,n.push.apply(n,Object(j.a)(o)),i.next=14,Object(f.d)(F(o));case 14:return i.next=16,Object(f.d)(R(n));case 16:i.next=22;break;case 18:return i.prev=18,i.t0=i.catch(7),i.next=22,Object(f.d)((s=i.t0.message,{type:a.FETCH_FILMS_ERROR,payload:{error:s}}));case 22:case"end":return i.stop()}var s}),H,null,[[7,18]])}function P(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.f)(a.FETCH_FILMS,B);case 2:case"end":return e.stop()}}),k)}function z(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(f.c)(P)]);case 2:case"end":return e.stop()}}),A)}var q=b.a.mark(N),J=Object(l.combineReducers)({characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.FETCH_CHARACTERS:return Object(O.a)(Object(O.a)({},e),{},{loading:!0,error:null,characters:1===t.payload.page?Object(O.a)(Object(O.a)({},e.characters),{},{data:[]}):e.characters});case r.FETCH_CHARACTERS_SUCCESS:var n=t.payload.characters,a=n.hasMoreData?e.page+1:1;return Object(O.a)(Object(O.a)({},e),{},{loading:!1,page:a,characters:{count:n.count,hasMoreData:n.hasMoreData,data:[].concat(Object(j.a)(e.characters.data),Object(j.a)(n.data))}});case r.FETCH_CHARACTERS_ERROR:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:t.payload.error});case r.SELECT_CHARACTER:return Object(O.a)(Object(O.a)({},e),{},{selectedCharacter:t.payload.character});default:return e}},films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.FETCH_FILMS:return Object(O.a)(Object(O.a)({},e),{},{error:null,loading:!0});case a.FETCH_FILMS_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,films:[].concat(Object(j.a)(e.films),Object(j.a)(t.payload.films))});case a.FETCH_FILMS_ERROR:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:t.payload.error});case a.FETCH_CHARACTER_FILMS_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{selectedCharacterFilms:t.payload.films});default:return e}}});function N(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(f.c)(M),Object(f.c)(z)]);case 2:case"end":return e.stop()}}),q)}var V,W,G,Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},K=n(4),Q=n(23),X=n(22),Z=n(6),$=K.d.button(V||(V=Object(Z.a)(["\n  border: none;\n  border-radius: 50px;\n  box-shadow: ",";\n  cursor: pointer;\n  font-size: 1.6em;\n  outline: none;\n  padding: 0.6em 3em;\n  transition: box-shadow 0.3s ease-in-out;\n\n  ",";\n\n  &:active {\n    box-shadow: ",";\n  }\n"])),(function(e){return e.theme.boxShadow}),(function(e){return e.disabled?Object(K.c)(W||(W=Object(Z.a)(["\n          background-color: rgba(0, 0, 0, 0.05);\n          color: rgba(0, 0, 0, 0.15);\n        "]))):Object(K.c)(G||(G=Object(Z.a)(["\n          background-color: ",";\n          color: ",";\n        "])),(function(e){return e.theme.componentBackgroundColor}),(function(e){return e.theme.primaryColor}))}),(function(e){return e.theme.activeBoxShadow})),ee=n(2);var te,ne,re,ae=function(e){var t=e.children,n=Object(X.a)(e,["children"]);return Object(ee.jsx)($,Object(O.a)(Object(O.a)({},n),{},{children:t}))},ce=function(e){var t,n,r=e.film,a=r.title,c=r.releaseDate,o=r.openingCrawl;return Object(ee.jsxs)("li",{children:[Object(ee.jsx)("h3",{children:a}),Object(ee.jsx)("p",{children:c.toLocaleDateString()}),Object(ee.jsx)("p",{children:(t=o,n=130,t.length>n?t.substring(0,n)+"...":t)})]})},oe=K.d.ul(te||(te=Object(Z.a)(["\n    max-height: calc(100vh - 200px);\n    overflow-y: auto;\n"]))),ie=function(e){var t=e.films;return Object(ee.jsx)(oe,{children:t.map((function(e){return function(e){return Object(ee.jsx)(ce,{film:e},e.id)}(e)}))})},se=K.d.p(ne||(ne=Object(Z.a)(["\n    color: #c62222;\n"]))),ue=K.d.p(re||(re=Object(Z.a)(["\n  color: ",";\n  display: inline-block;\n  font-size: 2.6rem;\n  margin: 0;\n"])),(function(e){return e.theme.primaryColor}));var le,de,he,pe,be,fe,je,Oe,me=function(e){var t=e.children,n=Object(X.a)(e,["children"]);return Object(ee.jsx)(ue,Object(O.a)(Object(O.a)({},n),{},{children:t}))},Ce=n(36),xe=n.n(Ce),ve=function(){var e=Object(c.useContext)(K.a);return Object(ee.jsx)(xe.a,{type:"Oval",color:e.accentColor,height:40,width:40})},ge=function(e){var t=e.character,n=Object(u.c)((function(e){return e.films})),r=n.selectedCharacterFilms,o=n.loading,i=n.error,s=Object(u.b)();Object(c.useEffect)((function(){var e;s((e=t.filmIds,{type:a.FETCH_FILMS,payload:{filmIds:e}}))}),[t.filmIds,s]);return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsxs)("h2",{children:["List of movies in which ",t.name," appeared"]}),o&&Object(ee.jsx)(ve,{}),!o&&Object(ee.jsx)(ie,{films:r}),!o&&!i&&0===r.length&&Object(ee.jsx)(me,{children:"No films found."}),!o&&i&&Object(ee.jsx)(se,{children:i})]})},Ee=K.d.li(le||(le=Object(Z.a)(["\n    border-radius: 10px;\n    box-shadow: ",";\n    cursor: pointer;\n    padding: 1em 2em;\n    width: 500px;\n"])),(function(e){return e.theme.boxShadow})),Se=function(e){var t=e.character,n=e.onClick,r=t.homeworld,a=r.name,c=r.population;return Object(ee.jsxs)(Ee,{onClick:function(){return n(t)},children:[Object(ee.jsx)("h3",{children:t.name}),Object(ee.jsxs)("p",{children:["Homeworld: ",a,", Population: ",c]})]})},we=K.d.ul(de||(de=Object(Z.a)(["\n    display: grid;\n    gap: 2.5rem;\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n    margin: 2em 0;\n"]))),Fe=function(e){var t=e.characters,n=e.onCharacterSelect;return Object(ee.jsx)(we,{children:t.map((function(e){return function(e){return Object(ee.jsx)(Se,{character:e,onClick:n},e.id)}(e)}))})},Re=K.d.div(he||(he=Object(Z.a)(["\n    background: #fff;\n    border-radius: 5px;\n    margin: 20px auto;\n    max-height: calc(100vh - 40px);\n    overflow: hidden;\n    padding: 20px;\n    position: relative;\n    width: 60%;\n"]))),Te=K.d.button(pe||(pe=Object(Z.a)(["\n    background: none;\n    border: none;\n    color: #333;\n    cursor: pointer;\n    font-size: 30px;\n    font-weight: bold;\n    outline: none;\n    position: absolute;\n    right: 20px;\n    top: 10px;\n    transition: all 200ms;\n"]))),ye=K.d.div(be||(be=Object(Z.a)(["\n    margin: 1em 2em;\n"]))),_e=K.d.div(fe||(fe=Object(Z.a)(["\n    background: rgba(0, 0, 0, 0.7);\n    bottom: 0;\n    left: 0;\n    opacity: ",";\n    position: fixed;\n    right: 0;\n    top: 0;\n    transition: all 0.3s linear;\n    visibility: ",";\n"])),(function(e){return e.isOpen?"1":"0"}),(function(e){return e.isOpen?"visible":"hidden"})),He=function(e){var t=e.isOpen,n=e.onClose,r=e.children;return Object(ee.jsx)(ee.Fragment,{children:Object(ee.jsx)(_e,{isOpen:t,children:Object(ee.jsxs)(Re,{children:[Object(ee.jsx)(Te,{onClick:n,children:"\xd7"}),Object(ee.jsx)(ye,{children:r})]})})})},ke=K.d.h1(je||(je=Object(Z.a)(["\n  color: ",";\n  margin: 0 0 2rem;\n"])),(function(e){return e.theme.secondaryAccentColor})),Ae=K.d.input(Oe||(Oe=Object(Z.a)(["\n  background-color: ",";\n  border: none;\n  border-radius: 50px;\n  box-shadow: ",";\n  color: ",";\n  font-size: 1.6em;\n  outline: none;\n  padding: 0.6em 1.5em;\n  width: 100%;\n\n  &::placeholder {\n    color: ",";\n  }\n"])),(function(e){return e.theme.componentBackgroundColor}),(function(e){return e.theme.activeBoxShadow}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.placeholderColor}));var Ie,Le,Me,Ue=function(e){return Object(ee.jsx)(Ae,Object(O.a)({},e))},De=K.d.form(Ie||(Ie=Object(Z.a)(["\n  border-radius: 10px;\n  box-shadow: ",";\n  margin: 0 auto;\n  overflow: hidden;\n  padding: 4rem 2rem;\n  text-align: left;\n  width: 600px;\n"])),(function(e){return e.theme.boxShadow})),Be=K.d.div(Le||(Le=Object(Z.a)(["\n  margin-bottom: 3rem;\n"]))),Pe=function(e){var t=e.searchCharacter,n=Object(c.useState)(""),r=Object(Q.a)(n,2),a=r[0],o=r[1];return Object(ee.jsxs)(De,{onSubmit:function(e){e.preventDefault(),t(a)},children:[Object(ee.jsx)(ke,{children:"Search Your Favorite Characters"}),Object(ee.jsx)(Be,{children:Object(ee.jsx)(Ue,{type:"text",name:"search",placeholder:"Search a character",onChange:function(e){o(e.target.value)}})}),Object(ee.jsx)(ae,{children:"Search"})]})},ze=function(){var e=Object(u.c)((function(e){return e.characters})),t=e.characters,n=e.selectedCharacter,r=e.loading,a=e.page,o=e.error,i=Object(u.b)(),s=Object(c.useState)(null),l=Object(Q.a)(s,2),d=l[0],h=l[1],p=Object(c.useCallback)((function(e){h(e),i(S(e,1))}),[i]);return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(Pe,{searchCharacter:p}),Object(ee.jsx)(Fe,{characters:t.data,onCharacterSelect:function(e){i(w(e))}}),!r&&t.hasMoreData&&Object(ee.jsx)(ae,{onClick:function(){null!==d&&i(S(d,a))},children:"Load more characters"}),r&&Object(ee.jsx)(ve,{}),!r&&!o&&0===t.data.length&&null!==d&&Object(ee.jsx)(me,{children:"No characters found."}),!r&&o&&Object(ee.jsx)(se,{children:o}),Object(ee.jsx)(He,{isOpen:null!==n,onClose:function(){i(w(null))},children:null!==n&&Object(ee.jsx)(ge,{character:n})})]})},qe=K.d.div(Me||(Me=Object(Z.a)(["\n  margin: 2em 4em;\n"]))),Je={accentColor:"#0850FA",activeBoxShadow:"inset 3px 5px 8px rgba(0, 0, 0, 0.2), -3px -5px 8px rgba(255, 255, 255, 0.5)",boxShadow:"5px 10px 15px rgba(0, 0, 0, 0.2), -5px -10px 15px rgba(255, 255, 255, 0.5)",componentBackgroundColor:"#ecedf0",placeholderColor:"#98a2ba",primaryColor:"#788093",progressBarLineStartColor:"rgb(6, 81, 250)",progressBarLineEndColor:"rgb(0, 223, 226)",secondaryAccentColor:"#326cf5"};var Ne=function(){return Object(ee.jsx)(K.b,{theme:Je,children:Object(ee.jsxs)(qe,{children:[Object(ee.jsx)("h1",{children:"Star Wars"}),Object(ee.jsx)(ze,{})]})})},Ve=(n(71),function(){var e=Object(d.a)(),t=Object(l.applyMiddleware)(e),n=Object(h.composeWithDevTools)({}),r=Object(l.createStore)(J,n(t));return e.run(N),r}());s.a.render(Object(ee.jsx)(o.a.StrictMode,{children:Object(ee.jsx)(u.a,{store:Ve,children:Object(ee.jsx)(Ne,{})})}),document.getElementById("root")),Y()}},[[72,1,2]]]);
//# sourceMappingURL=main.16f53700.chunk.js.map