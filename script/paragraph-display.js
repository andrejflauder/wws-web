function openTab(event, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("paragraf");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }  
  document.getElementById(tabName).style.display = "";
}