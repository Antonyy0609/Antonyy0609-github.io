function hide() {
  document.querySelector(".proyecto-1").style.display = "none";
  document.querySelector(".proyecto-2").style.display = "none";
  document.querySelector(".proyecto-3").style.display = "none";
}

document.querySelector(".proyecto1-button").onclick = function () {
  hide();
  document.querySelector(".proyecto-1").style.display = "flex";
};
document.querySelector(".proyecto2-button").onclick = function () {
  hide();
  document.querySelector(".proyecto-2").style.display = "flex";
};
document.querySelector(".proyecto3-button").onclick = function () {
  hide();
  document.querySelector(".proyecto-3").style.display = "flex";
};
document.querySelector(".esconder-proyectos").onclick = function () {
  hide();
};

var typed=new Typed ('.textline',{
  strings:["Programador","Productor Musical","Bilingüe","Dibujante"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
})