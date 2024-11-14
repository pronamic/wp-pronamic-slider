- Run `npm run start` for development
- Run `npm run build` for production
- Run `npm run copy` for vendor scripts
- Run `npm run js-build` for frontend scripts
- Create pot file with `wp i18n make-pot ./ languages/pronamic-slider.pot`
- Create json files with `wp i18n make-json pronamic-slider-nl_NL.po --no-purge`

Advanced
==============

- Set `overflow: visible` on the `swiper` div to get an edge to edge experience. Set `overflow: hidden` to the parent container to prevent horizontal scrollbars.
