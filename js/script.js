//Nav bar shrink on scroll
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
    document.getElementById("nametag").style.paddingBottom = "4em";
    document.getElementById("navbar-right").style.fontSize = "1.1em";
    document.getElementById("navbar-right").style.padding = "1em 1em";
    
  }
}

//Mobile Nav
function menuToggle() {
  if (document.getElementById("navbar-right").style.display == "") { 
  document.getElementById("navbar-right").style.display = "inline-block";
  } else {
    document.getElementById("navbar-right").style.display = ""
  }
}

//Navbar content on each page
var nav = `
<header>
  <h1 id="nametag"><a href=".\\index.html">George Lambert</a></h1>
</header>
<button type="button" id="menu" onclick="menuToggle()">Menu</button>
<nav id="navbar-right">
  <a href=".\\index.html">Home</a>
  <a href=".\\applying.html">Why I'm Applying</a>
  <a href=".\\about.html">About Me</a>
  <div class="dropdown">
    <a href=".\\projects.html">Projects
      <div id="project-list">
        <a href=".\\projects.html#functions">Functions</a>
        <a href=".\\projects.html#number-functions">Number Functions</a>
        <a href=".\\projects.html#dom">DOM</a>
        <a href=".\\projects.html#array">Array</a>
        <a href="https://github.com/Glombort/foundersAndCoders" target="_blank">GitHub</a>
      </div>
    </a>
  </div>
  
  <a href="#foot">Contact</a>
</nav>`;

document.getElementById("navbar").innerHTML = nav;

// Contacts content on each page.
var contacts = `
<header>
  <h1>Contact</h1>
</header>
<div id="contact">
  <div class="item">
    <a href="mailto:george.lambert99@gmail.com">
      <div class="contact-img round">
        <img src=".\\Images\\envelope.png" alt="Mail Icon">
      </div>
      <div class="contact-link">
        Email
      </div>
    </a>
  </div>
  <div class="item">
    <a href="https://www.linkedin.com/in/george-lambert-986929187/" target="_blank">
      <div class="contact-img circ">
        <img src=".\\Images\\linkedin.png" alt="LinkedIn Logo">
      </div>
      <div class="contact-link">
        LinkedIn
      </div>
    </a>
  </div>
  <div class="item">
    <a href="https://github.com/Glombort" target="_blank">
      <div class="contact-img circ">
        <img src=".\\Images\\github.png" alt="GitHub Logo">
      </div>
      <div class="contact-link">
        GitHub
      </div>
    </a>
  </div>
</div>`;

document.getElementById('foot').innerHTML = contacts


//  Allowing use of tabs on about page.
function openAbout(evt, aboutName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(aboutName).style.display = "block";
  evt.currentTarget.className += " active";
}