document.getElementById("pound_to_kg").onclick = function () {
    var pound = document.getElementById("weight").value;
    
    var result = pound / 2.20462;
    
    report(result, pound);
};

document.getElementById("kg_to_pound").onclick = function () {
    var kilogram = document.getElementById("weight").value;
    
    var result = kilogram * 2.20462;
    
    report(kilogram, result);
};

var report = function (kilogram, pound) {
    document.getElementById("result").innerHTML =
        kilogram + "kg =" + pound + "lb";
};

document.getElementById("clear").onclick = function () {
    document.getElementById("weight").value = null;
    document.getElementById("result").innerHTML = null;
};