"use strict";

requirejs.config({
  paths: {
    jquery: "//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min",
    zepto: "../vendor/zepto.min",
    zepto_fallback: "../vendor/zepto_fallback",
    ejs: "../vendor/ejs.min",
    moment: "//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min"
  },
  map: {
    "*": {
      "zepto": "zepto_fallback"
    },
    zepto_fallback: {
      "zepto": "zepto"
    }
  },
  shim: {
    zepto: { exports: "Zepto" },
    ejs: { exports: "EJS" },
    moment: { exports: "moment" }
  }
});

requirejs(["zepto", "comments/add", "comments/ui"],
          function ($, comment_adder, comments_ui) {
  $(".donation").each(function (index, donation) {
    comments_ui(donation).init();
    comment_adder(donation).init();
  });
})

