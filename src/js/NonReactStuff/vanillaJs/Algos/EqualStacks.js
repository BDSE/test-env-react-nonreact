
function getHeight(h){
    let height = 0,
        arr= [];

    for(let i = h.length - 1; i >= 0; i--){
        height += h[i];
        arr[arr.length] = height;
    }
    return arr;
}

function peek(s){
    return s[s.length -1];
}

function equalStacks(h1, h2, h3) {
    // Write your code here
    let s1 = getHeight(h1),
        s2 = getHeight(h2),
        s3 = getHeight(h3);

    while(true){
        if (!s1.length || !s2.length || !s3.length){
            return 0;
        }
        let s1_h = peek(s1);
        let s2_h = peek(s2);
        let s3_h = peek(s3);
        if(s1_h === s2_h && s2_h === s3_h){
            return s1_h;
        }else if(s1_h >= s2_h && s1_h >= s3_h){
            s1.pop();
        }else if(s2_h >= s1_h && s2_h >= s3_h){
            s2.pop();
        }else if(s3_h >= s1_h && s3_h >= s2_h){
            s3.pop();
        }
    }
}

let eq_height = equalStacks([3,2,1,1,1], [4,3,2], [1,1,4,1]);

console.log(eq_height);