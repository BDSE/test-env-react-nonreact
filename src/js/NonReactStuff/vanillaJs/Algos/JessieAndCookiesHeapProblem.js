function processData(input) {
    var data = new Data(input);
    var meta = data.getNumbers();
    var sweetness = meta[1];

    var heap = new MinHeap();
    data.getNumbers().forEach(n => heap.add(n));

    var operations = 0;
    while (true) {
        var top = heap.peek();
        if (top >= sweetness) {
            console.log(operations);
            return;
        } else if (heap.size() < 2) {
            console.log(-1);
            return;
        }
        var cookieA = heap.extract();
        var cookieB = heap.extract();
        var cookieC = cookieA + cookieB * 2;
        heap.add(cookieC);
        operations++;
    }
}

class MinHeap {
    constructor() {
        this.nodes = [];
    }

    add(value) {
        var current = this.nodes.length;
        this.nodes[current] = value;
        while (current > 0) {
            var isLeft = current % 2 === 1;
            var parent;
            if (isLeft) {
                parent = (current - 1) / 2;
            } else {
                parent = (current - 2) / 2;
            }
            if (this.nodes[parent] < this.nodes[current]) {
                break;
            }
            var temp = this.nodes[parent];
            this.nodes[parent] = this.nodes[current];
            this.nodes[current] = temp;
            current = parent;
        }
    }

    remove(value) {
        var current = this.nodes.indexOf(value);
        var newValue = this.nodes.pop();
        if (current === this.nodes.length) {
            return;
        }
        this.nodes[current] = newValue;
        while (true) {
            var left = current * 2 + 1;
            var right = left + 1;
            if (
                this.nodes[current] > this.nodes[left]
                ||
                this.nodes[current] > this.nodes[right]
            ) {
                var target;

                if (this.nodes[left] < this.nodes[right] || this.nodes[right] === undefined) {
                    target = left;
                } else {
                    target = right;
                }
                var temp = this.nodes[current];
                this.nodes[current] = this.nodes[target];
                this.nodes[target] = temp;
                current = target;
                continue;
            }
            break;
        }
    }

    extract() {
        var value = this.peek();
        this.remove(value);
        return value;
    }

    peek() {
        return this.nodes[0];
    }

    size() {
        return this.nodes.length;
    }
}

class Data {
    constructor(input) {
        console.log("input>>", input);
        this.lines = input.split('\n').reverse();
    }

    getString() {
        return this.lines.pop();
    }

    getStrings() {
        return this.lines.pop().split(' ');
    }

    getNumbers() {
        return this.lines.pop().split(' ').map(Number);
    }

    getNumber() {
        return +this.lines.pop();
    }
}

var input = `6 23 
2 17 5 16 14 6`;

/*var input = `6 9
2 7 3 6 4 6`;*/

processData(input);