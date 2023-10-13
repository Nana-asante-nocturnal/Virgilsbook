document.addEventListener('DOMContentLoaded', function() {
  var dropdowns = document.getElementsByClassName('dropdown');
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', function() {
      this.classList.toggle('active');
    });
  }
});