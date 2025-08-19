let a = 10

function outer(){
    // var outerVar = "ABC"
    var a = "ABC"

    function middle(){
        // var middleVar = "DEF"
        var a = "DEF"

        function inner(){
            // var innerVar = "XYZ"
            var a = "XYZ"
            // console.log(a)
        }
        console.log(a)
        inner()
    }
    // console.log(a)
    middle()
}

outer()