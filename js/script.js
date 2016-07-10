$(document).ready(function(){
    var start = new Date(2016,6,10),
        end = new Date(2016,8,19),
        today = new Date();
    //alert( Math.round((end - start) * 100) / today );

    //when clicked, background changes to blue, and royce becomes neon
    $(window).on('click',function(){
        $('body').css({'background-color':'darkblue'});
        $('.cover').css({'background-color':'darkblue'});
        $('.inner').css({'background-color':'darkblue'});
        $('.bottomhalf').css({'background-color':'darkblue'})
    });
});
