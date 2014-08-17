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

requirejs(["zepto", "add_comment", "comments_list"],
          function ($, add_comment, comments_list) {
  $(".donation").each(function (index, donation) {
    comments_list(donation).init();
    add_comment(donation).init();
  });
})

