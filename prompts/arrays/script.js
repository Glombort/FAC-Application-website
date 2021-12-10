document.getElementById("submit").onclick = function() {

    var array = document.getElementById("user-input").value;
    array = array.split(",").map((number) => parseInt(number,10))
    //used the .split method to create an array split at each comma
    //used the .map method to go through the array keeping only numbers
    var method = document.getElementsByName("array-method");

    if ( method[0].checked) {
        //filter method returns only numbers divisible by two
        array = array.filter(number => (number % 2 == 0))
        if (array.length > 0) {
            document.getElementById("output-p").innerHTML = "Here is your array filtered with just numbers divisible by two, [" + array + "]"
        } else {
            document.getElementById("output-p").innerHTML = "Your array has no numbers divisible by two"
        }
    } else {
        //reduce method takes a running total as it parses through the array adding on the current element.
        const returnSum = array.reduce(function sum(accumulated, current) {
            if(!isNaN(current)) {
                accumulated += current
            }
            return accumulated
        }, 0)
        document.getElementById("output-p").innerHTML = "The sum of your input is " + returnSum
    }
}