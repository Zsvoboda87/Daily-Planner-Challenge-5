var ohioTime = document.querySelector("#currentDay");
var currentTime =moment();
ohioTime.textContent = currentTime.format("MMM DD, YYYY ")

nineAM ={}
tenAM ={}
elevenAM ={}
twelveAM ={}
thirteenAM ={}
fourteenAM ={}
fifteenAM ={}
sixteenAM ={}
seventeenAM ={}

var loadTimeblocks = function() {
  nineAM1 = JSON.parse(localStorage.getItem("nineAM"))
  if (!nineAM1) {nineAM1 =[]};
  $("#niner").html(nineAM1.text)

  tenAM1 = JSON.parse(localStorage.getItem("tenAM"))
  if (!tenAM1) {tenAM1 =[]};
  $("#tener").html(tenAM1.text)

  elevenAM1 = JSON.parse(localStorage.getItem("elevenAM"))
  if (!elevenAM1) {elevenAM1 =[]};
  $("#elevener").html(elevenAM1.text)

  twelveAM1 = JSON.parse(localStorage.getItem("twelveAM"))
  if (!twelveAM1) {twelveAM1 =[]};
  $("#twelver").html(twelveAM1.text)

  thirteenAM1 = JSON.parse(localStorage.getItem("thirteenAM"))
  if (!thirteenAM1) {thirteenAM1 =[]};
  $("#thirteener").html(thirteenAM1.text)

  fourteenAM1 = JSON.parse(localStorage.getItem("fourteenAM"))
  if (!fourteenAM1) {fourteenAM1 =[]};
  $("#fourteener").html(fourteenAM1.text)
  
  fifteenAM1 = JSON.parse(localStorage.getItem("fifteenAM"))
  if (!fifteenAM1) {fifteenAM1 =[]};
  $("#fifteener").html(fifteenAM1.text)

  sixteenAM1 = JSON.parse(localStorage.getItem("sixteenAM"))
  if (!sixteenAM1) {sixteenAM1 =[]};
  $("#sixteener").html(sixteenAM1.text)

  seventeenAM1 = JSON.parse(localStorage.getItem("seventeenAM"))
  if (!seventeenAM1) {seventeenAM1 =[]};
  $("#seventeener").html(seventeenAM1.text)  
}
loadTimeblocks();

// Time Block 9
$(".time-block-9").on("click", "p", function() {
    //get the text
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("time-block-9 col-10").val(text);
    $(this).replaceWith(textInput);    
    textInput.trigger("focus");
});
$(".time-block-9").on("blur", "textarea", function() {
  var text = $(this).val().trim();
  var taskP = $("<p>").addClass("task col-10").text(text);
  nineAM.text = text;
$(this).replaceWith(taskP);
});
$(".time-block-9").on("click", ".saveBtn", function() {
  //get the textblock text
  localStorage.setItem("nineAM", JSON.stringify(nineAM));
});

// Time Block 10
$(".time-block-10").on("click", "p", function() {

  var text = $(this).text().trim();
  var textInput = $("<textarea>").addClass("time-block-10 col-10").val(text);
  $(this).replaceWith(textInput);    
  textInput.trigger("focus");
});
$(".time-block-10").on("blur", "textarea", function() {
var text = $(this).val().trim();
var taskP = $("<p>").addClass("task col-10").text(text);
tenAM.text = text;
$(this).replaceWith(taskP);
}); 
$(".time-block-10").on("click", ".saveBtn", function() {
  //get the textblock text
  localStorage.setItem("tenAM", JSON.stringify(tenAM));
});

// Time Block 11
$(".time-block-11").on("click", "p", function() {

  var text = $(this).text().trim();
  var textInput = $("<textarea>").addClass("time-block-11 col-10").val(text);
  $(this).replaceWith(textInput);    
  textInput.trigger("focus");
});
$(".time-block-11").on("blur", "textarea", function() {
var text = $(this).val().trim();
var taskP = $("<p>").addClass("task col-10").text(text);
elevenAM.text = text;
$(this).replaceWith(taskP);
}); 
$(".time-block-11").on("click", ".saveBtn", function() {
  //get the textblock text
  localStorage.setItem("elevenAM", JSON.stringify(elevenAM));
});


