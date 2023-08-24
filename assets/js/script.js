$( function() {
    $( "#inputCheckIn" ).datepicker();
    $( "#inputCheckOut" ).datepicker();

    $('.level-slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
    });

    function videoTuggle(){
      video = $('.level-video').get(0)
      if(video.paused){
        video.play();
        $('.video-control-play').hide();
        $('.video-control-pause').show();
      }
      else{
        video.pause();
        $('.video-control-play').show();
        $('.video-control-pause').hide();
      }
    }

    $('.video-control-play').click(function(){videoTuggle();})
    $('.video-control-pause').click(function(){videoTuggle();})
  }); 