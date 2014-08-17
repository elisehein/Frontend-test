define(["zepto", "ejs", "comments/load"], function ($, ejs, comment_loader) {
  return function (donation) {
    var load_comments    = comment_loader(donation),
        comment_template = new ejs({ url: "../templates/comment.ejs.html" }),
        expand_link      = $(".comments__show-all", donation),
        list             = $("ol", donation);

    return {
      init: init,
      add: add.bind(null, undefined)
    }

    function init () {
      load_comments.initial().then(render);
      expand_link.on("click", function () {
        load_comments.remainder().then(render);
      });
    }

    function render (response) {
      $.each(response.comments, add);
      response.meta.total && show_add_form();
      toggle_expand_link(response.meta.total)
    }

    // Prepend by default
    function add (index, comment, options) {
      options = options || {};
      var prepend = options.prepend || !options.append;
      list[prepend ? "prepend" : "append"](get_html(comment));
    }

    function show_add_form () {
      $("form", donation).removeClass("hidden");
    }

    function toggle_expand_link (total_comments) {
      var show_expand = total_comments > $("li", list).length;
      expand_link.toggleClass("hidden", !show_expand)
        .find("span").text(total_comments);
    }

    function get_html (comment) {
      return comment_template.render({
        comment: comment,
        moment: moment
      });
    }
  }
});
