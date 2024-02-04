document.addEventListener("DOMContentLoaded", function() {
    var accordions = document.getElementsByClassName('accordion-btn');

    for (var i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    }
});