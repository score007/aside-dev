requirejs.config({
	paths:{
		jquery:"jquery-3.4.1.min"
	}
});

requirejs(['jquery'],function($){
	$("#backTop").on('click',moveTop);
	$(window).on('scroll',function(){
		return checkPos($(window).height());
	});
	
	checkPos($(window).height()); 
	
	function moveTop(){
		$('html,body').animate({scrollTop:0},800);
	}
	
	function checkPos(pos){
		if($(window).scrollTop()>pos){
			$('#backTop').fadeIn();
		}
		else{
			$('#backTop').fadeOut();
		}
	}
});