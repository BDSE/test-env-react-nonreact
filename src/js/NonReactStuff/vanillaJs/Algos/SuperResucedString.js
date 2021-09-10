function superReducedString(s) {
    // Write your code here
    let strArr = s.split("");
    for(var i =0; i < strArr.length; i++){
        if(strArr[i] === strArr[i+1]){
            strArr.splice(i, 2);
            if (strArr.length){
                i = i-2;
            }
        }
    }
    return strArr.length ? strArr.join("") : 'Empty String';
}


console.log(superReducedString("baab"));