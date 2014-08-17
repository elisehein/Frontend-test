"use strict";

requirejs.config({
  paths: {
    zepto: "../vendor/zepto.min",
    ejs: "../vendor/ejs.min",
    moment: "//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min"
  },
  shim: {
    zepto: { exports: "$" },
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

