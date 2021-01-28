class Slingshot{
    constructor(bodyA1, pointB){
        var options = {
            bodyA: bodyA1,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);


    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        // console.log(this.sling.bodyA);
        

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);

                line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        }

    }
    
}