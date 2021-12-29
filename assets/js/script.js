var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//click en imagen1
$(document).ready(function(){
  $("#img1").click(function(){
    $("#dest1").toggle(1000);
    $("#dest2").toggle(1000);
    $("#dest3").toggle(1000);
    $("#dest4").toggle(1000);


  });
});
// click imagen2
$(document).ready(function(){
  $("#img2").click(function(){
    $("#dest1").toggle(1000);
    $("#dest2").toggle(1000);
    $("#dest3").toggle(1000);
    $("#dest4").toggle(1000);


  });
});
//click image3
$(document).ready(function(){
  $("#img3").click(function(){
    $("#dest1").toggle(1000);
    $("#dest2").toggle(1000);
    $("#dest3").toggle(1000);
    $("#dest4").toggle(1000);


  });
});
//click image4
$(document).ready(function(){
  $("#img4").click(function(){
    $("#dest1").toggle(1000);
    $("#dest2").toggle(1000);
    $("#dest3").toggle(1000);
    $("#dest4").toggle(1000);


  });
});