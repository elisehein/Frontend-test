// Fall back to jQuery if IE<10
// See https://github.com/simonsmith/requirejs-zepto-jquery
define(("__proto__" in {} ? ["zepto"] : ["jquery"]), function ($) {
  return $;
});
