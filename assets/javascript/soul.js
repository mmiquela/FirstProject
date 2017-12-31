var headerHeight = $('.prez').outerHeight();
    var marNegSearch = parseInt($('.search-field').css('margin-top'));
    var calc = headerHeight + marNegSearch;

    $(window).on("scroll", function (e) {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > calc) {
        $('.nav').addClass("fix-search");
      } else {
        $('.nav').removeClass("fix-search");
      }

    });