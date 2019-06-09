var navBar;
var turningPoint = 150;
window.onload = function(){

  navBar = document.getElementById("nav");

}

var header = document.getElementById("header");

document.addEventListener('scroll', function(){

  window.scrollY;
  if(navBar.classList.contains('navScrolled') == false && window.scrollY > turningPoint){

    navBar.classList.add('navScrolled');
    navBar.classList.remove('navScrolledBack');

  }else if(navBar.classList.contains('navScrolled') == true && window.scrollY <= turningPoint){

    navBar.classList.remove('navScrolled');
    navBar.classList.add('navScrolledBack');

  }

});
