function pa() {
    var vi = parseInt(document.getElementById('vi').value);
    var vf = parseInt(document.getElementById('vf').value);
    var r = parseInt(document.getElementById('r').value);

    var res = document.getElementById('res');
    res.innerHTML = "";

    for (let i = vi; i <= vf; i = i + r) {
        res.innerHTML += i + "-";
    }
}