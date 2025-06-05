class mySet{
    constructor(){
        this.set = [];
    };
    has (num){
        if(this.set.indexOf(num) == -1){
            return (true);
        }else{
            return (false);
        }
    };
    add (num){
        if(this.set.indexOf(num) == -1){
            this.set.push(num);
            return (this.set);
        }
        else{
            return ("Sorry this number already exists in the set");
        }
    };

    delete (num){
        const index = this.set.indexOf(num);
        if(index == -1){
            return ("Sorry, this element is not present in this set");
        }
        this.set.splice(index, 1);
        return this.set;
    };

    clear (){
        this.set.length = 0;
        return this.set;
    };




    

}

module.exports = {mySet};