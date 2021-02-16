const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot;
var platform1, platform2, platform3, platform4, ground;
var score = 0;
var gameState = "onSling";

function setup() {

    createCanvas(500,800);

    engine = Engine.create();
    world = engine.world;

    ball = Bodies.circle(250,500,20);
    World.add(world,ball);

    platform1 = new Platform(100,400 + 20,110,10);
    platform2 = new Platform(400, 320, 110, 10);
    platform3 = new Platform(100,220,110,10);
    platform4 = new Platform(400,120,110,10);

    ground = new Platform(250,750,500,20);

    slingshot = new SlingShot(this.ball,{x:250,y:500});

}

function draw() {

    Engine.update(engine);

    background(200,0,0);

    scoringSystem()

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    slingshot.display();

    platform1.display();
    platform2.display();
    platform3.display();
    platform4.display();

    ground.display();

    drawSprites();

}

function mouseDragged(){

    if(gameState === "onSling"){

        Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

    }

}

function mouseReleased(){

    slingshot.fly();

    gameState = "notOnSling"

}

function scoringSystem(){

    textSize(20)
    fill("white")
    text("Score = " + score, 50, 70);
    text("10 Points", 60, 390 + 20);
    text("20 Points", 360, 310);
    text("30 Points", 60, 210);
    text("50 Points", 360, 110);
    text("-10 Points", 350, 730);
    text("-10 Points", 50, 730);

    if(ball.position.x >= 45 && ball.position.x <= 155 && ball.position.y <= 420 && ball.position.y >= 370 && gameState !== "onSling"){

        score = score + 10;

        Matter.Body.setPosition(this.ball, {x:250, y:500})

        slingshot.attach(ball);

        gameState = "onSling";

    }

    if(ball.position.x >= 345 && ball.position.x <= 455 && ball.position.y <= 320 && ball.position.y >= 270 && gameState !== "onSling"){

        score = score + 20;

        Matter.Body.setPosition(this.ball, {x:250, y:500})

        slingshot.attach(ball);

        gameState = "onSling";

    }

    if(ball.position.x >= 45 && ball.position.x <= 155 && ball.position.y <= 220 && ball.position.y >= 170 && gameState !== "onSling"){

        score = score + 30;

        Matter.Body.setPosition(this.ball, {x:250, y:500})

        slingshot.attach(ball);

        gameState = "onSling";

    }

    if(ball.position.x >= 345 && ball.position.x <= 455 && ball.position.y <= 120 && ball.position.y >= 70 && gameState !== "onSling"){

        score = score + 50;

        Matter.Body.setPosition(this.ball, {x:250, y:500})

        slingshot.attach(ball);

        gameState = "onSling";

    }

    if(ball.position.y >= 710 && gameState !== "onSling"){

        score = score - 10;

        Matter.Body.setPosition(this.ball, {x:250, y:500})

        slingshot.attach(ball);

        gameState = "onSling";

    }

}