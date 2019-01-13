var navButton = document.getElementsByClassName("nav")[0].children;

for (var i = 0; i < navButton.length; i++)
  navButton[i].addEventListener("click", empty);


function empty()
{
  alert("Add transition effect between page loading later.");
}




var nameTag = document.getElementById("name");

nameTag.addEventListener("mouseover", zoomName)
nameTag.addEventListener("mouseout", unZoomName)


function zoomName()
{
  this.innerHTML = "Chun Hin Chan";
}

function unZoomName()
{
  this.innerHTML = "Hin Chan";
}
