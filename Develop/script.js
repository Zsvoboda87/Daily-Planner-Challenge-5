var ohioTime = document.querySelector("#currentDay");
var currentTime =moment();
ohioTime.textContent = currentTime.format("MMM DD, YYYY ")

tasks ={}

// change text in timeblock
$(".container").on("click", "p", function() {
    //get the text
    var text = $(this)
      .text()
      .trim();
  
    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("time-block-9 col-10").val(text);
    $(this).replaceWith(textInput);
    
    textInput.trigger("focus");
  
  // console.log(text)
});

$(".container").on("blur", "textarea", function() {
  var text = $(this)
  .val()
  .trim();

  console.log(text);

  tasks.text = text;

  var taskP = $("<p>")
  .addClass("task col-10")
  .text(text);

// replace textarea with p element
$(this).replaceWith(taskP);

});


// Save text in time blocks
  $(".time-block-9").on("click", ".saveBtn", function() {
    //get the textblock text
tasks
  });

