var play = 1;
var end = 0; 

var gameState = play; 

var box1, box2, box3, box4, ball;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

    ball = createSprite(random(50,750),100,30,30); 
    ball.shapeColor = "white"; 
    ball.velocityX=6; 
    ball.velocityY=6;

    box1 = createSprite(100,587.5,175,25); 
    box1.shapeColor = "blue"; 

    box2 = createSprite(295,587.5,175,25); 
    box2.shapeColor = "red"; 
    
    box3 = createSprite(490,587.5,175,25); 
    box3.shapeColor = "green"; 

    box4 = createSprite(687,587.5,175,25); 
    box4.shapeColor = "yellow"; 

}

function draw() {
    background(0);

    edges = createEdgeSprites(); 

    if(isTouching(ball,box1)){
        music.play();
        ball.shapeColor="blue"; 
        bounceOff(ball,box1); 
    }
    if(isTouching(ball,box2)){
        ball.shapeColor="red"; 
        bounceOff(ball,box2);
        ball.velocityX=0;
        ball.velocityY=0; 
    }
    if(isTouching(ball,box3)){
        music.play();
        ball.shapeColor="green"; 
        bounceOff(ball,box3); 
    }
    if(isTouching(ball,box4)){
        ball.shapeColor="yellow"; 
        bounceOff(ball,box4); 
    }

    if(ball.y<10){
        ball.velocityY=6; 
        music.stop();
    }

    if(ball.x<10){
        ball.velocityX=6;
        music.stop(); 
    }
    else if(ball.x>790){
        ball.velocityX=-6;
        music.stop();
    }

    drawSprites(); 
}

