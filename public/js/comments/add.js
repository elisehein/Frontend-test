define(["zepto", "moment", "api", "comments/ui"],
       function ($, moment, api, comments_ui) {
  return function (donation) {
    var form = $("form", donation)[0],
        input = $(form.new_comment),
        error = $(".error", form);

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
        comments_ui(donation).add(new_comment);
        input.val("");
        input.blur();
        error.hide();
      }, function () {
        error.show();
      });
    }
  }
});
