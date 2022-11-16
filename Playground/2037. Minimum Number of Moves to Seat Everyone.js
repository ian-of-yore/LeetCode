const seats = [12, 14, 19, 19, 12];
const students = [19, 2, 17, 20, 7];

const minMovesToSeat = (seats, students) => {
    let minMoves = 0;

    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    console.log('seats', seats);
    console.log('students', students);

    for (let i = 0; i < seats.length; i++) {
        let diff = seats[i] - students[i];
        console.log('diff', diff);
        if (diff >= 0) {
            minMoves = minMoves + diff;
        }
        else {
            diff = diff * -1;
            minMoves = minMoves + diff;
        }

    }
    return minMoves;

}

console.log(minMovesToSeat(seats, students));