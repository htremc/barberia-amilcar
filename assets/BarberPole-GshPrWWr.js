import{_ as e,a as t,b as n,c as r,f as i,g as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h,u as g,v as _}from"./Lightformer-BT6eABXH.js";import{o as v,r as y,t as b}from"./index-jqU0SF0_.js";var x={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},S={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},C=v(y()),w=C.forwardRef(({scale:e=10,frames:r=1/0,opacity:i=1,width:a=1,height:s=1,blur:c=1,near:u=0,far:m=10,resolution:h=512,smooth:v=!0,color:y=`#000000`,depthWrite:b=!1,renderOrder:w,...T},E)=>{let D=C.useRef(null),O=d(e=>e.scene),k=d(e=>e.gl),A=C.useRef(null);a*=Array.isArray(e)?e[0]:e||1,s*=Array.isArray(e)?e[1]:e||1;let[j,M,N,P,F,I,L]=C.useMemo(()=>{let e=new n(h,h),t=new n(h,h);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new o(a,s).rotateX(Math.PI/2),i=new f(r),c=new l;c.depthTest=c.depthWrite=!1,c.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new g(y)}},e.fragmentShader=e.fragmentShader.replace(`void main() {`,`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace(`vec4( vec3( 1.0 - fragCoordZ ), opacity );`,`vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );`)};let u=new _(x),d=new _(S);return d.depthTest=u.depthTest=!1,[e,r,c,i,u,d,t]},[h,a,s,e,y]),R=e=>{P.visible=!0,P.material=F,F.uniforms.tDiffuse.value=j.texture,F.uniforms.h.value=e*1/256,k.setRenderTarget(L),k.render(P,A.current),P.material=I,I.uniforms.tDiffuse.value=L.texture,I.uniforms.v.value=e*1/256,k.setRenderTarget(j),k.render(P,A.current),P.visible=!1},z=0,B,V;return t(()=>{A.current&&(r===1/0||z<r)&&(z++,B=O.background,V=O.overrideMaterial,D.current.visible=!1,O.background=null,O.overrideMaterial=N,k.setRenderTarget(j),k.render(O,A.current),R(c),v&&R(c*.4),k.setRenderTarget(null),D.current.visible=!0,O.overrideMaterial=V,O.background=B)}),C.useImperativeHandle(E,()=>D.current,[]),C.createElement(`group`,p({"rotation-x":Math.PI/2},T,{ref:D}),C.createElement(`mesh`,{renderOrder:w,geometry:M,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},C.createElement(`meshBasicMaterial`,{transparent:!0,map:j.texture,opacity:i,depthWrite:b})),C.createElement(`orthographicCamera`,{ref:A,args:[-a/2,a/2,s/2,-s/2,u,m]}))}),T=b();function E(){let t=document.createElement(`canvas`);t.width=256,t.height=256;let n=t.getContext(`2d`);n.fillStyle=`#F2EBDD`,n.fillRect(0,0,256,256);let r=[`#C8102E`,`#F2EBDD`,`#1D3E8A`,`#F2EBDD`];for(let e=-8;e<16;e++){n.fillStyle=r[(e%4+4)%4],n.beginPath();let t=e*32;n.moveTo(t,256),n.lineTo(t+32,256),n.lineTo(t+32+256,0),n.lineTo(t+256,0),n.fill()}let i=new c(t);return i.wrapS=i.wrapT=a,i.repeat.set(1,2.2),i.colorSpace=e,i}function D({input:e,reduced:n,compact:r}){let a=(0,C.useRef)(null),o=(0,C.useMemo)(E,[]),{camera:s}=d(),c=r?.6:1;t((t,r)=>{let c=Math.min(r,.05);n||(o.offset.y-=c*.35);let l=a.current;if(!l)return;let u=e.current;l.rotation.z=i.damp(l.rotation.z,-u.x*.25,4,c),l.rotation.x=i.damp(l.rotation.x,u.y*.2,4,c),n||(l.rotation.y+=c*.15),s.position.z=i.damp(s.position.z,8.5-u.scroll*3,3,c)});let l=(0,T.jsx)(`meshStandardMaterial`,{color:`#C9A15B`,metalness:1,roughness:.22});return(0,T.jsxs)(`group`,{ref:a,scale:c,children:[(0,T.jsxs)(`mesh`,{children:[(0,T.jsx)(`cylinderGeometry`,{args:[.52,.52,3.2,48,1,!0]}),(0,T.jsx)(`meshStandardMaterial`,{map:o,roughness:.35,emissive:`#ffffff`,emissiveMap:o,emissiveIntensity:.18})]}),(0,T.jsxs)(`mesh`,{children:[(0,T.jsx)(`cylinderGeometry`,{args:[.66,.66,3.25,48,1,!0]}),(0,T.jsx)(`meshPhysicalMaterial`,{transparent:!0,opacity:.22,roughness:.02,metalness:0,clearcoat:1,ior:1.5,color:`#eaf2ff`,envMapIntensity:2.2})]}),[1,-1].map(e=>(0,T.jsxs)(`group`,{position:[0,e*1.75,0],children:[(0,T.jsxs)(`mesh`,{children:[(0,T.jsx)(`cylinderGeometry`,{args:[.78,.78,.3,48]}),l]}),(0,T.jsxs)(`mesh`,{position:[0,e*.3,0],scale:[1,e*.7,1],children:[(0,T.jsx)(`sphereGeometry`,{args:[.55,40,20,0,Math.PI*2,0,Math.PI/2]}),l]}),(0,T.jsxs)(`mesh`,{position:[0,e*.72,0],children:[(0,T.jsx)(`sphereGeometry`,{args:[.13,20,16]}),l]})]},e))]})}function O({reduced:e}){let n=(0,C.useRef)(null),i=(0,C.useMemo)(()=>{let e=new Float32Array(660);for(let t=0;t<220;t++)e[t*3]=(Math.random()-.5)*9,e[t*3+1]=(Math.random()-.5)*7,e[t*3+2]=(Math.random()-.5)*5;let t=new r;return t.setAttribute(`position`,new m(e,3)),t},[]);return t((t,r)=>{!e&&n.current&&(n.current.rotation.y+=r*.02,n.current.position.y=Math.sin(t.clock.elapsedTime*.2)*.2)}),(0,T.jsx)(`points`,{ref:n,geometry:i,children:(0,T.jsx)(`pointsMaterial`,{size:.025,color:`#E8C98A`,transparent:!0,opacity:.55,sizeAttenuation:!0,depthWrite:!1})})}function k({reduced:e,onReady:t}){let[n]=(0,C.useState)(()=>typeof window<`u`&&window.innerWidth<768),r=(0,C.useRef)({x:0,y:0,scroll:0});return(0,C.useEffect)(()=>{let e=e=>{r.current.x=e.clientX/innerWidth*2-1,r.current.y=e.clientY/innerHeight*2-1},t=e=>{e.gamma!=null&&e.beta!=null&&(r.current.x=Math.max(-1,Math.min(1,e.gamma/30)),r.current.y=Math.max(-1,Math.min(1,(e.beta-45)/30)))},n=()=>r.current.scroll=Math.min(1,scrollY/innerHeight);return addEventListener(`pointermove`,e),addEventListener(`deviceorientation`,t),addEventListener(`scroll`,n,{passive:!0}),()=>{removeEventListener(`pointermove`,e),removeEventListener(`deviceorientation`,t),removeEventListener(`scroll`,n)}},[]),(0,T.jsxs)(s,{dpr:[1,1.5],camera:{position:[0,0,8.5],fov:35},gl:{antialias:!0,alpha:!0},onCreated:()=>t?.(),children:[(0,T.jsx)(`ambientLight`,{intensity:.35}),(0,T.jsx)(`spotLight`,{position:[3,5,4],angle:.5,penumbra:1,intensity:60,color:`#FFD9A0`}),(0,T.jsx)(`pointLight`,{position:[-3,-1,2],intensity:8,color:`#6f8cff`}),(0,T.jsxs)(u,{resolution:128,children:[(0,T.jsx)(h,{intensity:3,position:[0,4,2],scale:[8,2,1],color:`#FFE2B0`}),(0,T.jsx)(h,{intensity:1.5,position:[-4,0,1],"rotation-y":Math.PI/2,scale:[10,1.5,1]}),(0,T.jsx)(h,{intensity:1,position:[4,0,-1],"rotation-y":-Math.PI/2,scale:[10,1,1],color:`#C8102E`})]}),(0,T.jsx)(D,{input:r,reduced:e,compact:n}),(0,T.jsx)(O,{reduced:e}),(0,T.jsx)(w,{position:[0,-2.75,0],opacity:.6,scale:6,blur:2.5,far:3})]})}export{k as default};