(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(19),c=t.n(i),o=t(8),u=t(31),l=t(37),s=t.n(l),p=t(57),m=t(38),f=t(39),h=t(40),d=t(41),g=t(42),b=t(43),v=[{int:"English",lang:"en"},{int:"Japanese",lang:"jp"}];u.a.use(p.a).use(s.a).init({debug:!0,lng:"en",fallBackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1},resources:{en:{translations:m,carousel:f,navigation:h},jp:{translations:d,carousel:g,navigation:b}},ns:["translations"],defaultNS:"translations"});var E=u.a,x=t(20),j=t(21),y=t(24),O=t(22),T=t(25),q=t(23),P=t(9),k=t(1),w=t(2);function A(){var e=Object(k.a)(["\n  display: flex;\n  margin-bottom: 5px;\n"]);return A=function(){return e},e}var _=w.a.div(A()),S=function(e){var n=e.handleLangChange,t=e.handleCheck;return r.a.createElement(_,null,v.map(function(e){return r.a.createElement("div",{key:e.int},r.a.createElement("input",{type:"radio",name:"lang",id:e.int,value:e.lang,checked:t(e.lang),onChange:n}),r.a.createElement("label",{htmlFor:e.lang},e.int))}))};function C(){var e=Object(k.a)(["\n  display: flex;\n"]);return C=function(){return e},e}var I=w.a.div(C()),L=[{title:"Home",route:"/"},{title:"Products",route:"/products"},{title:"Inquiry",route:"/inqury"},{title:"Technique",route:"/technique"},{title:"Access",route:"/access"},{title:"About",route:"/about"},{title:"Recruit",route:"/recruit"}];function R(){var e=Object(k.a)(["\n  list-style-type: none;\n  display: flex;\n  padding: 0;\n  & .links {\n    border: 2px solid blue;\n    margin: 5px;\n    padding: 10px 20px;\n    &:link {\n      text-decoration: none;\n    }\n    &:active,\n    :visited {\n      color: black;\n    }\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"]);return R=function(){return e},e}function H(){var e=Object(k.a)(["\n  height: 50px;\n  border: 4px solid red;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n"]);return H=function(){return e},e}var z=w.a.nav(H()),F=w.a.ul(R()),D=Object(o.c)("navigation")(function(e){var n=e.t;return r.a.createElement(z,null,r.a.createElement(F,null,L.map(function(e){return r.a.createElement("li",{key:e.title},r.a.createElement(q.b,{className:"links",exact:!0,to:e.route},r.a.createElement(o.b,null,n("".concat(e.title)))))})))}),J=function(e,n){var t=n.children;return r.a.createElement(I,null,r.a.createElement("div",null,t),r.a.createElement(D,{props:e}))};function M(){var e=Object(k.a)(["\n  font-size: 26px;\n  color: lightblue;\n"]);return M=function(){return e},e}var B=w.a.div(M()),N=t(48),W=t.n(N),V=(t(103),t(104),t(49)),G=t.n(V),K=t(50),Q=t.n(K),U=t(51),X=t.n(U),Y=t(52),Z=t.n(Y),$=t(53),ee=t.n($),ne=t(54),te=t.n(ne),ae=t(55),re=t.n(ae),ie=t(56),ce=t.n(ie),oe=[{img:G.a,alt:"lpw"},{img:X.a,alt:"ed_2017"},{img:Z.a,alt:"fronius_tpsi"},{img:Q.a,alt:"fronius_tpsi_robot"},{img:ee.a,alt:"hermle"},{img:te.a,alt:"lang"},{img:re.a,alt:"magswitch"},{img:ce.a,alt:"slm"}];function ue(){var e=Object(k.a)(["\n  color: lightblue;\n"]);return ue=function(){return e},e}var le=function(e){function n(){return Object(x.a)(this,n),Object(y.a)(this,Object(O.a)(n).apply(this,arguments))}return Object(T.a)(n,e),Object(j.a)(n,[{key:"render",value:function(){var e=this.props.t;return r.a.createElement(se,null,r.a.createElement(W.a,{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},oe.map(function(n){return r.a.createElement("div",null,r.a.createElement("img",{src:n.img,alt:e("".concat(n.alt))}))})))}}]),n}(a.Component),se=w.a.div(ue()),pe=Object(o.c)("carousel")(le),me=function(){return r.a.createElement(B,null,"This is the home page",r.a.createElement(pe,null))};function fe(){var e=Object(k.a)(["\n  font-size: 26px;\n  color: lightblue;\n"]);return fe=function(){return e},e}var he=w.a.div(fe()),de=function(){return r.a.createElement(he,null,"This is the Products Page")};function ge(){var e=Object(k.a)(["\n  font-size: 26px;\n  color: lightblue;\n"]);return ge=function(){return e},e}var be=w.a.div(ge()),ve=function(){return r.a.createElement(be,null,"This is the Inquiry Page")};function Ee(){var e=Object(k.a)(["\n  font-size: 26px;\n  color: lightblue;\n"]);return Ee=function(){return e},e}var xe=w.a.div(Ee()),je=function(){return r.a.createElement(xe,null,"This is the Technique Page")};function ye(){var e=Object(k.a)(["\n  font-size: 26px;\n  color: lightblue;\n"]);return ye=function(){return e},e}var Oe=w.a.div(ye()),Te=function(){return r.a.createElement(Oe,null,"This is the Access Page")};function qe(){var e=Object(k.a)(["\n  font-size: 26px;\n  color: lightblue;\n"]);return qe=function(){return e},e}var Pe=w.a.div(qe()),ke=function(){return r.a.createElement(Pe,null,"This is the About Page")};function we(){var e=Object(k.a)(["\n  font-size: 26px;\n  color: lightblue;\n"]);return we=function(){return e},e}var Ae=w.a.div(we()),_e=function(){return r.a.createElement(Ae,null,"This is the Recruit Page")},Se=function(e){function n(){var e,t;Object(x.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(y.a)(this,(e=Object(O.a)(n)).call.apply(e,[this].concat(r)))).state={lang:"en"},t.handleLangChange=function(e){var n=e.target.value;t.setState(function(e){return{lang:n}}),t.props.i18n.changeLanguage(n)},t.handleCheck=function(e){return t.state.lang===e},t}return Object(T.a)(n,e),Object(j.a)(n,[{key:"render",value:function(){var e=this.props.t;return r.a.createElement("div",null,r.a.createElement(S,{lang:this.state.lang,handleLangChange:this.handleLangChange,handleCheck:this.handleCheck}),r.a.createElement(q.a,null,r.a.createElement(J,{props:this.props},r.a.createElement("h1",null,r.a.createElement(o.b,null,e("Title")))),r.a.createElement(P.c,null,r.a.createElement(P.a,{exact:!0,path:"/",component:me}),r.a.createElement(P.a,{path:"/products",component:de}),r.a.createElement(P.a,{path:"/inqury",component:ve}),r.a.createElement(P.a,{path:"/technique",component:je}),r.a.createElement(P.a,{path:"/access",component:Te}),r.a.createElement(P.a,{path:"/about",component:ke}),r.a.createElement(P.a,{path:"/recruit",component:_e}))))}}]),n}(a.Component),Ce=Object(o.c)("translations")(Se);c.a.render(r.a.createElement(o.a,{i18n:E},r.a.createElement(Ce,null)),document.getElementById("root"))},38:function(e){e.exports={Title:"Title",Home:"Home",Products:"Products",Inquiry:"Inquiry",Technique:"Technique",Access:"Access",About:"About",Recruit:"Recruit"}},39:function(e){e.exports={ed_2017:"ED 2017",fronius_tpsi_robot:"Fronius TPSI Robot",fronius_tpsi:"Fronius TPSI",hermle:"Hermle",lang:"Lang",lpw:"LPW",magswitch:"MagSwitch",slm:"SLM"}},40:function(e){e.exports={Home:"Home",Products:"Products",Inquiry:"Inquiry",Technique:"Technique",Access:"Access",About:"About",Recruit:"Recruit"}},41:function(e){e.exports={Title:"\u8868\u984c",Home:"\u5bb6",Products:"\u88fd\u54c1\u60c5\u5831",Inquiry:"\u554f\u3044\u5408\u308f\u305b",Technique:"\u6280\u8853",Access:"\u30a2\u30af\u30bb\u30b9",About:"\u79c1\u305f\u3061\u306b\u95a2\u3057\u3066\u306f",Recruit:"\u30c1\u30fc\u30e0\u306b\u53c2\u52a0\u3059\u308b"}},42:function(e){e.exports={ed_2017:"\u611b\u77e5\u7523\u696d \u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u672c\u90e8",fronius_tpsi_robot:"\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30c8\u30fb\u30c7\u30b8\u30bf\u30eb\u6eb6\u63a5\u6a5f \u30d5\u30ed\u30cb\u30a6\u30b9TPS/i \uff0b \u30ed\u30dc\u30c3\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",fronius_tpsi:"\u30d5\u30ed\u30cb\u30a6\u30b9 Fronius\u3000TPS/i\u30c7\u30d3\u30e5\u30fc\uff01",hermle:"\u30cf\u30fc\u30e0\u30ec\u793e\uff15\u8ef8\u30de\u30b7\u30cb\u30f3\u30b0\u30bb\u30f3\u30bf",lang:"\u30e9\u30f3\u30b0\u793e\u30af\u30e9\u30f3\u30d4\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0",lpw:"LPW\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u793e\u306e\u9ad8\u54c1\u4f4d\u306a\u91d1\u5c5e\uff13D\u30d7\u30ea\u30f3\u30bf\u30fc(\u7a4d\u5c64\u9020\u5f62)\u7528\u5c02\u7528\u7c89\u672b\u306e\u3054\u7d39\u4ecb",magswitch:"\u30de\u30b0\u30b9\u30a4\u30c3\u30c1\u793e \u7523\u696d\u30ed\u30dc\u30c3\u30c8\u7528\u30de\u30b0\u30cd\u30c3\u30c8\u30b0\u30ea\u30c3\u30d1\u30fc",slm:"SLM\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u30ba\u793e\u306e\u91d1\u5c5e3D\u30d7\u30ea\u30f3\u30bf\u306e\u3054\u7d39\u4ecb"}},43:function(e){e.exports={Home:"\u5bb6",Products:"\u88fd\u54c1\u60c5\u5831",Inquiry:"\u554f\u3044\u5408\u308f\u305b",Technique:"\u6280\u8853",Access:"\u30a2\u30af\u30bb\u30b9",About:"\u79c1\u305f\u3061\u306b\u95a2\u3057\u3066\u306f",Recruit:"\u30c1\u30fc\u30e0\u306b\u53c2\u52a0\u3059\u308b"}},49:function(e,n,t){e.exports=t.p+"static/media/lpw.e8e207b6.jpg"},50:function(e,n,t){e.exports=t.p+"static/media/fronius_tpsi_robot.8be8db7d.jpg"},51:function(e,n,t){e.exports=t.p+"static/media/ed_2017.bcdeba73.jpg"},52:function(e,n,t){e.exports=t.p+"static/media/fronius_tpsi.a12e919d.jpg"},53:function(e,n,t){e.exports=t.p+"static/media/hermle.954108d5.jpg"},54:function(e,n,t){e.exports=t.p+"static/media/lang.8a1ef452.jpg"},55:function(e,n,t){e.exports=t.p+"static/media/magswitch.44d1d7cd.jpg"},56:function(e,n,t){e.exports=t.p+"static/media/slm.2f0f67af.jpg"},60:function(e,n,t){e.exports=t(105)}},[[60,1,2]]]);
//# sourceMappingURL=main.ee723d45.chunk.js.map