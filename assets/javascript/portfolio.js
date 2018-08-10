$(document).ready(function () {

        $(".port_card").hide();
        $(".contact-form").hide();
        $(".bio").show();
        // $("#text_intro").hide();

    // Main Button on click functions //
    $("#about").click(function () {
        event.preventDefault();
        $(".bio").show();
        $(".port_card").hide();
        $(".contact-form").hide();
        // $("#email").hide();
        // $("#main_button").hide();
        // $("#text_intro").hide();
        // $("#proj_button").show();
       

    });

    $("#proj_card").click(function () {
        event.preventDefault();
        $(".bio").hide();
        $(".contact-form").hide();
        $(".port_card").show();
        // $("#email").hide();
        // $("#proj_button").hide();
        // $("#main_button").hide();
        // $("#text_intro").show();
       

    });

    $("#contact").click(function () {
        event.preventDefault();
        $(".bio").hide();
        $(".port_card").hide();
        $(".contact-form").show();
        // $("#proj_button").hide();
        // $("#main_button").hide();
        // $("#text_intro").hide();
        // $("#email").show();
        
       

    });

    // $(".back").click(function () {
    //     event.preventDefault();
    //     $("#proj_button").hide();
    //     $("#text_intro").hide();
    //     $("#email").hide();
    //     $("#main_button").show();
        


    // });


    
   
        


}); //End of Document.ready