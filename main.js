$(document).ready(function () {
    $(".toggle-icon").click(function() {
        $(".toggle-icon").toggleClass("pushed");
        $(".menu").toggleClass("d-none");
    });    
})