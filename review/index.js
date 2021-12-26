"use strict"

function toggleTab(tab) {
  let toggleClasses = new Array();

  switch(tab) {
    case ".home-link":
      toggleClasses.push([".projects-link", ".contacts-link"]);
      break;
    case ".projects-link":
      toggleClasses.push([".home-link", ".contacts-link"]);
      break;
    case ".contacts-link":
      toggleClasses.push([".home-link", ".projects-link"]);
      break;
  };

  for (let i = 0; i < toggleClasses.length; i++) {
    document.querySelector(toggleClasses[i]).classList.toggle("clicked");
  }
}

function loadHome() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector("section").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "pages/home.txt", true);
  xhttp.send();
}

function loadProjects() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector("section").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "pages/projects.txt", true);
  xhttp.send();
}

function loadContacts() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector("section").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "pages/contacts.txt", true);
  xhttp.send();
}