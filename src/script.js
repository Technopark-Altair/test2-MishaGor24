function calc() {
    document.getElementById("info").innerHTML = "Считаю...";
    document.getElementById("result").innerHTML = "";

    var select1 = document.getElementById("select1").value;

    var a = document.getElementById("var").value;

    if (a != "0" && a != "1") {
        document.getElementById("info").innerHTML = "Ошибка: некоректное значение первой переменной";
        return;
    }
    a = parseInt(a);
    var select2 = document.getElementById("select2").value;

    var b = document.getElementById("var1").value;

    if (b != "0" && b != "1") {
        document.getElementById("info").innerHTML = "Ошибка: некоректное значение второй переменной";
        return;
    }
    b = parseInt(b);
    var result;

    if (select2 == 0) {
        result = a || b;
    } else if (select2 == 1) {
        result = a && b;
    }

    if (select1 == 1) {
        result = !result;
    }

    result = result ?


        1 : 0;

    document.getElementById("result").innerHTML = "=" + result;
    document.getElementById("info").innerHTML = "ОК";



}