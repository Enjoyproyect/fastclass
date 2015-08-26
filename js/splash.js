$(function() {
  setTimeout(hideSplash, 50000);
});

function hideSplash() {
  $.mobile.changePage("#page1", "fade");
}