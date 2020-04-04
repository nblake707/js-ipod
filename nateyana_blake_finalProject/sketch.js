/*
Nateyana Blake
iPod Classic
May 2018

Blog: nblake707.wordpress.com/2018/05/17/final-project/
Resources: http://coursescript.com/notes/interactivecomputing/images/
*/

  //function that preloads the song. Making it available for when thw song is triggered
  function preload() { 
  
  //load image
  img = loadImage("ipod.jpg"); //sets img variable equal to loadImage 
  
  //initialize sound
  sound = loadSound("girlFromG.mp3"); //location of the mp3 track
  }

  function setup() {
  
  createCanvas(800,800); //creates a canvas 800 by 800
  background(bcg); //sets the background color
	
	fill(wht);
	textSize(numH); 
  text(classic[0],numI,numJ ); // print string by index, followed by spacing and location of the text.
	
  iPod = new iPod (); //
  }

  //draw function
  function draw() { 
  
  //iPod body
  iPod.display(); //calling the constructor function
  
  //screen
  stroke(wht); //sets outline of rectangle to white
  rect(scrn.x, scrn.y, scrn.w, scrn.h); //draws a rectangle
  image(img, wht, numG);//sets the postion of the screen picture
  
  //scroll wheel
  fill(scrl.r, scrl.g, scrl.b);//sets inside of scroll wheel
  noStroke();//no outline 
  ellipse(scrl.x, scrl.y, scrl.diam);//draws circle
  
  //clicker
  fill(wht); //makes the clicker white
  noStroke(); //no outline
  ellipse(clicker.x,clicker.y,clicker.diam); //draws the clicker button
 
  //Menu label
  fill(wht); //makes text white
  textSize(numD); //sets text size
  //textFont(Podium Sans);
  text(classic[1],numE, numF); // // print string by index, followed by spacing and location of the text.
  
  
  //Forward label
  rect();
  
 
  //play button
  fill(wht);
  triangle(numL, numM, numN, numO, numL, numP);
  triangle(numQ, numM, numP, numO, 475, numP);
  rect(pause.x, pause.y, pause.w, pause.h);
  rect(pause.x + numK, pause.y, pause.w, pause.h);
  
}

  //function that activates when the canvas is clicked

  function mousePressed() { 

  // triggers sound
  sound.play();
  
  //Draws colorful background boxes
  strokeWeight(numC); //sets strokeWeight for boxes
	stroke(wht); //sets stroke for boxes
	
	for (var a = 0; a <= width; a += numA) { // for every a add 60. Spaces rectangles out. 
		for (var b = 0; b <= height; b += numA) { // for every b add 60. Spaces rectangles out.
			fill(mouseX, random(wht), mouseY); // fill based on a random value and the mouse position
			rect(a, b, numB, numB); // draw at a, b for each rectangle's x and y position. 
		}// this block is based off of one of the code examples given to the class
	}
}




