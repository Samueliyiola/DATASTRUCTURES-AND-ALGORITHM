const {Shape} = require( "../index.js");

// const square = new Shape("blue", 9);

// square.increaseSides();

// console.log(Shape.cook());

class Circle extends Shape{
    constructor(color, sides, radius){
        super(color, sides);
        this.radius = radius;
    }
    getArea = ()=>{
        return (22 * this.radius * this.radius)/ 7;
    }
}


const ellipse = new Circle("yellow", 0, 7);

console.log(ellipse.getArea());

