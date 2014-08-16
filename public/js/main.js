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
          function ($, addComment, commentsList) {
  $(".donation").each(function (index, donation) {
    commentsList(donation).init();
    addComment(donation).init();
  });
})

