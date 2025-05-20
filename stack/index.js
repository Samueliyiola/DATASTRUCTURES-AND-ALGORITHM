// The implementation of the stack class

const {Stack} = require("./Stack");

const stack = new Stack();

stack.push(6);
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);

stack.peek();
stack.pop();
stack.peek();
stack.count();
