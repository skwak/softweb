$(function(){
  loop();
  secondLoop();
  findSoft();
  triangleMoves();
  moveCloud();
  movePinkCloud();
});

function loop() {
  $("#circle").animate({
    opacity: 0.25,
    left: "+=2em",
    height: "+=1em",
    width: "+=2em",
  }, 9000, "linear", function() {
      loop();
  });
}

function secondLoop() {
  $("#second-circle").animate({
    opacity: 0.3,
    left: "+=2em",
    width: "+=5em",
  }, 7000, "linear", function() {
      secondloop();
  });
}

function findSoft() {
  var $soft = $("span:contains('soft')")
  $soft.css("font-style", "italic");
  $soft.animate({height: "+=1em"});
}

function triangleMoves() {
  $("#triangle").animate({
    width: "+=2em",
  }, 5000, "linear", function() {
      triangleMoves();
  });
}

function moveCloud() {
  $("#cloud").animate({
    left: "+=50"
  }, 7000, function() {
      moveCloud();
    });
}

function movePinkCloud() {
  $("#pink-cloud").animate({
    left: "+=50"
    // height: "toggle"
  }, 5000, function() {
    movePinkCloud();
  });
}
