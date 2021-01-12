const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin,paper;


function setup() {


      createCanvas(1400,800);
      rectMode(CENTER);


      engine = Engine.create();
      world = engine.world;


      dustbin = new Dustbin(1110,760);
      paper = new Paper(200,700,50);

      var options = {

         isStatic: true	

      }
      ground = Bodies.rectangle(700,770,1400,10,options);

      World.add(world,ground);

      Engine.run(engine);

}

function draw()  {

         
      background("grey")
      

      dustbin.display();
      paper.display();

}



function keyPressed() {

   if (keyCode === UP_ARROW) {
 
     Matter.Body.applyForce(paper.body,paper.body.position,{x:0.7,y:-5});
   
   }
 }
 
