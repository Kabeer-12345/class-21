function isTouching(rectA,rectB){

    if(rectA.x - rectB.x<rectB.width/2 + rectA.width/2 && 
      rectB.x - rectA.x<rectB.width/2 + rectA.width/2 &&
      rectA.y - rectB.y<rectB.height/2 + rectA.height/2 && 
      rectB.y - rectA.y<rectB.height/2 + rectA.height/2){
  
       rectB.shapeColor = "red";
     
        return true;
  
   }
   else { 
  
     rectB.shapeColor = "green";
     return false;
   }
  }
  
  function bounceOff(a,b){
    if(a.x - b.x<b.width/2 + a.width/2  &&
        b.x - a.x<b.width/2 + b.width/2 ){
        a.velocityX = a.velocityX*-1;    
        b.velocityX = b.velocityX*-1;


    }
    if(a.y - b.x<b.height/2 + a.height/2  &&
        b.y - a.x<b.height/2 + b.height/2 ){
        a.velocityY = a.velocityY*-1;    
        b.velocityY = b.velocityY*-1;

        
    }
  }