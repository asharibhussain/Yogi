var footerDropdown = document.querySelector('.footer_drop .dropdown');
var footerDropdownMenu = document.querySelector('.footer_drop .dropdown-menu');
var lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function(event) {
  var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var isFooterDropdownOpen = footerDropdown.classList.contains('show');

  if (isFooterDropdownOpen && (currentScrollPosition < lastScrollPosition || currentScrollPosition === 0)) {
    footerDropdown.classList.remove('show');
  }

  lastScrollPosition = currentScrollPosition;
}); 

footerDropdown.addEventListener('click', function(e) {
  e.stopPropagation();}, false);

footerDropdown.onclick = function() {
    footerDropdown.classList.toggle('show');
}