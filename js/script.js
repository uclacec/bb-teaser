$(document).ready(function(){
    var start = new Date(2016,6,10),
        end = new Date(2016,8,19),
        today = new Date();
    alert( Math.round((end - start) * 100) / today );

});
