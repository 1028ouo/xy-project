$("ul").hide();
$("#recipe_dir").mouseenter(function(){
        $(".dishes").slideDown("slow");
});
$("#recipe_dir").mouseleave(function(){
        $("ul").hide();
});

$("#social").mouseenter(function(){
        $(".socialdetail").slideDown("slow");
});
$("#social").mouseleave(function(){
        $("ul").hide();
});