window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "2em";
    document.getElementById("nametag").style.fontSize = "1em";
    document.getElementById("navbar-right").style.fontSize = "0.75em";
    document.getElementById("navbar-right").style.padding = "0.5em 1em";
  } else {
    document.getElementById("navbar").style.height = "4em";
    document.getElementById("nametag").style.fontSize = "1.75em";
    document.getElementById("navbar-right").style.fontSize = "1em";
    document.getElementById("navbar-right").style.padding = "1em 1em";
    
  }
}