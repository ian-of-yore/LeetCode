var flipAndInvertImage = function (image) {
    let flipArray = [];
    let finalArray = [];
    for (let i = 0; i < image.length; i++) {
        flipArray[i] = new Array();
        finalArray[i] = new Array();
        for (let j = 1; j <= image[i].length; j++) {
            flipArray[i].push(image[i][image[i].length - j]);
            if (flipArray[i][j - 1] === 0) {
                finalArray[i].push(1);
            }
            else (finalArray[i]).push(0);
        }
    }
    return finalArray;
};