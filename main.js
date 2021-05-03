// Load all already existing divs from localStorage on page load
let divCollection = JSON.parse(localStorage.getItem('divCollection')) || [];
for (i = 0; i < divCollection.length; i++) {
    kreirajDiv(divCollection[i]);

}

function sacuvajULocalStorage(divPodaci) {
    let pravi = true;
    // Check if div with inputed text already exists and don't create another one if it does
    for (i = 0; i < divCollection.length; i++) {
        if (divCollection[i].komentar == divPodaci.komentar) {
            pravi = false;
            alert('Taj id vec postoji!');
            break;
        }
    }
    if (pravi) {
        divCollection.push(divPodaci);
        localStorage.setItem('divCollection', JSON.stringify(divCollection));
        kreirajDiv(divPodaci);
    }
}

function kreirajDiv(divPodaci) {
    let block = document.createElement('li');
    block.className = 'block';
    document.querySelector("#prostor").append(block);
    block.style.backgroundColor = divPodaci.boja;

    let slikaj = document.createElement('img');
    slikaj.src = 'img/jabuka.png'
    let slikak = document.createElement('img');
    slikak.src = 'img/kruska.png'
    let slikal = document.createElement('img');
    slikal.src = 'img/limun.png'

    let para = document.createElement('p');
    let paratekst = document.createTextNode(divPodaci.komentar);
    block.style.width = divPodaci.sirina;
    block.style.height = divPodaci.duzina;

    para.appendChild(paratekst);
    block.appendChild(para);
console.log(jabuka.checked)
if (localStorage.getItem('divCollection') === null)
{

    if (jabuka.checked) {
        block.append(slikaj);
        block.style.backgroundColor = divPodaci.jabuka;
    }
    if (kruska.checked) {
        block.append(slikak);
        block.style.backgroundColor = divPodaci.kruska;
    }
    if (limun.checked) {
        block.append(slikal);
        block.style.backgroundColor = divPodaci.limun;
    }}
    else {
        if (jabuka) {
            block.append(slikaj);
            block.style.backgroundColor = divPodaci.jabuka;
        }
        if (kruska) {
            block.append(slikak);
            block.style.backgroundColor = divPodaci.kruska;
        }
        if (limun) {
            block.append(slikal);
            block.style.backgroundColor = divPodaci.limun;
        }


    }
}

// Potvrdi button
document.querySelector(".potvrdi").addEventListener("click", e => {
    // Take values from from, create div on page and save it to localStorage
    let divPodaci = {
        sirina: document.getElementById('width').value + 'px',
        duzina: document.getElementById('height').value + 'px',
        jabuka: document.getElementById('jabuka').checked,
        kruska: document.getElementById('kruska').checked,
        limun: document.getElementById('limun').checked,
        boja: document.getElementById('boje').value,
        komentar: document.getElementById('komentar').value
    };
    sacuvajULocalStorage(divPodaci);
});

// Brisi button
document.querySelector('.brisi').addEventListener("click", e => {
    localStorage.clear();
    document.getElementById('prostor').innerHTML = '';
});