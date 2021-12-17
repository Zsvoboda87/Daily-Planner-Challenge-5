var ohioTime = document.querySelector("#currentDay");
var currentTime =moment();
ohioTime.textContent = currentTime.format("MMM DD, YYYY ")

nineAM ={}
tenAM ={}

hourObject = {
nine:[],
ten:[],
eleven:[],
twelve: [],
thirteen: []
}

var loadTimeblocks = function() {
  nineAM1 = JSON.parse(localStorage.getItem("nineAM"))
  if (!nineAM1) {nineAM1 =[]};
  $("#niner").html(nineAM1.text)
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
hourObject.ten.text = text;
$(this).replaceWith(taskP);
});

  
// Save text in time blocks
$(".time-block-10").on("click", ".saveBtn", function() {
  //get the textblock text
 console.log(hourObject.ten)
});

var timeCheck = function() {
  

  if (moment().isAfter(9)) {
    $(taskEl).addClass();


  }
  else if (Math.abs(moment().diff(time, "days")) <= 2) {
    $(taskEl).addClass("list-group-item-warning");
  }

};