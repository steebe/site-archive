var $ = function(e)
{
  return document.getElementById(e);

};

/*
    begin()
    Init of canvas state for gameplay.

    TODO:
        - Create random shapes/patterns in the canvas.
        - Save the final canvas state as a JPG.
*/
var begin = function(){
  var canvas = $('myCan');
  var context = canvas.getContext("2d");
  context.fillStyle = "#2F4F4F";
  context.fillRect(0,0,150,75);
  alert("MADE IT!");

};

var trace = function(){

};
