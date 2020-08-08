$(document).ready(function () {
    function LeeFecha() {
        var d = new Date();
        var n = d.toDateString();
        document.getElementById("fechaHoy").innerHTML = n;
    }
    LeeFecha();
});

