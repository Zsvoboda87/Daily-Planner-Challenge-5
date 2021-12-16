// function to check time and change background color
var auditTime = function () {
    var time = moment()
};

var addTasks

// task text was clicked
$(".container").on("click", ".task", function() {
    // get current text of p element
    var text = $(this)
      .text()
      .trim();
  
    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("col-10").val(text);
    $(this).replaceWith(textInput);
  
  
    // auto focus new element
    textInput.trigger("focus");
  });