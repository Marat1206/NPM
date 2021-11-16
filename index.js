class Maths{
    constructor(num) {
        this.num = num;
    }
    getSum(){
      return this.num + this.num;
    }
    getSub(){
        return this.num - this.num;
    }
    getPow(){
        return this.num * this.num;
    }
}

const math = new Maths(10);
console.log(math.getSum());
console.log(math.getSub());
console.log(math.getPow());

