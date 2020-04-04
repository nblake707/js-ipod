

//ipod body constructor function
 function iPod () {
  this.x = 200; //value of x coordinate 
  this.y = 65;  //value of  y coordinate
  this.w = 400; //sets width
  this.h = 650; //sets height
  this.edge = 20 //rounds the edges
  
  this.display = function() {
    noStroke(); //no outline
  fill(wht); //sets the inside color to white
  rect(this.x, this.y, this.w, this.h, this.edge);//draws a rectangle
    
  }
  }

//iPod screen object
 scrn = {
  x:255, //value of x coordinate
  y:120, //value of y coordinate
  w:290, //width of screen
  h:200 //height of screen
};
 
 
//pause object
var pause = {
  x:400,
  y:570,
  w:5,
  h:20
}
