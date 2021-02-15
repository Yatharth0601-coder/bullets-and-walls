
var car, car2 , car3 , wall , bullet ;
var speed, weight , thickness ;

function setup() {
  createCanvas(1600,800);

  speed = random(55, 90)
  weight = random(400, 1500)
  thickness = random(30 , 90)

  car = createSprite(50, 200, 50, 50);
  car2 = createSprite(80, 200, 50, 50);
  car3 = createSprite(110, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(80, 80, 80);
  bullet = createSprite(100, 400, 80, 20);
  bullet.shapeColor=color("white");

  car.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  bullet.velocityX=speed;

}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet,wall)){
    
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
    bullet.velocityX= 0;
  }

  

  if(wall.x - car.x < (car.width + wall.width)) {
    car.velocityX = 0
    var deformation = 0.5 * weight * speed * speed / 22500;
    if(deformation > 180) {
      car.shapeColor = color(255, 0, 0);
    }

    if(deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
    }

    if(deformation < 100) {
      car.shapeColor = color(0, 255, 0);
    }


    if(wall.x - car2.x < (car2.width + wall.width)) {
      car2.velocityX = 0
      var deformation = 0.5 * weight * speed * speed / 22500;
      if(deformation > 180) {
        car2.shapeColor = color(255, 0, 0);
      }
  
      if(deformation < 180 && deformation > 100) {
        car2.shapeColor = color(230, 230, 0);
      }
  
      if(deformation < 100) {
        car2.shapeColor = color(0, 255, 0);
      }


      if(wall.x - car3.x < (car.width + wall.width)) {
        car3.velocityX = 0
        var deformation = 0.5 * weight * speed * speed / 22500;
        if(deformation > 180) {
          car3.shapeColor = color(255, 0, 0);
        }
    
        if(deformation < 180 && deformation > 100) {
          car3.shapeColor = color(230, 230, 0);
        }
    
        if(deformation < 100) {
          car3.shapeColor = color(0, 255, 0);
        }
        

        car.display;
        car2.display;
        car3.display;
        wall.display;
        
        drawSprites()
  }

function hasCollided(Lbullet,Lwall)
{
  var bulletRightEdge=Lbullet.x+Lbullet.width;
  var  wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}

    
    }
  }
}