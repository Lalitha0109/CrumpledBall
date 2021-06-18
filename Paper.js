class Paper{
    constructor(){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2

        }
        this.body=Matter.Bodies.circle(100,650,25);
        Matter.World.add(world,this.body);

    }
    display(){
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,50,50);
    }
}