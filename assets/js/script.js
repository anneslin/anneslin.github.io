$(document).ready(function(){
var vpList = ["#vp1","#vp2","#vp3","#vp4","#vp5"]
var vInc = 0;
var learnToggle= ["#valuePropsContainer", "#pitch"]
$("#logo").click(function() {

	function timeRemove() {
	    $("#logo").removeClass("logoShake");
	}
		var shakeReset = setInterval(timeRemove, 2000);

    	$("#sm").fadeOut();
     	$("#logo").addClass("logoShake");

     if (vInc < 5){
     	$(vpList[vInc]).slideDown();
     	vInc = vInc+1;
     }
    

    });

$(".learn").click(function() {

		$(learnToggle[0]).slideUp(function(){var x = learnToggle[1];
		learnToggle[1]=learnToggle[0];
		learnToggle[0]=x; $(learnToggle[0]).slideDown();});
		
    

    });


	
});