$(document).ready(function(){
	$('#basic').click(function(){
		alert("The <Courses> is a website that can let students to imitate selecting class on sis");
	});
	$('#basic2').click(function(){
		alert("The <Emergency> is a website that have all the emergent contacts");
	});
	$("#hideT1").click(function(){
		$("#superlink1 p").hide(3000);
   	});
   	$("#hideT2").click(function(){
		$("#superlink2 p").hide(3000);
   	});
   	$("#hideT3").click(function(){
		$("#superlink3 p").hide(3000);
   	});
   	$("#showT").click(function(){
      	$(".container p").show(1000);
   	});
});