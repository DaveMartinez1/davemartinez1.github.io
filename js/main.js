document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY
    var button = document.querySelector('.ir-arriba');
    if (scrollPosition > 500) {
      button.style.display = 'block'
    } else {
      button.style.display = 'none'
    }
})

document.querySelector('.ir-arriba').addEventListener('click', function(e) {
    e.preventDefault()
    window.scrollTo({top: 0, behavior: 'smooth'})
})

document.addEventListener("DOMContentLoaded", function() {
  var pathname = window.location.pathname;
  
  if (pathname === "/" || pathname.endsWith("index.html")) {
      var footer = document.querySelector("footer");
      if (footer) {
          footer.style.position = "static";
      }
  }
});

