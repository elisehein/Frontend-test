define(["ejs", "zepto", "moment", "api"], function (ejs, $, moment, api) {
  $(".donation").each(init_comments);

  // Start by showing 2 comments for each donation
  function init_comments (index, donation) {
    get_comments(donation, 0, 2);
  }

  function get_comments (donation, offset, limit) {
    var donation_id = donation.getAttribute("data-id");

    api.comments.get(donation_id, {
      limit: limit,
      offset: offset
    }).then(show_comments.bind(null, donation));
  }

  function show_comments (donation_node, response) {
    var comments_node = $(".donation__comments", donation_node)[0];

    new ejs({url: "../templates/comments.ejs.html"}).update(comments_node, {
      comments: response.comments,
      total_comments: response.meta.total,
      moment: moment
    });
  }
});

