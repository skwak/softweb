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


$(function(){
  loop();
});

function loop() {
  $('#circle').animate({
    opacity: 0.25,
    left: '+=1400',
    height: '+=6'}, 5000, 'linear',  function() {
      loop();
  });
}
