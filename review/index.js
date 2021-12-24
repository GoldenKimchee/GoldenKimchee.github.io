"use strict"

function loadHome() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.querySelector("section").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "home.txt", true);
    xhttp.send();
}

function loadProjects() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.querySelector("section").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "projects.txt", true);
    xhttp.send();
}

function loadContacts() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.querySelector("section").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "contacts.txt", true);
    xhttp.send();
}