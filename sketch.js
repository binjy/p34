//Create variables here
var dog,happydog,foodS,foodStock,dogImage
var database

function preload(){
	//load images here
dogImage = loadImage("images/Dog.png")
happydog = loadImage("images/happyDog.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(250,300,20,20)
  dog.addImage(dogImage)

  dog.scale = 0.1

  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background("lightGreen")

if (keyWentDown(UP_ARROW)) {
writeStock(foodS)
dog.addImage(happydog)

  }

stroke("black")
text("food remaining:"+foodS,170,200)
text("press up arrow to feed the milk:",170,170)

  drawSprites();
  //add styles here

}



function readStock(data) {
  foodS = data.val()
}

function writeStock(x){
  if (x <=0) {
    x= 0
  } else {
    x = x - 1
  }

database.ref('/').update({
  Food:x
})


}