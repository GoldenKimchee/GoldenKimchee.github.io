"use strict"

function loadHome() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector("section").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "home.txt", true);
  xhttp.send();
}

function loadProjects() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector("section").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "projects.txt", true);
  xhttp.send();
}

function loadContacts() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector("section").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "contacts.txt", true);
  xhttp.send();
}