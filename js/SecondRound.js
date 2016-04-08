$(document).ready(function()
{
    //Overview
    $('.beachalytics').click(function(){
        $('.item-name').text("BeachAlytics");
        $('.item-description').text("An open sourced series of reports, and an educational model. Designed to utilize information collected on Google Analytics to generate new leads and sales.");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    $('.analytics').click(function(){
        $('.item-name').text("Google Analytics");
        $('.item-description').text("Free program that tracks and reports website traffic. Google Analytics is the most widely used web analytics service on the Internet.");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });

    //Incoming Channels
    $('.referral').click(function(){
        $('.item-name').text("Referral Traffic");
        $('.item-description').text("Traffic that gets to your site from other sites. Referral traffic often gets divided into sub-channels; social media, organic search, paid advertisements.");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    $('.search').click(function(){
        $('.item-name').text("Organic Search");
        $('.item-description').html("Traffic from search engine results pages, ex. Google and Yahoo. Organic Search is a subsection of <span class='referral'>Referral Traffic</span>.");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    $('.ads').click(function(){
        $('.item-name').text("Paid Advertisements");
        $('.item-description').html("Visitors that arrive to the site via an advertisements. The common types of online ads are 'Search' ads and 'Display' ads. Paid Advertisements are a subsection of <span class='referral'>Referral Traffic</span>.");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    $('.direct').click(function(){
        $('.definition').html("<p class='item-name'>Direct Traffic</p><p class='item-description'>Traffic that comes directly to the site.(Typed into the url bar, link from an email.) Often times, Direct traffic consists of links that don't fit in any other category.</p>");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    $('.email').click(function(){
        $('.item-name').text("Email Campaigns");
        $('.item-description').html("Links from emails normally appear as <span class='direct'>Direct</span> links, since they don't come from another site. Special steps can be taken to track emails, figuring out which messages and lists are the most successful.");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });

    //Target
    $('.one').click(function(){
        $('.definition').html("<p class='item-name'>Landing Pages</p><p class='item-description'>Landing pages are the first impression the outside world has of your website. Google uses landing pages to rate your site, determining when you will appear on different searches.</p>");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    $('.two').click(function(){
        $('.definition').html("<p class='item-name'>Signup Pages</p><p class='item-description'>Signup pages are the steps a user goes through to complete your site's goal. Improvements made to the signup pages can directly lead to new leads & sales.</p>");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });
    $('.three').click(function(){
        $('.definition').html("<p class='item-name'>Confirmation Page</p><p class='item-description'>The Confirmation Page, or Thank You Page is loaded directly after each sale, showing the customer their purchase. This page helps tie sales and revenue to marketing efforts.</p>");
        $('.highlighted').removeClass("highlighted");
        $(this).addClass("highlighted");
    });

});