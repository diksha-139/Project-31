class Ground{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.w = w; 
      this.h = h;
      this.body1 = Bodies.rectangle(x,y,w,h,options);
    
      World.add(world, this.body1);
    }
    display(){
      var pos =this.body1.position;
      rectMode(CENTER);
      fill("white");
    rect(pos.x, pos.y, this.w,this.h);
    }
  };