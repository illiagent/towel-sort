// You should implement your task here.

module.exports = function towelSort(arr) {
    let newArr = [];
    if (!Array.isArray(arr)) {
        return [];
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                newArr = newArr.concat(arr[i]);
            } else {
                newArr = newArr.concat(arr[i].reverse());
            }
        }
        return newArr;
    }
};