// Time Block 12
$(".time-block-12").on("click", "p", function() {

  var text = $(this).text().trim();
  var textInput = $("<textarea>").addClass("time-block-12 col-10").val(text);
  $(this).replaceWith(textInput);    
  textInput.trigger("focus");
});
$(".time-block-12").on("blur", "textarea", function() {
var text = $(this).val().trim();
var taskP = $("<p>").addClass("task col-10").text(text);
twelveAM.text = text;
$(this).replaceWith(taskP);
}); 
$(".time-block-12").on("click", ".saveBtn", function() {
  //get the textblock text
  localStorage.setItem("twelveAM", JSON.stringify(twelveAM));
});

// Time Block 13
$(".time-block-13").on("click", "p", function() {

  var text = $(this).text().trim();
  var textInput = $("<textarea>").addClass("time-block-13 col-10").val(text);
  $(this).replaceWith(textInput);    
  textInput.trigger("focus");
});
$(".time-block-13").on("blur", "textarea", function() {
var text = $(this).val().trim();
var taskP = $("<p>").addClass("task col-10").text(text);
thirteenAM.text = text;
$(this).replaceWith(taskP);
}); 
$(".time-block-13").on("click", ".saveBtn", function() {
  //get the textblock text
  localStorage.setItem("thirteenAM", JSON.stringify(thirteenAM));
});

// Time Block 14
$(".time-block-14").on("click", "p", function() {

  var text = $(this).text().trim();
  var textInput = $("<textarea>").addClass("time-block-14 col-10").val(text);
  $(this).replaceWith(textInput);    
  textInput.trigger("focus");
});
$(".time-block-14").on("blur", "textarea", function() {
var text = $(this).val().trim();
var taskP = $("<p>").addClass("task col-10").text(text);
fourteenAM.text = text;
$(this).replaceWith(taskP);
}); 
$(".time-block-14").on("click", ".saveBtn", function() {
  //get the textblock text
  localStorage.setItem("fourteenAM", JSON.stringify(fourteenAM));
});

// Time Block 15
$(".time-block-15").on("click", "p", function() {

  var text = $(this).text().trim();
  var textInput = $("<textarea>").addClass("time-block-15 col-10").val(text);
  $(this).replaceWith(textInput);    
  textInput.trigger("focus");
});
$(".time-block-15").on("blur", "textarea", function() {
var text = $(this).val().trim();
var taskP = $("<p>").addClass("task col-10").text(text);
fifteenAM.text = text;
$(this).replaceWith(taskP);
}); 
$(".time-block-15").on("click", ".saveBtn", function() {
  //get the textblock text
  localStorage.setItem("fifteenAM", JSON.stringify(fifteenAM));
});

// Time Block 16
$(".time-block-16").on("click", "p", function() {

  var text = $(this).text().trim();
  var textInput = $("<textarea>").addClass("time-block-16 col-10").val(text);
  $(this).replaceWith(textInput);    
  textInput.trigger("focus");
});
$(".time-block-16").on("blur", "textarea", function() {
var text = $(this).val().trim();
var taskP = $("<p>").addClass("task col-10").text(text);
sixteenAM.text = text;
$(this).replaceWith(taskP);
}); 
$(".time-block-16").on("click", ".saveBtn", function() {
  //get the textblock text
  localStorage.setItem("sixteenAM", JSON.stringify(sixteenAM));
});

// Time Block 17
$(".time-block-17").on("click", "p", function() {
  var text = $(this).text().trim();
  var textInput = $("<textarea>").addClass("time-block-17 col-10").val(text);
  $(this).replaceWith(textInput);    
  textInput.trigger("focus");
});
$(".time-block-17").on("blur", "textarea", function() {
var text = $(this).val().trim();
var taskP = $("<p>").addClass("task col-10").text(text);
seventeenAM.text = text;
$(this).replaceWith(taskP);
}); 
$(".time-block-17").on("click", ".saveBtn", function() {
  //get the textblock text
  localStorage.setItem("seventeenAM", JSON.stringify(seventeenAM));
});

var timeArr = [9,10,11,12,13,14,15,16,17]

var timeCheck = function() {
  var currentHour = moment().format('HH')

  for(i=0; i<timeArr.length; i++){
    if(timeArr[i] < parseInt(currentHour)){
      $("#time-block-"+timeArr[i]).removeClass("future present").addClass("past")
    }
    else if (timeArr[i] == parseInt(currentHour)){
      $("#time-block-"+timeArr[i]).removeClass("future past").addClass("present")
    }
  }
};
// timeCheck();

setInterval(timeCheck(), 1800000);