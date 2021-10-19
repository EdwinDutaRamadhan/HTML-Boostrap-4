console.log("JavaSriptTerbaca");
/*
var pengkondisianAwalScrollY = window.pageYOffset;
window.onscroll = function() {
var pengkondisianAkhirScrollY = window.pageYOffset;
  if ((pengkondisianAwalScrollY) > pengkondisianAkhirScrollY) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  pengkondisianAwalScrollY = pengkondisianAkhirScrollY;
}
*/

const header = document.querySelector(".nav");

window.onscroll = function(){
  var posisi = window.scrollY;
  console.log(posisi);
  if(posisi >= 450){
    //header.classList.add('active');
    document.getElementById("navbar").style.top = "-70px";
  }else{
    //header.classList.remove('active');
    document.getElementById("navbar").style.top = "0";
  }
}