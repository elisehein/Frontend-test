define(["api"], function (api) {

  var initial_amount = 2;

  return function (donation) {
    return {
      initial : get_comments.bind(null, 0, initial_amount),
      remainder: get_comments.bind(null, initial_amount)
    }

    function get_comments (offset, limit) {
      return api.comments.get(donation.getAttribute("data-id"), {
        limit: limit,
        offset: offset
      });
    }
  }
});

