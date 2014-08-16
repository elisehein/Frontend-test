"use strict";

define(["zepto"], function ($) {
  var comments_endpoint = "api/donations/:id/comments";

  // In a more realistic case, this object would contain
  // donations, causes etc.
  return {
    comments: {
      get: get_comments,
      add: add_comment
    }
  }

  function get_comments (donation_id, options) {
    return $.get(comments_endpoint.replace(":id", donation_id), options)
  }

  function add_comment (donation_id, options) {
   return $.post(comments_endpoint.replace(":id", donation_id), options);
  }
});

