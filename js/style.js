function adjustHeader() {
    var header = document.querySelector('header');
    var scrollHeight = document.querySelector('#intro').scrollHeight;
    var scrollPosition = window.pageYOffset;

    if (scrollPosition <= scrollHeight) {
        header.classList.remove('nav-collapsed');

        var maxPadding = 45;
        var minPadding = 10;
        var paddingRange = maxPadding - minPadding;

        var scrollPercentage = scrollPosition / scrollHeight;

        var paddingVal = minPadding + paddingRange * (1 - scrollPercentage);

        header.style.padding = `${Math.max(paddingVal, minPadding)}px 0`;

    } else {
        header.removeAttribute('style');
        header.classList.add('nav-collapsed');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    adjustHeader();
    document.addEventListener('scroll', adjustHeader);
});
