define(["zepto", "moment", "api", "comments_list"],
       function ($, moment, api, comments_list) {
  return function (donation) {
    var input = $("input", donation),
        error = $(".error", donation);

    return { init: init }

    function init () {
      $("form", donation).on("submit", function (event) {
        event.preventDefault();
        submit();
      });
    }

    function submit () {
      api.comments.add(donation.getAttribute("data-id"), {
        text: input.val(),
        created: moment()
      }).then(function (response) {
        comments_list(donation).append(response);
        input.val("");
        input.blur();
        $(error).hide();
      }, function () {
        $(error).show();
      });
    }
  }
});
