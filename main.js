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
    let para = document.createElement('p');
    let paratekst = document.createTextNode(divPodaci.komentar);
    block.style.width = divPodaci.sirina;
    block.style.height = divPodaci.duzina;

    para.appendChild(paratekst);
    block.appendChild(para);

    for (n = 0; n < 3; n++) {
        if ((Object.values(divCollection[i].voce))[n]) {

            let slika = document.createElement('img');
            slika.src = 'img/' + ((Object.keys(divCollection[i].voce))[n]) + '.png';
            block.appendChild(slika);
        }
    }
};

// Potvrdi button
document.querySelector(".potvrdi").addEventListener("click", e => {
    // Take values from from, create div on page and save it to localStorage
    let divPodaci = {
        sirina: document.getElementById('width').value + 'px',
        duzina: document.getElementById('height').value + 'px',
        voce: {
            jabuka: document.getElementById('jabuka').checked,
            kruska: document.getElementById('kruska').checked,
            limun: document.getElementById('limun').checked,
        },
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