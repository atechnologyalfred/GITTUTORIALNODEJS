function add (...numbers) {
    return numbers.reduce((num, acc)=> num + acc, 0)
}
export default add;