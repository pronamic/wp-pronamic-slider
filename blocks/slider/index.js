(()=>{"use strict";const e=window.wp.blockEditor,o=window.wp.components,l=window.wp.blocks,n=window.wp.i18n,i=JSON.parse('{"UU":"pronamic/slider"}'),s=window.ReactJSXRuntime;(0,l.registerBlockType)(i.UU,{edit:({attributes:l,setAttributes:i})=>{const a=(0,e.useBlockProps)({className:"swiper"});return(0,s.jsxs)("div",{children:[(0,s.jsx)(e.InspectorControls,{children:(0,s.jsxs)(o.PanelBody,{title:(0,n.__)("Settings","pronamic-slider"),initialOpen:!0,children:[(0,s.jsx)(o.RangeControl,{label:(0,n.__)("Slides per view","pronamic-slider"),value:l.slidesPerView,onChange:e=>i({slidesPerView:e}),min:1,max:10}),(0,s.jsx)(o.SelectControl,{label:(0,n.__)("Effect","pronamic-slider"),value:l.effect,options:[{label:(0,n.__)("Slide","pronamic-slider"),value:"slide"},{label:(0,n.__)("Fade","pronamic-slider"),value:"fade"}],onChange:e=>i({effect:e})}),(0,s.jsx)(o.ToggleControl,{label:(0,n.__)("Autoplay","pronamic-slider"),checked:l.autoplay,onChange:e=>i({autoplay:e})}),(0,s.jsx)(o.ToggleControl,{label:(0,n.__)("Loop","pronamic-slider"),checked:l.loop,onChange:e=>i({loop:e})}),(0,s.jsx)(o.TextControl,{label:(0,n.__)("Space between","pronamic-toc"),value:l.spaceBetween,onChange:e=>i({spaceBetween:e})})]})}),(0,s.jsx)("div",{...a,children:(0,s.jsx)(e.InnerBlocks,{allowedBlocks:["pronamic/slides","pronamic/slider-pagination","pronamic/slider-navigation","core/heading","core/columns"]})})]})},save:({attributes:o})=>{const l=e.useBlockProps.save({className:"swiper"});return(0,s.jsx)("div",{...l,children:(0,s.jsx)(e.InnerBlocks.Content,{})})}})})();