$(function(){
   var $card = $('#card'),
      $close = $('#close'),
      $greeting = $('#greeting'),
      $header = $('.header').find('h1'),
      $pers = $('#container');

    setTimeout(function(){
      close();
    }, 1500);

    $header.on('click', function(){
      close();
      return false;
    });


    function close(){
      $card.removeClass('rotate_').addClass('rotate');
      $close.removeClass('flip_').addClass('flip');
      $greeting.removeClass('open_').addClass('open');
      $pers.removeClass('opencover_').addClass('opencover');
    }

    function cards(){
      $card.removeClass('rotate').addClass('rotate_');
      $close.removeClass('flip').addClass('flip_');
      $greeting.removeClass('open').addClass('open_');
      $pers.removeClass('opencover').addClass('opencover_');
    }
});