var $ = function()
{
  return document.getElementById();
}


var begin = function()
{
  var canvas = $('myCan');
  var context = canvas.getContext("2d");
  alert(canvas);
}
