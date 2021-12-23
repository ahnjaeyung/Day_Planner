var savedPlans = Object.keys(localStorage);
var saveBtn = $(".saveBtn");
var timer = true
var currentHour = moment().hours();
var time = setInterval(function () {
    if (timer === true) {
        var currentTime = moment().format("MMM Do, YYYY, h:mm:ss");
        $("#timeDisplay").text(currentTime);
    } // end of if statement
}, 1000)

saveBtn.on("click", function() {
    // console.log(this);
    var taskInput = $(this).siblings(".description").val();
    var timeSlot = $(this).parent().attr("id");
    localStorage.setItem(timeSlot, taskInput);
}); // end of saveBtn click event

for (i = 0; i < savedPlans.length; i++) {
    var taskInput = localStorage.getItem(savedPlans[i]);
    var savedText = $("#" + savedPlans[i]).find("textarea")
    savedText.val(taskInput);
} // end of for loop

$("#currentDay").text(moment().format("LLL"));
