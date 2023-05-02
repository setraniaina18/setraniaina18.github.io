var affiche = document.getElementById('ecran');
var res = document.getElementById('res');
var hr = document.getElementsByTagName('hr');
var tab = document.getElementById('tab');
res.style.color = 'black';
res.style.fontSize = '60px';
res.style.fontWeight = '400';
//FontSize
function fontSize() {
    if (affiche.innerHTML.length < 16) {
        affiche.style.fontSize = '50px';
        affiche.style.paddingTop = '0px';
    } else if (affiche.innerHTML.length < 20) {
        affiche.style.fontSize = '40px';
        affiche.style.paddingTop = '5px';
    } else {
        affiche.style.fontSize = '30px';
        affiche.style.paddingTop = '10px';
    }
    if (affiche.innerHTML.length > 25) {
        affiche.innerHTML = affiche.innerHTML.slice(0, 25);
    }
}
//plus grande et plus petit
function plusG() {
    res.innerHTML = 'Nombre trop grand';
    res.style.color = 'blue';
    affiche.style.color = 'blue';
    res.style.fontSize = '40px';
    res.style.fontWeight = '400';

}

function plusP() {
    res.innerHTML = 'Nombre trop petit';
    res.style.color = 'darkGreen';
    affiche.style.color = 'darkGreen';
    res.style.fontSize = '40px';
    res.style.fontWeight = '400';
}

function erreur() {
    res.innerHTML = 'Erreur';
    res.style.color = 'rgb(233, 15, 15)';
    affiche.style.color = 'rgb(233, 15, 15)';
    res.style.fontSize = '40px';
    res.style.fontWeight = '400';
}
// calcul division, multiplication, addition, soustraction
function calcul(signe) {
    if (res.innerHTML != 'Erreur') {
        affiche.style.color = 'black';
        if (res.innerHTML == 'Nombre trop petit' || res.innerHTML == 'Nombre trop grand') {
            affiche.innerHTML = '';
        } else if (res.innerHTML != '' && res.innerHTML.indexOf("%") == -1) {
            affiche.innerHTML = parseFloat(res.innerHTML);
        }
        affiche.append(signe);
        res.innerHTML = '';
        fontSize();

    }
}

// 0,1,2,3,4,5,6,7,8,9 et virgule
function nombre(nbr) {

    if (res.innerHTML != 'Erreur') {
        affiche.style.color = 'black';
        if (res.innerHTML != '') {
            res.innerHTML = '';
            affiche.innerHTML = '';
        }
        affiche.append(nbr);
        fontSize();
    }
}

//resultat
function resultat() {
    /*-----------------------  affectation ------------------------*/
    var tab = [];
    var val = affiche.innerHTML;
    var count = 0;
    if (res.innerHTML != 'Erreur' && res.innerHTML != 'Nombre trop grand') {
        for (let i = 0; i < val.length; i++) {
            if (val[i] === "×") {
                tab.push(val.slice(count, i));
                tab.push("×");
                count = i + 1;
            } else if (val[i] === "÷") {
                tab.push(val.slice(count, i));
                tab.push("÷");
                count = i + 1;
            } else if (val[i] === "+") {
                tab.push(val.slice(count, i));
                tab.push("+");
                count = i + 1;
            } else if (val[i] === "-") {
                tab.push(val.slice(count, i));
                tab.push("-");
                count = i + 1;
            }
        }
        tab.push(val.slice(count));

        if (tab[0] == "") {
            if (tab[1] == "-" || tab[1] == "+") {
                tab[0] = parseFloat(tab[1] + tab[2]);
                tab.splice(1, 2);
            }
        }
        /*-----------------------  calcul ------------------------*/
        var len = tab.length;
        if (tab[len - 1] != "") {
            while (tab.indexOf("×") != -1 || tab.indexOf("÷") != -1) {
                for (let i = 0; i < tab.length; i++) {
                    if (tab[i] === "×") {
                        let prod = parseFloat(tab[tab.indexOf("×") - 1]) * parseFloat(tab[tab.indexOf("×") + 1]);
                        tab.splice(tab.indexOf("×") - 1, 1);
                        tab.splice(tab.indexOf("×") + 1, 1);
                        tab[tab.indexOf("×")] = prod;
                    } else if (tab[i] === "÷") {
                        let div = parseFloat(tab[tab.indexOf("÷") - 1]) / parseFloat(tab[tab.indexOf("÷") + 1]);

                        tab.splice(tab.indexOf("÷") - 1, 1);
                        tab.splice(tab.indexOf("÷") + 1, 1);
                        tab[tab.indexOf("÷")] = div;
                    }
                }
            }
            var sum = parseFloat(tab[0]);
            for (let i = 1; i < tab.length; i += 2) {
                sum += parseFloat(tab[i] + tab[i + 1]);
            }
            if (!isFinite(sum)) {
                erreur();
            } else if (sum > 999999999999999) {
                plusG();
            } else if (sum < -999999999999999) {
                plusP();
            } else {
                if (sum.toString().length < 15) {
                    res.innerHTML = sum;
                } else {
                    res.innerHTML = sum.toString().slice(0, 15);
                }
                res.style.color = 'black';
                res.style.fontSize = '60px';
                res.style.fontWeight = '400';
            }
        } else { res.innerHTML = ''; }
    }
}


// calcul pourcentage
function pourcentage() {
    if (res.innerHTML != 'Erreur' && res.innerHTML != 'Nombre trop grand' && res.innerHTML != 'Nombre trop petit') {
        if (res.innerHTML != '') {
            affiche.innerHTML = parseFloat(res.innerHTML);
            res.innerHTML = Number((parseFloat(res.innerHTML) * 100).toPrecision(3)) + "%";
            res.style.color = 'black';

        } else if (affiche.innerHTML != '' && !isNaN(affiche.innerHTML)) {
            res.innerHTML = Number((parseFloat(affiche.innerHTML) * 100).toFixed(3)) + "%";
            res.style.color = 'black';

        }
        if (parseFloat(res.innerHTML) > 999999999999) {
            affiche.innerHTML = parseFloat(res.innerHTML);
            plusG();
        } else if (parseFloat(res.innerHTML) < -999999999999) {
            affiche.innerHTML = parseFloat(res.innerHTML);
            plusP();
        }
        fontSize();
    }
}

//delete
function efffacer() {
    if (res.innerHTML == '') {
        let del = affiche.innerHTML;
        var a = del.slice(0, del.length - 1);
        affiche.innerHTML = a;
    }
}

//delete all
function effaceTout() {
    affiche.innerHTML = '';
    res.innerHTML = '';
    location.reload();
}