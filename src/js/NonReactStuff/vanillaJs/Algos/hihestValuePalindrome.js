function highestValuePalindrome(s, n, k) {
    // Write your code here
    let isPalindrome = true;
    s = s.split("");
    for(let i = 0; i < n-1- i; i++){
        let left = s[i],
            right = s[n-1-i], max;
        if(left == right){
            continue;
        }else{
            if(k > 0){
                max = Math.max(s[i], s[n-1-i]);
                s[i] = max;
                s[n-1-i] =max;
                --k;
            }else{
                isPalindrome = false;
                return -1;
            }
        }
    }

    if(k > 0){
        for(let i = 0; i < n-1- i && k > 0; i++){
            s[i] = 9;
            s[n-1-i] =9;
            --k;
        }
    }

    return s.join("");
}

let result = highestValuePalindrome("12321", 5, 1);

//checkresult expected is 12921