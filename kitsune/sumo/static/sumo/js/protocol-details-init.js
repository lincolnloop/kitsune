function detailsInit() {
  'use strict';
  var _mqWide = matchMedia('(max-width: 1055px)');

  var sidebarList = document.querySelector('.sidebar-nav');

  function swapMobileSubnavText(){
    var button = document.querySelector('.details-heading button');
    var activeLinkText = document.querySelector('.sidebar-nav .selected a').innerHTML;
    button.innerHTML = activeLinkText;
  }

  if (sidebarList && _mqWide.matches) {
    window.Mzp.Details.init('.details-heading');
    swapMobileSubnavText();
  }
  _mqWide.addListener(function(mq) {
    if (sidebarList && mq.matches) {
      window.Mzp.Details.init('.details-heading');
      swapMobileSubnavText();

    } else {
      window.Mzp.Details.destroy('.details-heading');
    }
  });
}

// This is patched here to help the tests locate the referenced function
if (typeof module != 'undefined' && module.exports) {
  module.exports.detailsInit = detailsInit;
}

detailsInit();