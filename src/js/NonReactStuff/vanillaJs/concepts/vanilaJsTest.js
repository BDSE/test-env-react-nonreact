
/*let let_a = "let global";

var var_a = "Var global";

let arrFn = (a, b) => {
  console.log(a);
  console.log("arroe function", this);
};

let arrFn2 = function (){
    console.log("normal function",this);
};

console.log(this);

arrFn(100);
arrFn2(100);*/

//////////////////////////////

let obj = {
    ahCk: "dfljhsdlfkjhsdflkdsf",
    a: () => {
        //console.log(this.ahCk);
        console.log("arrow fn >>>>",this);
    },
    b: function () {
        console.log(this.ahCk);
        console.log("normal fn>>>>", this);
        let d = () => {
            console.log(this.ahCk);
        };
        d();
    }
};

obj.b();
obj.a();
