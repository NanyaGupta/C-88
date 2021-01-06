var canvas= new fabric.Canvas("myCanvas");

var playerX=10;
var playerY=10;

var blockImageHeight=30;
var blockImageWidth=30;

var playerObject="";
var blockImageObject="";

function playerUpload(){
    fabric.Image.fromURL("player.png",function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject);

    });
}

function newImage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockImageObject=Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockImageObject);

    });
}

window.addEventListener("keydown",KeyDown);

function KeyDown(e){
  keyPressed=e.keyCode;
  console.log(keyPressed);

  if(e.shiftKey==true && keyPressed=="80"){
      console.log("p and shift key pressed together");
      blockImageHeight=blockImageHeight+10;
      blockImageWidth=blockImageWidth+10;
      document.getElementById("currentWidth").innerHTML=blockImageWidth;
      document.getElementById("currentHeight").innerHTML=blockImageHeight;

  }

  if(e.shiftKey==true && keyPressed=="77"){
    console.log("m and shift key pressed together");
    blockImageHeight=blockImageHeight-10;
    blockImageWidth=blockImageWidth-10;
    document.getElementById("currentWidth").innerHTML=blockImageWidth;
    document.getElementById("currentHeight").innerHTML=blockImageHeight;

}
if(keyPressed=="38"){
    up();
    console.log("up");
}
if(keyPressed=="40"){
    down();
    console.log("down");
}
if(keyPressed=="37"){
    left();
    console.log("left");
}
if(keyPressed=="39"){
    right();
    console.log("right");
}
if(keyPressed=="87"){
    newImage("wall.jpg");
    console.log("w");
}

if(keyPressed=="67"){
    newImage("cloud.jpg");
    console.log("c");
}
if(keyPressed=="89"){
    newImage("yellow_wall.png");
    console.log("y");
}

if(keyPressed=="71"){
    newImage("ground.png");
    console.log("g");
}

if(keyPressed=="76"){
    newImage("light_green.png");
    console.log("l");
}

if(keyPressed=="68"){
    newImage("dark_green.png");
    console.log("d");
}

if(keyPressed=="84"){
    newImage("trunk.jpg");
    console.log("t");
}
if(keyPressed=="85"){
    newImage("unique.png");
    console.log("u");
}

if(keyPressed=="82"){
    newImage("roof.jpg");
    console.log("r");
}
}

function up(){
    if(playerY>=5){
        playerY=playerY-blockImageHeight;
        console.log("block image height= "+ blockImageHeight);
        console.log("When up arrow key is pressed, X= " + playerX + "| Y= " + playerY);
        playerUpload();
        canvas.remove(playerObject);
        
    }
}

function down(){
    if(playerY<=500){
        playerY=playerY+blockImageHeight;
        console.log("block image height= "+ blockImageHeight);
        console.log("When down arrow key is pressed, X= " + playerX + "| Y= " + playerY);
        playerUpload();
        canvas.remove(playerObject);
       
    }
}

function left(){
    if(playerX>=5){
        playerX=playerX-blockImageWidth;
        console.log("block image Width= "+ blockImageWidth);
        console.log("When left arrow key is pressed, X= " + playerX + "| Y= " + playerY);
        playerUpload();
        canvas.remove(playerObject);
        
    }
}

function right(){
    if(playerX<=900){
        playerX=playerX+blockImageWidth;
        console.log("block image Width= "+ blockImageWidth);
        console.log("When right arrow key is pressed, X= " + playerX + "| Y= " + playerY);
        playerUpload();
        canvas.remove(playerObject);
       
    }
}




