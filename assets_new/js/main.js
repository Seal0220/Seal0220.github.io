

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var menu = document.getElementById("myMenu");
var sticky = header.offsetTop;
var stickyMenu = menu.offsetTop;

function myFunction() {
  if (window.pageYOffset > stickyMenu) {
    header.classList.remove("sticky");
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
  }
}
