const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (height) {
    let result = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let area = (right - left) * Math.min(height[left], height[right]);
        result = Math.max(result, area);

        if (height[left] < height[right]) {
            left += 1;
        }
        else if (height[left] > height[right]) {
            right -= 1;
        }
        else {
            left += 1;
        }
    }

    return result;
};

console.log(maxArea(height))