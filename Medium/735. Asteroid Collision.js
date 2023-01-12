const asteroids = [10, 2, -5];

var asteroidCollision = function (asteroids) {
    const stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        while (stack.length && asteroids[i] < 0 && stack[stack.length - 1] > 0) {
            let diff = asteroids[i] + stack[stack.length - 1];

            if (diff < 0) {
                stack.pop();
            }
            else if (diff > 0) {
                asteroids[i] = 0;
            }
            else {
                stack.pop();
                asteroids[i] = 0;
            }
        }
        if (asteroids[i] !== 0) {
            stack.push(asteroids[i])
        }
    }

    return stack;
};

console.log(asteroidCollision(asteroids))