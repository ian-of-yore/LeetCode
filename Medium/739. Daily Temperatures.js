const temperatures = [30, 40, 50, 60];

var dailyTemperatures = function (temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [] // pair: [temp, index]

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > stack[stack.length - 1][0]) {
            let [stackTemp, stackIdx] = stack.pop();
            result[stackIdx] = (i - stackIdx);
        };

        stack.push([temperatures[i], i]);

    };

    return result;
};

console.log(dailyTemperatures(temperatures))