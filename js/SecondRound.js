$(document).ready(function()
{
    $('.beachalytics').click(function(){
       $('.item-name').text("BeachAlytics");
        $('.item-description').html("A model and series of open-sourced reports to help non-technical people use data from Google Analytics."); 
        $('.details').html("Go<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.beachalytics').css("background", "#ffff00");
    });
    
    $('.analytics').click(function(){
       $('.item-name').text("Google Analytics");
        $('.item-description').html("Free program that tracks and reports website traffic. Google Analytics is the most widely used web analytics service on the Internet."); 
        $('.details').html("Go<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.analytics').css("background", "#ffff00");
    });
    
    $('.site-goal').click(function(){
       $('.item-name').text("Website Goal");
        $('.item-description').html("The goal of most sites is either to sell a product online, or lead generation. When "); 
        $('.details').html("Go<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.site-goal').css("background", "#ffff00");
        $('.three').css("background", "#ffff00");
    });
    
    $('.direct').click(function(){
       $('.item-name').text("Direct Traffic");
        $('.item-description').html("Traffic that comes directly to the site. (Typed into the url bar, link from an email.)"); 
        $('.details').html("Go<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.direct').css("background", "#ff0000");
        $('.direct').css("color", "#f3f3f3");
    });
    
    $('.email').click(function(){
       $('.item-name').text("Email Traffic");
        $('.item-description').html("Links from emails normally appear as <span class='direct'>Direct</span> links. Some special steps can be taken to track email, and have them appear as their own channel."); 
        $('.details').html("Go<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.email').css("background", "#ff9900");
        $('.email').css("color", "#f3f3f3");
    });
    
    $('.referral').click(function(){
        $('.item-name').text("Referral Traffic");
        $('.item-description').html("Traffic from other websites.");
        $('.details').html("Go<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.referral').css("background", "#0000ff");
        $('.referral').css("color", "#f3f3f3");
    });
    
    $('.search').click(function(){
       $('.item-name').text("Organic Search");
        $('.item-description').html("Traffic from search engine results page. (Google, Yahoo)"); 
        $('.details').html("Go<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.search').css("background", "#51a351");
        $('.search').css("color", "#f3f3f3");
    });
    
    $('.ads').click(function(){
        $('.item-name').text("Paid Advertisements");
      $('.item-description').html("Traffic that arrives to the site via an advertisements. The two most common types of ads are 'Search' ads and 'Display' ads.)"); 
        $('.details').html("Go<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.ads').css("background", "#4a86e8");
        $('.ads').css("color", "#f3f3f3");
    });
    
    $('.one').click(function(){
        $('.item-name').html("Landing Pages");
        $('.item-description').html("Landing pages are the first impression the outside world has of your website. Google uses landing pages to rate your site, determining when you will appear on different searches. Improvements made at this level can attract more visitors AND get them closer towards the end goal.");
        $('.details').html("Go<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.one').css("background", "#ffff00");
    });
    
    $('.two').click(function(){
        $('.item-name').text("Signup Pages");
        $('.item-description').html("The signup page represents the steps a user goes through to make a purchase on the site. Improving the funnel directly leads to more sales. Important metrics 1) Click Through Rate - How many people move from one step to another. 2) Conversion Rate - Percent of total visits that make it to the confirmation page.");
        $('.details').html("Go<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.two').css("background", "#ffff00");
    });
    
    $('.three').click(function(){
        $('.item-name').text("Confirmation Pages");
        $('.item-description').html("The confirmation page is loaded directly after each sale, showing the customer their purchase. This page helps tie sales and revenue to marketing efforts.");
        $('.details').html("Go<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.three').css("background", "#ffff00");
    });
});