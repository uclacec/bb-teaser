/**
 * Created by Daniel on 7/17/2016.
 */

$(document).ready(function(){
    //has the flag been clicked
    var clickFlag = 0; //no

    //keep "Bruin Bash" centered
        var centerHeader = function() {
            if (!clickFlag) {
                var offset = 110;
                var bashPos = $(".bruin").position().left + offset;
                $(".bash").css({"left": bashPos.toString() + "px"});
            }
        };
        var timer = setInterval(centerHeader, 100);

    //0 seconds: when clicked, background changes to blue
        $('.royce').on('click',function(){
            if(!clickFlag) {
                //moves Bruin Bash left and right
                if ($(window).width() > 500) {
                    $(".bash").animate({left: "85%"}, 800);
                    $(".bruin").animate({left: "-2%"}, 800);
                }
                else{
                    $(".bruin").animate({left: "2%"}, 800);
                    $(".bash").animate({left: "70%"}, 800)
                }

                //0 - 2 seconds in: crowds murmuring
                //@GEORGE please insure murmuring sounds if you can find it

                //click icon disappear
                $('#click').fadeOut();

                //3 seconds in: scene goes dark, royce lights buzz on
                setTimeout(function () {
                    var lightsoff = new Howl({
                        urls: ['assets/lightsoff.mp3']
                    }).play(); //This could be a little quieter

                    $('body').css({'background-color': 'darkblue'});
                    $('.cover').css({'background-color': 'darkblue'});
                    $('.inner').css({'background-color': 'darkblue'});
                    $('.bottomhalf').css({'background-color': 'darkblue'});


                    var $day = $('#day');
                    var $neon = $('#neon');
                    $day.css({display: 'none'});

                    //sound of neon royce turning on
                    var buzz = new Howl({
                        urls: ['assets/buzz.mp3']
                    }).play(); //a little louder? also a bit shorter so it doesn't overlap with the audience cheering so much
                    setTimeout(function () {

                        //neon royce turns on
                        $('#glow').fadeIn('slow');
                        $('#glow2').fadeIn('slow');
                        $('.night').fadeIn('slow');

                        //4 seconds in: crowds cheer
                        setTimeout(function(){
                            var cheer = new Howl({
                                urls: ['assets/crowdcheer.mp3']
                            }).play();
                        },1000);

                    }, 1000);
                }, 3000);
            }
            clickFlag = 1;
        });
});
