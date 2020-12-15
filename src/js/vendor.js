import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';

// import 'lazysizes';
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import {createPopper} from '@popperjs/core';
// import './vendor/jquery.mask';
// import './vendor/evo-calendar';
// import './vendor/zoom';
// import './vendor/player';
svg4everybody();

window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');

// require('jquery-mousewheel');
// require('malihu-custom-scrollbar-plugin');

let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;
import '@fancyapps/fancybox';
import './vendor/pace';
