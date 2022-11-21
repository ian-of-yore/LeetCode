let num = [4, 2, 5, 7];

var sortArrayByParityII = function (A) {
    let result = new Array(A.length);

    for (let i = 0, even = 0, odd = 1; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            result[even] = A[i];
            even += 2;
        } else {
            result[odd] = A[i];
            odd += 2;
        }
    }
    return result;
};

const ans = sortArrayByParityII(num);
console.log(ans)