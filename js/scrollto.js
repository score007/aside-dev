define(['jquery'],function($){
	function ScrollTo(opts){
		this.opts=$.extend({},ScrollTo.DEFAULTS,opts);
		this.$el=$(html,body);
	}
	
	
	ScrollTo.prototype.moveTop=function(){
		var opts=this.opts;
		this.$el.animate({
			scrollTop:opts.dest
		},opts.speed);
	};
	
	ScrollTo.prototype.go=function(){
		this.$el.scrollTop(this.opts.dest);
	}
	
	ScrollTo.DEFAULTS={
		dest:0,
		speed:400
	}
	
	return{
		ScrollTo:ScrollTo
	};
});