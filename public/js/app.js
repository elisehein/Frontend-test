"use strict";

requirejs.config({
  paths: {
    zepto: "../vendor/zepto.min",
    ejs: "../vendor/ejs.min"
  },
  shim: {
    zepto: { exports: "$" },
    ejs: { exports: "EJS" }
  }
});

requirejs(["comments"]);

