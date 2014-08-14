"use strict";

define(function () {
  // In a more realistic case, this object would contain
  // donations, causes etc.
  return {
    comments: {
      get: get_comments,
      add: add_comment
    }
  }

  function get_comments () {
    console.log("Getting comments");

  }

  function add_comment () {
   console.log("Adding comment");
  }
});

