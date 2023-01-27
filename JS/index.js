$(document).ready(function(){
    $(".searchbtn").mouseenter(function(){
        $(this).toggleClass("bg-green");
        $("#searchfas").toggleClass("color-white");
        $(".input").focus().toggleClass("active-width").val('');
    });
});