
$( document ).ready(function() {

  // top header slide
  $('.banner_area_slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: '',
      prevArrow: '',
      dots: true,
  });

  // weeding small theme photo slider
  $('.weeding_sm_slide_items').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: '',
      prevArrow: '',
      dots: true,
  });

  // weeding big theme photo slider
  $('.weeding_big_slide_items').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: '',
      prevArrow: '',
      dots: true,
  });

  // DataTables
    $('#mydatatable').DataTable({
      responsive: true,
      searching: false,
      "language": {
        "info":           "_TOTAL_ Item",
        "infoEmpty":      "0 Item",
        "lengthMenu":     "Show _MENU_ per page",
      }
    });


});

// manage address form show
$(document).ready(function(){
    $('.new_address_btn p').on('click',function(){
      $('.manage_form').addClass('active');
      return false;
    });

    // show password
    $(".lock").click(function() {
        input = $(this).parent().find("input");
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
});

// FAQs tab
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove('opentab');
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activatetab", "");
  }
  document.getElementById(cityName).classList.add('opentab');
  evt.currentTarget.className += " activatetab";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// Load more items for click load more button gift card category
$(document).ready(function(){
    // load more 1
    $("#Aesthetics .col-md-3").slice(0, 16).show();
    $("#loadmore1").on("click", function(e){
      e.preventDefault();
      $("#Aesthetics .col-md-3:hidden").slice(0, 4).slideDown();
      if($("#Aesthetics .col-md-3:hidden").length == 0) {
        $("#loadmore1").text("No More Cards").addClass("noContent");
      }
    });
     // load more 2
    $("#Aromatherapy .col-md-3").slice(0, 8).show();
    $("#loadmore2").on("click", function(e){
      e.preventDefault();
      $("#Aromatherapy .col-md-3:hidden").slice(0, 4).slideDown();
      if($("#Aromatherapy .col-md-3:hidden").length == 0) {
        $("#loadmore2").text("No More Cards").addClass("noContent");
      }
    });
     // load more 3
    $("#Hydrotherapy .col-md-3").slice(0, 8).show();
    $("#loadmore3").on("click", function(e){
      e.preventDefault();
      $("#Hydrotherapy .col-md-3:hidden").slice(0, 4).slideDown();
      if($("#Hydrotherapy .col-md-3:hidden").length == 0) {
        $("#loadmore3").text("No More Cards").addClass("noContent");
      }
    });
     // load more 4
    $("#MassageTreatment .col-md-3").slice(0, 8).show();
    $("#loadmore4").on("click", function(e){
      e.preventDefault();
      $("#MassageTreatment .col-md-3:hidden").slice(0, 4).slideDown();
      if($("#MassageTreatment .col-md-3:hidden").length == 0) {
        $("#loadmore4").text("No More Cards").addClass("noContent");
      }
    });
     // load more 5
    $("#OrganicSpa .col-md-3").slice(0, 8).show();
    $("#loadmore5").on("click", function(e){
      e.preventDefault();
      $("#OrganicSpa .col-md-3:hidden").slice(0, 4).slideDown();
      if($("#OrganicSpa .col-md-3:hidden").length == 0) {
        $("#loadmore5").text("No More Cards").addClass("noContent");
      }
    });
})
// end load more button

