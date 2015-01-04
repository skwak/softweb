$(function(){
  loop();
});

function loop() {
  $("#circle").animate({
    opacity: 0.25,
    left: '+=20em',
    height: '+=1em'}, 5000, 'linear',  function() {
      loop();
  });
}
