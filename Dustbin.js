class Dustbin{
    constructor(x,y,w,h){
        var options = {
            isStatic: true,
            friction:0.5
        }
        this.body=Matter.Bodies.rectangle(x,y,w,h,options);
        Matter.World.add(world,this.body);
        this.width=w;
        this.height=h;
    }
    display(){
        fill("white");
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
    }
}