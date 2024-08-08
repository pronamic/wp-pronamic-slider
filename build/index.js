(()=>{"use strict";var e,r={115:()=>{const e=window.wp.blockEditor,r=window.ReactJSXRuntime,{addFilter:t}=wp.hooks,{__}=wp.i18n,{createHigherOrderComponent:s}=wp.compose,{Fragment:o}=wp.element,{PanelBody:i,TextControl:n}=wp.components,{registerBlockVariation:a}=wp.blocks;a("core/query",{name:"pronamic/slider",title:"Slider",description:"Displays a slider.",isActive:["namespace"],icon:"admin-site",allowedControls:["postType"],attributes:{namespace:"pronamic/slider",sliderSettings:null,query:{postType:"camping"}},innerBlocks:[["core/post-template",{},[["core/post-title"],["core/post-excerpt"]],["core/query-no-results"]]],scope:["inserter"]}),t("editor.BlockEdit","pronamic/slider",s((t=>s=>{const{attributes:a,setAttributes:p}=s,{namespace:l}=a;return(0,r.jsxs)(o,{children:[(0,r.jsx)(t,{...s}),(0,r.jsx)(e.InspectorControls,{children:(0,r.jsx)(i,{title:__("Settings"),initialOpen:!0,children:(0,r.jsx)(n,{label:__("Namespace"),value:l,onChange:e=>{s.setAttributes({namespace:e})}})})})]})}))),t("editor.BlockListBlock","pronamic/slider",s((e=>t=>{const s={...t.wrapperProps,"data-swiper-settings":"slider-settings"};return(0,r.jsx)(e,{...t,wrapperProps:s})}))),t("blocks.getSaveContent.extraProps","pronamic/slider",(function(e,r,t){return"core/query"!==r.name?{...e}:{...e,"data-swiper-settings":"slider-settings"}}))}},t={};function s(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.m=r,e=[],s.O=(r,t,o,i)=>{if(!t){var n=1/0;for(c=0;c<e.length;c++){t=e[c][0],o=e[c][1],i=e[c][2];for(var a=!0,p=0;p<t.length;p++)(!1&i||n>=i)&&Object.keys(s.O).every((e=>s.O[e](t[p])))?t.splice(p--,1):(a=!1,i<n&&(n=i));if(a){e.splice(c--,1);var l=o();void 0!==l&&(r=l)}}return r}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,o,i]},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={57:0,350:0};s.O.j=r=>0===e[r];var r=(r,t)=>{var o,i,n=t[0],a=t[1],p=t[2],l=0;if(n.some((r=>0!==e[r]))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(p)var c=p(s)}for(r&&r(t);l<n.length;l++)i=n[l],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(c)},t=self.webpackChunkpronamic_slider=self.webpackChunkpronamic_slider||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var o=s.O(void 0,[350],(()=>s(115)));o=s.O(o)})();