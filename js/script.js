$(document).ready(function()
{
 
    $('.direct').click(function(){
        $('.item-name').text("Direct Traffic");
        $('.item-description').html("Traffic that comes directly to the site. (Typed into the url bar)"); 
        $('.details').html("Details<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.direct').css("background", "#ff0000");
        $('.direct').css("color", "#f3f3f3");
    });

    $('.email').click(function(){
      $('.item-name').html("Email Traffic");
        $('.item-description').html("Traffic that comes directly to the site. (Typed into the url bar)"); 
        $('.details').html("Details<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.email').css("background", "#ff9900");
        $('.email').css("color", "#f3f3f3");
    });

    $('.referral').click(function(){
       $('.item-name').html("Referral Traffic");
        $('.item-description').html("Traffic that comes directly to the site. (Typed into the url bar)"); 
        $('.details').html("Details<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.referral').css("background", "#0000ff");
        $('.referral').css("color", "#f3f3f3");
    });

      $('.search').click(function(){
       $('.item-name').html("Organic Search");
        $('.item-description').html("Traffic that comes directly to the site. (Typed into the url bar)"); 
        $('.details').html("Details<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.search').css("background", "#51a351");
        $('.search').css("color", "#f3f3f3");
    });
 
     $('.ads').click(function(){
      $('.item-name').html("Paid Advertisements);
        $('.item-description').html("Traffic that comes directly to the site. (Typed into the url bar)"); 
        $('.details').html("Details<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.ads').css("background", "#4a86e8");
        $('.ads').css("color", "#f3f3f3");
    });
    
});