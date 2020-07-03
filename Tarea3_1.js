
let a;

function setup() {
  createCanvas(400, 400);
  }

function draw() {
  background(220);
  fill (255, 255, 255)
  square(0, 0, 0);       
  if (mouseIsPressed){
    a = int(random(1, 7));
  }
  else if (a == 1){
 
//1
  fill (192, 192, 192);
  circle(200, 200, 80);
  }
  

  else if(a == 2 ){
//2
  fill (192, 192, 192);
  circle(200, 100, 80);
  circle(200, 300, 80);
  }
  else if(a == 3){
//3  
  fill (192, 192, 192);
  circle(200, 100, 80);
  circle(200, 200, 80);
  circle(200,300, 80);

  }
  
  else if(a == 4){
//4
  fill (192, 192, 192);
  circle(100, 100, 80);
  circle(300, 100, 80);
  circle(100, 300, 80);
  circle(300, 300, 80);
  }
  
  else if(a == 5){
//5  
  fill (192, 192, 192);
  circle(100, 100, 80);
  circle(300, 300, 80);
  circle(200, 200, 80);
  circle(100, 300, 80);
  circle(300, 300, 80);
    circle(300,100,80)
  }
  
  else if(a == 6){
  
//6  
 fill (192, 192, 192);
 circle(100, 100, 80);
 circle(100, 215, 80);
 circle(100, 330, 80);
 circle(300, 100, 80);
 circle(300, 330, 80);
 circle(300, 215, 80);
 } 
  {print (a)}
}
