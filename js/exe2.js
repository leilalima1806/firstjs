function ex2(qual) {
    var c = parseInt(document.getElementById("c").value)
    var f = parseInt(document.getElementById("f").value)
    if (qual == 'c') {
        document.getElementById("f").value = (c * 1.8) + 32
    } else {
        document.getElementById("c").value = (f - 32) / 1.8
    }
}