(()=>{"use strict";const e=window.wp.blockEditor,o=window.wp.blocks,i=window.wp.components,t=window.wp.compose,l=window.wp.i18n,r=window.wp.hooks,s=window.wp.element,n=window.ReactJSXRuntime;(0,o.registerBlockVariation)("core/query",{name:"pronamic/slider",title:"Pronamic query loop slider",description:"Displays a query loop slider.",isActive:["namespace"],icon:"slides",allowedControls:["postType"],attributes:{namespace:"pronamic/slider",className:"swiper",query:{postType:"post"}},innerBlocks:[["core/post-template",{},[["core/post-title"],["core/post-excerpt"]]],["pronamic/slider-pagination"],["pronamic/slider-navigation"]],scope:["inserter"]}),(0,r.addFilter)("blocks.registerBlockType","pronamic/slider",((e,o)=>"core/query"!==o?e:e.attributes.namespace?(e.attributes={...e.attributes,slidesPerView:{type:"integer",default:1},autoplay:{type:"boolean",default:!1},loop:{type:"boolean",default:!1},effect:{type:"string"}},e):e));const a=(0,t.createHigherOrderComponent)((o=>t=>{const{attributes:r,setAttributes:a}=t;return"pronamic/slider"!==r.namespace?(0,n.jsx)(o,{...t}):(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)(o,{...t}),(0,n.jsx)(e.InspectorControls,{children:(0,n.jsxs)(i.PanelBody,{title:(0,l.__)("Settings"),initialOpen:!0,children:[(0,n.jsx)(i.RangeControl,{label:(0,l.__)("Slides per view","pronamic-slider"),value:r.slidesPerView,onChange:e=>a({slidesPerView:e}),min:1,max:10}),(0,n.jsx)(i.SelectControl,{label:(0,l.__)("Effect","pronamic-slider"),value:r.effect,options:[{label:(0,l.__)("Slide","pronamic-slider"),value:"slide"},{label:(0,l.__)("Fade","pronamic-slider"),value:"fade"}],onChange:e=>a({effect:e})}),(0,n.jsx)(i.ToggleControl,{label:(0,l.__)("Autoplay","pronamic-slider"),checked:r.autoplay,onChange:e=>a({autoplay:e})}),(0,n.jsx)(i.ToggleControl,{label:(0,l.__)("Loop","pronamic-slider"),checked:r.loop,onChange:e=>a({loop:e})})]})})]})}));(0,r.addFilter)("editor.BlockEdit","pronamic/slider",a)})();