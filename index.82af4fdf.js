$(document).ready((function(){$("body").append('<a href="#" id="go-top"</a>')})),$((function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr("href"),$(window).scrollTop()>="250"&&$(this).fadeIn("slow");var o=$(this);$(window).scroll((function(){$(window).scrollTop()<="250"?$(o).fadeOut("slow"):$(o).fadeIn("slow")})),$(this).click((function(){$("html, body").animate({scrollTop:0},"slow")}))}})),$((function(){$("#go-top").scrollToTop()}));
//# sourceMappingURL=index.82af4fdf.js.map
