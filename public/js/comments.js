define(["ejs", "zepto", "api"], function (ejs, $, api) {
  $(".donation").each(get_comments);

  function get_comments (index, donation) {
    var donation_id = donation.getAttribute("data-id");

    api.comments.get(donation_id, function (response) {
      console.log(response);
    });
  }

});

