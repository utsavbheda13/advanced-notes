$(document).ready(function () {
    $("#SetReminder").click(function () {
        $('#heading').html($('input[name="reminder"]:checked').val());
        $('#bcontent').html("Reminder is set for "+$('input[name="reminder"]:checked').val()+" on "+$('#reminder_date').val()+" at "+$('#reminder_time').val());
        var sd = new Date();
        setInterval(function () {
            var d = new Date();
            $('#mutemsg').html(d.getSeconds() - sd.getSeconds() + " Seconds ago.");
        }, 1000);
        $('.toast').toast('show');
    });
});
