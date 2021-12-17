var ohioTime = document.querySelector("#currentDay");
var currentTime =moment();
ohioTime.textContent = currentTime.format("MMM DD, YYYY ")


nineAM ={}
tenAM ={}
elevenAM ={}
TwelveAM ={}


var loadTimeblocks = function() {
  nineAM1 = JSON.parse(localStorage.getItem("nineAM"))
  if (!nineAM1) {nineAM1 =[]};
  $("#niner").html(nineAM1.text)
  tenAM1 = JSON.parse(localStorage.getItem("tenAM"))
  if (!tenAM1) {tenAM1 =[]};
  $("#tener").html(tenAM1.text)



}
loadTimeblocks();

// change text in timeblock
$(".time-block-9").on("click", "p", function() {
    //get the text
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("time-block-9 col-10").val(text);
    $(this).replaceWith(textInput);    
    textInput.trigger("focus");
});
// Send New text to tasks
$(".time-block-9").on("blur", "textarea", function() {
  var text = $(this).val().trim();
  var taskP = $("<p>").addClass("task col-10").text(text);
  nineAM.text = text;
$(this).replaceWith(taskP);
});
// Save text in time blocks
  $(".time-block-9").on("click", ".saveBtn", function() {
    //get the textblock text
    localStorage.setItem("nineAM", JSON.stringify(nineAM));
  });



// change text in timeblock
$(".time-block-10").on("click", "p", function() {
  //get the text
  var text = $(this).text().trim();
  var textInput = $("<textarea>").addClass("time-block-9 col-10").val(text);
  $(this).replaceWith(textInput);    
  textInput.trigger("focus");
});

// Send New text to tasks
$(".time-block-10").on("blur", "textarea", function() {
var text = $(this).val().trim();
var taskP = $("<p>").addClass("task col-10").text(text);
tenAM.text = text;
$(this).replaceWith(taskP);
});

  
// Save text in time blocks
$(".time-block-10").on("click", ".saveBtn", function() {
  //get the textblock text
  localStorage.setItem("tenAM", JSON.stringify(tenAM));
});




var timeCheck = function() {
  // var time = moment().set("hour", 18)

  if (moment().isAfter('9', 'hour')) {$("#time-block-9").removeClass("future").addClass("past")}
};
timeCheck();