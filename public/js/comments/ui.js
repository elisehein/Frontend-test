define(["zepto", "ejs", "comments/load"], function ($, ejs, comment_loader) {
  return function (donation) {
    var load_comments    = comment_loader(donation),
        comment_template = new ejs({ url: "../templates/comment.ejs.html" }),
        expand_link      = $(".comments__show-all", donation),
        list             = $("ol", donation);

    return {
      init: init,
      add: add.bind(null, undefined),
      expire_label: expire_expand_label
    }

    function init () {
      load_comments.initial().then(render);
      expand_link.on("click", function () {
        load_comments.remainder().then(function (response) {
          purge_async_added();
          render(response);
        });
      });
    }

    function render (response) {
      $.each(response.comments, add);
      response.meta.total && show_add_form();
      toggle_expand_link(response.meta.total)
    }

    // Add before the expand link by default,
    // otherwise add to the very end
    function add (index, comment, options) {
      var html = get_html(comment);
      options = options || {};
      var before = options.prepend || !options.append;

      if (before)
        expand_link.before(html);
      else
        list.append(html);
    }

    // It is easier to remove all of the asynchronously added comments
    // than to correctly sort and combine new comments from the API
    // with existing ones
    function purge_async_added () {
      while (expand_link.next().length)
        expand_link.next().remove();
    }

    function show_add_form () {
      $("form", donation).removeClass("hidden");
    }

    function toggle_expand_link (total_comments) {
      var show_expand = total_comments > expand_link.siblings().length;
      expand_link.toggleClass("hidden", !show_expand)
        .find("span").text(total_comments);
    }

    function expire_expand_label () {
      var current = expand_link.text();
      expand_link.text(current.replace(/all (\d+)/g, "$1 earlier"));
    }

    function get_html (comment) {
      return comment_template.render({
        comment: comment,
        moment: moment
      });
    }
  }
});
