"use strict";

define(["zepto"], function ($) {
  // In a more realistic case, this object would contain
  // donations, causes etc.
  return {
    comments: {
      get: get_comments,
      add: add_comment
    }
  }

  function get_comments (donation_id, options) {
    var endpoint = "api/donations/" + donation_id + "/comments";
    return $.get(endpoint, options)
  }

  function add_comment () {
   console.log("Adding comment");
  }
});

