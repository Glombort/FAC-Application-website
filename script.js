window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.height = "3em";
    document.getElementById("nametag").style.fontSize = "1.25em";
    document.getElementById("navbar-right").style.fontSize = "0.95em";
    document.getElementById("navbar-right").style.padding = "0.5em 1em";
  } else {
    document.getElementById("navbar").style.height = "4em";
    document.getElementById("nametag").style.fontSize = "1.75em";
    document.getElementById("navbar-right").style.fontSize = "1.1em";
    document.getElementById("navbar-right").style.padding = "1em 1em";
    
  }
}