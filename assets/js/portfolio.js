var animateMe = function() {
  $(".css-animations p.button-wrapper button").addClass("animate-me");
  window.setTimeout(function() {
    $(".css-animations p.button-wrapper button").removeClass("animate-me");
  }, 4000)
}

$(document).ready(function () {
});
