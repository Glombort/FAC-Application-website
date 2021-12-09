document.getElementById("submit").onclick = function() {

    var array = document.getElementById("user-input").value;
    array=array.split(",").map(function (number) {
        return parseInt(number,10);
    });

    var method = document.getElementsByName("array-method");

    if ( method[0].checked) {
        filter(array)
    } else {
        reduce(array)
    }
}


function filter(array) {
    var returnArr =[]
    for (let i=0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            returnArr.push(array[i]);
        }
    }
    if (returnArr.length > 0) {
        document.getElementById("output-p").innerHTML = "Here is your array filtered with just [" + returnArr + "]"
    } else {
        document.getElementById("output-p").innerHTML = "Your array has no numbers divisible by two"
    }
}

function reduce(array) {
    var returnSum = 0
    for (let i=0; i < array.length; i++) {
        if (!isNaN(array[i]) ) {
            returnSum +=array[i];
        }
    }
    document.getElementById("output-p").innerHTML = "The sum of your input is " + returnSum
}