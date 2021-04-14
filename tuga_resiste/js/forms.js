$(function(){
	
	'use strict';

	var onClass = "on";
	var showClass = "show";
  
	$("input,textarea").bind("checkval",function(){
		var label = $(this).prev("label");
		if(this.value !== ""){
			label.addClass(showClass);
		} else {
			label.removeClass(showClass);
		}
	}).on("keyup",function(){
		$(this).trigger("checkval");
	}).on("focus",function(){
		$(this).prev("label").addClass(onClass);
	}).on("blur",function(){
		$(this).prev("label").removeClass(onClass);
	}).trigger("checkval");
	
	$("select").click(function(){
		var label = $(this).prev("label");
		if($(this).find('option:selected')){
			label.addClass(showClass);
		} else {
			label.removeClass(showClass);
		}
	}).on("keyup",function(){
		$(this).trigger("checkval");
	}).on("focus",function(){
		$(this).prev("label").addClass(onClass);
	}).on("blur",function(){
		$(this).prev("label").removeClass(onClass);
	}).trigger("checkval");

    $("#DoB").prop('max', function(){
        return new Date().toJSON().split('T')[0];
    });

});