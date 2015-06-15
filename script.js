//(function($){
//
//	var stickyHeader = function(){
//		var $doc = $(document),
//			$header = $('.menu'),
//			$headerWrapper = $('.menu-wrapper'),
//			fixedClass = 'menu-fixed';
//
//			if(!$header.hasClass(fixedClass) && $doc.scrollTop() > $headerWrapper.position().top){
//				$headerWrapper.css('min-height', $header.height()+1);
//				$header.addClass(fixedClass);
//			}else if($header.hasClass(fixedClass) && $doc.scrollTop() <= $headerWrapper.position().top){
//				$header.removeClass(fixedClass);
//			}
//	};
//
//
//	$(document).ready(function(){
//		stickyHeader();
//
//		$(window).scroll(stickyHeader);
//	});
//})(jQuery);
//
//
