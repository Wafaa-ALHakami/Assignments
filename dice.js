var n1 = Math.random();
n1 = n1*6;
n1 = Math.floor(n1)+1;
var n2 = Math.random();
n2 = n2*6;
n2 = Math.floor(n2)+1;
var text;
if (n1 > n2) {
document.querySelector("h1").textContent="Player 1 is the winner";
}
else if (n1 < n2) {
document.querySelector("h1").textContent="Player 2 is the winner"; }
else if (n1 === n2) {
document.querySelector("h1").textContent="Player 1 and Player 2 got same result";
}
switch(n1)
{
  case 1:
  document.getElementById("Image1").src = "image/face_1.png";
  break;
  case 2:
  document.getElementById("Image1").src = "image/face_2.png";
  break;
  case 3:
  document.getElementById("Image1").src = "image/face_3.png";
  break;
  case 4:
  document.getElementById("Image1").src = "image/face_4.png";
  break;
  case 5:
  document.getElementById("Image1").src = "image/face_5.png";
  break;
  case 6:
  document.getElementById("Image1").src = "image/face_6.png";
  break;
}
switch(n2)
{
  case 1:
  document.getElementById("Image2").src = "image/face_1.png";
  break;
  case 2:
  document.getElementById("Image2").src = "image/face_2.png";
  break;
  case 3:
  document.getElementById("Image2").src = "image/face_3.png";
  break;
  case 4:
  document.getElementById("Image2").src = "image/face_4.png";
  break;
  case 5:
  document.getElementById("Image2").src = "image/face_5.png";
  break;
  case 6:
  document.getElementById("Image2").src = "image/face_6.png";
  break;
}
