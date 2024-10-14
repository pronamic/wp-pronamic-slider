(()=>{"use strict";const e=window.wp.blockEditor,i=window.wp.components,s=window.wp.blocks,l=window.wp.i18n,n=JSON.parse('{"UU":"pronamic/slider"}'),o=window.ReactJSXRuntime;(0,s.registerBlockType)(n.UU,{edit:({attributes:s,setAttributes:n})=>{const r=(0,e.useBlockProps)({className:"swiper"});return(0,o.jsxs)("div",{children:[(0,o.jsx)(e.InspectorControls,{children:(0,o.jsxs)(i.PanelBody,{title:(0,l.__)("Settings","pronamic-slider"),initialOpen:!0,children:[(0,o.jsx)(i.RangeControl,{label:(0,l.__)("Slides per view","pronamic-slider"),value:s.slidesPerView,onChange:e=>n({slidesPerView:e}),min:1,max:10}),(0,o.jsx)(i.ToggleControl,{label:(0,l.__)("Autoplay","pronamic-slider"),checked:s.autoplay,onChange:e=>n({autoplay:e})}),(0,o.jsx)(i.SelectControl,{label:(0,l.__)("Effect","pronamic-slider"),value:s.effect,options:[{label:(0,l.__)("Slide","pronamic-slider"),value:"slide"},{label:(0,l.__)("Fade","pronamic-slider"),value:"fade"}],onChange:e=>n({effect:e})})]})}),(0,o.jsx)("div",{...r,children:(0,o.jsx)(e.InnerBlocks,{allowedBlocks:["pronamic/slides","pronamic/slider-pagination","pronamic/slider-navigation"]})})]})},save:({attributes:i})=>{const s=e.useBlockProps.save({className:"swiper"});return(0,o.jsx)("div",{...s,children:(0,o.jsx)(e.InnerBlocks.Content,{})})}})})();