(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{89:function(e,t,n){},90:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),r=n(39),o=n.n(r),c=(n(89),n(90),n(119)),s=n(118),l=n(116),j=n(79),d=n(126),h=Object(j.a)({shape:{borderRadius:18},palette:{primary:{main:"#fea907"},background:{default:"#565452"}},typography:{button:{fontWeight:500,fontFamily:"Barlow",fontSize:[13,"!important"]},h1:{fontWeight:700,fontSize:[70,"!important"],color:"#efebe5"},h3:{fontWeight:700,color:"#efebe5",lineHeight:1},body1:{fontWeight:500,color:"#efebe5",fontSize:[25,"!important"],lineHeight:1.1},body2:{fontFamily:"Barlow",fontWeight:500,color:"#efebe5",fontSize:[13,"!important"],lineHeight:1},fontFamily:["Barlow Condensed","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),b=h=Object(d.a)(h),m=n(121),u=n(113),x=n(112),O=n(125),p=n(16),g=n(11),f=n(124),y=n(114),v=n(6),k=n(55),w={hello:"Cze\u015b\u0107!",intro:"Jestem Marcin grafik z Warszawy. Ch\u0119tnie stworz\u0119 z Tob\u0105 co\u015b wyj\u0105tkowego!",contact:"kontakt",howIWorkHeader:"Jak pracuj\u0119?",howIWork:"Ch\u0119tnie przygotuj\u0119 dla Ciebie kreacj\u0119 od A do Z. Od konceptu do przygotowania do druku. Mieszam r\xf3zne style i techniki dzi\u0119ki czemu wyr\xf3\u017cnisz si\u0119 na tle konkurencji!",myWorksHeader:"Moje prace",myWorks:"Wsp\xf3\u0142pracowa\u0142em nad kampaniami dla najwi\u0119kszych marek. Od pomys\u0142u do wdro\u017cenia. Pr\xf3cz warsztatu graficznego mog\u0119 pom\xf3c Ci w koncepcie Twojej marki."},S={hello:"Hi!",intro:"My name is Marcin. I will kindly create something unique for you",contact:"contact",howIWorkHeader:"How I work?",howIWork:"I will be happy to prepare for you a creation from A to Z. From concept to print preparation. I mix different styles and techniques so that you stand out from the competition!",myWorksHeader:"My works",myWorks:"I have worked on campaigns for major brands. From idea to implementation. Apart from graphic design workshop I can help you with the concept of your brand."},I=n.n(k)()((function(e,t){return{index:0,isPl:!0,strings:w,showTv:!1,kv:"biedronka",changeLanguage:function(){return t().isPl?e({strings:S,isPl:!1}):e({strings:w,isPl:!0})}}})),M=n(26),C=n(7);function z(e){var t=Object(x.a)(),n=Object(u.a)(t.breakpoints.down("sm")),i=I((function(e){return e.showTv})),r=I((function(e){return e.index})),o=Object(a.useRef)(),c=Object(a.useRef)(),s=Object(f.a)("HandSimplyfied.glb"),l=s.nodes,j=s.materials,d=s.animations,h=Object(y.a)(d,o),b=h.actions,m=h.names;Object(p.d)((function(e){var t=e.clock.getElapsedTime();o.current.position.y=(1+Math.sin(t/1.5))/15,o.current.rotation.x=Math.sin(t/2)/8,o.current.rotation.y=Math.sin(t/3)/5})),Object(a.useEffect)((function(){return b[m[r]].setLoop(v.LoopOnce,1),b[m[r]].reset().fadeIn(.3).play(),b[m[r]].clampWhenFinished=!0,function(){return b[m[r]].fadeOut(.3)}}),[r]),Object(a.useEffect)((function(){c.current.visible=1===r}),[r]),Object(a.useEffect)((function(){o.current.visible=!i}),[i]);var O=Object(M.useSpring)({opacity:1!==r?0:1}).opacity,k=Object(M.useSpring)({scale:i?.6:n?1.1:1,config:M.config.wobbly}).scale;return Object(C.jsx)("group",Object(g.a)(Object(g.a)({ref:o},e),{},{dispose:null,children:Object(C.jsxs)(M.a.group,{position:[-.05,-3.2,.04],scale:k,children:[Object(C.jsx)("primitive",{object:l.Bone042}),Object(C.jsx)("skinnedMesh",{geometry:l.hand.geometry,material:j.Fiber,skeleton:l.hand.skeleton}),Object(C.jsx)("skinnedMesh",{geometry:l.hand_1.geometry,material:j.Skin,skeleton:l.hand_1.skeleton}),Object(C.jsx)("skinnedMesh",{geometry:l.hand_2.geometry,material:j.Bone,skeleton:l.hand_2.skeleton}),Object(C.jsx)("skinnedMesh",{geometry:l.hand_3.geometry,material:j.Blood,skeleton:l.hand_3.skeleton}),Object(C.jsxs)("group",{ref:c,children:[Object(C.jsx)("skinnedMesh",{geometry:l.hand_4.geometry,skeleton:l.hand_4.skeleton,children:Object(C.jsx)(M.a.meshStandardMaterial,{color:"#e89f00",opacity:O,transparent:!0})}),Object(C.jsx)("skinnedMesh",{geometry:l.hand_5.geometry,skeleton:l.hand_5.skeleton,children:Object(C.jsx)(M.a.meshStandardMaterial,{color:"#4a0716",opacity:O,transparent:!0})})]})]})}))}f.a.preload("HandSimplyfied.glb");var W=n(13),T=n(115);function F(e){var t=Object(a.useRef)(),n=Object(f.a)("tvsmall.glb"),i=n.nodes,r=n.materials,o=Object(T.a)(["tex.jpg","tex2.jpg","testPattern.jpg"]),c=Object(W.a)(o,3),s=c[0],l=c[1],j=c[2],d=Object(x.a)(),h=Object(u.a)(d.breakpoints.down("sm")),b=I((function(e){return e.kv}));console.log(b);var m=Object(a.useState)(s),O=Object(W.a)(m,2),y=O[0],v=O[1];console.log(y);var k=I((function(e){return e.showTv})),w=I((function(e){return e.index}));console.log(w),Object(p.d)((function(e){var n=e.clock.getElapsedTime();t.current.position.y=(1+Math.sin(n/1.5))/15,t.current.rotation.y=Math.sin(n/3)/9})),l.flipY=!1,s.flipY=!1,j.flipY=!1,Object(a.useEffect)((function(){t.current.visible=!!k}),[k]),Object(a.useEffect)((function(){v(j);var e=setTimeout((function(){v("biedronka"===b?l:s)}),200);return function(){return clearTimeout(e)}}),[b]);var S=Object(M.useSpring)({scale:k?h?1:.9:.4,config:M.config.wobbly}).scale;return Object(C.jsxs)(M.animated.group,Object(g.a)(Object(g.a)({ref:t},e),{},{dispose:null,scale:S,visible:!1,children:[Object(C.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.Cube_1.geometry,material:i.Cube_1.material}),Object(C.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.Cube_2.geometry,material:r["Material.003"]}),Object(C.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.Cube002_Curve.geometry,material:r["Material.004"]}),Object(C.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.Cylinder.geometry,material:i.Cylinder.material}),Object(C.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.Cylinder003.geometry,material:i.Cylinder003.material}),Object(C.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.Cube004.geometry,children:Object(C.jsx)("meshStandardMaterial",{roughness:.3,map:y})})]}))}f.a.preload("tvsmall.glb");var H=function(){var e=Object(x.a)(),t=Object(u.a)(e.breakpoints.down("sm"));return Object(C.jsxs)(p.a,{camera:{position:[-2,2.3,5],fov:45},children:[Object(C.jsx)("directionalLight",{position:[8,6,3],intensity:2}),Object(C.jsx)("directionalLight",{position:[-12,1,3],intensity:1}),Object(C.jsxs)(a.Suspense,{fallback:null,children:[Object(C.jsx)(F,{}),Object(C.jsx)(z,{scale:[.2,.2,.2]}),Object(C.jsx)(O.a,{position:t?[0,-1.8,0]:[0,-1.49,0],width:4,height:4,opacity:.2,blur:2,far:20,rotation:[Math.PI/2,0,0]})]})]})};var _=function(){var e=Object(x.a)(),t=Object(u.a)(e.breakpoints.down("sm"));return Object(C.jsx)(m.a,{position:"fixed",width:"100vw",className:t?"gradient":"nic",children:Object(C.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(C.jsx)(m.a,{height:t?"60vh":"100vh",zIndex:"tooltip",children:Object(C.jsx)(H,{})})})})},E=n(117),P=n(122);var A=function(){var e=Object(x.a)(),t=Object(u.a)(e.breakpoints.down("sm")),n=I((function(e){return e.strings}));return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(m.a,{px:4,height:"90vh",display:"flex",alignItems:t?"flex-start":"center",children:Object(C.jsxs)(l.a,{item:!0,xs:8,lg:4,order:{xs:22,lg:1},children:[Object(C.jsx)(E.a,{variant:"h3",children:n.hello}),Object(C.jsx)(m.a,{pt:1,children:Object(C.jsx)(E.a,{variant:"body1",children:n.intro})}),Object(C.jsx)(m.a,{pt:2,children:Object(C.jsx)(P.a,{variant:"contained",color:"primary",elevation:0,children:n.contact})})]})})})},B=n(50);var L=function(){var e=Object(x.a)(),t=Object(u.a)(e.breakpoints.down("sm"));return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(m.a,{px:4,pt:3,pb:4,height:t?"30vh":"100vh",display:"flex",alignItems:t?"flex-end":"center",children:Object(C.jsxs)(l.a,{item:!0,xs:8,lg:4,order:{xs:22,lg:1},children:[Object(C.jsx)(E.a,{variant:"h3",children:"Skontaktuj si\u0119 ze mn\u0105"}),Object(C.jsx)(m.a,{pt:2,children:Object(C.jsx)(E.a,{variant:"body1",children:"Napisz mi co\u015b bla bl aje\u017celi chcesz nanana"})}),Object(C.jsx)(m.a,{pt:2,children:Object(C.jsx)(P.a,{variant:"contained",color:"primary",elevation:0,children:"KONTAKT"})})]})})})};var N=function(){var e=Object(x.a)(),t=Object(u.a)(e.breakpoints.down("sm")),n=I((function(e){return e.strings}));return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(m.a,{px:4,height:"90vh",display:"flex",alignItems:t?"flex-start":"center",children:Object(C.jsxs)(l.a,{item:!0,xs:8,lg:4,order:{xs:22,lg:1},children:[Object(C.jsx)(E.a,{variant:"h3",children:n.howIWorkHeader}),Object(C.jsx)(m.a,{pt:1,children:Object(C.jsx)(E.a,{variant:"body1",children:n.howIWork})})]})})})};var R=function(){var e=Object(x.a)(),t=Object(u.a)(e.breakpoints.down("sm")),n=I((function(e){return e.changeLanguage})),a=I((function(e){return e.isPl}));return Object(C.jsxs)(m.a,{display:"flex",position:"sticky",top:"0vh",justifyContent:"center",alignItems:"center",className:"solidBackground",px:t?4:1,zIndex:"tooltip",children:[Object(C.jsx)(m.a,{flexGrow:1,children:Object(C.jsx)(E.a,{variant:"body2",children:"MARCINJARKA@GMAIL.COM"})}),Object(C.jsx)(m.a,{children:Object(C.jsx)(P.a,{size:"small",onClick:n,color:"primary",children:a?"English":"Polski"})})]})},J={auchan:"icons/auchan.svg",biedronka:"icons/biedronka.svg",kaufland:"icons/kaufland.svg",maxima:"icons/maxima.svg",rimi:"icons/rimi.svg",spar:"icons/spar.svg",wiko:"icons/wiko.svg",netto:"icons/netto.svg"};var K=function(){var e=Object(x.a)(),t=Object(u.a)(e.breakpoints.down("sm")),n=I((function(e){return e.kv}));console.log(n);var a=I((function(e){return e.strings}));return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(m.a,{position:"relative",px:4,height:"90vh",display:"flex",alignItems:t?"flex-start":"center",children:Object(C.jsxs)(l.a,{item:!0,xs:8,lg:4,order:{xs:22,lg:1},children:[Object(C.jsx)(E.a,{variant:"h3",children:a.myWorksHeader}),Object(C.jsxs)(m.a,{pt:1,zIndex:"tooltip",children:[Object(C.jsx)(E.a,{variant:"body1",children:a.myWorks}),Object(C.jsxs)(l.a,{container:!0,alignItems:"center",justifyContent:"center",children:[Object.keys(J).map((function(e){return Object(C.jsx)(l.a,{item:!0,xs:3,sm:3,onClick:function(){return I.setState({kv:e})},children:Object(C.jsx)(m.a,{pr:2,pt:2,children:Object(C.jsx)("img",{src:J[e],height:"36px",className:"pointer"})})},e)})),Object(C.jsx)(m.a,{pt:2,children:Object(C.jsx)(E.a,{variant:"body2",children:a.myWorks})})]})]})]})})})};var U=function(){var e=Object(u.a)(b.breakpoints.down("sm")),t=(I((function(e){return e.index})),I((function(e){return e.showTv})));return console.log("tv is show?",t),Object(C.jsxs)(s.a,{theme:b,children:[Object(C.jsx)(c.a,{}),Object(C.jsx)(R,{}),Object(C.jsxs)(m.a,{children:[Object(C.jsx)(_,{}),Object(C.jsxs)(l.a,{container:!0,children:[Object(C.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(C.jsx)(m.a,{height:"60vh",zIndex:"tooltip"})}),Object(C.jsxs)(l.a,{item:!0,xs:12,md:6,children:[Object(C.jsx)(B.a,{as:"div",initialInView:!0,threshold:.5,onChange:function(e,t){e&&I.setState({index:2}),e&&I.setState({showTv:!1})},children:Object(C.jsx)(A,{})}),Object(C.jsx)(B.a,{as:"div",threshold:.5,rootMargin:e?"150px":"0px",onChange:function(e,t){e&&I.setState({index:1}),e&&I.setState({showTv:!1})},children:Object(C.jsx)(N,{})}),Object(C.jsx)(B.a,{as:"div",threshold:.5,rootMargin:e?"150px":"0px",onChange:function(e,t){e&&I.setState({index:1}),e&&I.setState({showTv:!0})},children:Object(C.jsx)(K,{})}),Object(C.jsx)(B.a,{as:"div",threshold:.5,rootMargin:"55px 0px",onChange:function(e,t){e&&I.setState({index:0}),e&&I.setState({showTv:!1})},children:Object(C.jsx)(L,{})})]})]}),Object(C.jsx)("div",{children:"test test"})]})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))};o.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(U,{})}),document.getElementById("root")),Y()}},[[99,1,2]]]);
//# sourceMappingURL=main.a78a976e.chunk.js.map