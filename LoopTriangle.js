function myTriangle(n) {

    var result = '';
    for (var i = 1; i <= n; i++) {
        for (var j = i; j > 0; j -= n) {

            result += "# ";
        }
        console.log(result);
    }

}

myTriangle(12);