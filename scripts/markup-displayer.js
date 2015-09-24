var MarkupDisplayer = (function(window) {

  function showMarkupForElem(event) {
      event.preventDefault();
      console.log(this.outerHTML);
  }

  function initialiseListeners() {
      var elems = window.document.querySelectorAll('.tile');

      for (var i = 0; i < elems.length; i++) {
          var elem = elems[i];
          elem.addEventListener('click', showMarkupForElem);
      }
  }

  return {
    initialiseListeners: initialiseListeners
  };
})(window);

MarkupDisplayer.initialiseListeners();
