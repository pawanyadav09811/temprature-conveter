class emp{
    #name='';
    constructor(n){
        this.#name=n;
    }
    #getName(){
        console.log(this.#name)
    }
    pubfun(){
        this.#getName();
    }
}
let emp1=new emp('pawan')

console.log(emp1.pubfun())