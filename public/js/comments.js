define(["ejs", "zepto", "moment", "api"], function (ejs, $, moment, api) {

  var section_template = new ejs({ url: "../templates/comments.ejs.html" }),
      comment_template = new ejs({ url: "../templates/comment.ejs.html" }),
      initial_amount = 2,
      donations = {};

  $(".donation").each(function (index, donation_node) {
    donations[get_id(donation_node)] = {};
    get_comments(donation_node, 0, initial_amount);
  });

  function get_comments (donation_node, offset, limit) {
    var id = get_id(donation_node);

    api.comments.get(id, {
      limit: limit,
      offset: offset
    }).then(function (response) {
      donations[id].comments_displayed = response.comments.concat(donations[id].comments_displayed || []);
      donations[id].total_comments = response.meta.total;
      update_view(donation_node, response)
    });
  }

  function update_view (donation_node) {
    render_section(donation_node);
    render_comments(donation_node);
    bind_show_all(donation_node);
  }

  function render_section (donation_node) {
    var id = get_id(donation_node);
    var rendered = section_template.render(donations[id]);
    $(".donation__comments", donation_node).html(rendered);
  }

  function render_comments (donation_node) {
    var container = $("ol", donation_node);
    donations[get_id(donation_node)].comments_displayed.forEach(function (comment) {
      container.append(comment_template.render({
        comment: comment,
        moment: moment
      }));
    });
  }

  function bind_show_all (donation_node) {
    $(".comments__show-all", donation_node).on("click", function () {
      get_comments(donation_node, initial_amount, 0);
    });
  }

  function get_id (donation_node) {
    return donation_node.getAttribute("data-id");
  }
});

