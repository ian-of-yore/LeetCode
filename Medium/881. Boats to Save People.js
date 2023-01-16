const people = [3, 2, 2, 1];
const limit = 3;

var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b)
    let left = 0;
    let right = people.length - 1;
    let boats = 0;

    while (left <= right) {
        if (people[right] === limit) {
            boats++;
            right--;
        }
        else if (people[right] < limit) {
            if (people[right] + people[left] <= limit) {
                boats++;
                right--;
                left++;
            }
            else if (people[right] + people[left] > limit) {
                boats++;
                right--;
            }
        }
    }

    return boats;
};

console.log(numRescueBoats(people, limit))