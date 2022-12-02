function calcular() {

    var km = parseInt(document.getElementById('km').value);
    var com = parseFloat(document.getElementById('combustivel').value);

    var dista = (km / 8);
    document.getElementById('res').innerHTML = (dista * com + " reais");
}