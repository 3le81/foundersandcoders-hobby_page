// TIME AND DATE SET 
var clockElement = document.getElementById('clock');
function clock() {
    var date = new Date();

    // Replace '400px' below with where you want the format to change.
    if (window.matchMedia('(max-width: 400px)').matches) {
        // Use this format for windows with a width up to the value above.
        clockElement.textContent = date.toLocaleString();
    } else {
        // While this format will be used for larger windows.
        clockElement.textContent = date.toString();
    }
}
setInterval(clock, 1000);

// TIME DATE END

// ALERT POPUP
function submit() {
    alert("Check your email for the monthly newsletter!");
}