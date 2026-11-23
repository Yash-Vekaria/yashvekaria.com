// On phones the nav bar scrolls sideways; bring the current page's tab into view.
document.addEventListener('DOMContentLoaded', function () {
    if (!window.matchMedia('(max-width: 700px)').matches) return;
    var bar = document.querySelector('.header-content');
    var active = document.querySelector('.nav-link.active');
    if (!bar || !active || bar.scrollWidth <= bar.clientWidth) return;
    var barBox = bar.getBoundingClientRect();
    var tabBox = active.getBoundingClientRect();
    bar.scrollLeft += (tabBox.left - barBox.left) - (bar.clientWidth - tabBox.width) / 2;
});
