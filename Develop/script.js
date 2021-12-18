var ohioTime = document.querySelector("#currentDay");
var currentTime =moment();
ohioTime.textContent = currentTime.format("MMM DD, YYYY ")


nineAM ={}
tenAM ={}
elevenAM ={}
twelveAM ={}


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


var timeArr = [9,10,11,12]

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


  // if (moment().isSame('10', 'hour')) {$("#time-block-9").removeClass("future").addClass("present")}
  // if (moment().isSame('11', 'hour')) {$("#time-block-10").removeClass("future").addClass("present")}
  // if (moment().isSame('12', 'hour')) {$("#time-block-11").removeClass("future").addClass("present")}
  // if (moment().isSame('13', 'hour')) {$("#time-block-12").removeClass("future").addClass("present")}

  // if (moment().isBetween('10', '11', 'hour')) {$("#time-block-9").removeClass("future").addClass("present")}
  // if (moment().isBetween('11', '10', 'hour')) {$("#time-block-10").removeClass("future").addClass("present")}
  // if (moment().isBetween('11', '13', 'hour')) {$("#time-block-11").removeClass("future").addClass("present")}
  // if (moment().isBetween('13', '14', 'hour')) {$("#time-block-12").removeClass("future").addClass("present")}




  // if (moment().isAfter('10', 'hour')) {$("#time-block-9").removeClass("future present").addClass("past")}
  // if (moment().isAfter('11', 'hour')) {$("#time-block-10").removeClass("future present").addClass("past")}
  // if (moment().isAfter('12', 'hour')) {$("#time-block-11").removeClass("future present").addClass("past")}
  // if (moment().isAfter('13', 'hour')) {$("#time-block-12").removeClass("future present").addClass("past")}



};
timeCheck();