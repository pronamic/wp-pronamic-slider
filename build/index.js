(()=>{"use strict";const e=window.wp.blockEditor,i=window.wp.blocks,t=window.wp.components,s=window.wp.compose,r=window.wp.i18n,o=window.wp.hooks,n=window.wp.element,l=window.ReactJSXRuntime;(0,i.registerBlockVariation)("core/query",{name:"pronamic/slider",title:"Slider",description:"Displays a slider.",isActive:["namespace"],icon:"admin-site",allowedControls:["postType"],attributes:{namespace:"pronamic/slider",className:"swiper",query:{postType:"post"}},innerBlocks:[["core/post-template",{},[["core/post-title"],["core/post-excerpt"]],["core/query-no-results"]]],scope:["inserter"]}),(0,o.addFilter)("blocks.registerBlockType","pronamic/slider",((e,i)=>"core/query"!==i?e:e.attributes.namespace?(e.attributes={...e.attributes,slidesPerView:{type:"integer",default:1}},e):e));const a=(0,s.createHigherOrderComponent)((i=>s=>{const{attributes:o,setAttributes:a}=s,{slidesPerView:c,namespace:p}=o;return"pronamic/slider"!==p?(0,l.jsx)(i,{...s}):(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)(i,{...s}),(0,l.jsx)(e.InspectorControls,{children:(0,l.jsx)(t.PanelBody,{title:(0,r.__)("Settings"),initialOpen:!0,children:(0,l.jsx)(t.RangeControl,{label:(0,r.__)("Slides per view","pronamic-slider"),value:c,onChange:e=>a({slidesPerView:e}),min:1,max:10})})})]})}));(0,o.addFilter)("editor.BlockEdit","pronamic/slider",a)})();