class Chain{
    constructor(Body1,point2){
        var options= {
          bodyA:Body1 ,
          pointB:point2,
          stiffness:0.5,
          length:10

        }



        
this.chain=Matter.Constraint.create(options);
World.add(world,this.chain)

    }
display(){
    var pos=this.chain.bodyA.position
    var pos2=this.chain.pointB
line(pos.x,pos.y,pos2.x,pos2.y);





}

}


