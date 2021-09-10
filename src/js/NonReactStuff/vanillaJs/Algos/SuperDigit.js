function superDigit(n, k) {
    // Write your code here
    let str = n.repeat(k);
    let getSuperDigit = function(str){
        if(str.length === 1){
            return str;
        }else{
            let sum = 0;
            for(var i = 0; i < str.length; i++){
                sum += parseInt(str[i]);
            }
            return getSuperDigit(sum + "");
        }
    };

    return getSuperDigit(str);
}

let result = superDigit('148', 3);

console.log(result);