inp_ratio1 = document.getElementById('ratio1')
inp_ratio2 = document.getElementById('ratio2')
inp_sum = document.getElementById('sum')
inp_Xside = document.getElementById('Xside')
inp_Yside = document.getElementById('Yside')

let ratio1 = 0
let ratio2 = 0
let sum = 0
let Xside = 0
let Yside = 0

function calculate_values() {
    //Когда даны 2 стороны
    if (inp_ratio1.value == '' && inp_ratio2.value == '' && inp_sum.value == '' && inp_Xside.value != '' && inp_Yside.value != ''){
        Xside = parseInt(inp_Xside.value)
        Yside = parseInt(inp_Yside.value)
        sum = Xside + Yside
        twoLines()
    }

    //Когда известны соотношения и сумма
    else if (inp_ratio1.value != '' && inp_ratio2.value != '' && inp_sum.value != '' && inp_Xside.value == '' && inp_Yside.value == ''){
        ratio1 = parseInt(inp_ratio1.value)
        ratio2 = parseInt(inp_ratio2.value)
        sum = parseInt(inp_sum.value)
        twoRatiosAndSum()
    }

    //Когда даны соотношения и 1 сторона
    else if (inp_ratio1.value != '' && inp_ratio2.value != '' && inp_sum.value == '' && (inp_Xside.value != '' || inp_Yside.value != '')){
        ratio1 = parseInt(inp_ratio1.value)
        ratio2 = parseInt(inp_ratio2.value)
        if (inp_Xside.value != '') {
            Xside = parseInt(inp_Xside.value)
            twoRatiosAndOneLine(true, false)
        }
        else if (inp_Yside.value != '') {
            Yside = parseInt(inp_Yside.value)
            twoRatiosAndOneLine(false, true)
        }
    }

    else {
        alert('Что то не так')
    }
}

function twoLines() {
    ratio1 = Xside / nod(Xside, Yside)
    ratio2 = Yside / nod(Xside, Yside)
    inp_set()
}

function twoRatiosAndSum() {
    Xside = (sum / (ratio1 + ratio2)) * ratio1
    Yside = (sum / (ratio1 + ratio2)) * ratio2
    inp_set()
}

function twoRatiosAndOneLine(x = false, y = false) {
    if (x != false) {
        Yside = (Xside * ratio2) / ratio1
        sum = Xside + Yside
    }
    else if (y != false) {
        Xside = (Yside * ratio1) / ratio2
        sum = Xside + Yside
    }
    inp_set()
}

function inp_set() {
    inp_ratio1.value = ratio1
    inp_ratio2.value = ratio2
    inp_sum.value = sum
    inp_Xside.value = Xside
    inp_Yside.value = Yside
}

function nod(a, b) {
    while (a!=b) {
        if (a>b) {
          a = a -b;
        }
        else {
          b = b - a;
        }
    }
    return a
}