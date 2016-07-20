// //////////////////////////////////////////////////////////////////////////////////
//////////////////////////////jQuery for divCircle///////////////////////////////////
$(document).ready(function(){
			//Center the "info" bubble in the  "circle" div
			var divTop = ($("#divCircle").height() - $("#middleBubble").height())/2;
			var divLeft = ($("#divCircle").width() - $("#middleBubble").width())/2;
			$("#middleBubble").css("top",divTop + "px");
			$("#middleBubble").css("left",divLeft + "px");
			
			//Arrange the icons in a circle centered in the div
			numItems = $( "#divCircle img" ).length; //How many items are in the circle?
			start = 0.25; //the angle to put the first image at. a number between 0 and 2pi
			step = (2*Math.PI)/numItems; //calculate the amount of space to put between the items.
			
			//Now loop through the buttons and position them in a circle
			$( "#divCircle img" ).each(function( index ) {
				radius = ($("#divCircle").width() - $(this).width())/2; //The radius is the distance from the center of the div to the middle of an icon
				//the following lines are a standard formula for calculating points on a circle. x = cx + r * cos(a); y = cy + r * sin(a)
				//We have made adjustments because the center of the circle is not at (0,0), but rather the top/left coordinates for the center of the div
				//We also adjust for the fact that we need to know the coordinates for the top-left corner of the image, not for the center of the image.
				tmpTop = (($("#divCircle").height()/2) + radius * Math.sin(start)) - ($(this).height()/2);
				tmpLeft = (($("#divCircle").width()/2) + radius * Math.cos(start)) - ($(this).width()/2);
				start += step; //add the "step" number of radians to jump to the next icon
				
				//set the top/left settings for the image
				$(this).css("top",tmpTop);
				$(this).css("left",tmpLeft);
			});
			
			//set the highlight and bubble default based on the homepageGridDefault class
			currentGridSelector = $(".homepageGridDefault").attr("id");
			$("#" + currentGridSelector).attr("src", "https://s3.amazonaws.com/libapps/accounts/4983/images/home-" + currentGridSelector + "-icon-on.png");
			$("#middleBubble").html("<p><b>" + $(".homepageGridDefault").data("bubble1") + "</b><br />" + $(".homepageGridDefault").data("bubble2") + "</p>");
			
			//Setup the grid to change the highlighted bubble on mouseover and click
			$("#divCircle img").mouseover(function(){
				//if the selected option has changed, deactivate the current selection
				if(currentGridSelector != $(this).attr("id"))
				{
					$("#" + currentGridSelector).attr("src", "https://s3.amazonaws.com/libapps/accounts/4983/images/home-" + currentGridSelector + "-icon-off.png");
				}
				//turn on the new selection
				$(this).attr("src", "https://s3.amazonaws.com/libapps/accounts/4983/images/home-" + $(this).attr("id") + "-icon-on.png");
				//set the content of the center bubble
				$("#middleBubble").html("<p><b>" + $(this).data("bubble1") + "</b><br />" + $(this).data("bubble2") + "</p>");
				currentGridSelector = $(this).attr("id");
			});
		});
// ///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////End jQuery for divCircle///////////////////////////////////


// ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Code for Smartphone Info Timeline////////////////////////

//Code to toggle boxes on timeline view on smartphone
	$(document).ready(function(){
        $(".box").hide();
        $(".slide-toggle").click(function(){
            $(".box").animate({
                width: "toggle"
            });
        });
    });
    $(document).ready(function(){
        $(".box1").hide();
        $(".slide-toggle1").click(function(){
            $(".box1").animate({
                width: "toggle"
            });
        });
    });
    $(document).ready(function(){
        $(".box2").hide();
        $(".slide-toggle2").click(function(){
            $(".box2").animate({
                width: "toggle"
            });
        });
    });
	$(document).ready(function(){
        $(".box3").hide();
        $(".slide-toggle3").click(function(){
            $(".box3").animate({
                width: "toggle"
            });
        });
    });
	$(document).ready(function(){
        $(".box4").hide();
        $(".slide-toggle4").click(function(){
            $(".box4").animate({
                width: "toggle"
            });
        });
    });
	$(document).ready(function(){
        $(".box5").hide();
        $(".slide-toggle5").click(function(){
            $(".box5").animate({
                width: "toggle"
            });
        });
    });
	$(document).ready(function(){
        $(".box6").hide();
        $(".slide-toggle6").click(function(){
            $(".box6").animate({
                width: "toggle"
            });
        });
    });
    
    
    
//Code to toggle image icons on timeline view on smartphone//   
    
    $("#imageToggleEvent").click(function() {
        $(this).find('img').toggle();
    });
	$("#imageToggleTwitter").click(function() {
        $(this).find('img').toggle();
    });
    $("#imageToggleTV").click(function() {
        $(this).find('img').toggle();
    });
	$("#imageToggleMagazine").click(function() {
        $(this).find('img').toggle();
    });
	$("#imageToggleJournal").click(function() {
        $(this).find('img').toggle();
    });
	$("#imageToggleScholarly").click(function() {
        $(this).find('img').toggle();
    });
	$("#imageToggleBooks").click(function() {
        $(this).find('img').toggle();
    });

///////////////////////////////End Code for Smartphone Info Timeline////////////////////////

////////////////////////////////Sortable JS for Citation Examples//////////////////////////////////
$(document).ready(function(){
   $('#citation').hide();
});

function check_sort() 
{
		var list=[];
		var toSort = document.getElementById("sortable").children;
		for ( i = 0; i < toSort.length; i++)
        {
			if(toSort[i].id != i+1)
            {
			     list.push(toSort[i].id)
			}
		}
		Sprint(list);
       
}
$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });
		
function numOrdA(a, b)
{ 
    return (a-b); 
}
		
function Sprint(list)
{   
    if(list.length == 0)
    {  
			swal({
					title: "Great Job!", 
					text: "The citation is in the correct order. Click 'OK' to see the formatted citation.", 
					type: "success",
					showCancelButton: false
				}, function() {
					$('#citation').show();
				});
 
    }
    else
    {
		list.sort(numOrdA);
		swal("Try Again", "The citation is not in the right order.", "error");
    }
}
///////////////////////////////////////////End Sortable JS////////////////////////////////////////
