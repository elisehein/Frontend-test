define(["zepto", "moment", "api", "comments_list"],
       function ($, moment, api, comments_list) {
  return function (donation) {
    var form = $("form", donation)[0],
        input = $(form.new_comment),
        error = $(".error", form);

    return { init: init }

    function init () {
      $(form).submit(function (event) {
        event.preventDefault();
        submit();
      });
    }

    function submit () {
      api.comments.add(donation.getAttribute("data-id"), {
        text: input.val(),
        created: moment()
      }).then(function (new_comment) {
        comments_list(donation).append(new_comment);
        input.val("");
        input.blur();
        error.hide();
      }, function () {
        error.show();
      });
    }
  }
});
