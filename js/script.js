
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
    document.getElementById("navbar-right").style.fontSize = "1.1em";
    document.getElementById("navbar-right").style.padding = "1em 1em";
    
  }
}

//Navbar same on each page
var nav = `
<header>
  <h1 id="nametag"><a href=".\\index.html">George Lambert</a></h1>
</header>
<nav id="navbar-right">
  <a href=".\\about.html">About Me</a> |
  <div class="dropdown">
    <a href=".\\projects.html">Projects
      <div id="project-list">
        <a href=".\\projects.html#functions">Functions</a>
        <a href=".\\projects.html#number-functions">Number Functions</a>
        <a href=".\\projects.html#dom">DOM</a>
        <a href=".\\projects.html#array">Array</a>
        <a href="https://www.freecodecamp.org/glamb3rt" target="_blank">FreeCodeCamp</a>
        <a href="https://github.com/Glombort/foundersAndCoders" target="_blank">GitHub</a>
      </div>
    </a> |
  </div>
  <a href=".\\applying.html">Why I'm Applying</a>
</nav>`;

document.getElementById("navbar").innerHTML = nav;

// Contacts Section same on each page.
var contacts = `
<header>
  <h1>Contact</h1>
</header>
<div id="contact-links">
  <ul>
    <li>
      <div class="contact-img round">
        <img src=".\\images\\envelope.png" alt="Mail Icon">
      </div>
      <div class="contact-link">
        <a href="mailto:george.lambert99@gmail.com">Email</a>
      </div>  
    </li>
    <li>
      <div class="contact-img circ">
        <img src=".\\images\\linkedin.png" alt="LinkedIn Logo">
      </div>
      <div class="contact-link">
        <a href="https://www.linkedin.com/in/george-lambert-986929187/" target="_blank">LinkedIn</a>
      </div>
    </li>
    <li>
      <div class="contact-img circ">
        <img src=".\\images\\github.png" alt="GitHub Logo">
      </div>
      <div class="contact-link">
        <a href="https://github.com/Glombort" target="_blank">GitHub</a>
      </div>
    </li>
  </ul>
</div>`;

document.getElementById('foot').innerHTML = contacts