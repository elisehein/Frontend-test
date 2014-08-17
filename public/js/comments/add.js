define(["zepto", "moment", "api", "comments/ui"],
       function ($, moment, api, comments_ui) {
  return function (donation) {
    var form = $("form", donation)[0],
        input = $(form.new_comment),
        error = $(".error", form),
        ui = comments_ui(donation);

    return {
      init: init
    }

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
        ui.add(new_comment, { append: true });
        ui.expire_label();
        input.val("");
        input.blur();
        error.hide();
      }, function () {
        error.show();
      });
    }
  }
});
