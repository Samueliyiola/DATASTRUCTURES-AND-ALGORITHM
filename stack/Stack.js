class Stack {
    constructor(){
        this.list = []
    };   
    push = (element) =>{
        this.list.push(element);
        console.log("The element has been added!");
    };

    pop = ()=>{
        if(this.list.length < 1){
           console.log("Cannot pop an empty stack");
        }
        const poppedElement = this.list[this.list.length - 1];
        this.list.pop();
        console.log(poppedElement);
    }

    count = ()=>{
        console.log( "The number of elements is " + this.list.length);
    }

    peek = ()=>{
        if(this.list.length < 1){
            console.log("Stack is empty");
        }
        console.log(this.list[this.list.length - 1]);

    }
    
}


module.exports = {Stack};

