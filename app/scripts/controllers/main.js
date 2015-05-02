'use strict';
var images_urls={
    congratulations: [
        'http://i.imgur.com/uNh0ygB.jpg',
        'http://i.imgur.com/HlmWDMU.jpg',
        'http://i.imgur.com/mpHgYA0.jpg',
        'http://i.imgur.com/sZGcvYY.jpg',
        'http://i.imgur.com/w8m4KoS.jpg',
        'http://i.imgur.com/9Kjv8dx.png',
        'http://i.imgur.com/bRJoE4O.jpg',
        'http://i.imgur.com/CRTTAm8.jpg',
        'http://i.imgur.com/bUeuzv7.png',
        'http://i.imgur.com/enOuzmZ.jpg'
    ],
    birthday: [
        'http://i.imgur.com/w8m4KoS.jpg',
        'http://i.imgur.com/9Kjv8dx.png',
        'http://i.imgur.com/bRJoE4O.jpg',
        'http://i.imgur.com/CRTTAm8.jpg',
        'http://i.imgur.com/bUeuzv7.png',
        'http://i.imgur.com/enOuzmZ.jpg',
        'http://i.imgur.com/cjPnOhL.jpg',
        'http://i.imgur.com/HlmWDMU.jpg',
        'http://i.imgur.com/mpHgYA0.jpg',
        'http://i.imgur.com/sZGcvYY.jpg'

    ],
    missyou: [
        'http://i.imgur.com/9Kjv8dx.png',
        'http://i.imgur.com/bRJoE4O.jpg',
        'http://i.imgur.com/cjPnOhL.jpg',
        'http://i.imgur.com/HlmWDMU.jpg',
        'http://i.imgur.com/mpHgYA0.jpg',
        'http://i.imgur.com/sZGcvYY.jpg',
        'http://i.imgur.com/w8m4KoS.jpg',
        'http://i.imgur.com/CRTTAm8.jpg',
        'http://i.imgur.com/bUeuzv7.png',
        'http://i.imgur.com/enOuzmZ.jpg'
    ],
    wedding: [
        'http://i.imgur.com/cjPnOhL.jpg',
        'http://i.imgur.com/HlmWDMU.jpg',
        'http://i.imgur.com/mpHgYA0.jpg'
    ],
    love: [
        'http://i.imgur.com/CRTTAm8.jpg',
        'http://i.imgur.com/bUeuzv7.png',
        'http://i.imgur.com/cjPnOhL.jpg',
        'http://i.imgur.com/HlmWDMU.jpg',
        'http://i.imgur.com/mpHgYA0.jpg',
        'http://i.imgur.com/sZGcvYY.jpg',
        'http://i.imgur.com/w8m4KoS.jpg',
        'http://i.imgur.com/9Kjv8dx.png',
        'http://i.imgur.com/bRJoE4O.jpg',
        'http://i.imgur.com/enOuzmZ.jpg'
    ],
    backtoschool: [
        'http://i.imgur.com/mpHgYA0.jpg',
        'http://i.imgur.com/sZGcvYY.jpg',
        'http://i.imgur.com/cjPnOhL.jpg',
        'http://i.imgur.com/HlmWDMU.jpg',
        'http://i.imgur.com/w8m4KoS.jpg',
        'http://i.imgur.com/9Kjv8dx.png',
        'http://i.imgur.com/bRJoE4O.jpg',
        'http://i.imgur.com/CRTTAm8.jpg',
        'http://i.imgur.com/bUeuzv7.png',
        'http://i.imgur.com/enOuzmZ.jpg'
    ],
    graduation: [
        'http://i.imgur.com/w8m4KoS.jpg',
        'http://i.imgur.com/cjPnOhL.jpg',
        'http://i.imgur.com/HlmWDMU.jpg',
        'http://i.imgur.com/mpHgYA0.jpg',
        'http://i.imgur.com/sZGcvYY.jpg',
        'http://i.imgur.com/9Kjv8dx.png',
        'http://i.imgur.com/bRJoE4O.jpg',
        'http://i.imgur.com/CRTTAm8.jpg',
        'http://i.imgur.com/bUeuzv7.png',
        'http://i.imgur.com/enOuzmZ.jpg'
    ],
    thankyou: [
        'http://i.imgur.com/w8m4KoS.jpg',
        'http://i.imgur.com/9Kjv8dx.png',
        'http://i.imgur.com/cjPnOhL.jpg',
        'http://i.imgur.com/HlmWDMU.jpg',
        'http://i.imgur.com/mpHgYA0.jpg',
        'http://i.imgur.com/sZGcvYY.jpg',
        'http://i.imgur.com/bRJoE4O.jpg',
        'http://i.imgur.com/CRTTAm8.jpg',
        'http://i.imgur.com/bUeuzv7.png',
        'http://i.imgur.com/enOuzmZ.jpg'
    ]
}
/**
 * @ngdoc function
 * @name yougotagiftApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yougotagiftApp
 */

function gift_slider( direction, scroll_width){
    //change id below
    var direction = direction
    var $card_slider = $('.a-slider-ul');
    var time_interval = 100;
//    var scroll_width = scroll_width;
    var element_scroll = $card_slider.css('margin-left');
    if(scroll_width === 0){
//        $card_slider.css('margin-left', 0);
        $card_slider.animate({'margin-left':''+scroll_width}, time_interval);
    }

    if(direction === 1){
        $card_slider.animate({'margin-left':'-='+scroll_width}, time_interval);
    }
    else{
        $card_slider.animate({'margin-right':'+='+scroll_width}, time_interval);
    }


}
angular.module('yougotagiftApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        var scroll_width = 100;
        var total_count = 1;
        $('.a-before-button').click(function(){
            console.log('clcked');
            total_count+=1;
            var total_cards = $('.a-slider-ul li').length;
            //////swap lis
            var $the_last_card = $('.a-slider-ul li').last();

            $('.a-slider-ul li').last().remove();
            $('.a-slider-ul').prepend($the_last_card);
            //////
            if(total_count === total_cards){
                scroll_width=0;
                total_count = 0;
            }
            else{
                scroll_width = 100;
            }
//            gift_slider(1, scroll_width);
        });
        $('.a-after-button').click(function(){
            console.log('clcked');
            total_count+=1;
            var total_cards = $('.a-slider-ul li').length;


            //////swap lis
            var $the_first_card = $('.a-slider-ul li').first();
            $('.a-slider-ul li').first().remove();
            $('.a-slider-ul').append($the_first_card);
            //////


//            gift_slider(1, scroll_width);
        });

        $('.a-single li').click(function(){
            $('.a-single li').removeClass('checked');
            $(this).addClass('checked');
            //// empty the slider
            $('.a-slider-ul').empty();

            var inner_data = $(this).html();
            inner_data = inner_data.replace(/\s+/g, '');
            inner_data = inner_data.toLowerCase();
            for(var el in images_urls[inner_data]){

                $('.a-slider-ul').append("<li><label><img src='"+images_urls[inner_data][el]+"'/></label></li>");
                console.log(inner_data);
            }


        });

        $(document).on('click', '.a-slider-ul label', function(){
            var $current_element = this;
            $('.a-slider-ul label').removeClass('selected');
            $(this).addClass('selected');
        });


  });
