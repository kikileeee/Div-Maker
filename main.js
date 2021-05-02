// Load all already existing divs from localStorage on page load
let divCollection = JSON.parse(localStorage.getItem('divCollection')) || []
for (i = 0; i < divCollection.length; i++) {
    kreirajDiv(divCollection[i]);

}

function kreirajDiv(divPodaci) {
    let block = document.createElement('li');
    block.className = 'block';
    document.querySelector("#prostor").append(block);
    block.style.backgroundColor = divPodaci.boja;

    let para = document.createElement('p');
    let paratekst = document.createTextNode(divPodaci.komentar);
    block.style.width = divPodaci.sirina;
    block.style.height = divPodaci.visina;

    para.appendChild(paratekst);
    block.appendChild(para);
}

function sacuvajULocalStorage(divPodaci) {

    //     if localstorage.divCollection exists
    //     localstorage.get
    //     let divCollection = JSON.parse
    //     for loop, prolazimo kroz svaki element arraya tj objekat i pitas da li objekat.komentar = divPodaci.komentar, ako jeste onda se ne pravi ponovo, ako nije onda pravi

    //     divCollection.push(divPodaci);
    //     localstorage.set(JSON.stringify(divCollection));

    // else napravi ga
    //     let divCollection = [];
    //     divCollection.push(divPodaci);
    //     localstorage.set(JSON.stringify(divCollection));

    if (localStorage.divCollection !== undefined) {
        let pravi = false
        for (i = 0; i < divCollection.length; i++) {
            if (divCollection[i].komentar == divPodaci.komentar) {
                pravi = false
                break
            }
            else {
                pravi = true
            }
        }
        if (pravi == true) {
            divCollection.push(divPodaci)
            localStorage.setItem('divCollection', JSON.stringify(divCollection))
            kreirajDiv(divPodaci)
        }
        else {
        }
    }
    else {
        divCollection.push(divPodaci)
        console.log(divCollection)
        localStorage.setItem('divCollection', JSON.stringify(divCollection))
    }

}

// Potvrdi button
document.querySelector(".potvrdi").addEventListener("click", e => {
    // Take values from from, create div on page and save it to localStorage
    let divPodaci = {
        sirina: document.getElementById('width').value + 'px',
        duzina: document.getElementById('height').value + 'px',
        boja: document.getElementById('boje').value,
        komentar: document.getElementById('komentar').value
    };
    kreirajDiv(divPodaci);
    sacuvajULocalStorage(divPodaci);
});

// Brisi button
document.querySelector('.brisi').addEventListener("click", e => {
    localStorage.clear();
    document.getElementById('prostor').innerHTML = '';
});