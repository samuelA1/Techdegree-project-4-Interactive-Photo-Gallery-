//Lightbox2 plugin
lightbox.option({
      'alwaysShowNavOnTouchDevices': true,
});

// search js
$("input[name='search']").on("keyup", function() {
   var searchInput = this.value.toLowerCase();

   $(".gallery div").each(function(i) {
      var caption = $(this).children().attr("data-title");
      var pureCaption = $(caption).text().toLowerCase();

      if (pureCaption.indexOf(searchInput) > -1) {
         $(this).css('display', 'initial');
      } else {
         $(this).css('display', 'none');
      }
   });
});
