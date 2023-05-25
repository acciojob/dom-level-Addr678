//your JS code here. If required.
// JavaScript code
window.addEventListener('DOMContentLoaded', function() {
  var element = document.querySelector('#level');
  var level = 0;

  while (element.parentNode) {
    element = element.parentNode;
    level++;
  }

  alert("The level of the element is: " + level);
});

