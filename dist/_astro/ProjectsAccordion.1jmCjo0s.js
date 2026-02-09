import{r as p}from"./index.DiEladB3.js";var c={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m;function u(){if(m)return d;m=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function a(r,s,t){var n=null;if(t!==void 0&&(n=""+t),s.key!==void 0&&(n=""+s.key),"key"in s){t={};for(var o in s)o!=="key"&&(t[o]=s[o])}else t=s;return s=t.ref,{$$typeof:i,type:r,key:n,ref:s!==void 0?s:null,props:t}}return d.Fragment=l,d.jsx=a,d.jsxs=a,d}var x;function g(){return x||(x=1,c.exports=u()),c.exports}var e=g();const h=[{title:"Interaktive City-Screens",items:[{name:"City Screen A",desc:"Touch + gesture, multi-user moments."},{name:"City Screen B",desc:"Reactive visuals for public flow."}]},{title:"Digitale Schaufenster",items:[{name:"Retail Window 01",desc:"Motion + sensors in storefront."},{name:"Retail Window 02",desc:"Playable product storytelling."}]},{title:"Temporäre Installationen für Events und Marken",items:[{name:"Brand Moment X",desc:"Short-lived, high-impact interaction."},{name:"Event Portal",desc:"Queue-safe participatory piece."}]},{title:"Erlebnisse im öffentlichen Raum",items:[{name:"Urban Playfield",desc:"Light + sound + collective input."},{name:"Square Interaction",desc:"Crowd-driven narrative surfaces."}]}];function f({rows:i}){const[l,a]=p.useState(0);return e.jsxs("div",{className:"cats",children:[i.map((r,s)=>{const t=s===l;return e.jsxs("div",{className:`row ${t?"open":""}`,children:[e.jsxs("button",{className:"head",onClick:()=>a(t?-1:s),"aria-expanded":t,type:"button",children:[e.jsx("span",{className:"plus",children:t?"–":"+"}),e.jsx("span",{className:"title",children:r.title})]}),e.jsx("div",{className:"panel",style:{gridTemplateRows:t?"1fr":"0fr"},children:e.jsxs("div",{className:"panelInner",children:[e.jsx("div",{className:"list",children:r.items.map(n=>e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"name",children:n.name}),e.jsx("div",{className:"desc",children:n.desc})]},n.name))}),e.jsxs("div",{className:"thumb",children:[e.jsx("div",{className:"thumbMedia"}),e.jsxs("div",{className:"thumbText",children:[e.jsx("div",{className:"name",children:"Digitaler Adventskalender"}),e.jsx("div",{className:"desc",children:"Cooles Projekt wooooh."})]})]})]})}),e.jsx("div",{className:"rule"})]},r.title)}),e.jsx("style",{children:`
        .cats{
          padding-top: 18px;
        }
        .row{}
        .head{
          width: 100%;
          display:flex;
          gap: 14px;
          align-items: baseline;
          padding: 18px 0;
        }
        .plus{
          width: 22px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          color: rgba(17,17,17,.45);
          font-weight: 700;
        }
        .title{
          font-size: 16px;
          letter-spacing: -0.02em;
          opacity: .85;
          text-align:left;
        }
        .panel{
          display:grid;
          transition: grid-template-rows 320ms ease;
        }
        .panelInner{
          overflow:hidden;
          display:grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 22px;
          padding: 0 0 18px 36px;
        }
        .list{
          display:flex;
          flex-direction:column;
          gap: 12px;
          padding-top: 8px;
        }
        .item{
          border: 1px solid rgba(17,17,17,.10);
          background: rgba(255,255,255,.35);
          padding: 14px 14px;
        }
        .name{
          font-weight: 750;
          letter-spacing: -0.03em;
        }
        .desc{
          font-size: 13px;
          color: rgba(17,17,17,.60);
          line-height: 1.35;
          margin-top: 4px;
        }
        .thumb{
          border-left: 1px solid rgba(17,17,17,.10);
          padding-left: 18px;
          display:flex;
          flex-direction:column;
          gap: 10px;
          justify-content:center;
        }
        .thumbMedia{
          width: 100%;
          aspect-ratio: 16 / 9;
          background:
            linear-gradient(180deg, rgba(0,0,0,.06), rgba(0,0,0,0)),
            url("/images/team.jpg");
          background-size: cover;
          background-position: center;
          filter: saturate(.95) contrast(1.02);
        }
        .thumbText .name{ font-size: 14px; }
        .thumbText .desc{ font-size: 12px; }
        .rule{
          border-bottom: 1px solid rgba(17,17,17,.08);
        }
        @media (max-width: 860px){
          .panelInner{ grid-template-columns: 1fr; padding-left: 0; }
          .thumb{ border-left: 0; padding-left: 0; }
        }
      `})]})}function j(){const[i,l]=p.useState(!1),a=p.useMemo(()=>h,[]);return e.jsxs("div",{className:"projectsWrap",children:[e.jsxs("button",{className:"projectsToggle",onClick:()=>l(r=>!r),"aria-expanded":i,type:"button",children:[e.jsx("span",{class:"section-title",children:"projects"}),e.jsx("span",{class:"arrow",children:i?"–":">"})]}),e.jsx("div",{className:"outerPanel",style:{gridTemplateRows:i?"1fr":"0fr"},children:e.jsx("div",{className:"outerInner",children:e.jsx(f,{rows:a})})}),e.jsx("style",{children:`
        .projectsWrap{
          position: relative;
        }
        .projectsToggle{
          width: 100%;
          top: 0;
          display:flex;
          align-items:baseline;
          gap: 12px;
          padding: 10px 0 14px;
        }
        .outerPanel{
          display:grid;
          transition: grid-template-rows 360ms ease;
        }
        .outerInner{
          overflow:hidden;
          padding-top: 6px;
          border-top: 1px solid rgba(17,17,17,.10);
        }
      `})]})}export{j as default};
