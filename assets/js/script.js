var savedPlans = Object.keys(localStorage);
var saveBtn = $(".saveBtn");
var timer = true
var currentHour = moment().hours();

var time = setInterval(function () {
    if (timer === true) {
        $("#currentDay").text(moment().format("LLL"));
    }
}, 1000)

function rowColor() {
    $(".time-block").each(function () {
        var hourId = $(this).attr("id");
        // console.log(hourAttr);
        var hourRow = hourId.substring(5, hourId.length); //takes just the number
        // console.log(hourRow);
        intHourRow = parseInt(hourRow)
        // console.log(intHourRow);
        intCurrentHour = parseInt(currentHour)
        if (parseInt(intHourRow) < parseInt(currentHour)) {
            $(this).addClass("past");
        }
        else if (parseInt(intHourRow) === parseInt(currentHour)) {
            $(this).addClass("present");
        }
        else if (parseInt(intHourRow) > parseInt(currentHour)) {
            $(this).addClass("future");
        }
    }
    )
};

rowColor();

saveBtn.on("click", function () {
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




