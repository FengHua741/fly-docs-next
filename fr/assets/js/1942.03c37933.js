"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[1942],{900:(e,n,t)=>{t.d(n,{A8:()=>B,wy:()=>O});var r=t(6540),o=t(961);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(o[t]=e[t]);return o}function c(e){var n=(0,r.useRef)({fn:e,curr:void 0}).current;if(n.fn=e,!n.curr){var t=Object.create(null);Object.keys(e).forEach((function(e){t[e]=function(){var t;return(t=n.fn[e]).call.apply(t,[n.fn].concat([].slice.call(arguments)))}})),n.curr=t}return n.curr}function u(e){return(0,r.useReducer)((function(e,n){return i({},e,"function"==typeof n?n(e):n)}),e)}var l=(0,r.createContext)(void 0),s="undefined"!=typeof window&&"ontouchstart"in window,d=function(e,n,t){return Math.max(Math.min(e,t),n)},f=function(e,n,t){return void 0===n&&(n=0),void 0===t&&(t=0),d(e,1*(1-t),Math.max(6,n)*(1+t))},v="undefined"==typeof window||/ServerSideRendering/.test(navigator&&navigator.userAgent)?r.useEffect:r.useLayoutEffect;function h(e,n,t){var o=(0,r.useRef)(n);o.current=n,(0,r.useEffect)((function(){function n(e){o.current(e)}return e&&window.addEventListener(e,n,t),function(){e&&window.removeEventListener(e,n)}}),[e])}var m=["container"];function p(e){var n=e.container,t=void 0===n?document.body:n,c=a(e,m);return(0,o.createPortal)(r.createElement("div",i({},c)),t)}function g(e){return r.createElement("svg",i({width:"44",height:"44",viewBox:"0 0 768 768"},e),r.createElement("path",{d:"M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"}))}function w(e){return r.createElement("svg",i({width:"44",height:"44",viewBox:"0 0 768 768"},e),r.createElement("path",{d:"M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z"}))}function y(e){return r.createElement("svg",i({width:"44",height:"44",viewBox:"0 0 768 768"},e),r.createElement("path",{d:"M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z"}))}function C(){return(0,r.useEffect)((function(){var e=document.body.style,n=e.overflow;return e.overflow="hidden",function(){e.overflow=n}}),[]),null}function x(e){var n=e.touches[0],t=n.clientX,r=n.clientY;if(e.touches.length>=2){var o=e.touches[1],i=o.clientX,a=o.clientY;return[(t+i)/2,(r+a)/2,Math.sqrt(Math.pow(i-t,2)+Math.pow(a-r,2))]}return[t,r,0]}var b=function(e,n,t,r){var o,i=t*n,a=(i-r)/2,c=e;return i<=r?(o=1,c=0):e>0&&a-e<=0?(o=2,c=a):e<0&&a+e<=0&&(o=3,c=-a),[o,c]};function E(e,n,t,r,o,i,a,c,u,l){void 0===a&&(a=innerWidth/2),void 0===c&&(c=innerHeight/2),void 0===u&&(u=0),void 0===l&&(l=0);var s=b(e,i,t,innerWidth)[0],d=b(n,i,r,innerHeight),f=innerWidth/2,v=innerHeight/2;return{x:a-i/o*(a-(f+e))-f+(r/t>=3&&t*i===innerWidth?0:s?u/2:u),y:c-i/o*(c-(v+n))-v+(d[0]?l/2:l),lastCX:a,lastCY:c}}function k(e,n,t){var r=e%180!=0;return r?[t,n,r]:[n,t,r]}function M(e,n,t){var r=k(t,innerWidth,innerHeight),o=r[0],i=r[1],a=0,c=o,u=i,l=e/n*i,s=n/e*o;return e<o&&n<i?(c=e,u=n):e<o&&n>=i?c=l:e>=o&&n<i||e/n>o/i?u=s:n/e>=3&&!r[2]?a=((u=s)-i)/2:c=l,{width:c,height:u,x:0,y:a,pause:!0}}function P(e,n){var t=n.leading,o=void 0!==t&&t,i=n.maxWait,a=n.wait,c=void 0===a?i||0:a,u=(0,r.useRef)(e);u.current=e;var l=(0,r.useRef)(0),s=(0,r.useRef)(),d=function(){return s.current&&clearTimeout(s.current)},f=(0,r.useCallback)((function(){var e=[].slice.call(arguments),n=Date.now();function t(){l.current=n,d(),u.current.apply(null,e)}var r=l.current,a=n-r;if(0===r&&(o&&t(),l.current=n),void 0!==i){if(a>i)return void t()}else a<c&&(l.current=n);d(),s.current=setTimeout((function(){t(),l.current=0}),c)}),[c,i,o]);return f.cancel=d,f}var R=function(e,n,t){return Y(e,n,t,100,(function(e){return e}),(function(){return Y(n,e,t)}))},_=function(e){return 1-Math.pow(1-e,4)};function Y(e,n,t,r,o,i){void 0===r&&(r=400),void 0===o&&(o=_);var a=n-e;if(0!==a){var c=Date.now(),u=0,l=function(){var n=Math.min(1,(Date.now()-c)/r);t(e+o(n)*a)&&n<1?s():(cancelAnimationFrame(u),n>=1&&i&&i())};s()}function s(){u=requestAnimationFrame(l)}}var X={T:0,L:0,W:0,H:0,FIT:void 0},N=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e},W=["className"];function S(e){var n=e.className,t=void 0===n?"":n,o=a(e,W);return r.createElement("div",i({className:"PhotoView__Spinner "+t},o),r.createElement("svg",{viewBox:"0 0 32 32",width:"36",height:"36",fill:"white"},r.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),r.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"})))}var T=["src","loaded","broken","className","onPhotoLoad","loadingElement","brokenElement"];function V(e){var n=e.src,t=e.loaded,o=e.broken,c=e.className,u=e.onPhotoLoad,l=e.loadingElement,s=e.brokenElement,d=a(e,T),f=N();return n&&!o?r.createElement(r.Fragment,null,r.createElement("img",i({className:"PhotoView__Photo"+(c?" "+c:""),src:n,onLoad:function(e){var n=e.target;f.current&&u({loaded:!0,naturalWidth:n.naturalWidth,naturalHeight:n.naturalHeight})},onError:function(){f.current&&u({broken:!0})},alt:""},d)),!t&&(r.createElement("span",{className:"PhotoView__icon"},l)||r.createElement(S,{className:"PhotoView__icon"}))):s?r.createElement("span",{className:"PhotoView__icon"},"function"==typeof s?s({src:n}):s):null}var A={naturalWidth:void 0,naturalHeight:void 0,width:void 0,height:void 0,loaded:void 0,broken:!1,x:0,y:0,touched:!1,maskTouched:!1,rotate:0,scale:1,CX:0,CY:0,lastX:0,lastY:0,lastCX:0,lastCY:0,lastScale:1,touchTime:0,touchLength:0,pause:!0,stopRaf:!0,reach:void 0};function I(e){var n=e.item,t=n.src,o=n.render,a=n.width,l=void 0===a?0:a,d=n.height,m=void 0===d?0:d,p=n.originRef,g=e.visible,w=e.speed,y=e.easing,C=e.wrapClassName,_=e.className,W=e.style,S=e.loadingElement,T=e.brokenElement,I=e.onPhotoTap,H=e.onMaskTap,L=e.onReachMove,F=e.onReachUp,D=e.onPhotoResize,O=e.isActive,B=e.expose,z=u(A),j=z[0],q=z[1],K=(0,r.useRef)(0),U=N(),G=j.naturalWidth,J=void 0===G?l:G,Q=j.naturalHeight,Z=void 0===Q?m:Q,$=j.width,ee=void 0===$?l:$,ne=j.height,te=void 0===ne?m:ne,re=j.loaded,oe=void 0===re?!t:re,ie=j.broken,ae=j.x,ce=j.y,ue=j.touched,le=j.stopRaf,se=j.maskTouched,de=j.rotate,fe=j.scale,ve=j.CX,he=j.CY,me=j.lastX,pe=j.lastY,ge=j.lastCX,we=j.lastCY,ye=j.lastScale,Ce=j.touchTime,xe=j.touchLength,be=j.pause,Ee=j.reach,ke=c({onScale:function(e){return Me(f(e))},onRotate:function(e){de!==e&&(B({rotate:e}),q(i({rotate:e},M(J,Z,e))))}});function Me(e,n,t){fe!==e&&(B({scale:e}),q(i({scale:e},E(ae,ce,ee,te,fe,e,n,t),e<=1&&{x:0,y:0})))}var Pe=P((function(e,n,t){if(void 0===t&&(t=0),(ue||se)&&O){var r=k(de,ee,te),o=r[0],a=r[1];if(0===t&&0===K.current){var c=Math.abs(e-ve)<=20,u=Math.abs(n-he)<=20;if(c&&u)return void q({lastCX:e,lastCY:n});K.current=c?n>he?3:2:1}var l,s=e-ge,d=n-we;if(0===t){var v=b(s+me,fe,o,innerWidth)[0],h=b(d+pe,fe,a,innerHeight);l=function(e,n,t,r){return n&&1===e||"x"===r?"x":t&&e>1||"y"===r?"y":void 0}(K.current,v,h[0],Ee),void 0!==l&&L(l,e,n,fe)}if("x"===l||se)return void q({reach:"x"});var m=f(fe+(t-xe)/100/2*fe,J/ee,.2);B({scale:m}),q(i({touchLength:t,reach:l,scale:m},E(ae,ce,ee,te,fe,m,e,n,s,d)))}}),{maxWait:8});function Re(e){return!le&&!ue&&(U.current&&q(i({},e,{pause:g})),U.current)}var _e,Ye,Xe,Ne,We,Se,Te,Ve,Ae=(We=function(e){return Re({x:e})},Se=function(e){return Re({y:e})},Te=function(e){return U.current&&(B({scale:e}),q({scale:e})),!ue&&U.current},Ve=c({X:function(e){return We(e)},Y:function(e){return Se(e)},S:function(e){return Te(e)}}),function(e,n,t,r,o,i,a,c,u,l,s){var d=k(l,o,i),f=d[0],v=d[1],h=b(e,c,f,innerWidth),m=h[0],p=h[1],g=b(n,c,v,innerHeight),w=g[0],y=g[1],C=Date.now()-s;if(C>=200||c!==a||Math.abs(u-a)>1){var x=E(e,n,o,i,a,c),M=x.x,P=x.y,_=m?p:M!==e?M:null,X=w?y:P!==n?P:null;return null!==_&&Y(e,_,Ve.X),null!==X&&Y(n,X,Ve.Y),void(c!==a&&Y(a,c,Ve.S))}var N=(e-t)/C,W=(n-r)/C,S=Math.sqrt(Math.pow(N,2)+Math.pow(W,2)),T=!1,V=!1;!function(e,n){var t,r=e,o=0,i=0,a=function(i){t||(t=i);var a=i-t,l=Math.sign(e),s=-.001*l,d=Math.sign(-r)*Math.pow(r,2)*2e-4,f=r*a+(s+d)*Math.pow(a,2)/2;o+=f,t=i,l*(r+=(s+d)*a)<=0?u():n(o)?c():u()};function c(){i=requestAnimationFrame(a)}function u(){cancelAnimationFrame(i)}c()}(S,(function(t){var r=e+t*(N/S),o=n+t*(W/S),i=b(r,a,f,innerWidth),c=i[0],u=i[1],l=b(o,a,v,innerHeight),s=l[0],d=l[1];if(c&&!T&&(T=!0,m?Y(r,u,Ve.X):R(u,r+(r-u),Ve.X)),s&&!V&&(V=!0,w?Y(o,d,Ve.Y):R(d,o+(o-d),Ve.Y)),T&&V)return!1;var h=T||Ve.X(u),p=V||Ve.Y(d);return h&&p}))}),Ie=(_e=I,Ye=function(e,n){Ee||Me(1!==fe?1:Math.max(2,J/ee),e,n)},Xe=(0,r.useRef)(0),Ne=P((function(){Xe.current=0,_e.apply(void 0,[].slice.call(arguments))}),{wait:300}),function(){var e=[].slice.call(arguments);Xe.current+=1,Ne.apply(void 0,e),Xe.current>=2&&(Ne.cancel(),Xe.current=0,Ye.apply(void 0,e))});function He(e,n){if(K.current=0,(ue||se)&&O){q({touched:!1,maskTouched:!1,pause:!1,stopRaf:!1,reach:void 0});var t=f(fe,J/ee);if(Ae(ae,ce,me,pe,ee,te,fe,t,ye,de,Ce),F(e,n),ve===e&&he===n){if(ue)return void Ie(e,n);se&&H(e,n)}}}function Le(e,n,t){void 0===t&&(t=0),q({touched:!0,CX:e,CY:n,lastCX:e,lastCY:n,lastX:ae,lastY:ce,lastScale:fe,touchLength:t,touchTime:Date.now()})}function Fe(e){q({maskTouched:!0,CX:e.clientX,CY:e.clientY,lastX:ae,lastY:ce})}h(s?void 0:"mousemove",(function(e){e.preventDefault(),Pe(e.clientX,e.clientY)})),h(s?void 0:"mouseup",(function(e){He(e.clientX,e.clientY)})),h(s?"touchmove":void 0,(function(e){e.preventDefault();var n=x(e);Pe.apply(void 0,n)}),{passive:!1}),h(s?"touchend":void 0,(function(e){var n=e.changedTouches[0];He(n.clientX,n.clientY)}),{passive:!1}),h("resize",P((function(){oe&&!ue&&(q(M(J,Z,de)),D())}),{maxWait:8})),v((function(){O&&B(i({scale:fe,rotate:de},ke))}),[O]);var De=function(e,n,t,o,i,a,l,s,d,f){var h=function(e,n,t,o,i){var a=(0,r.useRef)(!1),c=u({lead:!0,scale:t}),l=c[0],s=l.lead,d=l.scale,f=c[1],h=P((function(e){try{return i(!0),f({lead:!1,scale:e}),Promise.resolve()}catch(e){return Promise.reject(e)}}),{wait:o});return v((function(){a.current?(i(!1),f({lead:!0}),h(t)):a.current=!0}),[t]),s?[e*d,n*d,t/d]:[e*t,n*t,1]}(a,l,s,d,f),m=h[0],p=h[1],g=h[2],w=function(e,n,t,o,i){var a=(0,r.useState)(X),u=a[0],l=a[1],s=(0,r.useState)(0),d=s[0],f=s[1],v=(0,r.useRef)(),h=c({OK:function(){return e&&f(4)}});function m(e){i(!1),f(e)}return(0,r.useEffect)((function(){if(v.current||(v.current=Date.now()),t){if(function(e,n){var t=e&&e.current;if(t&&1===t.nodeType){var r=t.getBoundingClientRect();n({T:r.top,L:r.left,W:r.width,H:r.height,FIT:"IMG"===t.tagName?getComputedStyle(t).objectFit:void 0})}}(n,l),e)return Date.now()-v.current<250?(f(1),requestAnimationFrame((function(){f(2),requestAnimationFrame((function(){return m(3)}))})),void setTimeout(h.OK,o)):void f(4);m(5)}}),[e,t]),[d,u]}(e,n,t,d,f),y=w[0],C=w[1],x=C.W,b=C.FIT,E=innerWidth/2,k=innerHeight/2,M=y<3||y>4;return[M?x?C.L:E:o+(E-a*s/2),M?x?C.T:k:i+(k-l*s/2),m,M&&b?m*(C.H/x):p,0===y?g:M?x/(a*s)||.01:g,M?b?1:0:1,y,b]}(g,p,oe,ae,ce,ee,te,fe,w,(function(e){return q({pause:e})})),Oe=De[4],Be=De[6],ze="transform "+w+"ms "+y,je={className:_,onMouseDown:s?void 0:function(e){e.stopPropagation(),0===e.button&&Le(e.clientX,e.clientY,0)},onTouchStart:s?function(e){e.stopPropagation(),Le.apply(void 0,x(e))}:void 0,onWheel:function(e){if(!Ee){var n=f(fe-e.deltaY/100/2,J/ee);q({stopRaf:!0}),Me(n,e.clientX,e.clientY)}},style:{width:De[2]+"px",height:De[3]+"px",opacity:De[5],objectFit:4===Be?void 0:De[7],transform:de?"rotate("+de+"deg)":void 0,transition:Be>2?ze+", opacity "+w+"ms ease, height "+(Be<4?w/2:Be>4?w:0)+"ms "+y:void 0}};return r.createElement("div",{className:"PhotoView__PhotoWrap"+(C?" "+C:""),style:W,onMouseDown:!s&&O?Fe:void 0,onTouchStart:s&&O?function(e){return Fe(e.touches[0])}:void 0},r.createElement("div",{className:"PhotoView__PhotoBox",style:{transform:"matrix("+Oe+", 0, 0, "+Oe+", "+De[0]+", "+De[1]+")",transition:ue||be?void 0:ze,willChange:O?"transform":void 0}},t?r.createElement(V,i({src:t,loaded:oe,broken:ie},je,{onPhotoLoad:function(e){q(i({},e,e.loaded&&M(e.naturalWidth||0,e.naturalHeight||0,de)))},loadingElement:S,brokenElement:T})):o&&o({attrs:je,scale:Oe,rotate:de})))}var H={x:0,touched:!1,pause:!1,lastCX:void 0,lastCY:void 0,bg:void 0,lastBg:void 0,overlay:!0,minimal:!0,scale:1,rotate:0};function L(e){var n=e.loop,t=void 0===n?3:n,o=e.speed,i=e.easing,a=e.photoClosable,l=e.maskClosable,f=void 0===l||l,m=e.maskOpacity,x=void 0===m?1:m,b=e.pullClosable,E=void 0===b||b,k=e.bannerVisible,M=void 0===k||k,P=e.overlayRender,R=e.toolbarRender,_=e.className,Y=e.maskClassName,X=e.photoClassName,N=e.photoWrapClassName,W=e.loadingElement,S=e.brokenElement,T=e.images,V=e.index,A=void 0===V?0:V,L=e.onIndexChange,F=e.visible,D=e.onClose,O=e.afterClose,B=e.portalContainer,z=u(H),j=z[0],q=z[1],K=(0,r.useState)(0),U=K[0],G=K[1],J=j.x,Q=j.touched,Z=j.pause,$=j.lastCX,ee=j.lastCY,ne=j.bg,te=void 0===ne?x:ne,re=j.lastBg,oe=j.overlay,ie=j.minimal,ae=j.scale,ce=j.rotate,ue=j.onScale,le=j.onRotate,se=e.hasOwnProperty("index"),de=se?A:U,fe=se?L:G,ve=(0,r.useRef)(de),he=T.length,me=T[de],pe="boolean"==typeof t?t:he>t,ge=function(e,n){var t=(0,r.useReducer)((function(e){return!e}),!1)[1],o=(0,r.useRef)(0),i=function(n,t){var i=(0,r.useRef)(n);function a(e){i.current=e}return(0,r.useMemo)((function(){var n;n=a,e?(n(e),o.current=1):o.current=2}),[n]),[i.current,a]}(e),a=i[1];return[i[0],o.current,function(){t(),2===o.current&&(a(!1),n&&n()),o.current=0}]}(F,O),we=ge[0],ye=ge[1],Ce=ge[2];v((function(){if(we)return q({pause:!0,x:de*-(innerWidth+20)}),void(ve.current=de);q(H)}),[we]);var xe=c({close:function(e){le&&le(0),q({overlay:!0,lastBg:te}),D(e)},changeIndex:function(e,n){void 0===n&&(n=!1);var t=pe?ve.current+(e-de):e,r=he-1,o=d(t,0,r),i=pe?t:o,a=innerWidth+20;q({touched:!1,lastCX:void 0,lastCY:void 0,x:-a*i,pause:n}),ve.current=i,fe&&fe(pe?e<0?r:e>r?0:e:o)}}),be=xe.close,Ee=xe.changeIndex;function ke(e){return e?be():q({overlay:!oe})}function Me(){q({x:-(innerWidth+20)*de,lastCX:void 0,lastCY:void 0,pause:!0}),ve.current=de}function Pe(e,n,t,r){"x"===e?function(e){if(void 0!==$){var n=e-$,t=n;!pe&&(0===de&&n>0||de===he-1&&n<0)&&(t=n/2),q({touched:!0,lastCX:$,x:-(innerWidth+20)*ve.current+t,pause:!1})}else q({touched:!0,lastCX:e,x:J,pause:!1})}(n):"y"===e&&function(e,n){if(void 0!==ee){var t=null===x?null:d(x,.01,x-Math.abs(e-ee)/100/4);q({touched:!0,lastCY:ee,bg:1===n?t:x,minimal:1===n})}else q({touched:!0,lastCY:e,bg:te,minimal:!0})}(t,r)}function Re(e,n){var t=e-(null!=$?$:e),r=n-(null!=ee?ee:n),o=!1;if(t<-40)Ee(de+1);else if(t>40)Ee(de-1);else{var i=-(innerWidth+20)*ve.current;Math.abs(r)>100&&ie&&E&&(o=!0,be()),q({touched:!1,x:i,lastCX:void 0,lastCY:void 0,bg:x,overlay:!!o||oe})}}h("keydown",(function(e){if(F)switch(e.key){case"ArrowLeft":Ee(de-1,!0);break;case"ArrowRight":Ee(de+1,!0);break;case"Escape":be()}}));var _e,Ye,Xe,Ne=(_e=T,Ye=de,Xe=pe,(0,r.useMemo)((function(){var e=_e.length;return Xe?_e.concat(_e).concat(_e).slice(e+Ye-1,e+Ye+2):_e.slice(Math.max(Ye-1,0),Math.min(Ye+2,e+1))}),[_e,Ye,Xe]));if(!we)return null;var We=oe&&!ye,Se=F?te:re,Te=ue&&le&&{images:T,index:de,visible:F,onClose:be,onIndexChange:Ee,overlayVisible:We,overlay:me&&me.overlay,scale:ae,rotate:ce,onScale:ue,onRotate:le},Ve=o?o(ye):400,Ae=i?i(ye):"cubic-bezier(0.25, 0.8, 0.25, 1)",Ie=o?o(3):600,He=i?i(3):"cubic-bezier(0.25, 0.8, 0.25, 1)";return r.createElement(p,{className:"PhotoView-Portal"+(We?"":" PhotoView-Slider__clean")+(F?"":" PhotoView-Slider__willClose")+(_?" "+_:""),role:"dialog",onClick:function(e){return e.stopPropagation()},container:B},F&&r.createElement(C,null),r.createElement("div",{className:"PhotoView-Slider__Backdrop"+(Y?" "+Y:"")+(1===ye?" PhotoView-Slider__fadeIn":2===ye?" PhotoView-Slider__fadeOut":""),style:{background:Se?"rgba(0, 0, 0, "+Se+")":void 0,transitionTimingFunction:Ae,transitionDuration:(Q?0:Ve)+"ms",animationDuration:Ve+"ms"},onAnimationEnd:Ce}),M&&r.createElement("div",{className:"PhotoView-Slider__BannerWrap"},r.createElement("div",{className:"PhotoView-Slider__Counter"},de+1," / ",he),r.createElement("div",{className:"PhotoView-Slider__BannerRight"},R&&Te&&R(Te),r.createElement(g,{className:"PhotoView-Slider__toolbarIcon",onClick:be}))),Ne.map((function(e,n){var t=pe||0!==de?ve.current-1+n:de+n;return r.createElement(I,{key:pe?e.key+"/"+e.src+"/"+t:e.key,item:e,speed:Ve,easing:Ae,visible:F,onReachMove:Pe,onReachUp:Re,onPhotoTap:function(){return ke(a)},onMaskTap:function(){return ke(f)},wrapClassName:N,className:X,style:{left:(innerWidth+20)*t+"px",transform:"translate3d("+J+"px, 0px, 0)",transition:Q||Z?void 0:"transform "+Ie+"ms "+He},loadingElement:W,brokenElement:S,onPhotoResize:Me,isActive:ve.current===t,expose:q})})),!s&&M&&r.createElement(r.Fragment,null,(pe||0!==de)&&r.createElement("div",{className:"PhotoView-Slider__ArrowLeft",onClick:function(){return Ee(de-1,!0)}},r.createElement(w,null)),(pe||de+1<he)&&r.createElement("div",{className:"PhotoView-Slider__ArrowRight",onClick:function(){return Ee(de+1,!0)}},r.createElement(y,null))),P&&Te&&r.createElement("div",{className:"PhotoView-Slider__Overlay"},P(Te)))}var F=["children","onIndexChange","onVisibleChange"],D={images:[],visible:!1,index:0};function O(e){var n=e.children,t=e.onIndexChange,o=e.onVisibleChange,s=a(e,F),d=u(D),f=d[0],v=d[1],h=(0,r.useRef)(0),m=f.images,p=f.visible,g=f.index,w=c({nextId:function(){return h.current+=1},update:function(e){var n=m.findIndex((function(n){return n.key===e.key}));if(n>-1){var t=m.slice();return t.splice(n,1,e),void v({images:t})}v((function(n){return{images:n.images.concat(e)}}))},remove:function(e){v((function(n){var t=n.images.filter((function(n){return n.key!==e}));return{images:t,index:Math.min(t.length-1,g)}}))},show:function(e){var n=m.findIndex((function(n){return n.key===e}));v({visible:!0,index:n}),o&&o(!0,n,f)}}),y=c({close:function(){v({visible:!1}),o&&o(!1,g,f)},changeIndex:function(e){v({index:e}),t&&t(e,f)}}),C=(0,r.useMemo)((function(){return i({},f,w)}),[f,w]);return r.createElement(l.Provider,{value:C},n,r.createElement(L,i({images:m,visible:p,index:g,onIndexChange:y.changeIndex,onClose:y.close},s)))}var B=function(e){var n,t,o=e.src,a=e.render,u=e.overlay,s=e.width,d=e.height,f=e.triggers,v=void 0===f?["onClick"]:f,h=e.children,m=(0,r.useContext)(l),p=(n=function(){return m.nextId()},(t=(0,r.useRef)({sign:!1,fn:void 0}).current).sign||(t.sign=!0,t.fn=n()),t.fn),g=(0,r.useRef)(null);(0,r.useImperativeHandle)(null==h?void 0:h.ref,(function(){return g.current})),(0,r.useEffect)((function(){return function(){m.remove(p)}}),[]);var w=c({render:function(e){return a&&a(e)},show:function(e,n){m.show(p),function(e,n){if(h){var t=h.props[e];t&&t(n)}}(e,n)}}),y=(0,r.useMemo)((function(){var e={};return v.forEach((function(n){e[n]=w.show.bind(null,n)})),e}),[]);return(0,r.useEffect)((function(){m.update({key:p,src:o,originRef:g,render:w.render,overlay:u,width:s,height:d})}),[o]),h?r.Children.only((0,r.cloneElement)(h,i({},y,{ref:g}))):null}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(6540);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);