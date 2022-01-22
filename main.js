status="";
img_book="";

function preload(){
   img_book=loadImage('book.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center(); 
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTMl="Status:Detecting Objects";
}

function modelLoaded(){
    console.log("cocossd is initialized");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}