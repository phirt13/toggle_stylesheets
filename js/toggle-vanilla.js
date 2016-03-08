(function() {

  'use strict';

  function changeStyle() {

    var sheetOne = document.getElementById('sheetOne');
    var sheetTwo = document.getElementById('sheetTwo');
    var toggleSheetsButton = document.getElementById('toggle-stylesheets');

    toggleSheetsButton.addEventListener('click', function(e) {

      console.log('Clicked button');

      if(sheetOne.hasAttribute('disabled')) {
        sheetOne.removeAttribute('disabled');
        sheetTwo.setAttribute('disabled', true);
      } else {
        sheetOne.setAttribute('disabled', true);
        sheetTwo.removeAttribute('disabled');
      }

      e.preventDefault();
    });
  }

  changeStyle();

}());
