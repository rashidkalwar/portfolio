(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[717],{4131:function(e,t,r){"use strict";r.d(t,{A:function(){return el}});var n=r(7294),o=r(4215),a=r(8427),i=r(6817),l=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&d(e,r,t[r]);return e},b=(e,t)=>c(e,p(t));let m={xs:18,sm:22,md:28,lg:34,xl:44};var g=(0,i.k)((e,{color:t,size:r,radius:n,variant:o,gradient:a})=>({root:b(y({},function({variant:e,theme:t,color:r,gradient:n}){let o=t.fn.variant({color:r,variant:e,gradient:n});return"gradient"===e?{border:0,backgroundImage:o.background,color:o.color,"&:hover":t.fn.hover({backgroundSize:"200%"})}:y({border:`1px solid ${o.border}`,backgroundColor:o.background,color:o.color},t.fn.hover({backgroundColor:o.hover}))}({variant:o,theme:e,color:t,gradient:a})),{position:"relative",height:e.fn.size({size:r,sizes:m}),minHeight:e.fn.size({size:r,sizes:m}),width:e.fn.size({size:r,sizes:m}),minWidth:e.fn.size({size:r,sizes:m}),borderRadius:e.fn.radius(n),padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center","&:active":e.activeStyles,"&:disabled, &[data-disabled]":{color:e.colors.gray["dark"===e.colorScheme?6:4],cursor:"not-allowed",backgroundColor:"transparent"===o?void 0:e.fn.themeColor("gray","dark"===e.colorScheme?8:1),borderColor:"transparent"===o?void 0:e.fn.themeColor("gray","dark"===e.colorScheme?8:1),backgroundImage:"none",pointerEvents:"none","&:active":{transform:"none"}},"&[data-loading]":{pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:e.fn.radius(n),cursor:"not-allowed"}}})})),v=Object.defineProperty,h=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))O.call(t,r)&&w(e,r,t[r]);if(h)for(var r of h(t))x.call(t,r)&&w(e,r,t[r]);return e},E=(e,t)=>{var r={};for(var n in e)O.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))0>t.indexOf(n)&&x.call(e,n)&&(r[n]=e[n]);return r},k=Object.defineProperty,P=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))z.call(t,r)&&N(e,r,t[r]);if(P)for(var r of P(t))S.call(t,r)&&N(e,r,t[r]);return e},M=(e,t)=>{var r={};for(var n in e)z.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&P)for(var n of P(e))0>t.indexOf(n)&&S.call(e,n)&&(r[n]=e[n]);return r},$=Object.defineProperty,I=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,A=(e,t,r)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,B=(e,t)=>{for(var r in t||(t={}))_.call(t,r)&&A(e,r,t[r]);if(I)for(var r of I(t))R.call(t,r)&&A(e,r,t[r]);return e},T=(e,t)=>{var r={};for(var n in e)_.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&I)for(var n of I(e))0>t.indexOf(n)&&R.call(e,n)&&(r[n]=e[n]);return r},L=r(9845),D=Object.defineProperty,H=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,F=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,U=(e,t)=>{for(var r in t||(t={}))Z.call(t,r)&&F(e,r,t[r]);if(H)for(var r of H(t))W.call(t,r)&&F(e,r,t[r]);return e},G=(e,t)=>{var r={};for(var n in e)Z.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&H)for(var n of H(e))0>t.indexOf(n)&&W.call(e,n)&&(r[n]=e[n]);return r};let K={bars:function(e){var{size:t,color:r}=e,o=E(e,["size","color"]);return n.createElement("svg",j({viewBox:"0 0 135 140",xmlns:"http://www.w3.org/2000/svg",fill:r,width:`${t}px`},o),n.createElement("rect",{y:"10",width:"15",height:"120",rx:"6"},n.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6"},n.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("rect",{x:"60",width:"15",height:"140",rx:"6"},n.createElement("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6"},n.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6"},n.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})))},oval:function(e){var{size:t,color:r}=e,o=M(e,["size","color"]);return n.createElement("svg",C({width:`${t}px`,height:`${t}px`,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:r},o),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",{transform:"translate(2.5 2.5)",strokeWidth:"5"},n.createElement("circle",{strokeOpacity:".5",cx:"16",cy:"16",r:"16"}),n.createElement("path",{d:"M32 16c0-9.94-8.06-16-16-16"},n.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"1s",repeatCount:"indefinite"})))))},dots:function(e){var{size:t,color:r}=e,o=T(e,["size","color"]);return n.createElement("svg",B({width:`${t}px`,height:`${t/4}px`,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:r},o),n.createElement("circle",{cx:"15",cy:"15",r:"15"},n.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("circle",{cx:"60",cy:"15",r:"9",fillOpacity:"0.3"},n.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("circle",{cx:"105",cy:"15",r:"15"},n.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})))}},q={xs:18,sm:22,md:36,lg:44,xl:58},V={size:"md"};function Y(e){let t=(0,o.N4)("Loader",V,e),{size:r,color:a,variant:i}=t,l=G(t,["size","color","variant"]),c=(0,o.rZ)(),p=i in K?i:c.loader;return n.createElement(L.x,U({role:"presentation",component:K[p]||K.bars,size:c.fn.size({size:r,sizes:q}),color:c.fn.variant({variant:"filled",primaryFallback:!1,color:a||c.primaryColor}).background},l))}Y.displayName="@mantine/core/Loader";var J=r(4736),Q=Object.defineProperty,X=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,er=(e,t,r)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,en=(e,t)=>{for(var r in t||(t={}))ee.call(t,r)&&er(e,r,t[r]);if(X)for(var r of X(t))et.call(t,r)&&er(e,r,t[r]);return e},eo=(e,t)=>{var r={};for(var n in e)ee.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&X)for(var n of X(e))0>t.indexOf(n)&&et.call(e,n)&&(r[n]=e[n]);return r};let ea={color:"gray",size:"md",variant:"subtle",loading:!1},ei=(0,n.forwardRef)((e,t)=>{let r=(0,o.N4)("ActionIcon",ea,e),{className:a,color:i,children:l,radius:c,size:p,variant:s,gradient:f,disabled:u,loaderProps:d,loading:y,unstyled:b}=r,v=eo(r,["className","color","children","radius","size","variant","gradient","disabled","loaderProps","loading","unstyled"]),{classes:h,cx:O,theme:x}=g({size:p,radius:c,color:i,variant:s,gradient:f},{name:"ActionIcon",unstyled:b}),w=x.fn.variant({color:i,variant:s}),j=n.createElement(Y,en({color:w.color,size:x.fn.size({size:p,sizes:m})-12},d));return n.createElement(J.k,en({className:O(h.root,a),ref:t,disabled:u,"data-disabled":u||void 0,"data-loading":y||void 0,unstyled:b},v),y?j:l)});ei.displayName="@mantine/core/ActionIcon";let el=(0,a.F)(ei)},5168:function(e,t,r){"use strict";r.d(t,{h:function(){return D}});var n=r(7294);let o={app:100,modal:200,popover:300,overlay:400,max:9999};var a=r(4215),i=r(917);function l({styles:e}){let t=(0,a.rZ)();return n.createElement(i.xB,{styles:(0,i.iv)("function"==typeof e?e(t):e)})}let c=(0,n.createContext)({});c.Provider;var p=r(6817);function s(e,t){if(!e)return[];let r=Object.keys(e).filter(e=>"base"!==e).map(r=>[t.fn.size({size:r,sizes:t.breakpoints}),e[r]]);return r.sort((e,t)=>e[0]-t[0]),r}var f=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&g(e,r,t[r]);if(y)for(var r of y(t))m.call(t,r)&&g(e,r,t[r]);return e},h=(e,t)=>u(e,d(t)),O=(0,p.k)((e,{height:t,fixed:r,position:n,zIndex:o,borderPosition:a})=>{let i="object"==typeof t&&null!==t?s(t,e).reduce((e,[t,r])=>(e[`@media (min-width: ${t}px)`]={height:r,minHeight:r},e),{}):null;return{root:h(v(h(v(v({},e.fn.fontStyles()),n),{zIndex:o,height:"object"==typeof t?(null==t?void 0:t.base)||"100%":t,maxHeight:"object"==typeof t?(null==t?void 0:t.base)||"100%":t,position:r?"fixed":"static",boxSizing:"border-box",backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white}),i),{borderBottom:"bottom"===a?`1px solid ${"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[2]}`:void 0,borderTop:"top"===a?`1px solid ${"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[2]}`:void 0})}}),x=r(9845),w=Object.defineProperty,j=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,P=(e,t,r)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,z=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&P(e,r,t[r]);if(j)for(var r of j(t))k.call(t,r)&&P(e,r,t[r]);return e},S=(e,t)=>{var r={};for(var n in e)E.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&j)for(var n of j(e))0>t.indexOf(n)&&k.call(e,n)&&(r[n]=e[n]);return r};let N=(0,n.forwardRef)((e,t)=>{var{children:r,className:a,classNames:i,styles:p,height:f,fixed:u=!1,withBorder:d=!0,position:y,zIndex:b=o.app,section:m,unstyled:g,__staticSelector:v}=e,h=S(e,["children","className","classNames","styles","height","fixed","withBorder","position","zIndex","section","unstyled","__staticSelector"]);let w=(0,n.useContext)(c),{classes:j,cx:E,theme:k}=O({height:f,fixed:w.fixed||u,position:y,zIndex:w.zIndex||b,borderPosition:d?"header"===m?"bottom":"top":"none"},{name:v,classNames:i,styles:p,unstyled:g}),P="object"==typeof f&&null!==f?s(f,k).reduce((e,[t,r])=>(e[`@media (min-width: ${t}px)`]={[`--mantine-${m}-height`]:`${r}px`},e),{}):null;return n.createElement(x.x,z({component:"header"===m?"header":"footer",className:E(j.root,a),ref:t},h),r,n.createElement(l,{styles:()=>({":root":z({[`--mantine-${m}-height`]:"object"==typeof f?`${null==f?void 0:f.base}px`||"100%":`${f}px`},P)})}))});N.displayName="@mantine/core/VerticalSection";var C=Object.defineProperty,M=Object.defineProperties,$=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,A=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,B=(e,t)=>{for(var r in t||(t={}))_.call(t,r)&&A(e,r,t[r]);if(I)for(var r of I(t))R.call(t,r)&&A(e,r,t[r]);return e},T=(e,t)=>M(e,$(t));let L={fixed:!1,position:{top:0,left:0,right:0},zIndex:o.app},D=(0,n.forwardRef)((e,t)=>{let r=(0,a.N4)("Header",L,e);return n.createElement(N,T(B({section:"header",__staticSelector:"Header"},r),{ref:t}))});D.displayName="@mantine/core/Header"},9845:function(e,t,r){"use strict";r.d(t,{x:function(){return M}});var n=r(7294),o=r(8427),a=r(6896),i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))0>t.indexOf(n)&&c.call(e,n)&&(r[n]=e[n]);return r},s=r(4215),f=r(2732);let u=["-xs","-sm","-md","-lg","-xl"],d={color:function(e,t){return"dimmed"===e?"dark"===t.colorScheme?t.colors.dark[2]:t.colors.gray[6]:t.fn.variant({variant:"filled",color:e,primaryFallback:!1}).background},default:function(e){return e},fontSize:function(e,t){return t.fn.size({size:e,sizes:t.fontSizes})},spacing:function(e,t){return u.includes(e)?-1*t.fn.size({size:e.replace("-",""),sizes:t.spacing}):t.fn.size({size:e,sizes:t.spacing})}},y={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},mx:{type:"spacing",property:["marginRight","marginLeft"]},my:{type:"spacing",property:["marginTop","marginBottom"]},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},px:{type:"spacing",property:["paddingRight","paddingLeft"]},py:{type:"spacing",property:["paddingTop","paddingBottom"]},bg:{type:"color",property:"background"},c:{type:"color",property:"color"},opacity:{type:"default",property:"opacity"},ff:{type:"default",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"default",property:"fontWeight"},lts:{type:"default",property:"letterSpacing"},ta:{type:"default",property:"textAlign"},lh:{type:"default",property:"lineHeight"},fs:{type:"default",property:"fontStyle"},tt:{type:"default",property:"textTransform"},td:{type:"default",property:"textDecoration"},w:{type:"default",property:"width"},miw:{type:"default",property:"minWidth"},maw:{type:"default",property:"maxWidth"},h:{type:"default",property:"height"},mih:{type:"default",property:"minHeight"},mah:{type:"default",property:"maxHeight"},bgsz:{type:"default",property:"background-size"},bgp:{type:"default",property:"background-position"},bgr:{type:"default",property:"background-repeat"},bga:{type:"default",property:"background-attachment"},pos:{type:"default",property:"position"},top:{type:"default",property:"top"},left:{type:"default",property:"left"},bottom:{type:"default",property:"bottom"},right:{type:"default",property:"right"},inset:{type:"default",property:"inset"},display:{type:"default",property:"display"}};var b=Object.defineProperty,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&h(e,r,t[r]);if(m)for(var r of m(t))v.call(t,r)&&h(e,r,t[r]);return e};function x(e,t,r=y){let n=Object.keys(r).reduce((n,o)=>(o in e&&void 0!==e[o]&&n.push(function({value:e,theme:t,getValue:r,property:n}){if(null==e)return;if("object"==typeof e){let o=(function(e,t){let r=Object.keys(e).filter(e=>"base"!==e).sort((e,r)=>t.fn.size({size:e,sizes:t.breakpoints})-t.fn.size({size:r,sizes:t.breakpoints}));return"base"in e?["base",...r]:r})(e,t).reduce((o,a)=>{if("base"===a&&void 0!==e.base){let i=r(e.base,t);return Array.isArray(n)?(n.forEach(e=>{o[e]=i}),o):(o[n]=i,o)}let l=r(e[a],t);return Array.isArray(n)?(o[t.fn.largerThan(a)]={},n.forEach(e=>{o[t.fn.largerThan(a)][e]=l}),o):(o[t.fn.largerThan(a)]={[n]:l},o)},{});return o}let a=r(e,t);return Array.isArray(n)?n.reduce((e,t)=>(e[t]=a,e),{}):{[n]:a}}({value:e[o],getValue:d[r[o].type],property:r[o].property,theme:t})),n),[]);return n.reduce((e,t)=>(Object.keys(t).forEach(r=>{"object"==typeof t[r]&&null!==t[r]&&r in e?e[r]=O(O({},e[r]),t[r]):e[r]=t[r]}),e),{})}function w(e,t){return"function"==typeof e?e(t):e}var j=Object.defineProperty,E=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,z=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,S=(e,t)=>{for(var r in t||(t={}))k.call(t,r)&&z(e,r,t[r]);if(E)for(var r of E(t))P.call(t,r)&&z(e,r,t[r]);return e},N=(e,t)=>{var r={};for(var n in e)k.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&E)for(var n of E(e))0>t.indexOf(n)&&P.call(e,n)&&(r[n]=e[n]);return r};let C=(0,n.forwardRef)((e,t)=>{var{className:r,component:o,style:i,sx:l}=e,c=N(e,["className","component","style","sx"]);let{systemStyles:u,rest:d}=function(e){let{m:t,mx:r,my:n,mt:o,mb:i,ml:l,mr:c,p:s,px:f,py:u,pt:d,pb:y,pl:b,pr:m,bg:g,c:v,opacity:h,ff:O,fz:x,fw:w,lts:j,ta:E,lh:k,fs:P,tt:z,td:S,w:N,miw:C,maw:M,h:$,mih:I,mah:_,bgsz:R,bgp:A,bgr:B,bga:T,pos:L,top:D,left:H,bottom:Z,right:W,inset:F,display:U}=e,G=p(e,["m","mx","my","mt","mb","ml","mr","p","px","py","pt","pb","pl","pr","bg","c","opacity","ff","fz","fw","lts","ta","lh","fs","tt","td","w","miw","maw","h","mih","mah","bgsz","bgp","bgr","bga","pos","top","left","bottom","right","inset","display"]),K=(0,a.L)({m:t,mx:r,my:n,mt:o,mb:i,ml:l,mr:c,p:s,px:f,py:u,pt:d,pb:y,pl:b,pr:m,bg:g,c:v,opacity:h,ff:O,fz:x,fw:w,lts:j,ta:E,lh:k,fs:P,tt:z,td:S,w:N,miw:C,maw:M,h:$,mih:I,mah:_,bgsz:R,bgp:A,bgr:B,bga:T,pos:L,top:D,left:H,bottom:Z,right:W,inset:F,display:U});return{systemStyles:K,rest:G}}(c);return n.createElement(o||"div",S({ref:t,className:function(e,t,r){let n=(0,s.rZ)(),{css:o,cx:a}=(0,f.Z)();return Array.isArray(e)?a(r,o(x(t,n)),e.map(e=>o(w(e,n)))):a(r,o(w(e,n)),o(x(t,n)))}(l,u,r),style:i},d))});C.displayName="@mantine/core/Box";let M=(0,o.F)(C)},1310:function(e,t,r){"use strict";r.d(t,{O:function(){return g}});var n=r(7294),o=r(4215),a=r(6817);let i={xs:12,sm:18,md:24,lg:34,xl:42};var l=(0,a.k)((e,{size:t,color:r,transitionDuration:n})=>{let o=e.fn.size({size:t,sizes:i}),a=r||("dark"===e.colorScheme?e.white:e.black);return{root:{borderRadius:e.radius.sm,width:`calc(${o}px + ${e.spacing.xs}px)`,height:`calc(${o}px + ${e.spacing.xs}px)`,padding:`calc(${e.spacing.xs}px / 2)`,cursor:"pointer"},burger:{position:"relative",userSelect:"none",boxSizing:"border-box","&, &::before, &::after":{display:"block",width:o,height:Math.ceil(o/12),backgroundColor:a,outline:"1px solid transparent",transitionProperty:"background-color, transform",transitionDuration:`${n}ms`,"@media (prefers-reduced-motion)":{transitionDuration:e.respectReducedMotion?"0ms":void 0}},"&::before, &::after":{position:"absolute",content:'""',left:0},"&::before":{top:-(o/3*1)},"&::after":{top:o/3},"&[data-opened]":{backgroundColor:"transparent","&::before":{transform:`translateY(${o/3}px) rotate(45deg)`},"&::after":{transform:`translateY(-${o/3}px) rotate(-45deg)`}}}}}),c=r(4736),p=Object.defineProperty,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&d(e,r,t[r]);return e},b=(e,t)=>{var r={};for(var n in e)f.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))0>t.indexOf(n)&&u.call(e,n)&&(r[n]=e[n]);return r};let m={size:"md",transitionDuration:300},g=(0,n.forwardRef)((e,t)=>{let r=(0,o.N4)("Burger",m,e),{className:a,opened:i,color:p,size:s,classNames:f,styles:u,transitionDuration:d}=r,g=b(r,["className","opened","color","size","classNames","styles","transitionDuration"]),{classes:v,cx:h}=l({color:p,size:s,transitionDuration:d},{classNames:f,styles:u,name:"Burger"});return n.createElement(c.k,y({className:h(v.root,a),ref:t},g),n.createElement("div",{"data-opened":i||void 0,className:v.burger}))});g.displayName="@mantine/core/Burger"},2445:function(e,t,r){"use strict";r.d(t,{W:function(){return b}});var n=r(7294),o=r(4215),a=(0,r(6817).k)((e,{fluid:t,size:r,sizes:n})=>({root:{paddingLeft:e.spacing.md,paddingRight:e.spacing.md,maxWidth:t?"100%":e.fn.size({size:r,sizes:n}),marginLeft:"auto",marginRight:"auto"}})),i=r(9845),l=Object.defineProperty,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&f(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&f(e,r,t[r]);return e},d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))0>t.indexOf(n)&&s.call(e,n)&&(r[n]=e[n]);return r};let y={sizes:{xs:540,sm:720,md:960,lg:1140,xl:1320}},b=(0,n.forwardRef)((e,t)=>{let r=(0,o.N4)("Container",y,e),{className:l,fluid:c,size:p,unstyled:s,sizes:f}=r,b=d(r,["className","fluid","size","unstyled","sizes"]),{classes:m,cx:g}=a({fluid:c,size:p,sizes:f},{unstyled:s,name:"Container"});return n.createElement(i.x,u({className:g(m.root,l),ref:t},b))});b.displayName="@mantine/core/Container"},6137:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(7294),o=r(4215),a=r(6817);let i={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var l=(0,a.k)((e,{spacing:t,position:r,noWrap:n,grow:o,align:a,count:l})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:a||"center",flexWrap:n?"nowrap":"wrap",justifyContent:i[r],gap:e.fn.size({size:t,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:o?`calc(${100/l}% - ${e.fn.size({size:t,sizes:e.spacing})-e.fn.size({size:t,sizes:e.spacing})/l}px)`:void 0,flexGrow:o?1:0}}})),c=r(9845),p=Object.defineProperty,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&d(e,r,t[r]);return e},b=(e,t)=>{var r={};for(var n in e)f.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))0>t.indexOf(n)&&u.call(e,n)&&(r[n]=e[n]);return r};let m={position:"left",spacing:"md"},g=(0,n.forwardRef)((e,t)=>{let r=(0,o.N4)("Group",m,e),{className:a,position:i,align:p,children:s,noWrap:f,grow:u,spacing:d,unstyled:g}=r,v=b(r,["className","position","align","children","noWrap","grow","spacing","unstyled"]),h=n.Children.toArray(s).filter(Boolean),{classes:O,cx:x}=l({align:p,grow:u,noWrap:f,spacing:d,position:i,count:h.length},{unstyled:g,name:"Group"});return n.createElement(c.x,y({className:x(O.root,a),ref:t},v),h)});g.displayName="@mantine/core/Group"},4736:function(e,t,r){"use strict";r.d(t,{k:function(){return P}});var n=r(7294),o=r(4215),a=r(8427),i=r(6817),l=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&d(e,r,t[r]);return e},b=(e,t)=>c(e,p(t)),m=(0,i.k)(e=>({root:b(y(y({},e.fn.focusStyles()),e.fn.fontStyles()),{cursor:"pointer",border:0,padding:0,appearance:"none",fontSize:e.fontSizes.md,backgroundColor:"transparent",textAlign:"left",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,textDecoration:"none",boxSizing:"border-box"})})),g=r(9845),v=Object.defineProperty,h=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))O.call(t,r)&&w(e,r,t[r]);if(h)for(var r of h(t))x.call(t,r)&&w(e,r,t[r]);return e},E=(e,t)=>{var r={};for(var n in e)O.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))0>t.indexOf(n)&&x.call(e,n)&&(r[n]=e[n]);return r};let k=(0,n.forwardRef)((e,t)=>{let r=(0,o.N4)("UnstyledButton",{},e),{className:a,component:i="button",unstyled:l}=r,c=E(r,["className","component","unstyled"]),{classes:p,cx:s}=m(null,{name:"UnstyledButton",unstyled:l});return n.createElement(g.x,j({component:i,ref:t,className:s(p.root,a),type:"button"===i?"button":void 0},c))});k.displayName="@mantine/core/UnstyledButton";let P=(0,a.F)(k)},1759:function(e,t,r){"use strict";r.d(t,{q:function(){return o}});var n=r(7294);function o(e,t){let[r,o]=(0,n.useState)(e),a=()=>{var e;r||(o(!0),null==(e=null==t?void 0:t.onOpen)||e.call(t))},i=()=>{var e;r&&(o(!1),null==(e=null==t?void 0:t.onClose)||e.call(t))},l=()=>{r?i():a()};return[r,{open:a,close:i,toggle:l}]}},6817:function(e,t,r){"use strict";r.d(t,{k:function(){return d}});var n=r(2732),o=r(4215),a=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e};function f(e){return`__mantine-ref-${e||""}`}function u(e,t,r){let n=e=>"function"==typeof e?e(t,r||{}):e||{};return Array.isArray(e)?e.map(e=>n(e.styles)).reduce((e,t)=>(Object.keys(t).forEach(r=>{e[r]?e[r]=s(s({},e[r]),t[r]):e[r]=s({},t[r])}),e),{}):n(e)}function d(e){let t="function"==typeof e?e:()=>e;return function(e,r){let a=(0,o.rZ)(),i=(0,o.O2)(null==r?void 0:r.name),l=(0,o.T1)(),{css:c,cx:p}=(0,n.Z)(),s=t(a,e,f),d=u(null==r?void 0:r.styles,a,e),y=u(i,a,e),b=Object.fromEntries(Object.keys(s).map(e=>{let t=p({[c(s[e])]:!(null==r?void 0:r.unstyled)},c(y[e]),c(d[e]));return[e,t]}));return{classes:function({cx:e,classes:t,context:r,classNames:n,name:o,cache:a}){let i=r.reduce((e,t)=>(Object.keys(t.classNames).forEach(r=>{"string"!=typeof e[r]?e[r]=`${t.classNames[r]}`:e[r]=`${e[r]} ${t.classNames[r]}`}),e),{});return Object.keys(t).reduce((r,l)=>(r[l]=e(t[l],i[l],null!=n&&n[l],Array.isArray(o)?o.filter(Boolean).map(e=>`${(null==a?void 0:a.key)||"mantine"}-${e}-${l}`).join(" "):o?`${(null==a?void 0:a.key)||"mantine"}-${o}-${l}`:null),r),{})}({cx:p,classes:b,context:i,classNames:null==r?void 0:r.classNames,name:null==r?void 0:r.name,cache:l}),cx:p,theme:a}}}},2732:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(5352),o=r(444),a=r(7294),i=r(8417);let l=(0,i.Z)({key:"mantine",prepend:!0});var c=r(4215),p=Object.defineProperty,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&d(e,r,t[r]);return e};let{cssFactory:b}={cssFactory:function(e){let{cache:t}=e,r=(...e)=>{let{ref:r,args:a}=function(e){let t;if(1!==e.length)return{args:e,ref:t};let[r]=e;if(!(r instanceof Object)||!("ref"in r))return{args:e,ref:t};t=r.ref;let n=y({},r);return delete n.ref,{args:[n],ref:t}}(e),i=(0,n.O)(a,t.registered);return(0,o.My)(t,i,!1),`${t.key}-${i.name}${void 0===r?"":` ${r}`}`},a=(...e)=>(function(e,t,r){let n=[],a=(0,o.fp)(e,n,r);return n.length<2?r:a+t(n)})(t.registered,r,function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(n&&(n+=" "),n+=t);return n}(e));return{css:r,cx:a}}};function m(){let e=function(){let e=(0,c.T1)();return e||l}();return function(e,t){let r=(0,a.useRef)();return(!r.current||t.length!==r.current.prevDeps.length||r.current.prevDeps.map((e,r)=>e===t[r]).indexOf(!1)>=0)&&(r.current={v:e(),prevDeps:[...t]}),r.current.v}(()=>b({cache:e}),[e])}},8427:function(e,t,r){"use strict";function n(e){return e}r.d(t,{F:function(){return n}})},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,o=r(7273).Z,a=n(r(7294)),i=r(1003),l=r(7795),c=r(4465),p=r(2692),s=r(8245),f=r(9246),u=r(227),d=r(3468);let y=new Set;function b(e,t,r,n){if(i.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,a=t+"%"+r+"%"+o;if(y.has(a))return;y.add(a)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:l.formatUrl(e)}let g=a.default.forwardRef(function(e,t){let r,n;let{href:l,as:y,children:g,prefetch:v,passHref:h,replace:O,shallow:x,scroll:w,locale:j,onClick:E,onMouseEnter:k,onTouchStart:P,legacyBehavior:z=!0!==Boolean(!0)}=e,S=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=g,z&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));let N=!1!==v,C=a.default.useContext(p.RouterContext),M=a.default.useContext(s.AppRouterContext),$=null!=C?C:M,I=!C,{href:_,as:R}=a.default.useMemo(()=>{if(!C){let e=m(l);return{href:e,as:y?m(y):e}}let[t,r]=i.resolveHref(C,l,!0);return{href:t,as:y?i.resolveHref(C,y):r||t}},[C,l,y]),A=a.default.useRef(_),B=a.default.useRef(R);z&&(n=a.default.Children.only(r));let T=z?n&&"object"==typeof n&&n.ref:t,[L,D,H]=f.useIntersection({rootMargin:"200px"}),Z=a.default.useCallback(e=>{(B.current!==R||A.current!==_)&&(H(),B.current=R,A.current=_),L(e),T&&("function"==typeof T?T(e):"object"==typeof T&&(T.current=e))},[R,T,_,H,L]);a.default.useEffect(()=>{$&&D&&N&&b($,_,R,{locale:j})},[R,_,D,j,N,null==C?void 0:C.locale,$]);let W={ref:Z,onClick(e){z||"function"!=typeof E||E(e),z&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),$&&!e.defaultPrevented&&function(e,t,r,n,o,l,c,p,s,f){let{nodeName:u}=e.currentTarget,d="A"===u.toUpperCase();if(d&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(r)))return;e.preventDefault();let y=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:p,scroll:c}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};s?a.default.startTransition(y):y()}(e,$,_,R,O,x,w,j,I,N)},onMouseEnter(e){z||"function"!=typeof k||k(e),z&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),$&&(N||!I)&&b($,_,R,{locale:j,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){z||"function"!=typeof P||P(e),z&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),$&&(N||!I)&&b($,_,R,{locale:j,priority:!0,bypassPrefetchedCheck:!0})}};if(!z||h||"a"===n.type&&!("href"in n.props)){let F=void 0!==j?j:null==C?void 0:C.locale,U=(null==C?void 0:C.isLocaleDomain)&&u.getDomainLocale(R,F,null==C?void 0:C.locales,null==C?void 0:C.domainLocales);W.href=U||d.addBasePath(c.addLocale(R,F,null==C?void 0:C.defaultLocale))}return z?a.default.cloneElement(n,W):a.default.createElement("a",Object.assign({},S,W),r)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:c}=e,p=c||!a,[s,f]=n.useState(!1),[u,d]=n.useState(null);n.useEffect(()=>{if(a){if(!p&&!s&&u&&u.tagName){let e=function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:a,elements:o},l.push(r),i.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(n);let t=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&l.splice(t,1)}}}(u,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!s){let n=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(n)}},[u,p,r,t,s]);let y=n.useCallback(()=>{f(!1)},[]);return[d,s,y]};var n=r(7294),o=r(4686);let a="function"==typeof IntersectionObserver,i=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},195:function(){},1664:function(e,t,r){e.exports=r(1551)}}]);