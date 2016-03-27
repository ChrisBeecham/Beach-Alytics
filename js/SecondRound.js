$(document).ready(function()
{
    //Overview
    $('.beachalytics').click(function(){
        $('.item-name').text("BeachAlytics");
        $('.item-description').html("An open sourced series of reports, and an educational model. Designed to utilize information collected on Google Analytics to generate new leads and sales."); 
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    $('.analytics').click(function(){
        $('.item-name').text("Google Analytics");
        $('.item-description').html("Free program that tracks and reports website traffic. Google Analytics is the most widely used web analytics service on the Internet."); 
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    $('.contact-us').click(function(){
        $('.highlighted').removeClass("highlighted");
        $('.phone-number').addClass("highlighted");
    });

    //Incoming Channels
    
    $('.referral').click(function(){
        $('.item-name').text("Referral Traffic");
        $('.item-description').html("Traffic that gets to your site from other sites. Referral traffic often gets divided into sub-channels; social media, organic search, paid advertisements.")
        $('.details').html("More on Referral Links<span class='glyphicon glyphicon-chevron-right'></span>");
//        $('.referral').css("background", "#0000ff");
//        $('.referral').css("color", "#f3f3f3");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    $('.search').click(function(){
       $('.item-name').text("Organic Search");
        $('.item-description').html("Traffic from search engine results pages, ex. Google and Yahoo. Organic Search is a subsection of <span class='referral'>Referral Traffic</span>."); 
        $('.details').html("Best Practices<span class='glyphicon glyphicon-chevron-right'></span>");
//        $('.search').css("background", "#51a351");
//        $('.search').css("color", "#f3f3f3");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    $('.ads').click(function(){
        $('.item-name').text("Paid Advertisements");
      $('.item-description').html("Visitors that arrive to the site via an advertisements. The common types of online ads are 'Search' ads and 'Display' ads.)"); 
        $('.details').html("Learn More<span class='glyphicon glyphicon-chevron-right'></span>");
//        $('.ads').css("background", "#4a86e8");
//        $('.ads').css("color", "#f3f3f3");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    $('.direct').click(function(){
       $('.item-name').text("Direct Traffic");
        $('.item-description').html("Traffic that comes directly to the site.(Typed into the url bar, link from an email.) Often times, Direct traffic consists of links that don't fit in any other category."); 
        $('.details').html("Learn More<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    $('.email').click(function(){
       $('.item-name').text("Email Traffic");
        $('.item-description').html("Links from emails normally appear as <span class='direct'>Direct</span> links, since they don't come from another site. Special steps can be taken to track emails, figuring out which messages and lists are the most successful."); 
        $('.details').html("Tracking Emails<span class='glyphicon glyphicon-chevron-right'></span>");
//        $('.email').css("background", "#ff9900");
//        $('.email').css("color", "#f3f3f3");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    //Target
    $('.one').click(function(){
        $('.item-name').html("Landing Pages");
        $('.item-description').html("Landing pages are the first impression the outside world has of your website. Google uses landing pages to rate your site, determining when you will appear on different searches.");
        $('.details').html("Learn More<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    $('.two').click(function(){
        $('.item-name').text("Signup Pages");
        $('.item-description').html("Signup pages are the steps a user goes through to complete your site's goal. Improvements made to the signup pages can directly lead to new leads & sales.");
        $('.details').html("Learn More<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    $('.three').click(function(){
        $('.item-name').text("Confirmation Pages");
        $('.item-description').html("The confirmation page is loaded directly after each sale, showing the customer their purchase. This page helps tie sales and revenue to marketing efforts.");
        $('.details').html("Learn More<span class='glyphicon glyphicon-chevron-right'></span>");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
});