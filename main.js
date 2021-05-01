// Load all already existing divs from localStorage on page load
// for (i = 0; i < localStorage.length; i++) {
//     kreirajDiv(JSON.parse(localStorage.getItem(localStorage.key(i))));
// }

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
        console.log('if')

        let divCollection = JSON.parse(localStorage.getItem('divCollection'))
        console.log(divCollection.length)
        for (let i = 0; i < divCollection.length; i++) {

            if (divPodaci.komentar == divCollection[i].komentar) {
            }
            else {
                console.log('uslo')
                divCollection = JSON.parse(localStorage.getItem('divCollection')) || [];
                divCollection.push(divPodaci)
                localStorage.setItem('divCollection', JSON.stringify(divCollection))
                kreirajDiv(divPodaci)
                break
            }
        }

    }
    else {
        console.log('else')
        let divCollection = JSON.parse(localStorage.getItem('divCollection')) || [];
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