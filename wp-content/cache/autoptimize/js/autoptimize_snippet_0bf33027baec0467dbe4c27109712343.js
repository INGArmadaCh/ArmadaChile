jQuery(function($){$(document).ready(function(){$('.hrf-title').click(function(){var faqcontent=$(this).next('.hrf-content');faqcontent.slideToggle();$(this).toggleClass(function(){if($(this).is('.close-faq')){return'open-faq';}else{return'close-faq';}});});});});