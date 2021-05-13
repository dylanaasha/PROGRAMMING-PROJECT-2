let bubbles = []
let bubble;
function setup (){
  createCanvas (600,400);
  for (let i= 0; i <5 'itt {
    function mouse Pressed (){
  let x = random (width);
  let y = random (10.50);
  let r = random (10.50);
  let b= new Bubble (mousex, mousey, r);
  bubbles.push(b);
    }
    
    function draw () {
      background (0);
      for(let i= 0; i <bubbles.length;itt) 
        bubbes [i]. move();
      
    }
    function draw (){
      background (0);
      for (let i= 0; 1<bubbles.length;itt){
        bubbles[i]. move ();
        bubbles[i]. show ();
      }
      
 function draw (){
 background (0);
 for(let i= 0; i< bubbles.length;itt){
   bubbles[i].move();
   bubbles[i]. show();
 }
   
   for (
     
   class Bubble {
     constructor
     this.x=x;
     this.y=y;
     this.r=r;
     ;
     clicked (){
let d=dist(mousex,mousey,this.x,this.y)
cliked (px,py) {
  letd = dist (px,py,this.x,this.y);
  if(d<this.r){
    this.brightness= 255;


console.log("CLICKED" ON BUBBLE!)");
   }
     
move () {
     this.x + random(-5,5)
     this.y+random(-5,5)
     }
     
     show() {
       stroke (255);
       strokeWeight (4);
       noFill().
      ellipse(this.x,this.y,this.r*2);
     }
  
  move () {
     
     }