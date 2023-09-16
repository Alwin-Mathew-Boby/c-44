var backgroundImg


function preload(){

 backgroundImg=loadImage("../Assets/bg8.jpg") 
}
function setup() {
  createCanvas(1620, 800);

  
}

function draw() {
  background(backgroundImg);
  form=new Form()
  form.display()
  
}