document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var button = document.querySelector('.ir-arriba');
    if (scrollPosition > 500) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
});  

document.querySelector('.ir-arriba').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});