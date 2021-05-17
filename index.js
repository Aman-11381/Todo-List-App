startOver();

$("input").keydown(function(event){
  if(event.keyCode == 13){
    var task = $(this).val();
    if(task != ""){
      var newElement = "<div class='row content-row'><div class='col-2 del-button hide'><span class='fas fa-trash'></span></div><div class='col-10 content'>" + task + "</div></div>";
      $(".selector").append(newElement);
      $(this).val("");
      startOver();
    }
  }
});


function startOver() {
  $(".content-row").on("mouseover", function(){
    $(this).children()[0].classList.remove("hide");
  });

  $(".content-row").on("mouseleave", function(){
    $(this).children()[0].classList.add("hide");
  });

  $(".del-button").on("click", function(){
    $(this).parent().remove();
  });

  $(".plus-button").on("click", function(){
    $(".input-row").toggleClass("hide");
  });
}
