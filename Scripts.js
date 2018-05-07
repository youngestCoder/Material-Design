// Custom Functions
$.fn.ripple = function(x, y, type) {
  var e = $(this)[0];
  $(e).append('<div class="ripple"></div>');
  if (type == "default") {
    $(e).children('.ripple').offset({left: x, top: y}).css('transform', 'scale(1)').css('border-radius', "0px");
  } else if (type == "circle")
  {
    $(e).children('.ripple').offset({left: x, top: y}).css('transform', 'scale(1)');
  }
}

var i = 0;
$.fn.removeRipple = function() {
  i++;
  var ele = $(this)[0];
  $(ele).children('.ripple').css('background', 'transparent').prop('id', i.toString());
  function wait() {
    $(ele).children('.ripple').remove();
  };
  setTimeout(wait, 300);
}

// Ripple Effect

$(document).on('mousedown', '.md-ripple-effect:not(.md-circle)', function(e) {
  $(this).ripple(e.clientX, e.clientY + $(window).scrollTop(), "default");
});
$(document).on('mousedown', '.md-ripple-effect.md-circle', function(e) {
  $(this).ripple(e.clientX, e.clientY + $(window).scrollTop(), "circle");
})

$(document).on('mouseup', function() {
  $(".md-ripple-effect").each(function() {
    $(this).removeRipple();
  });
});
