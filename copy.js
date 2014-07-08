/**
 * @file
 * Attaches behaviors for the Media URL module.
 */

(function ($) {

Drupal.behaviors.mediaUrlCopy = {
  attach: function (context) {
    $('#edit-media-url-copy').click(function(event) {
      event.preventDefault();
      copyToClipboard();
    });

    $('#edit-media-url-encode').click(function(event) {
      var input = $('#edit-media-url-uri');
      if(input.hasClass('encoded')) {
        decoded = decodeURIComponent(input.val());
        input.val(decoded);
        input.removeClass('encoded');
      } else {
        encoded = encodeURIComponent(input.val());
        input.val(encoded);
        input.addClass('encoded');
      }
    });


  // Copy text to the Clipboard function
  function copyToClipboard()
  {
    var input = document.getElementById('edit-media-url-uri');
    window.prompt("Copy to clipboard: Ctrl+C, Enter", input.value);
  }
}
};

})(jQuery);

