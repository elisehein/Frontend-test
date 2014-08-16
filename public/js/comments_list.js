define(["ejs", "zepto", "moment", "api"], function (ejs, $, moment, api) {

  var comment_template = new ejs({ url: "../templates/comment.ejs.html" }),
      initial_amount = 2;

  return function (donation) {
    var container = $("ol", donation);

    return {
      init: init,
      append: append
    }

    function init () {
      get_comments(0, initial_amount);
      var get_remainder = get_comments.bind(null, initial_amount, 0);
      $(".comments__show-all", donation).on("click", get_remainder);
    }

    function get_comments (offset, limit) {
      api.comments.get(donation.getAttribute("data-id"), {
        limit: limit,
        offset: offset
      }).then(render_comments);
    }

    function render_comments (response) {
      response.comments.forEach(function (comment) {
        container.prepend(get_rendered(comment));
      });

      if (response.meta.total) show_add_form();
      toggle_expand_link(response.meta.total, $("li", container).length);
    }

    function append (comment) {
      container.append(get_rendered(comment));
    }

    function get_rendered (comment) {
      return comment_template.render({
        comment: comment,
        moment: moment
      });
    }

    function toggle_expand_link (total_comments, comments_displayed) {
      var expand_link = $(".comments__show-all", donation);
      expand_link.find("span").text(total_comments);
      expand_link.toggleClass("hidden", total_comments <= comments_displayed);
    }

    function show_add_form () {
      $("form", donation).removeClass("hidden");
    }
  }
});

