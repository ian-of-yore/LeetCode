const startTime = [1, 2, 3];
const endTime = [3, 2, 7];
const queryTime = 4;

const busyStudent = (startTime, endTime, queryTime) => {
    let students = 0;

    for (let i = 0; i < startTime.length; i++) {
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
            students++;
        }
    }

    return students;
}

const result = busyStudent(startTime, endTime, queryTime);
console.log(result);