$(document).ready(function()
{
    var navBar = $(".features-navbar");

    $(navBar).on("click", ".nav-item", function(e)
    {
        e.preventDefault();
        $(navBar).find(".nav-item").removeClass("active");
        $(this).addClass("active");
        $(".features-tab-desc").addClass("hide");
        var eleToShow = $(this).find(".nav-link").attr("name");
        $("div.features-tab-desc#" + eleToShow).removeClass("hide");
    });

    var questionContainer = $(".questions-container");
    $(questionContainer).on("click", ".fa-chevron-down, .fa-chevron-up" , function()
    {
        var ques = $(this).closest("a");
        $(ques).addClass("hide");
        var ans = $(ques).siblings("a");
        $(ans).removeClass("hide");
    });

    $(questionContainer).find(".question-row").hover(
      function(){
        $(this).css("cursor", "pointer");
        $(this).find(".h5-heading").css("color", "#fa5757");
      },
      function(){
        $(this).css("cursor", "arrow");
        $(this).find(".h5-heading").css("color", "black");
      }
    );

    var titleSection = $(".title-sec");
    $(titleSection).on("click", "#navbar-toggler", function(e){
      e.stopPropagation();
      $(titleSection).find("#overlayMenu").css("width", "100%");
    });

});
