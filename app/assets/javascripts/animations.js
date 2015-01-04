// $(function(){
//   animateCircle();
// });
//
// function animateCircle() {
//   $("#circle").animate({height:"20em"});
// }
//
// setInterval(animateCircle, 100);
// setTimeout(animateCircle, 100);


$(function() {
  $('#circle').animate({opacity: 0.25,
                        left: '+=1400',
                        height: 'toggle'}, 5000, 'linear', function() {
      loop();
    });

  }

});
