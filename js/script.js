$(document).ready(function() {

    //what we do section toggle
    $('#design').click(function() {
        $(this).hide();
        $('.design').show();
    });
    $('.design').click(function() {
        $(this).hide();
        $('#design').show();
    });
    $('#dvpt').click(function() {
        $(this).hide();
        $('.dvpt').toggle();
    });
    $('.dvpt').click(function() {
        $(this).hide();
        $('#dvpt').toggle();
    });
    $('#product').click(function() {
        $(this).hide();
        $('.product').toggle();
    });
    $('.product').click(function() {
        $(this).hide();
        $('#product').toggle();
    });

    //portfolio overlays
    $(".one").mouseover(function() {
        $("#one").show();
    });
    $(".one").mouseout(function() {
        $("#one").hide();
    });

    $(".two").mouseover(function() {
        $("#two").show();
    });
    $(".two").mouseout(function() {
        $("#two").hide();
    });
    $(".three").mouseover(function() {
        $("#three").show();
    });
    $(".three").mouseout(function() {
        $("#three").hide();
    });
    $(".four").mouseover(function() {
        $("#four").show();
    });
    $(".four").mouseout(function() {
        $("#four").hide();
    });
    $(".five").mouseover(function() {
        $("#five").show();
    });
    $(".five").mouseout(function() {
        $("#five").hide();
    });
    $(".six").mouseover(function() {
        $("#six").show();
    });
    $(".six").mouseout(function() {
        $("#six").hide();
    });
    $(".seven").mouseover(function() {
        $("#seven").show();
    });
    $(".seven").mouseout(function() {
        $("#seven").hide();
    });
    $(".eight").mouseover(function() {
        $("#eight").show();
    });
    $(".eight").mouseout(function() {
        $("#eight").hide();
    });

    //submit message
    $("form#my-form").submit(function(event) {
        event.preventDefault();
        var name = $("#name").val();
        alert("Dear " + name + " we have received your message. Thank you for reaching out to us.");
        document.getElementById("my-form").reset();
    })
});
