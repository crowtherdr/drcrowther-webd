var animateMe = function() {
  $(".css-animations p.button-wrapper button").addClass("animate-me");
  window.setTimeout(function() {
    $(".css-animations p.button-wrapper button").removeClass("animate-me");
  }, 4000)
}

var scrollContainer = function(container) {
  $(container).scrollTop(200);
}

var changeToOverflow = function(container) {
  $(container).css("overflow", "hidden");
}

var toggleBoxDisplay = function(container) {
  var container = $(container);

  if (!container.css("box-supress") || container.css("box-supress") === "show") {
    container.css("overflow", "hide");
  }
  else {
    container.css("overflow", "show");
  }
}

$(document).ready(function () {
});
