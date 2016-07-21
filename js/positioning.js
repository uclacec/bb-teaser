$(document).ready(function(){
    //load content onto page
    $.ajax({url: "contents.html", success: function(result){
        $("#contents").html(result);
    }});

    $body = $("body");
    $(document).on({
        ajaxStart: function() { $body.addClass("loading");    },
        ajaxStop: function() { $body.removeClass("loading"); }
    });
    //To reveal the arch based on how close the date is to launch date
    var start = new Date(2016,6,10);
    var end = new Date(2016,8,12);

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }
    today = dd+'/'+mm+'/'+yyyy;
    //var percent = Math.round((today - start)(end - start) * 100);
});
