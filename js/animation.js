/**
 * Created by Daniel on 7/17/2016.
 */

$(document).ready(function(){
    var lightsout, allnight, allnightloop, buzz, cheer;

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
            // $('video').get(0).play()
            // TODO: look into play non-fullscreen videos on iOS

            if(!clickFlag) {
                // moves Bruin Bash left and right
                $(".spacer").animate({width: Math.min(250, window.innerWidth * 2/3)}, 800);
                $(".spacer").animate({height: $('.bruin').css('height')}, 800);
                $("#cecsocialmedia").fadeIn();
                $("#cacsocialmedia").fadeIn();

                //0 - 2 seconds in: crowds murmuring
                //@GEORGE please insure murmuring sounds if you can find it
                /*
                var murmur = new Howl({
                        urls: ['assets/NAME_HERE.mp3']  //if you find a good murmur mp3 you can just upload it
                                                        //to the assets file and put it in the URL where it
                                                        //says NAME_HERE
                    }).play();
                */

                //click icon disappear
                $('#click').fadeOut();

                //3 seconds in: scene goes dark, royce lights buzz on
                setTimeout(function () {
                    lightsoff = new Howl({
                        urls: ['assets/lightsoff.mp3'],
                        volume: 0.5
                    }).play(); //This could be a little quieter
                               //made the change you can adjust the volume with the setting above(scale from 0.0 to 1.0)

                    allnight = new Howl({
                        urls: ['assets/AllNightIntro.mp3'],
                        volume: 0.9
                    }).play();

                    setTimeout(function () {
                            allnightloop = new Howl({
                                urls: ['assets/AllNightLoopable.mp3'],
                                loop: true
                            }).play();
                        }, 17000);

                    $('#arc').fadeOut();
                    $('body').css({'background-color': 'rgb(9,3,68)'});
                    $('.cover').css({'background-color': 'rgb(9,3,68)'});
                    $('.inner').css({'background-color': 'rgb(9,3,68)'});
                    $('.bottomhalf').css({'background-color': 'rgb(9,3,68)'});
                    $('.night_header').removeClass('night_header');


                    var $day = $('#day');
                    var $neon = $('#neon');
                    $day.css({display: 'none'});
                    $('.day').css({display: 'none'});


                    //sound of neon royce turning on
                    buzz = new Howl({
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
                                urls: ['assets/crowdcheer.mp3'],
                                volume: 0.5
                            }).play();
                        },1000);

                    }, 1000);
                }, 3000);
            }
            clickFlag = 1;
        });
    //mute button
    $("#mute").click(function() {
        lightsoff.mute();
        buzz.mute();
        cheer.mute();
        allnight.mute();
        allnightloop.mute();
        alert ('silence');
    });

});
