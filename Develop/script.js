var ohioTime = document.querySelector("#currentDay");
var currentTime =moment();

ohioTime.textContent = currentTime.format("MMM DD, YYYY ")

// change text in timeblock
$(".container").on("click", ".task", function() {
    //get the text
    var text = $(this)
      .text()
      .trim();
  
    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("time-block-9 col-10").val(text);
    $(this).replaceWith(textInput);
  
  
    // // auto focus new element
    // textInput.trigger("focus");
  });



// Save text in time blocks
  $(".time-block-9").on("click", ".saveBtn", function() {
    //get the textblock text
   var text9 = $(".time-block-9").find("textarea").text().trim()
    console.log(text9)
  });

