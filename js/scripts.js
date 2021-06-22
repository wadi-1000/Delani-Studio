$(document).ready(function() {
    $("#design-1").hide();
    $("#picture-1").click(function(){
    if($("#design-1").is(":visible")){
        $("#design-1").hide();
    }else {
        $("design-1").show();
    }

});

$("#development-1").hide();
$("#picture-2").click(function(){
if($("#development-1").is(":visible")){
    $("#development-1").hide();
}else {
    $("development-1").show();
}

});

$("#product-management-1").hide();
$("#picture-3").click(function(){
if($("#product-management-1").is(":visible")){
    $("#product-management-1").hide();
}else {
    $("product-management-1").show();
}

});

