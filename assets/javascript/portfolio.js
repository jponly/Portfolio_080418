$(document).ready(function () {

        $("#proj_button").hide();
        $("#email").hide();
        $("#text_intro").hide();

    // Main Button on click functions //
    $("#port").click(function () {
        event.preventDefault();
        $("#email").hide();
        $("#main_button").hide();
        $("#text_intro").hide();
        $("#proj_button").show();
       

    });

    $("#about_me").click(function () {
        event.preventDefault();
        $("#email").hide();
        $("#proj_button").hide();
        $("#main_button").hide();
        $("#text_intro").show();
       

    });

    $("#contact").click(function () {
        event.preventDefault();
        $("#proj_button").hide();
        $("#main_button").hide();
        $("#text_intro").hide();
        $("#email").show();
        
       

    });

    $(".back").click(function () {
        event.preventDefault();
        $("#proj_button").hide();
        $("#text_intro").hide();
        $("#email").hide();
        $("#main_button").show();
        


    });


    
   
        


}); //End of Document.ready