var imagesMap = {
    "advanced radiology": 'radiology1',
    "radiology": 'radiology1',
    "diagnostic radiology": 'radiology2',
    "diagnostic": 'radiology2',
    "immunizations/vaccines": 'vaccines',
    "immunizations": 'vaccines',
    "vaccines": 'vaccines',
    "laboratory services": 'lab',
    "laboratory": 'lab',
    "common": "common",
    "office visits": "visits",
    "physical therapy": 'physical-therapy',
//    "physical therapy and rehabilitation services": 'physical-therapy',
    "specialty services": 'speciality-services',
    "surgical procedures": 'surgical-procedures',
    "surgical": 'surgical-procedures',
    "unknown": 'unknown'
};

var lookForImageClass = function (categoryName) {
    var splittingIndex = 0,
        splitFn = function (str, numOfJoins) {
            var splitter = " ", resultArr = [],
                splittedStr = str.split(splitter),
                len = splittedStr.length,
                joinedStr, joinIndex, nextIndex, remainingElements;
            if (len === 1 || numOfJoins <=0) {
                return splittedStr;
            } else {
                for (var i = 0; i <= len - 1; i++) {
                    joinedStr = splittedStr[i];
                    joinIndex = numOfJoins;
                    nextIndex = i + 1;
                    remainingElements = len - 1 - i;
                    if (remainingElements >= numOfJoins) {
                        while (joinIndex) {
                            joinedStr += " " + splittedStr[nextIndex];
                            ++nextIndex;
                            --joinIndex;
                        }
                        resultArr.push(joinedStr);
                    } else {
                        break;
                    }
                }
                return resultArr;
            }
        },
        fn = function (arr) {
            var str;
            if (arr.length === 1) {
                return imagesMap[arr[0]] || 'unknown';
            } else {
                for (var i = 0; i <= arr.length - 1; i++) {
                    str = arr[i].toLowerCase();
                    if (imagesMap[str]) {
                        return imagesMap[str];
                    }
                }
                ++splittingIndex;
                return fn(splitFn(categoryName, splittingIndex));
            }
        };
    return fn(splitFn(categoryName, splittingIndex));
};



var res = lookForImageClass("  rehabilitation services physical therapy ");

console.log("get image >>>>", res);