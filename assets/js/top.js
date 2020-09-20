function _c(l){
	console.log(l);
}


$(window).on('load',function(){
	$("#loading").addClass('open');
	$(".main_contents").addClass('open');
	setTimeout(function(){
		$("#loading").hide();
	},7500)
})