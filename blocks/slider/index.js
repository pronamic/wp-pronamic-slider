(()=>{"use strict";const e=window.wp.blockEditor,i=window.wp.components,l=window.wp.blocks,o=window.wp.i18n,s=JSON.parse('{"UU":"pronamic/slider"}'),n=window.ReactJSXRuntime;(0,l.registerBlockType)(s.UU,{edit:({attributes:l,setAttributes:s})=>{const r=(0,e.useBlockProps)({className:"swiper"});return(0,n.jsxs)("div",{children:[(0,n.jsx)(e.InspectorControls,{children:(0,n.jsxs)(i.PanelBody,{title:(0,o.__)("Settings","pronamic-slider"),initialOpen:!0,children:[(0,n.jsx)(i.RangeControl,{label:(0,o.__)("Slides per view","pronamic-slider"),value:l.slidesPerView,onChange:e=>s({slidesPerView:e}),min:1,max:10}),(0,n.jsx)(i.SelectControl,{label:(0,o.__)("Effect","pronamic-slider"),value:l.effect,options:[{label:(0,o.__)("Slide","pronamic-slider"),value:"slide"},{label:(0,o.__)("Fade","pronamic-slider"),value:"fade"}],onChange:e=>s({effect:e})}),(0,n.jsx)(i.ToggleControl,{label:(0,o.__)("Autoplay","pronamic-slider"),checked:l.autoplay,onChange:e=>s({autoplay:e})}),(0,n.jsx)(i.ToggleControl,{label:(0,o.__)("Loop","pronamic-slider"),checked:l.loop,onChange:e=>s({loop:e})})]})}),(0,n.jsx)("div",{...r,children:(0,n.jsx)(e.InnerBlocks,{allowedBlocks:["pronamic/slides","pronamic/slider-pagination","pronamic/slider-navigation"]})})]})},save:({attributes:i})=>{const l=e.useBlockProps.save({className:"swiper"});return(0,n.jsx)("div",{...l,children:(0,n.jsx)(e.InnerBlocks.Content,{})})}})})();