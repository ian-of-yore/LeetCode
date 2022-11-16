const salary = [4000, 3000, 1000, 2000];

const average = (salary) => {
    let max = salary[0];
    let min = salary[0];
    let total = 0;

    for (let i = 0; i < salary.length; i++) {
        total = total + salary[i];
        if (salary[i] > max) {
            max = salary[i];
        }
        else if (salary[i] < min) {
            min = salary[i];
        }
    }
    return (total - (min + max)) / (salary.length - 2);
}

const result = average(salary);
console.log(result);
