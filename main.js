console.log("sup beatrice");

$(function() {
  console.log("ready beatrice");

  $('.new_email_signup').click(function(event) {
    // $('#spinner-arrow').addClass("spun");
    $(this).addClass("loading");
    // $(this).attr("disabled", "disabled");

    var input = $('.new_email_input');
    $.ajax({
      url: "//thisgame.us4.list-manage.com/subscribe/post?u=69f2fd25cd13c43e4fe7155fd&amp;id=f74fe540b9&c=?",
      type: "jsonp",
      data: input.val(),
      success: function(e, r) {
        debugger
      },
      error: function(e, r) {
        debugger
        $('#new_email_signup').html("Our bad- there was an error on our server. Please try again soon- and don't hesitate to email gm@thisgame.co for assistance. Sorry about that.");
      }
    });
  });
});
