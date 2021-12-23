var savedPlans = Object.keys(localStorage);
var saveBtn = $(".saveBtn");
var timer = true
var currentHour = moment().hours();

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
