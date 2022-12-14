const light = document.getElementById('bulb');

const discoRotate = [
  {transform: "rotateY(0deg)",easing:"ease-in-out"},
  {transform: "rotateY(90deg)"},
  {transform: "rotateY(0deg)"},
  {transform: "rotateY(90deg)"},
  {transform: "rotateY(0deg)",easing:"ease-in-out"},
]

const discoTiming = {
  duration: 3000,
  iterations: 95,
  fill: "forwards",
};

const discRotate = [
  {transform: "rotateZ(360deg)" },
  {transform: "rotateZ(0deg)"},
]
const discRotate2 = [
  {transform: "rotateZ(-360deg)"},
  {transform: "rotateZ(0deg)"},
]

const discoball = document.querySelector("#discoTest");
const disc = document.querySelector("#disc");
const disc2 = document.querySelector("#disc2");

var discotimeline = discoball.animate(discoRotate, discoTiming,);
discotimeline.pause();
var audio = new Audio ("BoogieWonderland.mp3"); 
audio.pause();
var disctimeline = disc.animate(discRotate, discoTiming,);
disctimeline.pause();
var disc2timeline = disc2.animate(discRotate2,discoTiming);
disc2timeline.pause();
var background = document.querySelector("body").animate({
      backgroundColor: ["#f0ffff","pink","red", "yellow", "green","turquoise","purple","pink","#f0ffff"],},
      discoTiming,);
background.pause();

var count = 0;

light.addEventListener('click',function(e){
  e.target.classList.toggle('bulb-on');
  if (count == 0){
    count = 1;
    audio.play();
    discotimeline.play();
    disctimeline.play();
    disc2timeline.play();
    background.play();
  }
  else{
    count = 0;
    audio.pause();
    discotimeline.finish();
    discotimeline.pause();
    disctimeline.pause();
    disc2timeline.pause();
    background.finish()
  }
});