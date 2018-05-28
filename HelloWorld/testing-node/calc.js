function add(num1, num2) {
    return num1 + num2;
}

// Unless I export it, the add would remain restricted to this file.
module.exports = {
    addMethod: add
}