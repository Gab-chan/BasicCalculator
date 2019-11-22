function calc(){
    var x = parseInt(document.querySelector("#value1").value);
    var y = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;

    if(op === "add"){
        calculate = x + y;
    } else if(op === "min"){
        calculate = x - y;
    } else if(op === "mul"){
        calculate = x * y;
    } else if(op === "div"){
        calculate = x / y;
    };

    // console.log(calculate);
    document.querySelector("#result").value = calculate;
};



