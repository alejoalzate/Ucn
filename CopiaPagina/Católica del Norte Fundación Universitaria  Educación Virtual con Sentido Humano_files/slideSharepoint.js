$(document).ready(function(){

	$('#contenedoimg .dfwp-list').cycle({ 
	    fx:     'scrollHorz',
	    speed:  'slow',
	    timeout: 4000, 
	    next:   '#nextArrow', 
	    prev:   '#prevArrow',
	    pager:  '#navigateSlide'
	});
	
	$('#contenedoimgP .dfwp-list').cycle({ 
	    fx:     'uncover',
	    speed:  'slow',
	    timeout: 4000, 
	    next:   '#nextArrowP', 
	    prev:   '#prevArrowP',
	    pager:  '#navigateSlideP'
	});

	
});