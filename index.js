export class Shape{
    constructor(color, sides){
        this.color = color;
        this.sides = sides
    }
    getColor = ()=>{
        return this.color;
    }

    increaseSides = ()=>{
        this.sides++;
        console.log("Side has been increased");
    }
    static cook = ()=>{
        return "Testing!";
    }
}

