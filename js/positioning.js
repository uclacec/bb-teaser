$(document).ready(function(){

    //To reveal the arch based on how close the date is to launch date
    var start = new Date(2016,6,10);
    var end = new Date(2016,8,19);

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
    var today = dd+'/'+mm+'/'+yyyy;

    var percentToShiftCover = 25 + Math.round((today - start)/(end - start) * 100) + '%';
});
