// Hi Ant

// TODO - icons on PNB and warning button - this might be easier to just include the icons in ext then I'll come in and adjust them if you need me to. Easier than trying to dick about getting icons in codepen.

// Should be nice and responsive, let me know if it breaks at any points.

// This jQuery is to do the fancy moving of the labels on the form elements - I'm fairly sure this should be baked into ext somewhere as they have the material theme which has it - so I haven't put to much effort in to this, the date field spacing is all mucked up on iOS for a start. I'm hoping ext has this covered - but if not this is a start...

var focusInput = ".input__w-placeholder input";

$(focusInput).focus(function() {
  $(this).parent().addClass("focus");
});

$(focusInput).blur(function() {
  if( !this.value ) {
    $(this).parent().removeClass("focus");
  }
});