$(function(){$("a[href*=#]").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length&&e||$("[name="+this.hash.slice(1)+"]"),e.length){var t=e.offset().top-$("header").outerHeight(!0);return $("html,body").animate({scrollTop:t},1e3),!1}}})});