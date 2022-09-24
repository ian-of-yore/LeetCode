let ops = ["5", "-2", "4", "C", "D", "9", "+", "+"];

var calPoints = function (operations) {
    let arr = [];
    let result = 0;
    for (let i of operations) {
        if (i === "D") {
            let lastElement = parseInt(arr[arr.length - 1]);
            let double = lastElement * 2;
            arr.push(double);
            result += double;
        }

        else if (i === "C") {
            let popElement = arr.pop();
            result -= popElement;
        }
        else if (i === "+") {
            let firstLastElement = parseInt(arr[arr.length - 1]);
            let secondLastElement = parseInt(arr[arr.length - 2]);
            arr.push(firstLastElement + secondLastElement);
            result += (firstLastElement + secondLastElement);
        }
        else {
            let elementInt = parseInt(i);
            arr.push(elementInt);
            result += elementInt;
        }
    }
    return result;
};


const ans = calPoints(ops);
console.log(ans);
