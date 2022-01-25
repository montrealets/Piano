/// long wey to select buttons
/*document.querySelector(".w.drum").addEventListener("click",handleClick);
document.querySelector(".a.drum").addEventListener("click",handleClick);
document.querySelector(".s.drum").addEventListener("click",handleClick);
document.querySelector(".d.drum").addEventListener("click",handleClick);
document.querySelector(".j.drum").addEventListener("click",handleClick);
document.querySelector(".k.drum").addEventListener("click",handleClick);
document.querySelector(".l.drum").addEventListener("click",handleClick);*/

function makeMusic(button){

      switch (button) {
        case "q":
          var tom1 = new Audio('sounds/A.mp3');
          tom1.play();
          break;

        case "w":
          var tom2 = new Audio('sounds/B.wav');
          tom2.play();
          break;

        case "e":
          var tom3 = new Audio('sounds/C.wav');
          tom3.play();
          break;

        case "r":
          var tom4 = new Audio('sounds/D.wav');
          tom4.play();
          break;

        case "t":
          var tom4 = new Audio('sounds/E.wav');
          tom4.play();
          break;

        case "y":
          var crash = new Audio('sounds/F.mp3');
          crash.play();
          break;

        case "u":
          var kick = new Audio('sounds/G.wav');
          kick.play();
          break;
      }
}
function buttonAnimation (){

}
document.addEventListener("keydown",function(event){
  var key= event.key;
  makeMusic(event.key);
  buttonAnimation(event.key);
})
document.addEventListener("click",function(event){
  var click=event.path[0].innerHTML;
  makeMusic(click);
    buttonAnimation(click);
})
